
## Language Quest ASL ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.95 in 20 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-quest-asl-478.html
---

```define game <99 Bottles of Beer>
   asl-version <300>
   game author <Alex Warren>
   start <room>
end define

define room <room>
   description {
      for <bottles; 99; 1; -1> {
         msg <%bottles% $name(%bottles%)$ of beer on the wall, %bottles% $name(%bottles%)$ of
beer,>
         msg <Take one down and pass it around,>
	 set numeric <remaining; %bottles% - 1>
	 msg <%remaining% $name(%remaining%)$ of beer on the wall.|n>
      }
   }
end define

define function <name>
   if ( $parameter(1)$ = 1 ) then return <bottle> else return <bottles>
end define```