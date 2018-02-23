
## Language OmniMark ##
---
- Author: Jacques Legare
- Date: 01/31/06
- Info: http
- Score:  (3.01 in 117 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-omnimark-1037.html
---

```define string source function
   wordy value integer i
as
   local string units initial { "one", "two", "three", "four", "five", 
                                "six", "seven", "eight", "nine" }
   local string teens initial { "ten", "eleven", "twelve", "thirteen", 
                                "fourteen", "fifteen", "sixteen", "seventeen",
                                "eighteen", "nineteen" }
   local string tens  initial { "twenty", "thirty", "forty", "fifty", "sixty", 
                                "seventy", "eighty", "ninety" }

   do select i
   case 0
      output "zero"

   case 1 to 9
      using input as units[i] 
         output "ug" % (#current-input take any) || #current-input

   case 10 to 19
      using input as teens[i - 9] 
         output "ug" % (#current-input take any) || #current-input

   else
      using input as tens[i / 10 - 1] 
         output "ug" % (#current-input take any) || #current-input
      output " " || units[i modulo 10]
         unless i modulo 10 = 0
   done


process
   repeat for integer i from 99 to 0 by -1
      submit wordy i
   again


find ul"zero"
   output "No more bottles of beer on the wall,%n"
       || "No more bottles of beer.%n"
       || "Go to the store and buy some more,%n"
       || "Ninety nine bottles of beer on the wall.%n%n"


find ul"one" value-end
   output "One bottle of beer on the wall!%n%n"
       || "One bottle of beer on the wall,%n"
       || "One bottle of beer.%n"
       || "Take one down, pass it around.%n"
       || "No more bottles of beer on the wall.%n%n"


find any+ => n
   output n || " bottles of beer on the wall.%n%n"
      unless n = ul"ninety nine"
   output n || " bottles of beer on the wall,%n"
       || n || " bottles of beer.%n"
       || "Take one down, pass it around,%n"```