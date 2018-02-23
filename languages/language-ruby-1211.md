
## Language Ruby ##
---
- Author: Daniel Straight
- Date: 07/10/06
- Info: http
- Score:  (2.98 in 41 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ruby-1211.html
---

```#99 Bottles of Beer on the Wall
#by Daniel Straight, July 10, 2006
#see http://ruby-lang.org/en/ for info on Ruby

#This version adds a to_w (to word) conversion to the Integer class
#and then uses it to print the lyrics with words instead of numerals

class Integer
	def to_w
		words = {
			0 => "no", 
			1 => "one", 
			2 => "two", 
			3 => "three", 
			4 => "four", 
			5 => "five", 
			6 => "six",
			7 => "seven", 
			8 => "eight", 
			9 => "nine", 
			10 => "ten", 
			11 => "eleven", 
			12 => "twelve",
			13 => "thirteen", 
			14 => "fourteen", 
			15 => "fifteen", 
			16 => "sixteen", 
			17 => "seventeen",
			18 => "eighteen", 
			19 => "nineteen", 
			20 => "twenty", 
			30 => "thirty", 
			40 => "fourty",
			50 => "fifty", 
			60 => "sixty", 
			70 => "seventy", 
			80 => "eighty", 
			90 => "ninety"}
		if self < 21
			words[self].capitalize
		else
			if self.to_s =~ /\d0/
				words[self].capitalize
			else
				"#{words[(self.to_s.slice(0,1).to_i*10)].capitalize}-#{words[(self.to_s.slice(1,2).to_i)]}"
			end
		end
	end
end
	
def bottles (num)
	if num >= 2 or num == 0
		"#{num.to_w} bottles"
	else
		"#{1.to_w} bottle"
	end
end

def sing (verse)
	puts "#{bottles(verse)} of beer on the wall"
	puts "#{bottles(verse)} of beer"
	if verse > 0
		puts "Take one down; pass it around"
		puts "#{bottles(verse-1)} of beer of wall"
	elsif verse == 0
		puts "Go to the store, buy some more."
		puts "#{bottles(99)} bottles of beer on the wall"
	end
	puts
end

99.downto(0) do |i|
	sing i
end```