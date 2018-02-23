
## Language SR ##
---
- Author: David Larsson
- Date: 04/20/05
- Info: http
- Score:  (3.25 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sr-611.html
---

```# SR version of 99 bottles of beer
# by David Larsson 
# mailto:f92dala@dd.chalmers.se    http://www.dd.chalmers.se/~f92dala
#
# This version demonstrates some of SR's concurrent aspects, simulating
# the (common?) situation where 99 people drink one bottle of beer each
# simultaneously, while singing exactly one verse of the song.
#
resource main()
    op sing_it(int; string[120])

    # Create 99 processes (or, rather, threads)
    # for the verses in the song
    process swing_it(bottle := 1 to 99)
        var bottle1_str, bottle2_str : string[15];

        if bottle > 2 ->
            bottle1_str := string(bottle) || " bottles";
            bottle2_str := string(bottle-1) || " bottles";
        [] bottle = 2 ->
            bottle1_str := "2 bottles";
            bottle2_str := "1 bottle";
        [] else ->
            bottle1_str := "1 bottle";
            bottle2_str := "No more bottles";
        fi
        
        # Send the verse back to the main thread
        send sing_it(bottle, 
                  bottle1_str || " of beer on the wall, "
                   || bottle1_str || " of beer...\n"  
                   || "Take one down and pass it around\n" 
                   || bottle2_str || " of beer on the wall\n");
    end swing_it

    # Make sure the verses get printed in the right order
    fa expected := 99 downto 1 ->
        in sing_it(bottle, verse) st bottle = expected ->
            write(verse);
        ni
    af

    # I guess the bartender sings this one
    write("Go to the store, buy some more!");
    write("99 bottles of beer on the wall");
end main```