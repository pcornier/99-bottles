
## Language Apache (Server Side Includes) ##
---
- Author: Mike Bristow
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 21 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-apache-(server-side-includes)-31.html
---

```<!-- 99 bottles of beer, with Apache's -->
<!-- mod_include                       -->
<!--                                   -->
<!-- Look, ma, no looping constructs!  -->
<!-- By Mike Bristow, mike@urgle.com   -->

<!-- initilization                     -->
<!--#if expr="$init != done"           -->
<!--#set var="beerten" value="9" 
         var="beerunit" value="9"
	 var="rm" value="/bin/rm -f"  
	 var="cp" value="/bin/ln"
         var="init" value="done"       -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head><title>99 bottles of beer</title></head>
<body>
<!--#else                              -->
<!--#exec cmd="$rm $fn"              -->
<!--#endif                             -->

<!--#if expr="($beerten = '') && 
              ($beerunit = 1)"         -->
<!--#set var="bottle" value="bottle"   -->
<!--#else                              -->
<!--#set var="bottle" value="bottles"  -->
<!--#endif                             -->

<!--#set var="beerstr" 
         value="$beerten$beerunit"     -->
<!--#echo var="beerstr"                -->
<!--#echo var="bottle"                 -->
of beer on the wall<br>
<!--#echo var="beerstr"                -->
<!--#echo var="bottle"                 -->
of beeeeer . . . <br>
Take one down, pass it around<br>

<!-- decrement the beer                -->
<!--#if expr="$beerunit = 9"           -->
<!--#set var="beerunit" value="8"      -->
<!--#elif expr="$beerunit = 8"         -->
<!--#set var="beerunit" value="7"      -->
<!--#elif expr="$beerunit = 7"         -->
<!--#set var="beerunit" value="6"      -->
<!--#elif expr="$beerunit = 6"         -->
<!--#set var="beerunit" value="5"      -->
<!--#elif expr="$beerunit = 5"         -->
<!--#set var="beerunit" value="4"      -->
<!--#elif expr="$beerunit = 4"         -->
<!--#set var="beerunit" value="3"      -->
<!--#elif expr="$beerunit = 3"         -->
<!--#set var="beerunit" value="2"      -->
<!--#elif expr="$beerunit = 2"         -->
<!--#set var="beerunit" value="1"      -->
<!--#elif expr="$beerunit = 1"         -->
<!--#set var="beerunit" value="0"      -->
<!--#elif expr="$beerunit = 0"         -->
<!--#set var="beerunit" value="9"      -->
<!--#if expr="$beerten = 9"            -->
<!--#set var="beerten" value="8"       -->
<!--#elif expr="$beerten = 8"          -->
<!--#set var="beerten" value="7"       -->
<!--#elif expr="$beerten = 7"          -->
<!--#set var="beerten" value="6"       -->
<!--#elif expr="$beerten = 6"          -->
<!--#set var="beerten" value="5"       -->
<!--#elif expr="$beerten = 5"          -->
<!--#set var="beerten" value="4"       -->
<!--#elif expr="$beerten = 4"          -->
<!--#set var="beerten" value="3"       -->
<!--#elif expr="$beerten = 3"          -->
<!--#set var="beerten" value="2"       -->
<!--#elif expr="$beerten = 2"          -->
<!--#set var="beerten" value="1"       -->
<!--#elif expr="$beerten = 1"          -->
<!--#set var="beerten" value=""        -->
<!--#elif expr="beerten = ''"          -->
<!--#set var="beerunit=0"              -->
<!--#endif                             -->
<!--#endif                             -->

<!--#if expr="($beerten = '') 
              && ($beerunit = 0)"      -->
No more bottles of beer on the wall.<br>
<br><em>Go and buy more beer!</em><br>
<pre>$Header: /home/cvs/mike/apache-ssi.shtml,v 1.14 2001/08/15 10:28:07 mike Exp $</pre>
</body>
</html>
<!--#else                              -->
<!--#if expr="($beerunit = 1) 
              && ($beerten = '')"      -->
<!--#set var="bottle" value="bottle"   -->
<!--#else                              -->
<!--#set var="bottle" value="bottles"  -->
<!--#endif                             -->
<!--#set var="beerstr" 
         value="$beerten$beerunit"     -->
<!--#echo var="beerstr"                -->
<!--#echo var="bottle"                 -->
of beer on the wall<br>
<br>

<!-- Now we include the file again     -->
<!--#set var="fn" value="$DOCUMENT_NAME.$UNIQUE_ID.$beerten.$beerunit.shtml"
                                       -->
<!--#exec cmd="$cp $DOCUMENT_NAME $fn"  -->
<!--#include file="$fn"                -->
<!--#endif                             -->```