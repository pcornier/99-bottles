
## Language IMP77 ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.92 in 12 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-imp77-327.html
---

```This is the language IMP77 which is a version of IMP from Edinburgh
University. (IMP is a somewhat modernised version of Atlas Autocode,
one of the earliest programming languages from the 50's)

Edinburgh had another language from the mid 70's called HAL (High-Level
Assembler) which was an assembler with high-level programming construct
support and advanced macros; generally programs in it looked more
like a programming language than an assembler.

There is a *different* language called IMP which is the one that
used to be used by the NSA.  They're not similar.



%begin;         ! This is the Edinburgh programming language IMP
  %routine beer me(%integer bottles)
    %string (255) glass = ""
    ! avoiding use of standard library int->str conversion for no good reason.
    %if bottles > 9 %then glass = to string(bottles//10+'0')
    glass <- glass.to string(bottles - bottles // 10 * 10 + '0')
    glass = "No more" %if glass = "0" {string compare}
    glass <- glass." bottle"
    glass <- glass."s" %if bottles \= 1
    glass <- glass." of beer"
    print string(glass." on the wall".snl)
    %return %if bottles = 0
    print string(glass.snl)
    print string("Take one down, pass it around,".snl)
    beer me(bottles - 1)  {gratuitously recursive, but compiler will fix it!}
  %end
  %cycle
    beer me(99)
    print string("Go to the store and buy some more,".snl)
  %repeat
%end %of %programme```