
## Language Magik ##
---
- Author: Neil Pawson
- Date: 03/19/07
- Info: http
- Score:  (2.83 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-magik-1423.html
---

```## A nice, sturdy wall to put our bottles on
def_slotted_exemplar(:wall, { {:num_bottles,   _unset},
			      {:start_bottles, _unset}}, {})
$

## The number of bottles we started with
wall.define_slot_access(:start_bottles, :writable, :private)
$

## The number of bottles we have left
wall.define_slot_access(:num_bottles, :writable, :private)
$

_method wall.new(start_bottles)

	## Create a new wall with START_BOTTLES of beer sitting on it
	
	>> _clone.init(start_bottles)
_endmethod
$

_private _method wall.init(start_bottles)

	## Initialise the amount of beer to START_BOTTLES
	
	_self.num_bottles << _self.start_bottles << start_bottles

	>> _self  
_endmethod
$

_private _method wall.no_beer?
	
	## Are there any bottles of beer left?
	
	>> _self.num_bottles < 1
_endmethod
$
		
_private _method wall.beer_string(_optional uc_first?)

	## Return a string which says how many bottles of beer we have
	## left on the wall.
	##
	## If UC_FIRST? is true and we have no beer left then the first
	## letter is capitalised.

	_if _self.no_beer?
	_then
		_if uc_first? _is _true _then num << "No more" _else num << "no more" _endif
	_else
		num << _self.num_bottles
	_endif
	
	_if num _isnt 1 _then s << %s _else s << "" _endif

	>> write_string(num, " bottle", s, " of beer")
_endmethod
$

_private _method wall.drink_bottle()

	## Drink a bottle of beer and show how many we have left
	
	_self.num_bottles -<< 1
	write("Take one down and pass it around, ", _self.beer_string(), " on the wall.")
	write()
_endmethod
$

_method wall.drink_all_beer()

	## Drink all the bottles of beer we have on the wall, printing
	## out the lyrics on the way.

	# Drink until dry
	_loop
		write(_self.beer_string(_true), " on the wall, ", _self.beer_string(), %.)
		_if _self.no_beer? _then _leave _endif
		_self.drink_bottle()
	_endloop 

	_self.num_bottles << _self.start_bottles
	write("Go to the store and buy some more, ", _self.beer_string(), " on the wall.")
_endmethod
$

# Create a new wall stocked with beer, then drink it
wall.new(99).drink_all_beer()
$```