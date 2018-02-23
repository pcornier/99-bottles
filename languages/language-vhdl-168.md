
## Language VHDL ##
---
- Author: F. J. Ludicky
- Date: 04/20/05
- Info: n/a
- Score:  (3.02 in 152 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-vhdl-168.html
---

```--  This is the VHDL (ANSI/IEEE Std 1076 - 1993)
--  version of the beer song.
--  F. J. Ludicky, Sundstrand Aerospace

entity beer_song is
    port(bottles: out integer;
        words: out string(1 to 28);
        start_singing: in boolean);
end beer_song;

architecture silly of beer_song is
begin
    lets_sing: process
    begin
        wait on start_singing until start singing;
        for index_bottles in 99 downto 1 loop
                bottles <= index_bottles;
                words <= "bottles of beer on the wall,";
                wait for 5 sec;
                bottles <= index_bottles;
                words <= "bottles of beer,            ";
                wait for 5 sec;
                words <= "take one down,              ";
                wait for 5 sec;
                words <= "pass it around,             ";
                wait for 5 sec;
                bottles <= index_bottles - 1;
                words <= "bottles of beer on the wall."
                wait for 5 sec.
        end loop;
        assert false report "No more beer!" severity warning;
    end process lets_sing;
end silly;```