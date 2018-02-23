
## Language Camping (a Ruby framework) ##
---
- Author: Jakub L�dl
- Date: 03/06/11
- Info: http
- Score:  (4.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-camping-(a-ruby-framework)-2610.html
---

```The famous song implemented using this nice framework. When you run this, the song will be
accessible on '/bottles/<number of bottles>'.

module Bottles
  module Controllers
    class BottlesN
      def get(n)
        @count = n.to_i
        render :bottles
      end
    end
  end
  
  module Views
    def bottles
      @count.downto 1 do |cur|
        p format_bottles(cur), ' of beer on the wall, ', format_bottles(cur), ' of beer.'
        p 'Take one down and pass it around, ', format_bottles(cur - 1), ' of beer on the wall.'
      end
      p <<-beer
        No more bottles of beer on the wall, no more bottles of beer.
        Go to the store and buy some more, #{format_bottles(@count)} of beer on the wall.
        beer
    end
  end
  
  module Helpers
    def format_bottles(n)
      case n
      when 0
        "No more bottles"
      when 1
        "1 bottle"
      else
        "#{n} bottles"
      end
    end
  end
end

Camping.goes :Bottles```