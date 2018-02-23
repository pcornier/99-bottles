
## Language Scheme ##
---
- Author: Gnomon
- Date: 04/18/08
- Info: n/a
- Score:  (2.95 in 19 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-scheme-1764.html
---

```;; Gnomon - on Thu Apr 17 23:54:52 EDT 2008
;; sha1sum of lastname, firstname, newline:
;; 3952893c66ffbe071f266caa04b25161c1da30a1
;; Because I wanted a version that would Do
;; The Right Thing with capitals and plural
;; cases, and because mixing logic, display
;; and generation code does not satisfy me.

(define (iota n)
  (let loop ((l '()) (i 0))
    (if (> i n)
        l
        (loop (cons i l) (+ i 1)))))
;; See SRFI-1 for a better version of this;
;; my function is backward in several ways.
;; It can also be argued that SRFI-42 could
;; allow an implementation that consed up a
;; bit less temporary garbage. If SRFI-1 is
;; out, though, SRFI-42 is way out. Basics.

(define (plural? n . up)
  (let ((.. string-append)
        (num (number->string n))
        (bot " bottle")
        (ltr (if (null? up) "n" "N")))
    (case n ((0) (.. ltr "o more" bot "s"))
            ((1) (.. num bot))
            (else (.. num bot "s"))
;; PLURAL? has to merge the logic for cases
;; when the string will be used at the head
;; of a sentence, requiring a capital; when
;; only one bottle is left, which needs the
;; singular form; and when none are left at
;; all, which requires a special case. It's
;; lucky that not all combinations of these
;; cases can be reached, allowing us to use
;; only three of the possible six branches.

(define (verse n)
  (let ((.. string-append)
        (top (plural? n 1))
        (mid (plural? n))
        (nxt (plural? (if (= n 0)
                          99
                          (- n 1))))
        (beer " of beer")
        (wall " on the wall")
        (actn (if (= n 0)
                  "Go to the store and buy some more, "
                  "Take one down and pass it around, ")))
    `(,(.. top beer wall ", " mid beer ".")
       .  ,(.. actn nxt  beer wall "."))))
;; VERSE conses a pair where the CAR stores
;; the first line of the verse, and the CDR
;; the second. There is no sense in using a
;; proper list; we would just waste the end
;; of it anyways. Also: yay quasiquotation!

(define (sing verse)
  (let ((n newline))
    (display (car verse)) (n)
    (display (cdr verse)) (n) (n)))
;; SING exploits the implicit BEGIN wrapped
;; around the body of a LET to DISPLAY both
;; lines of a verse in order. Also note the
;; pleasant symmetry of CAR and CDR that we
;; get to use because of our choice made up
;; above in VERSE to use a dotted pair as a
;; representation instead of a proper list.

(for-each sing (map verse (iota 99)))
;; MAP for effect, FOR-EACH for side effect```