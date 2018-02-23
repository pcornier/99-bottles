
## Language CLOS ##
---
- Author: Christopher Oliver
- Date: 04/20/05
- Info: n/a
- Score:  (2.94 in 17 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-clos-132.html
---

```;;;; 99 bottles of beer as a CLOS program.
;;;; Author: Christopher Oliver (oliver@traverse.com)
;;;; Aug 10, 1997

(defconstant *bottles-at-store* 500)
(defconstant *bottles-at-gathering* 99)

(defclass bottle-of-beer () ())

(defclass beer-holder () ((inventory :accessor inventory :initform nil)))

(defclass wall (beer-holder)  ((on-hand :accessor on-hand :initform 0)))

(defclass store (beer-holder) ())

(defmethod consume ((bottle bottle-of-beer))
  (format t "pass it around.~%"))

(defmethod add-to-inventory ((holder beer-holder) (bottle bottle-of-beer))
  (push bottle (inventory holder)))

(defmethod remove-from-inventory ((holder beer-holder))
  (pop (inventory holder)))

(defmethod add-to-inventory :after ((wall wall) (bottle bottle-of-beer))
  (incf (on-hand wall)))

(defmethod remove-from-inventory ((wall wall))
  (let ((bottle (call-next-method)))
    (when bottle
      (format t "~&Take ~:[one~;it~] down, and " (= (on-hand wall) 1))
      (decf (on-hand wall)))
    bottle))

(defmethod count-bottles ((wall wall) &key (long-phrase nil))
  (let ((on-hand (on-hand wall)))
    (format t "~&~:[~@(~R~)~;No more~*~] bottle~p of beer~@[ on the wall~]."
	    (zerop on-hand) on-hand on-hand long-phrase)))

(defmethod remove-from-inventory ((store store))
  (let ((bottle (call-next-method)))
    (if bottle
	(unless (consp (inventory store))
	  (format t "~&(You've exhausted my supply!)~%"))
        (format t "~&(I have nothing left to sell you!)~%"))
    bottle))

(defmethod replenish ((wall wall) (store store))
  (format t "~&Go to the store, and buy some more.")
  (dotimes (number-bought 99)
    (let ((bottle (remove-from-inventory store)))
      (cond (bottle	            (add-to-inventory wall bottle))
	    ((plusp number-bought)  (return-from replenish))
	    (t	                    (error "The end is at hand!"))))))

(defun ninety-nine ()       
  (let ((store (make-instance 'store))
	(wall (make-instance 'wall)))
    (dotimes (ix *bottles-at-store*)
      (add-to-inventory store (make-instance 'bottle-of-beer)))
    (dotimes (ix *bottles-at-gathering*)
      (add-to-inventory wall (make-instance 'bottle-of-beer)))
    (loop
      (progn
	(count-bottles wall :long-phrase t)
	(count-bottles wall)
	(let ((this-bottle (remove-from-inventory wall)))
	  (if this-bottle
	      (consume this-bottle)
	    (replenish wall store)))
	(count-bottles wall :long-phrase t)
	(format t "~&~%")))))```