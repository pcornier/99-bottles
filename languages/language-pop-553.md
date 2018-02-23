
## Language Pop ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-pop-553.html
---

```define beer(n);

    define :inline PLURAL(N);
        (N==1 and nullstring or "s")
    enddefine;

    lvars i;
    for i from n by -1 to 1 do;
        nl(1);
        nprintf(PLURAL(i), i, '%P bottle%P of beer on the wall.');
        nprintf(PLURAL(i), i, '%P bottle%P of beer!');
        nprintf(i==1 and "it" or "one", 'Take %P down, pass it around.');
        if i>1 then
            nprintf(PLURAL(i-1), i-1, '%P more bottle%S of beer on the wall.');
        else
            npr('No more bottles of beer on the wall.');
        endif;
    endfor;

enddefine;

beer(100);```