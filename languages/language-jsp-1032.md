
## Language JSP ##
---
- Author: Davy Boy Hayes
- Date: 01/24/06
- Info: n/a
- Score:  (2.96 in 25 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-jsp-1032.html
---

```<%  int beers = 99;
      while (beers > 0) {
        int loop = 2;
        while (loop > 0) { %>
<%=beers%> bottle<%= beers!=1 ? "s":""%> of beer<%= loop-- ==2 ? " on the wall, " : "<br>"%>
<%      } %>
Take one down pass it around,
<%= --beers>0 ? ""+beers:"no more"%> bottle<%= beers!=1 ? "s":""%> of beer on the wall.<br><br>
<%    } %>
No more bottles of beer on the wall, no more bottles of beer<br>
Go to the store, buy some more, 99 bottles of beer on the wall.<br>```