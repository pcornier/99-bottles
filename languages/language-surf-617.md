
## Language Surf ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 7 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-surf-617.html
---

```(begin 'SINGING

  (define HOW-MANY-BOTTLES
    (lambda (bottles where)
      (format stdout "%d bottle%d of beer%d\n"
	      (list (if (> bottles 0) bottles "No more")
		    (if (= bottles 1) "" "s")
		    where))))

  (recurse DRINKING (bottles 99)
    (how-many-bottles bottles " on the wall,")
    (how-many-bottles bottles ",")
    (if (= bottles 0)
	(display stdout "Go the the store, and buy some more!\n")
	(begin (display stdout "You take one down, pass it around,\n")
	       (how-many-bottles (- bottles 1) " on the wall.\n")
	       (drinking (- bottles 1)))))

  'GO-TO-THE-STORE)```