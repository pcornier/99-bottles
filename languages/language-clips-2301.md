
## Language CLIPS ##
---
- Author: Ken Roger Riggs
- Date: 01/25/10
- Info: http
- Score:  (2.33 in 3 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-clips-2301.html
---

```; 99 bottles of beer on the wall in CLIPS 6.3 6-24-07
;  a one rule (and somewhat 'unnatural') solution
; Ken Roger Riggs 01/25/10
; 
; execute in CLIPS by entering commands:
;                (load <pathToProg>)
;                (reset)
;                (run)

; uncomment (delete ";") to get more bottles of beer
(deffacts init

   (seq   ;99 98 97 96 95 94 93 92 91 90
          ;89 88 87 86 85 84 83 82 81 80
          ;79 78 77 76 75 74 73 72 71 70
          ;69 68 67 66 65 64 63 62 61 60
          ;59 58 57 56 55 54 53 52 51 50
          ;49 48 47 46 45 44 43 42 41 40
          ;39 38 37 36 35 34 33 32 31 30
          ;29 28 27 26 25 24 23 22 21 20
          ;19 18 17 16 15 14 13 12 11 10
            9  8  7  6  5  4  3  2  1 "No more" 99)

; map the English arity by number
   (arity 99 98 97 96 95 94 93 92 91 90
          89 88 87 86 85 84 83 82 81 80
          79 78 77 76 75 74 73 72 71 70
          69 68 67 66 65 64 63 62 61 60
          59 58 57 56 55 54 53 52 51 50
          49 48 47 46 45 44 43 42 41 40
          39 38 37 36 35 34 33 32 31 30
          29 28 27 26 25 24 23 22 21 20
          19 18 17 16 15 14 13 12 11 10
           9  8  7  6  5  4  3  2    "No more" 
       " bottles")
   (arity 1 
       " bottle of beer")

; map the actions by number of bottles
   (action 99 98 97 96 95 94 93 92 91 90
           89 88 87 86 85 84 83 82 81 80
           79 78 77 76 75 74 73 72 71 70
           69 68 67 66 65 64 63 62 61 60
           59 58 57 56 55 54 53 52 51 50
           49 48 47 46 45 44 43 42 41 40
           39 38 37 36 35 34 33 32 31 30
           29 28 27 26 25 24 23 22 21 20
           19 18 17 16 15 14 13 12 11 10
            9  8  7  6  5  4  3  2  1 
       "Take one down, pass it around, ")
   (action "No more" 
       "Go to the store and buy some more, ")
)

(defrule sing
?f<-(seq ?this ?next $?rest)
    (arity $? ?this $? ?arity1)
    (action $? ?this $? ?action)
    (arity $? ?next $? ?arity2)
=>
    (retract ?f)
    (assert (seq ?next $?rest))
    (printout t ?this ?arity1 " of beer on the wall, " ?this ?arity1 "." crlf 
               ?action ?next ?arity2   " on the wall."    crlf crlf))```