
## Language PL/SQL ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 13 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-pl-sql-550.html
---

```PL/SQL is a programming language that resides in an Oracle database. 
As  PL/SQL has no standard input or output this version is written 
to be run from the SQLPlus command line using an anonymous PL/SQL block.

/* Start of code */
set serveroutput on

DECLARE
        counter         NUMBER;
BEGIN
        dbms_output.enable;

        FOR counter IN REVERSE 1..99 LOOP
                dbms_output.put_line(counter || ' bottles of beer on the wall,');
                dbms_output.put_line(counter || ' bottles of beer.');
                dbms_output.put_line('Take one down, pass it around,');
                
                IF (counter != 1) THEN
                        dbms_output.put_line(counter - 1 || ' bottles of beer on the wall.');
                ELSE
                        dbms_output.put_line('No more beers.');
                END IF;
        END LOOP;
END;
/
/* End of code (The "/" in the line above is very important) */```