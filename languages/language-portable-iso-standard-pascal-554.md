
## Language Portable ISO Standard Pascal ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.00 in 11 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-portable-iso-standard-pascal-554.html
---

```{ Portable ISO Standard Pascal version of 99 Bottles of beer (Bottles.pas) }
{ See http://www.programmersheaven.com/zone24/cat351/4262.htm              }
{ Philipp Winterberg, http://www.winterbergs.de                            } 

program Bottles(output); var b: integer; {$c+,t+} 
begin
  for b:= 99 downto 1 do 
    writeln(b, ' bottle(s) of beer on the wall,', #13#10, 
            b, ' bottle(s) of beer.', #13#10,  
            'Take one down, pass it around,', #13#10, 
            (b-1), ' bottle(s) of beer on the wall.', #13#10)
end.```