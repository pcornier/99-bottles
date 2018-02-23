
## Language Ruby ##
---
- Author: Kian Wright
- Date: 06/10/05
- Info: n/a
- Score:  (3.00 in 28 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ruby-744.html
---

```# 99 bottles of beer, in Ruby
# illustrates inheritance, blocks/yield, class methods, arrays, iterators
# Kian Wright

class Song
	def Song.sing(fridge)
		sing_how_many(fridge, :on_the_wall)
		sing_how_many(fridge, :nowhere)
		yield
		sing_how_many(fridge, :on_the_wall)
		puts
	end
	
	def Song.sing_how_many(fridge, where=:on_the_wall)
		puts "#{fridge.to_s} of beer #{where == :on_the_wall ? 'on the wall' : ''}"
	end

end

class Beer
	def drink(from=nil)
		from.delete(self) if from && from.respond_to?(:delete)
		puts "take one down and pass it around"
	end
end	
	
class Beers < Array
	def drink(how_many=length)
		how_many = length if how_many == :all
		
		self[0,how_many].each do |beer|
			Song.sing(self) { beer.drink(self) }
		end
	end

	def restock(how_many)
		Song.sing(self) { buy(how_many) }
	end
		
	def buy(how_many)
		fill(0, how_many) { Beer.new }
		puts "go to the store and buy some more"
	end
	
	def to_s
		case length
		when 0
			"no more bottles"
		when 1
			"one bottle"
		else
			"#{length} bottles"
		end
	end
end

fridge = Beers.new(99) {|i| Beer.new }
fridge.drink(:all)
fridge.restock(99)```