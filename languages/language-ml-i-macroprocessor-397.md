
## Language ML/I Macroprocessor ##
---
- Author: Parzival Herzog
- Date: 04/20/05
- Info: http
- Score:  (3.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ml-i-macroprocessor-397.html
---

```MCSKIP - WITH - NL
-- (The line above defines comment syntax: it must preceed -- comments.)
--
-- 99 Bottles of beer in ML/I by Parzival Herzog.
-- ML/I is P.J. Brown's famous general purpose macro processor
-- designed in 1967.
-- See http://members.shaw.ca/parz/ML1.html
--
-- Incantations:
MCSKIP MT, {}
MCSKIP T, ""
MCINS ?.
--
-- Main macro: "99 bottles of beer"
MCDEF "99 WITHS bottles WITHS of WITHS beer" AS {MCSET T1=99
?L1.Say ?T1. bottles of beer on the wall, Say ?T1. bottles of beer,
take one down pass it around,
Say ?T1-1. bottles of beer.
MCSET T1=T1-1
MCGO L1 IF T1 GE 1
}
--
-- Pluralizing macro: "Say n bottles of beer"
MCDEF "Say bottles WITHS of WITHS beer" AS --
{MCGO L??A1.+10. IF 2 GR ?A1.
?A1." bottles"MCGO L1
?L10."No more bottles"MCGO L1
?L11."One more bottle"?L1." of beer"}
--
-- "99 bottles of beer" is replaced by the specified song:
99 bottles of beer```