
## Language Trac ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.50 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-trac-459.html
---

```#(#*( TRAC version of 99 bottles of beer.                            ))
#(#*( written by Akira KIDA, SDI00379@niftyserve.or.jp               ))
#(#*(                                                                ))
#(#*( To run this, save the entire script as `beer.trac', and then   ))
#(#*( type three lines in order.                                     ))
#(#*(                                                                ))
#(#*(    #(ld,beer.trac)                                             ))
#(#*(    #(cl,beer,99)                                               ))
#(#*(    '                                                           ))
#(#*(                                                                ))
#(ds,bottle,(#(gr,1,B,(No more bottles),(#(gr,2,B,(B bottle),(B bottles))))))
#(ss,bottle,B)
#(ds,beer,(#(gr,1,B,,
(#(ps,#(cl,bottle,B) of beer on the wall(,) #(cl,bottle,B) of beer.(
)Take one down(,) pass it around.(
)#(cl,bottle,##(-,B,1)) of beer on the wall.(
)(
))#(cl,beer,##(-,B,1))))))
#(ss,beer,B)```