
## Language KimL ##
---
- Author: Marinus Oosters
- Date: 06/13/12
- Info: http
- Score:  (3.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-kiml-2899.html
---

```var.decl int bottles = 99

ctrl.goto sing

print_bottles:
    ctrl.goto print_99 if bottles < 0
    ctrl.goto print_nomore if bottles = 0 
    io.out bottles
    ctrl.goto print_bottle
print_99:
    io.out "99"
    ctrl.goto print_bottle
print_nomore:
    io.out "No more"
print_bottle:
    io.out " bottle"
    ctrl.goto skip_plural if bottles = 1
    io.out "s"
skip_plural:
    ctrl.return

third_line:
    ctrl.goto store if bottles = 0
    io.out "Take one down and pass it around,\n"
    ctrl.return
store:
    io.out "Go to the store and buy some more,\n"
    ctrl.return

sing_verse:
    ctrl.call print_bottles
    io.out " of beer on the wall,\n"
    ctrl.call print_bottles
    io.out " of beer,\n"
    ctrl.call third_line
    var.set bottles = bottles - 1
    ctrl.call print_bottles
    io.out " of beer on the wall.\n\n"
    ctrl.return

sing:
    ctrl.call sing_verse
    ctrl.goto sing if bottles >= 0```