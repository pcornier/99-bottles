
## Language VCL ##
---
- Author: Jarek Ratajski
- Date: 05/21/12
- Info: https
- Score:  (3.25 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-vcl-2885.html
---

```####################################################################
# 99 bottles of beer song in VCL (Varnish Configuration language)
# Visit: https://www.varnish-cache.org/docs/3.0/reference/vcl.html#varnish-configuration-language
# Varnish is  an HTTP accelerator with simple configuration language.
# Normally varnish acts as a Proxy and forwards requests to defined backends (HTTP Servers).
# However it is possible to make a http loop and force it to pass processing to self - 
# defining backend on same url as varnish.
# With possiblity to display error page we can create a nice 99 beers page as an output.
# usage: store this file as /etc/varnish/99.vcl
# run varnish: varnishd -f /etc/varnish/99.vcl -p thread_pool_min=200
# Last parameter is very important (otherwise varnish will hang on recursive calls).
# enter in web browser
# http://localhost/sing99
# 
# Author: Jarek Ratajski
#####################################################################

backend self {
    .host = "127.0.0.1";
    .port = "80";

  .connect_timeout = 40s;
  .first_byte_timeout = 60s;
  .between_bytes_timeout = 60s;
	.max_connections = 200;
}

####################################################################
# vcl_recv
####################################################################

sub vcl_recv {
	if (req.url  ~ "/verse" ) {
		if (req.http.bottles ) {
			if ( req.http.bottles == "0" ) {
				error 200 "alles OK";
				return (error);
			} else {
				call dec_bottles;	
			set req.http.bottlestext = req.http.bottlestext + " " + req.http.bottles + "b" ;
			unset req.http.X-Varnish;
			set req.backend = self;

			set req.url = "/verse" + req.http.bottles;
			return (pass);
			}
		} 
	}	
	
	else if (req.url == "/sing99") {
		set req.http.bottles = "99";
		set req.http.bottlestext = req.http.bottles+ "b";
		set req.backend = self;
		set req.url = "/verse99";
		return (pass);
	 } else {
		#fallback
		set req.url = "/sing99";
		set req.backend = self;
		return (pass);
	}	

    
}
#very basic decrement function (one digit)
#varnish does not offer arithmetic operators
sub dec_digit {
	if ( req.http.bdigit == "0" ) {
		set req.http.bdigit = "9";
		#this is infamous carry flag used when substracting 2 digit numbers
		set req.http.carry = "yes";
	} 
	if ( req.http.bdigit == "1" ) {
		set req.http.bdigit = "0";
	} 
	if ( req.http.bdigit == "2" ) {
		set req.http.bdigit = "1";
	} 

	if ( req.http.bdigit == "3" ) {
		set req.http.bdigit = "2";
	} 
	if ( req.http.bdigit == "4" ) {
		set req.http.bdigit = "3";
	} 
	if ( req.http.bdigit == "5" ) {
		set req.http.bdigit = "4";
	} 
	if ( req.http.bdigit == "6" ) {
		set req.http.bdigit = "5";
	} 
	if ( req.http.bdigit == "7" ) {
		set req.http.bdigit = "6";
	} 
	if ( req.http.bdigit == "8" ) {
		set req.http.bdigit = "7";
	} 
	if ( req.http.bdigit == "9" ) {
		set req.http.bdigit = "8";
	} 
}

#decrement one or two digit number
sub dec_bottles {
	if ( req.http.bottles ~ "\d\d" ) {
		set req.http.bdigit = regsub(req.http.bottles, "\d(\d)", "\1");
		call dec_digit;
		set req.http.first_digit = req.http.bdigit;
		set req.http.bdigit = regsub(req.http.bottles, "(\d)\d", "\1");
		if ( req.http.carry=="yes" ) {
			set req.http.carry="no";
			call dec_digit;
			if ( req.http.bdigit=="0" ) {
				set req.http.bdigit = "";
			}
		} 
		set req.http.bottles = req.http.bdigit + req.http.first_digit;

	} else {	

		set req.http.bdigit = req.http.bottles;	
	
		call dec_digit;
        	set req.http.bottles = req.http.bdigit;
	}

}

####################################################################
# vcl_pipe
# all subsequent functions are left with default implementation
####################################################################

sub vcl_pipe {
     return (pipe);
}



####################################################################
# vcl_hash
####################################################################
sub vcl_hash {
    hash_data(req.url);
    return (hash);
}

####################################################################
# vcl_hit
####################################################################

sub vcl_hit {
    return (deliver);
}

####################################################################
# vcl_miss
####################################################################

sub vcl_miss {
    return (fetch);
}

####################################################################
# vcl_fetch
####################################################################

sub vcl_fetch {
    return (deliver);
}

####################################################################
# vcl_deliver
####################################################################

sub vcl_deliver {
    if (obj.hits > 0) {
        set resp.http.X-Cache = "HIT";
    } else {
        set resp.http.X-Cache = "MISS";
    }
    return (deliver);
}

####################################################################
# vcl_error
####################################################################

sub vcl_error {
     set obj.http.Content-Type = "text/html; charset=utf-8";

#there is a limitation of  4096 bytes for request header line
#this is why we use regexp at the end - and are not building complete song on the fly
	
     set req.http.bottlestext = regsub(req.http.bottlestext, "(99)b", "<p>\1 bottles of beer on"  
     		+ " the wall, \1 bottles of beer.<br>");	
     set req.http.bottlestext = regsub(req.http.bottlestext,"(\s1)b", "Take one down and pass it "
    + "around, \1 bottle of beer on the wall.</p><p>\1 bottle of beer on the wall, "
    + "\1 bottle of beer.<br>");
     set req.http.bottlestext = regsub(req.http.bottlestext, "\s0b", "Take one down and pass it "
     + "around, no more bottles of beer on the wall.</p><p>No more bottles of beer on the wall, "
     + "no more bottles of beer. <br/> Go to the store and buy some more, "
     + "99 bottles of beer on the wall.</p>");	

     synthetic {"
 <?xml version="1.0" encoding="utf-8"?>
 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
 <html>
   <head>
     <title>"} +  " 99 bottles of beer song " + {"</title>
   </head>
   <body>
     "} + regsuball(req.http.bottlestext,"(\d\d?)b", "Take one down and pass it around, " 
     +"\1 bottles of beer on the wall.</p><p>\1 bottles of beer on the wall, "
     +"\1 bottles of beer.<br>") + {"</p>

    </body>
 </html>
 "};
     return (deliver);
 }```