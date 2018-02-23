
## Language VBScript ##
---
- Author: Bruce M. Axtens
- Date: 09/29/05
- Info: n/a
- Score:  (2.57 in 7 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-vbscript-895.html
---

```'~ "Object-Oriented" 99Bob in VBScript.
'~ Bruce M. Axtens, 2005-09-29.
'~ http://codeaholic.blogspot.com

'2nd version. Wanting to say "one" or "it" complicated matters a bit.

option explicit

class wall
    private numBottles
    
    private sub class_initialize()
        numBottles = 99
    end sub
    
    public function Count()
        Count = numBottles
    end function
    
    public sub takeOneDown()
        numBottles = numBottles - 1
    end sub
    
    public function bottlesOfBeer()
        bottlesOfBeer = plurals( numBottles ) & " of beer"
    end function
    
    private function plurals( num )
        if num > 1 then
            plurals = num & " bottles"
        elseif num = 1 then
            plurals = num & " bottle"
        else
            plurals = "No more bottles"
        end if
    end function
    
    public sub refill()
        numBottles = 99
    end sub
    
    public function pronoun()
        if numBottles > 1 then
            pronoun = "one"
        else
            pronoun = "it"
        end if
    end function
    
end class

dim myWall
set myWall = new wall

dim timesThrough
const MAX_TIMES_THROUGH = 1
timesThrough = 0

do
    wscript.echo myWall.bottlesOfBeer() & " on the wall."
    wscript.echo myWall.bottlesOfBeer() & "."
    if myWall.Count = 0 then
        wscript.echo "Go to the store and buy some more."
        myWall.refill
        timesThrough = timesThrough + 1
    else
        wscript.echo "Take " & myWall.pronoun() & " down and pass it round."
        myWall.takeOneDown
    end if
    wscript.echo myWall.bottlesOfBeer() & " on the wall."
    wscript.echo
    
    if timesThrough >= MAX_TIMES_THROUGH then
        exit do
    end if
loop```