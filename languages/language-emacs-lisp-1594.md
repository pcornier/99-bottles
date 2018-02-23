
## Language Emacs LISP ##
---
- Author: Neil Roberts
- Date: 09/11/07
- Info: http
- Score:  (3.00 in 10 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-emacs-lisp-1594.html
---

```(defun beer-text (num &optional capitalise)
  "Returns a phrase for the given number of bottles of beer.
The phrase is colour-coded red if there are no bottles left or
blue otherwise. If the optional argument CAPITALISE is non-nil,
the first letter of the phrase is capitalised."
  (propertize (cond ((= num 0) (concat (if capitalise "N" "n")
				       "o more bottles of beer"))
		    ((= num 1) "1 bottle of beer")
		    (t         (format "%i bottles of beer" num)))
	      'face (list :foreground (if (equal num 0) "red" "blue"))))

(defun beer-verse (num)
  "Returns a complete verse for the given number of bottles."
  (concat (beer-text num t) " on the wall, "
	  (beer-text num) ".\n"
	  (if (equal num 0)
	      (concat "Go to the store and buy some more, "
		      (beer-text 99) " on the wall.\n")
	    (concat "Take one down and pass it around, "
		    (beer-text (1- num)) " on the wall.\n"))))

(defun beer-song-insert (start)
  "Inserts the complete 99 bottles of beer song into the buffer."
  (let ((n start))
    (while (>= n 0)
      (insert (beer-verse n))
      (when (>= (setq n (1- n)) 0)
	(insert "\n")))))

(defun beer-song (start)
  "Show the 99 bottles of beer song.
The song is created in a buffer called *Beer song* and the buffer
is displayed. If a prefix is given, the song is started from that
number of bottles, otherwise it starts from 99."
  (interactive "P")
  (let ((buf (get-buffer-create "*Beer song*")))
    (with-current-buffer buf
      (kill-all-local-variables)
      (erase-buffer)
      (beer-song-insert (if start (prefix-numeric-value start) 99))
      (goto-char (point-min)))
    (view-buffer buf)))```