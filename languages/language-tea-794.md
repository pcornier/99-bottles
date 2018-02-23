
## Language TEA ##
---
- Author: Charles Toepfer
- Date: 07/13/05
- Info: http
- Score:  (2.71 in 7 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-tea-794.html
---

```<%
template bottles()

// TEA version of 99 bottles of beer
foreach (iCount in 1 .. 99 reverse)
{ 
     iCount & " bottle(s) of beer on the wall, " & iCount & " bottle(s) of beer.  " &
    "Take one down and pass it around, " & (iCount-1) &
    " bottle(s) of beer on the wall.  "    
} 
%>

---------------------------------------------

<%
template bottles(Integer iCount)

// TEA version of 99 bottles of beer (recursive)

if ( iCount == null ) 
{
	iCount = 100
}

if ( iCount > 1 ) 
{
	iCount = iCount - 1
	iCount & " bottle(s) of beer on the wall, " & iCount & " bottle(s) of beer.  " &
 	"Take one down and pass it around, " & (iCount-1) &
 	" bottle(s) of beer on the wall.  "   
	call bottles(iCount)	
}
%>```