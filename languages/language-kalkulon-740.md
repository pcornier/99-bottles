
## Language Kalkulon ##
---
- Author: Juergen Holetzeck
- Date: 06/07/05
- Info: http
- Score:  (3.00 in 19 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-kalkulon-740.html
---

```/* Kalkulon version of 99 Bottles of beer      */
/* Juergen Holetzeck                           */
/* http://www.kalkulon.de                      */
/*                                             */
/* How to run:                                 */
/* save as bottles.k                           */
/* run  Kalkulon.exe                           */
/* type Load("bottles.k")                      */
/* type bottles(99)                            */

bottles(n)=
(
    s1 = "bottle(s) of beer on the wall",
    s2 = "bottle(s) of beer",
    s3 = "Take one down, pass it around,",
    f1 = "%i %s,",
    f2 = "%i %s.",
    
    bottles = n,
    while ( bottles > 0; 
        PrintLn(Sprintf(f1, {bottles, s1})),
        PrintLn(Sprintf(f2, {bottles, s2})),
        PrintLn(s3),
        PrintLn(Sprintf(f2, {--bottles, s1}))
    )
);```