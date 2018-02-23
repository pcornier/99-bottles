
## Language Ruby ##
---
- Author: Eric Budd
- Date: 01/06/08
- Info: http
- Score:  (2.89 in 9 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-ruby-1662.html
---

```# 
# Rubeer.rb
# by Eric Budd, Jan. 2008
#
# Demonstrates adding functionality to a built-in class, optional method parameters, inline 
#   conditionals, string replacement, alcohol aversion, and excessively fancy use of hashes.
#
# This borrows the hash from Daniel Straight's excellent implementation for the "wordalize" method
#

class Integer
  NUMBER_WORDS = { 0 => "no", 1 => "one", 2 => "two", 3 => "three", 4 => "four", 5 => "five", 
                    6 => "six", 7 => "seven", 8 => "eight", 9 => "nine", 

                    10 => "ten", 11 => "eleven", 12 => "twelve", 13 => "thirteen", 
                    14 => "fourteen", 15 => "fifteen", 16 => "sixteen", 17 => "seventeen", 
                    18 => "eighteen", 19 => "nineteen", 

                    20 => "twenty", 30 => "thirty", 40 => "forty", 50 => "fifty", 60 => "sixty",
                    70 => "seventy", 80 => "eighty", 90 => "ninety"}

  def wordalize
    raise "Invalid number to wordalize - should be in the range (0..99)" unless (0..99) === self
    return NUMBER_WORDS[self] if self < 20
    wordalized = NUMBER_WORDS[self - (self % 10)]
    wordalized += '-' + NUMBER_WORDS[self % 10] unless (self % 10) == 0
    return wordalized
  end

  def bottles
    raise "Invalid number of bottles - should be in the range (0..99)" unless (0..99) === self
    how_many_bottles = self.wordalize + ' bottle'
    how_many_bottles += 's' unless self == 1
    return how_many_bottles 
  end

  alias :bottle :bottles # for grammar Nazis
end

def sing(number, teetotaller = false)
  beverage = teetotaller ? 'coke' : 'beer'

  puts "#{number.bottles.capitalize} of #{beverage} on the wall, #{number.bottles} of #{beverage}."
  if number != 0
    puts "Take one down, pass it around, #{(number - 1).bottles} of #{beverage} on the wall.\n\n"
  else
    puts "Go to the store and buy some more, 99 bottles of #{beverage} on the wall."
  end
end

99.downto(0) { |number| sing(number) }
# Uncomment the following for the alternative teetotaller version
# 99.downto(0) { |number| sing(number, true) }```