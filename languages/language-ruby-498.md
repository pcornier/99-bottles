
## Language Ruby ##
---
- Author: Mike Gertz
- Date: 04/20/05
- Info: http
- Score:  (2.97 in 30 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ruby-498.html
---

```#99 Bottles of beer, in Ruby
#by Mike Gertz, Jan 5, 2003
#See www.rubycentral.com for info on the language.

class OneBottle
     def sing
	puts "One bottle of beer on the wall."
	puts "One bottle of beer."
	puts "Take it down, pass it around."
	puts "No more bottles of appear on the wall!"
     end
end

class TwoBottles
     def sing
	puts "Two bottles of beer on the wall."
	puts "Two bottles of beer."
	puts "Take one down, pass it around."
	puts "One bottle appears on the wall."
	puts 
     end
end

class Bottles
    attr_reader :number

    def Bottles.verse( number )
	if number > 2
	    Bottles.new( number )
        elsif number == 2
	    TwoBottles.new
	else
	    OneBottle.new
        end
    end

    def initialize( number )
        @number = number
    end

    def sing
	puts "#{number} bottles of beer on the wall."
	puts "#{number} bottles of beer."
	puts "Take one down, pass it around,"
	puts "#{number - 1} bottles appear on the wall!"
	puts
    end
end

99.downto(1) do | i |
    Bottles.verse(i).sing
end```