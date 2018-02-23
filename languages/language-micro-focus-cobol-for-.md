
## Language Micro Focus COBOL for .net ##
---
- Author: Alex Turner
- Date: 09/03/09
- Info: http
- Score:  (2.89 in 9 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-micro-focus-cobol-for-.net-2173.html
---

```      $set sourceformat(free)
 01 bottles         pic 99.
 01 bottles-1       pic 9.
 01 bottle-word     string.
 01 count-word      string.

 perform  varying bottles from 99 by -1 until count-word equals "No"
    evaluate bottles
        when 0
            move "No"      to count-word
            move "bottles" to bottle-word
        when 1
            move bottles   to bottles-1
            move bottles-1 to count-word   
            move "bottle"  to bottle-word
        when 2 thru 9
            move bottles   to bottles-1
            move bottles-1 to count-word   
            move "bottles" to bottle-word
        when 10 thru 99
            move bottles   to count-word
            move "bottles" to bottle-word
    end-evaluate
    
    if bottles not equals 99 then
        display "Take one down and pass it around, " count-word::"ToLower"() 
                " more " bottle-word " of beer on the wall."
    end-if
                
    display count-word " " bottle-word 
        " of beer on the wall, " count-word::"ToLower"() 
        " " bottle-word " of beer."
        
 end-perform
 display "Go to the store and buy some more, 99 bottles of beer on the wall."
 goback.```