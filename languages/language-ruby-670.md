
## Language Ruby ##
---
- Author: Greg T.
- Date: 05/18/05
- Info: n/a
- Score:  (3.02 in 169 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ruby-670.html
---

```# There's more than one 'nice' way to do it ;-)
# www.ruby-lang.org

puts; puts "   It's beer song time!"; puts
 
def bottles(n)
  n == 1 ? "#{n} bottle" : "#{n} bottles"
end
 
@count = 99

@count.downto(1)  {
puts <<BEERSONG
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   #{bottles(@count)} of beer on the wall
   #{bottles(@count)} of beer
   Take one down, pass it around
   #{bottles(@count -= 1)} of beer on the wall
BEERSONG
}
 
puts "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
puts; puts "   No more beer on the wall :-("```