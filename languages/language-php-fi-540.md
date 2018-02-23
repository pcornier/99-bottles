
## Language PHP/FI ##
---
- Author: Alejandro L�pez-Valencia
- Date: 04/20/05
- Info: http
- Score:  (2.63 in 27 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-php-fi-540.html
---

```PHP/FI is a light, and powerful, interpreter for server-parsed 
("dynamic" this year, SSH since NCSA invented the thing ages ago) 
html which can be used either as a CGI redirected processor or 
embbedded in Apache servers. Its web site is 
<a HREF="http://php.iquest.net/">http://php.iquest.net/</a>.

<HTML>
<HEAD>
<TITLE>
99 Bottles of beer.
</TITLE>
<META NAME="Author" CONTENT="Alejandro L&oacute;pez-Valencia">
<META NAME="E-Mail" CONTENT="palopez@usa.net">
<META NAME="Description" CONTENT="Written in PHP/FI 2.0">
</HEAD>
<BODY BGCOLOR="#FFFFFF">
<?
/* Don't show the access information footer */
setshowinfo(0)
>
<?
/* Drink with the boys... */
$hic = 99;
while ($hic > 0) (
	$huc = $hic - 1;

/* Waste CPU, but you are using a Cray, aren't you? */

	if ($hic = 1) (
		$huc = $hic;
	) ;

	if ($hic = 1) $bottles = "bottle" else $bottles = "bottles" ;

	echo $hic $bottles of beer on the wall, $hic $bottles of beer. <BR> ;
	echo Take one and pass it around, <BR> ;
	echo "$huc $bottles of beer on the wall. <BR>" ;
	$hic--;
)
/* Pass out */
echo No more bottles of beer on the wall. <BR> ;
echo No more bottles of beer... <BR> ;
echo Go to the store and buy some more... <BR> ;
echo 99 bottles of beer. <BR> ;
?>
</BODY>
</HTML>```