
## Language MS SQL ##
---
- Author: AMi
- Date: 04/20/05
- Info: n/a
- Score:  (2.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ms-sql-412.html
---

```/*25.09.2000 by AMi amiundyvonne@web.de*/ <mailto:amiundyvonne@web.de*/> 
 
DECLARE @beer INT
SELECT @beer=99
nextBeer:
 IF @beer=0 GOTO noBeer
 SELECT CONVERT(VARCHAR,100-@beer)+' bottles of beer on the wall,'
 SELECT CONVERT(VARCHAR,@beer)+' bottles of beer,'
 SELECT 'take one down and pass it around,'
 SELECT @beer = @beer - 1
 GOTO nextBeer
noBeer:
SELECT 'NO MORE BOTTLES OF BEER ON THE WALL'
SELECT 'NO MORE BOTTLES OF BEER'
SELECT 'GO TO THE STORE AND BUY SOME MORE'
SELECT '99 BOTTLES OF BEER'```