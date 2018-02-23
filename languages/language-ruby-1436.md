
## Language Ruby ##
---
- Author: J. B. Rainsberger
- Date: 04/04/07
- Info: ruby-central.org
- Score:  (2.91 in 11 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-ruby-1436.html
---

```# 99 bottles of beer, monkeypatch plus anonymous procs.
# (c) J. B. Rainsberger 2007 All rights reserved, but I can be bribed.

class Fixnum
  BOTTLES_FACTORY = Hash.new { |hash, number|
    lambda {
      puts "#{number} bottles of beer on the wall."
      puts "#{number} bottles of beer."
      puts "Take one down, pass it around,"
      puts "#{number - 1} bottles appear on the wall!"
      puts
    }
  }.merge( {
    1 => lambda {
      puts "One bottle of beer on the wall."
      puts "One bottle of beer."
      puts "Take it down, pass it around."
      puts "No more bottles of appear on the wall!"
    },
    2 => lambda {
      puts "Two bottles of beer on the wall."
      puts "Two bottles of beer."
      puts "Take one down, pass it around."
      puts "One bottle appears on the wall."
      puts
    }
  })

  def sing_bottles_verse
    BOTTLES_FACTORY[self].call
  end
end

99.downto(1) { |i| i.sing_bottles_verse }```