
## Language Eiffel ##
---
- Author: Finnian Reilly
- Date: 12/06/09
- Info: http
- Score:  (2.95 in 19 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-eiffel-2259.html
---

```indexing
	description: "[
		Short application to generate lyrics for the song 99 Bottles of Beer
		See: http://www.99-bottles-of-beer.net/language-eiffel-231.html
	]"
	author: "Finnian Reilly"
	email: "finnian at eiffel-loop dot com"

class
	THE_SHORT_99_BOTTLES_OF_BEER_APPLICATION

create
	make

feature {NONE} -- Initialization

	make is
			--
		do
			print ("Lyrics of the song 99 Bottles of Beer%N%N")
			(0 |..| 99).do_all (agent print_verse)
		end

feature -- Basic operations

	print_verse (count_consumed: INTEGER) is
			--
		local
			count, x, y, z: INTEGER
		do
			count := 99 - count_consumed
			x := count; y := count
			z := 99 - (count_consumed + 1) \\ 100
			verse := replace_verse_template (count)

			(<< x, y, z >>).do_all_with_index (
				agent (value, i: INTEGER)
					do
						verse.replace_substring_all (Substitution_variable_names [i], bottle_expression (value, i))
					end
			)
			print (verse)
		end

feature -- Implementation

	bottle_expression (count, position: INTEGER): STRING is
			--
		do
			inspect count
				when 0 then
					Result := "no more bottles"
					if position = 1 then Result.put ('N', 1) end

				when 1 then
					Result := count.out + " bottle"

				else
					Result := count.out + " bottles"
			end
		end

	replace_verse_template (count: INTEGER): STRING is
			--
		do
			Result := "$x of beer on the wall, $y of beer.%N$action, $z of beer on the wall.%N%N"
			Result.replace_substring_all ("$action", Verse_line_2_alternatives [count.min (1) + 1])
		end

	verse: STRING

feature -- Constants

	Verse_line_2_alternatives: ARRAY [STRING] is
			--
		once
			Result := << "Go to the store and buy some more", "Take one down and pass it around" >>
		end

	Substitution_variable_names: ARRAY [STRING] is
			--
		once
			Result := << "$x", "$y", "$z" >>
		end

end```