
## Language b5 ##
---
- Author: Laurent Vogel
- Date: 04/20/05
- Info: http
- Score:  (3.00 in 3 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-b5-77.html
---

```///  b5 version of 99 bottles of beer
///  Laurent Vogel,  http://lvogel.free.fr
///  b5 url: http://sange.fi/~atehwa/b5/
///  run as: echo | b5 THIS_FILE

mac nl i => i<<<
>>>;;;
mac t i => <<<Take one down, pass it around>>>nl(i);;;
mac p n s c => n<<< bottle>>>s<<< of beer>>>nl(c);;;
mac w i => <<< on the wall>>>i;;;
mac a n => p(n)(s)(w(.))nl()p(n)(s)(w(,))p(n)(s)(.)t(,);;;
mac b n m => a(n<<<>>>m);;;
mac c n => b(n)(8)b(n)(7)b(n)(6)b(n)(5)b(n)(4)b(n)(3)b(n)(2);;;
mac d n => b(n)(9)c(n)b(n)(1)b(n)(0);;;
data
p(99)(s)(w(,))p(99)(s)(.)t(,)c(9)b(9)(1)b(9)(0)d(8)d(7)d(6)d(5)d(4)d(3)
d(2)d(1)c()p(1)()(w(,))nl()p(1)()(w(,))p(1)()(.)t(,)p(No
more)(s)(w(.));;;```