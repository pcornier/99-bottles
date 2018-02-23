
## Language Leda ##
---
- Author: Arion Lei
- Date: 04/20/05
- Info: http
- Score:  (2.92 in 13 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-leda-355.html
---

```Leda is a multiparadigm programming language designed by Timothy 
A. Budd. It supports imperative, object-oriented, functional and 
logic programming paradigms. 
<a href=http://www.cs.orst.edu/~budd/vita/ledatoc.htm>Click here</a> 
for Information and an interpreter.

{ 99 bottles of beer, Leda version  }
{ By Arion Lei (philipl@cs.ust.hk)  }

include "std.led";

const
  verse1 := " bottles of beer on the wall,\n";
  verse2 := " bottles of beer.  Take one down, pass it around,\n";
  verse3 := " bottles of beer on the wall.\n";
  verse4 := "No more bottles of beer on the wall, no more bottles of beer.\n";
  verse5 := "Go to the store and buy some more... 99 bottles of beer.\n\n";

{ ========== IMPERATIVE PROGRAMMING =========== }

function proc_Beer (bottleTotal : integer);
var bottleLeft : integer;
begin
  bottleLeft := bottleTotal;
  while bottleLeft>0 do begin
    print(bottleLeft);  print(verse1);
    print(bottleLeft);  print(verse2);
    bottleLeft := bottleLeft - 1;
    if (bottleLeft>0) then begin
      print(bottleLeft);  print(verse3);
    end;
  end;
  print(verse4);
  print(verse5);
end; { proc_Beer }


{ ========== OBJECT-ORIENTED PROGRAMMING =========== }

class Beers;
var
  bottleLeft : integer;

  function more () -> boolean;
  begin
    return bottleLeft > 0;
  end;

  function consume1 ();
  begin
    print(bottleLeft);  print(verse1);
    print(bottleLeft);  print(verse2);
    bottleLeft := bottleLeft - 1;
    if (bottleLeft>0) then begin
      print(bottleLeft);  print(verse3);
    end else begin
      print(verse4);
      print(verse5);
    end;
  end;
end; { class Beers }

function obj_Beer (bottleTotal : integer);
var obeer : Beers;
begin
  obeer := Beers(bottleTotal);
  while (obeer.more()) do obeer.consume1();
end; { obj_Beer }


{ ========== FUNCTIONAL PROGRAMMING =========== }

function func_Beer (num : integer) -> function();
begin
  return function ();
    begin
      print(num);  print(verse1);
      print(num);  print(verse2);
      if num>1 then begin
        print(num-1);  print(verse3);
        func_Beer(num-1)();
      end else begin
        print(verse4);
        print(verse5);
      end;
    end;
end; { func_Beer }


{ ========== LOGIC PROGRAMMING =========== }

function log_Beer (bottleTotal : integer);

  function pickBottle (byRef left : integer, total : integer)->relation;
  begin
    if total = 0 then 
      return false
    else 
      return left <- total | pickBottle(left, total-1);
  end;
  
  function consume (i : integer)->relation;
  begin
    print(i);  print(verse1);
    print(i);  print(verse2);
    if i>1 then begin
      print(i-1); print(verse3);
    end else begin
      print(verse4);
      print(verse5);
    end;
    return true;
  end;

var i : integer;
begin
  for pickBottle(i, bottleTotal) & consume(i) do begin end;
end; { log_Beer }


{ ---------- MAIN PROGRAM ---------- }

var bottleTotal : integer;

begin
  bottleTotal := 99;
  proc_Beer (bottleTotal);
  obj_Beer (bottleTotal);
  func_Beer(bottleTotal)();
  log_Beer(bottleTotal);
end;```