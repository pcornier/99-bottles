
## Language AutoLISP ##
---
- Author: Rob Cummings
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 32 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-autolisp-51.html
---

```;;99 Bottles of Beer on the Wall
;;AutoLISP version for use in darn near any version of Autodesk's AutoCAD 
;;Painfully written by Rob Cummings (rob@rocketship.com) 13-Jul-2001
;;Dammit, Jim!  I'm an architect, not a programmer!

;define command for use in a drawing
(defun c:99bob (/ bottles)

 ;set variables
 (setq bottles 99)
 (setq bobotw " bottles of beer on the wall!\n")
 (setq bob " bottles of beer!\n")
 (setq todpia "Take one down, pass it around...\n")
 
 ;flip from graphics screen to text screen so you
 ;can watch the text whiz by
 (textscr) 
 
 ;loop-dee-loop
 (while (>= bottles 1)
  (princ bottles)(princ bobotw)
  (princ bottles)(princ bob)
  (princ todpia)
  (setq bottles (1- bottles))
  (princ bottles)(princ bobotw)(princ "\n")
 )
 
 ;pop up alert window
 (alert "\nGo to the store to buy more!")(princ)

;end
)```