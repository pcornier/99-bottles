
## Language TypoScript ##
---
- Author: Martin Hentschel
- Date: 07/29/08
- Info: http
- Score:  (2.75 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-typoscript-1828.html
---

```# TypoScript is the configuration language of Typo3, a webbased
# content management framework released under GPL (http://typo3.org/).
# It is rumored that TypoScript isn't a programming language.

page = PAGE
page.1 = TEXT
page.1 {
  stdWrap.prefixComment = 24 |
  split {
    token.char = 9
    cObjNum = 1 |*||*| 2 || 3
    1.cObject = COA 
    1.cObject.10 = LOAD_REGISTER 
    1.cObject.10.counter {      
      cObject = TEXT
      cObject.data = register:counter
      cObject.wrap = |+1
      prioriCalc = intval
    }
    1.cObject.20 = LOAD_REGISTER
    1.cObject.20.current {      
      cObject = TEXT
      cObject.data = register:counter
      cObject.wrap = 99-|
      prioriCalc = intval
    }
    1.cObject.30 = TEXT
    1.cObject.30.data = register:current
    1.cObject.30.noTrimWrap (
      |Take one down, pass it around<br>| bottles of beer on the wall<br>|
    )
    1.cObject.40 = TEXT
    1.cObject.40.data = register:current
    1.cObject.40.noTrimWrap = |<br>| bottles of beer on the wall<br>|

    1.cObject.50 = TEXT
    1.cObject.50.data = register:current
    1.cObject.50.noTrimWrap = || bottles of beer<br>|
    
    2.cObject = TEXT
    2.cObject.value (
      Take one down, pass it around<br>
      One bottle of beer on the wall<br><br>
    )
    
    3.cObject = TEXT
    3.cObject.value (
      One bottle of beer on the wall<br>
      One bottle of beer<br>
      Take one down, pass it around<br>
      No more bottles of beer on the wall
    )
  }
  wrap (
    <blockquote>99 bottles of beer on the wall<br>
                99 bottles of beer<br>|</blockquote>
  )
}```