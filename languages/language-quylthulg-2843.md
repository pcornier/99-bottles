
## Language Quylthulg ##
---
- Author: Marinus Oosters
- Date: 03/06/12
- Info: http
- Score:  (3.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-quylthulg-2843.html
---

```{*[}][
   99 bottles of beer in Quylthulg
   written by Marinus Oosters.

   No, it's not elegant. There has to be a better way of making a counter.
   I'm sure it involves macros somehow.

   The interpreter is a Haskell function. 
      (see http://catseye.tc/projects/quylthulg/)

   I have tacked a function onto it that reads a file and then runs that, 
   so if you trust me:
      get http://83.86.14.141/QlzqqlzuupCmd.hs
      compile it with ghc
      invoke it on the command line with this file as the argument.

   If you don't trust me:
      get the original
      get this code into a Haskell string somehow (whitespace is optional 
          except in strings)
      have your Haskell compiler/interpreter invoke the "run" function
          with this code in a string as an argument

]}

&&&~$99 bottles of beer on the wall,\n$&
&~$99 bottles of beer,\n$&
 ~$Take one down and pass it around,\n$
&&&
foreach $num$ = ;;[~$98$, ~$97$, ~$96$, ~$95$, ~$94$, ~$93$, ~$92$, ~$91$, ~$90$] ;
  foreach $hi$ = [~$8$, ~$7$, ~$6$, ~$5$, ~$4$, ~$3$, ~$2$, ~$1$] 
  with $hia$ = null be
    ;$hia$;    
    foreach $lo$ = [~$9$, ~$8$, ~$7$, ~$6$, ~$5$, ~$4$, ~$3$, ~$2$, ~$1$, ~$0$] 
    with $loa$ = null be
      ;$loa$; ,&$hi$&$lo$&,null, ;  
    else be null;
  else be null;
;[~$9$, ~$8$, ~$7$, ~$6$, ~$5$, ~$4$, ~$3$, ~$2$];
with $v$ = ~$$ be
  & $v$ &
  & $num$ &
  & ~$ bottles of beer on the wall.\n\n$ &
  & $num$ & 
  & ~$ bottles of beer on the wall,\n$ &
  & $num$ & ~$ bottles of beer,\nTake one down and pass it around,\n$ &
  &&&&&  
else be ~$$ &&
&~$1 bottle of beer on the wall.\n\n$&
&~$1 bottle of beer on the wall,\n1 bottle of beer,\n$&
&~$Take it down and pass it around,\n$&
&~$No more bottles of beer on the wall.\n\n$&
&~$No more bottles of beer on the wall,\n$&
&~$No more bottles of beer,\n$&
&~$Go to the store and buy some more,\n$&
 ~$99 bottles of beer on the wall.\n\n$
&&&&&&&&```