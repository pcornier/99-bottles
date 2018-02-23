
## Language RPAL ##
---
- Author: Manuel E. Bermudez
- Date: 05/29/05
- Info: n/a
- Score:  (3.01 in 103 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-rpal-703.html
---

```   let s1 f = 'ottle' @Conc (f eq 1 -> 's' | '')
                      @Conc ' of beer'

        // s1 returns one of two strings, depending on f:
        //   f=1: 'ottles of beer'
        //   f=*: 'ottle of beer'    (*) anything but

in let s2 = ' on the wall'

in let s3 f1 f2 = (f1 eq 0 -> ' B' | ' b')
                  @Conc s1 f2 @Conc s2
                  @Conc (f1 eq 0 -> ', ' | '.\n\n')

       // s3 returns one of four strings, depending on f1, f2:
       //    f1=0, f2=0: 'Bottle of beer on the wall, '
       //    f1=0, f2=1: 'Bottles of beer on the wall, '
       //    f1=*, f2=0: 'bottle of beer on the wall.\n\n '
       //    f1=*, f2=*: 'bottles of beer on the wall.\n\n '

in let s4 = 'Take one down and pass it around, '
in let s5 = 'Go to the store and buy some more...99 '
in let s6 = 'No more '
in
let rec bottles n = n eq 0 ->                     // LAST LINE (case n=0):
     s6 @Conc 'b'                                 // 'No more b'
        @Conc s1 0                                // 'ottle of beer'
        @Conc s2                                  // ' on the wall'
        @Conc '. '                                // '.'
        @Conc s6                                  // 'No more'
        @Conc 'b'                                 // 'b'
        @Conc s1 1                                // 'ottles of beer'
        @Conc '...\n'                             // '...\n'
        @Conc s5                                  // 'Go to the store ... 99'
        @Conc 'b'                                 // 'b'
        @Conc s1 1                                // 'ottles of beer'
        @Conc '.'                                 // '.'
                                                  // LINE n: 0 <= n <= 99
     |  ItoS n                                    // n
        @Conc s3 0 (n eq 1 -> 0 | 1)              // 'Bottle(s) of beer on the wall,'
        @Conc ItoS n                              // n
        @Conc ' b'                                // b
        @Conc s1 (n eq 1 -> 0 | 1)                // ottle(s) of beer
        @Conc '.\n'                               // .\n
        @Conc s4                                  // Take one down ... ,
        @Conc (n eq 1 -> 'no more' | ItoS (n-1))  // No more (or n-1)
        @Conc s3 1 (n eq 1 -> 1 | n > 2 -> 1 | 0) // bottle(s) of beer on the wall.\n\n
        @Conc bottles (n-1)                       // RECURSIVE CALL
in
Print (bottles 99)```