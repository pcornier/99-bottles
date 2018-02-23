
## Language Blue ##
---
- Author: Christian Meurin
- Date: 04/16/06
- Info: http
- Score:  (2.89 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-blue-1119.html
---

```== Blue is an object-oriented, Pascal/Ada-like language primarily used for
== introducting students to programming. Blue, as of 1998,
== has been discontinued and the source code for compiler
== and IDE put up for grabs at:
==
== http://www.cs.kent.ac.uk/people/staff/mik/blue/

== This is a very minimal example since I haven't read much on the language

class BottlesOfBeer is

  uses -- No other classes to use, just the auto-included System class

internal

    == Define internal variables and routines here, but for this example,
    == there is none needed.

interface

    creation is
      == This is the typical class constructor. Had there been parameters,
      == the signature would have taken this form:
      ==
      == creation (param: Type) is
      do
        -- nothing to do...
    end creation

routines

    countdown is
      var
        count: Integer
        done: Boolean
      do
        loop
          print (count, " bottles of beer on the wall,\n")
          print (count, " bottles of beer,\n")
          print ("Take one down, pass it around,\n")

          count := count - 1
          
          if count <= 0 then
              print ("No more bottles of beer on the wall.\n")
              done := true
          else if count = 1 then
              print ("One more bottle of beer on the wall.\n")
          else
              print (count, " more bottles of beer on the wall.\n")
          end if

          exit on done
        end loop
      end countdown
end class```