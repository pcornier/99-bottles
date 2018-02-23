
## Language Ruby ##
---
- Author: Anonymous
- Date: 05/18/05
- Info: n/a
- Score:  (3.03 in 115 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ruby-673.html
---

```#Writes down an exact copy of the song on this site

99.downto(0){|b|puts "#{b==0?'No more b':"#{b} B"}ottle#{'s'if b!=1} of beer on the wall, #{b==0?'No
more':b} bottle#{'s'if b!=1} of beer.#{b==0?".. Go to the store and buy some more...\n99 bottles of
beer.":"\nTake one down and pass it around, #{b-1} bottle#{'s'if b!=2} of beer on the wall.\n\n"}"}```