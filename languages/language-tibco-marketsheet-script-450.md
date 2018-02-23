
## Language Tibco MarketSheet Script ##
---
- Author: Gavin Brock
- Date: 04/20/05
- Info: n/a
- Score:  (2.86 in 7 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-tibco-marketsheet-script-450.html
---

```# 99 Bottles of Beer Song in Tibco MarketSheet Script
# A UNIX front end for stock market data  (1990-1999)
# MarketSheet Script is a simple stack based language
# by Gavin Brock        http://brock-family.org/gavin

'cat' setPrintCommand beginPrint
99 bottles def
{
        bottles ' bottle(s) of beer on the wall,' cat printString
        bottles ' bottle(s) of beer,' cat printString

        'Take one down, pass it arround,' printString
        bottles 1 - bottles def

        bottles ' bottle(s) of beer on the wall.' cat printString
        bottles 0 > {true} ifThen
}  while
endPrint```