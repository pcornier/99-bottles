
## Language XQuery ##
---
- Author: Martin Probst
- Date: 10/23/05
- Info: http
- Score:  (2.60 in 10 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-xquery-923.html
---

```(:
 : XQuery version of 99 bottles of beer
 : author: Martin Probst <martin [at] x-hive.com>
 : Rotterdam, The Netherlands, 2005-10-23
 :)
xquery version "1.0";
(: Set to false if you dislike angle brackets :)
declare variable $xmlVersion as xs:boolean := true();

(:~ 
 : Generate an english language string from the number of bottles, 
 : respecting singular/plural.
 :
 : @param $bottles number of bottles
 :)
declare function bottles($bottles as xs:integer) as xs:string
{
  if ($bottles = 0) then
    "no more bottles of beer"
  else if ($bottles = 1) then
    "1 bottle"
  else
    concat($bottles cast as xs:string,
           " bottles")
};

(:~ 
 : Generate a "bottle line"
 :
 : @param $bottles number of bottles
 :)
declare function bottleLine($bottles as xs:integer) as xs:string
{
  if ($bottles = 0) then
    "No more bottles of beer on the wall, no more bottles of beer."
  else
    concat(bottles($bottles),
           " of beer on the wall, ",
           bottles($bottles),
           " of beer.")
};

(:~ 
 : Generate a "drink line"
 :
 : @param $bottles number of bottles
 :)
declare function drinkLine($bottles as xs:integer) as xs:string
{
  concat("Take one down and pass it around, ",
         bottles($bottles),
         " of beer on the wall.")
};

let $song :=
  <song>{
  (: Generate bottles :)
  let $bottles :=
    <bottles>
      {
        for $i in 0 to 99
        return <bottle>{ $i }</bottle>
      }
    </bottles>
  (: Iterate bottles :)
  for $bottle in $bottles/bottle
  let $bottleNum := xs:integer($bottle)
  order by $bottleNum descending
  return 
    if ($bottleNum != 0) then
      <verse>
        <line>{ bottleLine($bottleNum) }</line>
        <line>{ drinkLine ($bottleNum - 1) }</line>
      </verse>
    else
      <verse>
        <line>No more bottle of beer on the wall, no more bottles of beer.</line>
        <line>Go to the store and buy some more, 99 bottles of beer on the wall.</line>
      </verse>
  }</song>
return
  if ($xmlVersion) then
    $song
  else
    string($song)```