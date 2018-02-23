
## Language XQuery ##
---
- Author: David Sewell
- Date: 12/28/05
- Info: http
- Score:  (3.00 in 8 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-xquery-993.html
---

```(: XQuery version of 99 Bottles of Beer on the Wall
   Based on 3 November 2005 Candidate Recommendation syntax; 
   see http://www.w3.org/TR/2005/CR-xquery-20051103/
   Coded by David Sewell, dsewell@virginia.edu - 2005-12-27
   
   This version iterates over fn:reverse(0 to 99) rather than
   using a recursive function (an equally XQuery-ish approach).
:)

declare namespace my = "http://www.99-bottles-of-beer.net/xquery";

declare function my:plural($bottles as xs:integer?) as xs:string
{  if ($bottles eq 1) then "" else "s" };

<song>{
   for $b in reverse(0 to 99)
   let $howmanyBegin :=  if ($b > 0) then        string($b)
                         else                    "No more"
   let $howmanyEnd   :=  if ($b > 1) then        string($b - 1)
                         else if ($b eq 1) then  "No more"
                         else                    "99"
   let $pronoun      :=  if ($b eq 1) then       "it"
                         else                    "one"
   let $action :=        if ($b > 0) then concat("Take ", $pronoun, " down and pass it around,")
                         else                    "Let's go to the store and buy some more,"
   return
       <verse>
          <line>{$howmanyBegin} bottle{my:plural($b)} of beer on the wall,</line>
          <line>{$howmanyBegin} bottle{my:plural($b)} of beer!</line>
          <line>{$action}</line>
          <line>{$howmanyEnd} bottle{my:plural($b - 1)} of beer on the wall!</line>
       </verse>
}</song>```