
## Language Lisp ##
---
- Author: jimka
- Date: 04/22/07
- Info: n/a
- Score:  (2.89 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-lisp-1465.html
---

```(defun bottles-of-bier (n)
  (case n
   (0
    '(No more bottles of beer on the wall no more bottles of beer.
	 Go to the store and buy some more 99 bottles of beer on the wall.))
   (1
    `(1 bottle of beer on the wall 1 bottle of beer.
	Take one down and pass it around no more bottles of beer on the wall.
	,@(bottles-of-bier 0)))
   (2
    `(2 bottles of beer on the wall 2 bottles of beer.
       Take one down and pass it around 1 bottle of beer on the wall.
       ,@(bottles-of-bier 1)))
   (t
    `(,n bottles of beer on the wall ,n bottles of beer.
	 Take one down and pass it around
	 ,(1- n) bottles of beer on the wall.
	 ,@(bottles-of-bier (1- n))))))```