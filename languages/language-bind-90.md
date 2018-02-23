
## Language Bind ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.01 in 82 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-bind-90.html
---

```'bind' is the internet domain name server from ISC (www.isc.org/bind) 
and is by far the most ubiquitous nameserver out there and a rather 
important part of the fabric of the internet. You need bind version 8 or 
9 for this to work.

Anyway, here goes:

zone-file (e.g. bottles-of-beer.example.com)
--------------------------------------------
$TTL 86400
$ORIGIN bottles-of-beer.example.com.
	IN	NS	ns.example.com.
	IN	SOA	ns.example.com. postmaster.example.com. (
			1 ; Serial
			28800 ; Refresh
			7200 ; Retry
			604800; Expire
			600 ) ; Minimum
$GENERATE 2-99 $ CNAME ${-1}
1	IN	CNAME	no
no	IN	A	127.0.0.1
---------------------------------------------

The $GENERATE statement represents a list of entries in the zone file.
The fact that it supports some arithmatic allows us to generate this:

99.bottles-of-beer.example.com IN CNAME 98.bottles-of-beer.example.com
98.bottles-of-beer.example.com IN CNAME 97.bottles-of-beer.example.com
...
1.bottles-of-beer.example.com IN CNAME no.bottles-of-beer.example.com

In DNS, a CNAME is a pointer to another entry in the DNS. And in this 
hack, that entry once again points to the next entry, etc., all leading 
to 'no bottles', which is the only entry with a 'real' IP-address.

To view this list, one could download the contents of the domain using 
e.g. dig:

dig @ns.example.com bottles-of-beer.example.com axfr

(This would show all generated entries)```