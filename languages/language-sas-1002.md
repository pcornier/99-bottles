
## Language SAS ##
---
- Author: Alan D Rudland
- Date: 01/04/06
- Info: http
- Score:  (2.50 in 4 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-sas-1002.html
---

```*** Alan D Rudland - NetDominus 04/01/06 *** :

data _null_ ;
  %let bot  = bottle of beer ;
  %let bots = bottles of beer ;
  %let wall = on the wall ;
  do i = 99 to 1 by -1 ;
    format i j words13. ;
    j = i - 1 ;
    i_word = upcase(substr(put(i,words13.),1,1)) !!
                    substr(put(i,words13.),2) ;
    if i = 1 then 
      put i_word "&bot &wall, " i "&bot.." ;
    else
      put i_word "&bots &wall, " i "bots.." ;
    put 'Take one down, pass it around, ' @ ;
    if j>= 2 then
      put j "&bots &wall.." ;
    else if j = 1 then
      put j "&bot &wall.." ;
    else if j = 0 then
    do ;
      put "no more &bots &wall.." ;
      put ;
      put "No more &bots &wall.. " @ ;
      put "no more &bots.." ;
      put 'Go to the store, buy some more...' @ ;
*** Uncommenting the lines below will create a continuous loop *** ;
***   i = 99 ;
***   put i "&bots &wall.." ;
    end ;
    put ;
  end ;
run ;```