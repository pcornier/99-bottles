
## Language Draft Code Generator ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: http
- Score:  (2.50 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-draft-code-generator-221.html
---

```"99 Bottles" done by Draft Code Generator.
http://www.simtel.net/product.php?id=37145&sekid=0&SiteID=simtel.net


$[OUTPUT "99.TXT"]$
$[BotCnt = 99]$
$[PROCEDURE SingPart(BC)]$
	$[IF BC <> 1 THEN]$
		$[Container = "bottles"]$
	$[ELSE]$
		$[Container = "bottle"]$
	$[ENDIF]$
	$[IF BC > 1 THEN]$
		$[What = "one"]$
	$[ELSE]$
		$[What = "it"]$
	$[ENDIF]$
	$[BC]$ $[Container]$ of beer on the wall,
	$[BC]$ $[Container]$ of beer.
	Take $[What]$ down, and pass it around,
	$[BC = BC - 1]$
	$[IF BC <> 1 THEN]$
		$[Container = "bottles"]$
	$[ELSE]$
		$[Container = "bottle"]$
	$[ENDIF]$
	$[IF BC = 0 THEN]$
		$[BC = "No"]$
	$[ENDIF]$
	$[BC]$ $[Container]$ of beer on the wall.

$[ENDPROCEDURE]$

$[WHILE BotCnt > 0]$
	$[SingPart(BotCnt)]$
	$[BotCnt = BotCnt-1]$
$[ENDWHILE]$
	No bottles of beer on the wall,
	No bottles of beer.
	Go to the Store, and get some more.
	99 bottles of beer on the wall.```