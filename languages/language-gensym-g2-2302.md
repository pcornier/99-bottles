
## Language Gensym G2 ##
---
- Author: Andrea Liew
- Date: 01/26/10
- Info: http
- Score:  (3.00 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-gensym-g2-2302.html
---

```beer-bottles()
 
i:integer =99;
j:integer;
constant:integer =-1;
 
begin
for i=99 down to 1
    do
    j = (i+constant);
        if (i=1) then begin
            post"[i] bottle of beer on the wall";
            post" [i] bottle of beer";
            post" Take one down and pass it around ";
            post" No bottle of beer on the wall"; 
        end 
        else begin
            post"[i] bottles of beer on the wall";
            post" [i] bottles of beer";
            post" Take one down and pass it around ";
            if (i=2) then 
                post" [j] bottle of beer on the wall"
           else
                post" [j] bottles of beer on the wall"; 
           end
    end
end```