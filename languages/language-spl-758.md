
## Language SPL ##
---
- Author: Stan Sieler
- Date: 06/22/05
- Info: n/a
- Score:  (2.83 in 86 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-spl-758.html
---

```! beerspl.source 05/06/21    cm

$control uslinit, adr, errors = 5, main = beerspl

      ! magic incancation to set "x9" flag to "ON" for
      ! SPLash!, and "OFF" for SPL...

$set x9 = off                 ! OFF = SPL/V, ON = SPLash!
$if x9 = on or xsplash        ! SPL/V ignores the "OR XSPLASH"
$   set x9 = on               ! Yes, is SPLash!
$if

begin

<<------------------------------------------------------------
Purpose: to print all verses of the "99 bottles of beer" song,
Submitted to: http://www.99-bottles-of-beer.net    2005-06-21

Language: SPL/V and/or SPLash!

Compiles in both SPL/V (Classic HP 3000 or "compatibility mode"
on PA-RISC HP 3000) and in SPLash! ("native mode" on PA-RISC HP 3000).

Based more on
   http://en.wikipedia.org/wiki/99_Bottles_of_Beer
than on the text at:
   http://www.99-bottles-of-beer.net/lyrics.html

Usage:

   1) run beerspl

   2) run beerspl, help

   3) run beerspl, version

------------------------------------------------------------
History (latest first):

HIST 20050621 first version
------------------------------------------------------------>>

define
   author'        = "Stan Sieler (sieler@allegro.com)" #,
   version'       = "BeerSPL 20050621" #;

$if x9 = on
define plabel = double #;
$if x9 = off
define plabel = integer #;
$if               ! x9 = on/off

plabel
   old'plabel;                ! result from xcontrap

integer
   bottles,                   ! 99 to 0
   outlen         := 0;

logical array
   outbuf         (0 : 66);

byte array
   outbuf'        (*) = outbuf;

entry                         ! alternate entry points
   help,
   version;

intrinsic                     ! OS provided library routines:
   ascii,                     ! similar to Unix: itoa ()
   print,                     ! similar to Unix: printf ("%s\n")
   terminate,                 ! similar to Unix: exit ()
   xcontrap;

define
   say            = outlen := outlen + move outbuf' (outlen) := #;

<<---------------------- forward routines --------------------->>
Procedure say'num (n);
         value   n;
         integer n;
      option forward;

Procedure send;
      option forward;

<<*************************************************************>>
procedure cy'handler;
$if x9 = on
      option native, nocc;
$if

   begin

   terminate;                 ! user hit control-Y
                              ! (MPE's equivalent of control-C)

   end <<cy'handler proc>>;
<<*************************************************************>>
procedure say'bottles (bottles, want'capitalize);
         value   bottles, want'capitalize;
         integer bottles;
         logical want'capitalize;

   !            output:
   !   bottles    want'capitalize    not want'capitalize
   !   -------    ---------------    -------------------
   !
   !      0       "No bottles"       "no bottles"
   !
   !      1       "1 Bottle"         "1 bottle"
   !
   !     > 1      "# Bottle"         "# bottle"
   !
   !     < 0      "-" and then treated as abs(bottles)
   !              (we won't be given a negative value)
   !
   ! (where "#" is the numeric value, without commas)

   begin

   if want'capitalize then
      begin
      if bottles = 0 then
         say "No bottle"

      else
         begin
         say'num (bottles);
         say " Bottle";
         end;
      end

   else
      begin
      if bottles = 0 then
         say "no"
      else
         say'num (bottles);

      say " bottle";
      end;

   if bottles <> 1 then
      say "s";

   end <<say'num proc>>;
<<*************************************************************>>
procedure say'num (n);
         value   n;
         integer n;

   begin

   outlen := outlen + ascii (n, 10, outbuf' (outlen));

   end <<say'num proc>>;
<<*************************************************************>>
procedure send;

   begin

   print (outbuf, -outlen, 0);

   outlen := 0;

   end <<send proc>>;
<<*************************************************************>>
procedure usage;

   begin

   define
      z           = ; send; say #;     ! ugly, but convenient

   say " "
   z "Beerspl ... A program to print the lyrics to the song"
   z "            ""99 Bottles of Beer on the Wall"""
   z " "
   z "Usage:"
   z "   run beerspl          ... prints song lyrics (to $stdlist)"
   z "   run beerspl, help    ... produce this help text"
   z "   run beerspl, version ... display version/author"
   ;
   send;

   end <<usage proc>>;
<<*************************************************************>>

if false then
   begin
help:
   usage;

   terminate;
   end;

if false then
   begin
version:
   say version';
   send;

   say "Author: ";
   say author';
   send;

   TERMINATE;
   end;

      ! setup control-Y handler ...
xcontrap (@cy'handler, old'plabel);

      ! Note: control-Y will now terminate our program

for bottles := 99 step -1 until 0 do
   begin
         ! emit: "98 Bottles of beer on the wall, 98 bottles of beer."
         ! (with appropriate handling of 0 and 1)

   say'bottles (bottles, true);
   say " of beer on the wall, ";
   say'bottles (bottles, false);
   say " of beer.";
   send;

   if bottles = 0 then
      begin
      say "Go to the store and buy some more ...";
                  ! "..." not in Wikipedia, but obvious from context
                  ! singing style, and grammar
      send;
      say'bottles (99, false);
      say " of beer on the wall!";
      send;
      end

   else
      begin
      if bottles = 1 then
         say "Take it"
      else
         say "Take one";
      say " down and pass it around, ";
      say'bottles (bottles - 1, false);
      say " of beer on the wall!";
      send;

      send;                   ! blank line
      end;
   end;                       ! for bottles

end.```