
## Language XLISP-PLUS ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.44 in 9 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-xlisp-plus-71.html
---

``` ;;; XLISP-PLUS version of 99 Bottles of beer (Bottles.lsp)
;;; http://www.aracnet.com/~tomalmy/xlisp.html
;;; Philipp Winterberg, http://www.winterbergs.de

(setq b 99)
(loop
   (format t "~D bottle(s) of beer on the wall,~%" b)
   (format t "~D bottle(s) of beer.~%" b)
   (format t "Take one down, pass it around,~%")
   (setq b (- b 1))
   (format t "~D bottle(s) of beer on the wall.~%~%" b)
   (when (= b 0) (return))
)```