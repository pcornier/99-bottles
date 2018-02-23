
## Language lmn ##
---
- Author: Peri Hankey
- Date: 10/12/05
- Info: http
- Score:  (3.02 in 107 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-lmn-914.html
---

```----
99bottles.lmn: (C) Copyright 2005 Peri Hankey (mpah@users.sourceforge.net). This source text is
published under the terms of the Gnu General Program License. It comes with absolutely no warranty.

These are rules in the ''lmn'' language, which is the metalanguage of the
[http://languagemachine.sourceforge.net language machine] - a wide spectrum toolkit for language and
grammar, a machine that 'does language and grammar'. The ''language machine'' is published as free
software under the Gnu GPL, and for a full account you should look at the
[http://languagemachine.sourceforge.net website] where there is a very useful diagram -
[http://languagemachine.sourceforge.net/picturebook.html the lm-diagram] - which shows you what
happens in a machine that applies unrestricted grammatical rewriting rules.

----
== introduction ==
This is a version of the song '99 bottles of beer' implemented as an ''lmn'' ruleset. Recursion is
used for repetition, using ''thing :N'' as the pattern that triggers each verse. There are rules for
''thing'' to deal with the cases 2, 1, and 0, each of which needs special treatment. The ''sync''
trick is used to ensure that right-side nesting stays within bounds. This version is rather
profligate in its use of variable bindings, and would need to be rethought for large values of N.

== the notation ==
Actual code is contained on lines that start with at least one space - anything else is treated as
annotation. This is the convention used in the [http://www.wikipedia.org wikipedia] for preformatted
text, and a subset of the wikimedia markup can be used so that web pages can be generated directly
from the source text - as you can see [http://languagemachine.sourceforge.net/99bottles.html here].

The metalanguage is used to write rules to be applied by an engine. The application of a rule
involves a recognition phase and a subsitution phase. Each phase can produce zero ore more symbols.
Regognition phases can be nested within enclosing recognition phases, and subsitution phases can be
nested within enclosing recognition phases. For a full account you should look at the
[http://languagemachine.sourceforge.net website].

== the framework ==
The rules are placed in a grammar called ''bottles''. The first rule to be tried is the rule that
matches ''start'' and promises to subsitute ''eor'' which is the initial goal symbol. In this case
the first rule starts the song by providing the ''first thing''.

  .bottles()
    start var N = 99; <- eof - first :N :"s" thing :N song eof;
    first :A :T song  <- eof - ;
    
    - verse eom       <- song -;
    
    - out             <- eom - ;
    
== the words ==
    sp                <- eom - ' ' ;
    cm                <- eom - ', ';
    
    what :S           <- eom - "bottle" S sp "of " "beer";
    where             <- eom - "on " "the " "wall";
    
    a :N :S           <- eom - N  sp what :S sp where cm N sp what :S '.\n';
    b :N :S           <- eom - "Take " "one " "down " "and " " pass " "it " "around"     cm  N  sp
what :S sp where '.\n\n';
    c :N :S           <- eom - "Go " "to " "the " "store " "and " "buy " "some " "more"  cm  N  sp
what :S sp where '.\n\n'; 

== the pattern ==
Each occurrence of ''thing'' triggers output of a verse. All except the last produce another
''thing'' to generate the next verse. Each matches ''sync'' so as to force right-side suibstitution
nesting back to exit to the point where it produces a symbol. But the next thing is the subsitutied
in front of that symbol. The ''sync'' rule simple produces the symbol ''sync'' on demand - it does
nothing else. But as a top-down something-from-nothing rule it does force substitution phases to
exit.

    thing :N sync     <- verse a :N         :"s" b :(N-1)     :"s" eom thing :(N-1);
    thing :1 sync     <- verse a :1         :""  b :"no more" :"s" eom thing :0;
    thing :2 sync     <- verse a :2         :"s" b :1         :""  eom thing :1;
    thing :0 sync     <- verse a :"No more" :"s" c :A         :T   eom ;
    -                 <- sync;```