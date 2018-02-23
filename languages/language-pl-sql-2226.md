
## Language PL/SQL ##
---
- Author: Tysher
- Date: 11/13/09
- Info: n/a
- Score:  (2.50 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-pl-sql-2226.html
---

```DECLARE
  i NUMBER := 100;
  FUNCTION p(n NUMBER) RETURN VARCHAR2 IS
  BEGIN
    RETURN CASE WHEN n=1 THEN 'no more' 
                WHEN n=0 THEN to_char(99) 
                ELSE to_char(n-1) END || ' bottle' || 
          (CASE WHEN n=2 THEN '' 
                ELSE 's' END) || ' of beer';
  END p;
BEGIN
  LOOP
    EXIT WHEN i = 0;
    dbms_output.put_line(UPPER(substr(p(i),1,1)) || substr(p(i),2) || ' on the wall, ' || 
                         p(i) || '.');
    i := i-1;
    dbms_output.put_line(CASE WHEN i=0 THEN 'Go to the store and buy some more, ' 
                              ELSE 'Take one down and pass it around, ' END || 
                         p(i) || ' on the wall.');
    dbms_output.new_line();
  END LOOP;
END;```