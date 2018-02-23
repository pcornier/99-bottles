
## Language PIL ##
---
- Author: evil_deceiver
- Date: 04/20/05
- Info: http
- Score:  (2.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-pil-545.html
---

```PIL is the scripting language for the Pirch IRC client.  Pirch's website
is supposed to be located at http://www.pirchat.com/ , but I haven't been
able to connect to it in a while.  Seems like the program is no longer
maintained.  You can probably find information about it at
http://www.pirch.com/ .


{
99bb.pil by evil_deceiver
  [ http://justice.loyola.edu/~mcoffey/ ]
function: sings "99 Bottles of Beer", starting at a 
  user-specified number of bottles, to the channel whose 
  window is active.
bugs: won't do much of anything if the active window is a 
  server window.
warnings: most networks will disconnect you for flooding like 
  this.  make sure your outgoing flood control is set high.
to run: load PIL (in Aliases) as "[99bb]", then type 
  "/runscript [99bb]" followed by the number of bottles you 
  want to start with.
}

btlcount:=$1;
command('/me sings... o/`');
command(btlcount,' bottles of beer on the wall');
command(btlcount,' bottles of beer');
command('Take one down, pass it around');
while btlcount>2 do begin
	btlcount:=btlcount-1;
	command(btlcount,' bottles of beer on the wall!');
	command('o/` ~~ o/` ~~ o/` ~~ o/` ~~ o/`');
	command(btlcount,' bottles of beer on the wall');
	command(btlcount,' bottles of beer');
	command('Take one down, pass it around');
end;
btlcount:=btlcount-1;
command(btlcount,' bottle of beer on the wall!');
command('o/` ~~ o/` ~~ o/` ~~ o/` ~~ o/`');
command(btlcount,' bottle of beer on the wall');
command(btlcount,' bottle of beer');
command('Take one down, pass it around');
command('You',char(39),'ve finally drunk all the beer on the wall!');
command('/me takes a bow.');```