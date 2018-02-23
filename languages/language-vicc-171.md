
## Language VICC ##
---
- Author: Juha Autero
- Date: 04/20/05
- Info: n/a
- Score:  (2.15 in 13 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-vicc-171.html
---

```// 99 Bottles of Beer in VICC = VICC's Intended for Compiler Courses
// (C) 1996 Juha Autero

DEFINE nl(tabify : Int) : Int
  IF tabify != 0 THEN
    WriteString("\n\t");
  ELSE
    WriteString("\n");
  END;
  RETURN 0;
END;

DEFINE beer(b : Int) : Int
  WriteInt(b);
  WriteString(" bottles of beer");
  RETURN 0;
END;

DEFINE Main() : Int
  DEFINE i : Int;
  i := 99;
  WHILE i >= 1 DO
    nl(1);
    beer(i);
    WriteString(" on the wall,");
    nl(1);
    beer(i);    
    WriteString(".");
    nl(1);
    WriteString("Take one down, pass it around");
    nl(1);
    beer(i - 1);
    WriteString(" on the wall.");
    nl(0);
    i := i - 1;
  DONE;
END;```