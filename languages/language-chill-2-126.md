
## Language CHILL/2 ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.80 in 5 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-chill-2-126.html
---

```io: MODULE
/*
  The CHILL/2 compiler I use has no VARYING strings.
  To tackle this inconvenience, I declare a record with variants..
*/

  GRANT String, nul, OutS, OutL, OutC, OutI;

  NEWMODE String = STRUCT(CASE OF
    :s9  CHAR(9),
    :s11 CHAR(11),
    :s13 CHAR(13),
    :s16 CHAR(16),
    :s31 CHAR(31)
    ESAC
  );

  SYN nul = C'00';

  OutS: PROC(s String LOC); END OutS;
  OutL: PROC(); END OutL;
  OutC: PROC(c CHAR); END OutC;
  OutI: PROC(i INT); END OutI;

END io;

beer: MODULE /* jr_31jan97 */

  SEIZE String, nul, OutC, OutS, OutI, OutL <> USING io;

  bottles: PROC(n INT, wall BOOL, end CHAR);
    DCL s String;
    IF n>1 THEN OutI(n); s.s9:=' Bottles'//nul;
    ELSIF n=1 THEN s.s11:='one Bottle'//nul;
    ELSIF n=0 THEN s.s16:='no more Bottles'//nul;
    FI;
    OutS(s); s.s9:=' of Beer'//nul; OutS(s);
    IF wall THEN s.s13:=' on the Wall'//nul; OutS(s); FI;
    OutC(end); OutL();
  END bottles;

  singTheSong: PROC();
    DCL i INT, s String;
    DO FOR i:=99 DOWN TO 1;
      bottles(i, TRUE, ',');
      bottles(i, FALSE, '.');
      s.s31:='Take one down, pass it around,'//nul; OutS(s); OutL();
      bottles(i-1, TRUE, '.');
    OD;
  END singTheSong;

END beer;```