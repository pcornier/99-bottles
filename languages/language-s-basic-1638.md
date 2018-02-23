
## Language S-BASIC ##
---
- Author: Stephen Mitchell
- Date: 11/28/07
- Info: http
- Score:  (2.78 in 18 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-s-basic-1638.html
---

```comment
    print lyrics to "99 bottles of beer"
    written for S-BASIC compiler for 8-bit CP/M systems
end

$constant maxbottles = 99

rem - computes p mod q
function mod(p, q = integer) = integer
end = p - q * (p/q)

function wordnumber(i = integer) = string
    var w = string
    if i < 11 then
        case i of
            0 : w = ""
            1 : w = "One "
            2 : w = "Two "
            3 : w = "Three "
            4 : w = "Four "
            5 : w = "Five "
            6 : w = "Six "
            7 : w = "Seven "
            8 : w = "Eight "
            9 : w = "Nine "
            10: w = "Ten "
        end
    else if i < 20 then
        case i of
            11: w = "Eleven "
            12: w = "Twelve "
            13: w = "Thirteen "
            14: w = "Fourteen "
            15: w = "Fifteen "
            16: w = "Sixteen "
            17: w = "Seventeen "
            18: w = "Eighteen "
            19: w = "Nineteen "
        end
    else
        case i/10 of
            2: w = "Twenty "  + wordnumber(mod(i,10))
            3: w = "Thirty "  + wordnumber(mod(i,10))
            4: w = "Forty "   + wordnumber(mod(i,10))
            5: w = "Fifty "   + wordnumber(mod(i,10))
            6: w = "Sixty "   + wordnumber(mod(i,10))
            7: w = "Seventy " + wordnumber(mod(i,10))
            8: w = "Eighty "  + wordnumber(mod(i,10))
            9: w = "Ninety "  + wordnumber(mod(i,10))
       end
end = w

function bottle_string(n = integer) = string
    var b = string
    if n = 1 then
        b = "bottle"
    else
        b = "bottles"
end = b

procedure delay
    var i = integer
    for i = 1 to 500 do
        rem - nothing
    next
end

rem - begin main program

var n = integer    
n = maxbottles

while n > 0 do
   begin
       print
       print wordnumber(n); bottle_string(n); " of beer on the wall"
       print wordnumber(n); bottle_string(n); " of beer"
       print "Take one down, and pass it around"
       if (n = 1) then
           print "No more bottles";
       else
           print wordnumber(n-1); bottle_string(n-1);
       print " of beer on the wall"
       n = n - 1
       delay
    end

end```