
## Language TCL/TK ##
---
- Author: Germanium Diode
- Date: 04/30/07
- Info: n/a
- Score:  (3.02 in 162 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-tcl-tk-1468.html
---

```#!/bin/sh -e
# the next line restarts using wish \
exec `which wish | tail -1` "$0" "$@"

##############################################################
## # An animated version of "99 Bottles"
## # Prints the song and shows how it's done.
## # 2007 by "Germanium Diode"
## # Written to amuse ... No Copyright
## # Version 2 : added shelves - and some badly needed comments
## #             and the party will never end

## # settings
# canvas widht/height ; shelve's width ; spacing of bottles
set wi 990; set he 540; set ww 330; set dx 30; set dy 60
# stepping speed of animation in milliseconds
set delay 40; 
# bottle cap falling
set cap(g) 1.2; # "gravity"
# circular movement (when passing the bottle around)
set cir(x0) 470; set cir(y0) 210; set cir(ra) 140
set cir(da) [expr atan(1.0)/4.0]; # delta angle
# empty bottle thrown away 
set em(g) 2.5; set em(nn) 20; # "gravity"; steps
# recycle & refill
set re(after) 250; set re(nn) 20; # wait cycles; steps
set re(x0) 825; set re(y0) 213; # refill from coordinate	

## # the shape of things to come
set sbottle {11 3 11 20 5 30 5 57 25 57 25 30 19 20 19 3}
set scap {10 5 10 2 20 2 20 5}
set sfull {12 10 12 21 6 31 6 56 24 56 24 31 18 21 18 10}
set ebottle {3 11 20 11 30 5 57 5 57 25 30 25 20 19 3 19}
set ecap {10 2 10 5 20 5 20 2}
set bcap {20 10 20 4 40 4 40 10}
set bbottle {22 6 22 40 10 60 10 114 50 114 50 60 38 40 38 6}
set bf(1) {24 20 24 42 12 62 12 112 48 112 48 62 36 42 36 20}
set bf(2) {24 42 12 62 12 112 48 112 48 62 36 42}
set bf(3) {12 62 12 112 48 112 48 62}
set bf(4) {12 72 12 112 48 112 48 72}
set bf(5) {12 82 12 112 48 112 48 82}
set bf(6) {12 92 12 112 48 112 48 92}
set bf(7) {12 102 12 112 48 112 48 102}
set bf(8) {12 110 12 112 48 112 48 110}
set vat {-59 -99 -59 99 59 99 59 -99}

## # common routines
proc oline {o x y w c t} {.c move [.c create line $o -width $w -tag $t -fill $c] $x $y}
proc ofill {o x y   c t} {.c move [.c create polygon $o -tag $t -fill $c] $x $y}
proc putn {str} {puts -nonewline stdout $str; flush stdout}
proc add  {a_ b} {upvar $a_ a; set a [expr $a+$b]}
proc bottles {} {
  global bottles
  if {$bottles > 1} {return "$bottles bottles"}
  return "one bottle"
}
## # bottle to coordinate / pack bottle on shelve
proc bot2xy {b x_ y_} {
  global dx dy
  upvar $x_ x; upvar $y_ y
  set bb [expr 99-$b]
  set x [expr ($bb % 11) * $dx]
  set y [expr ($bb / 11) * $dy]
}
proc place_bottle {b x y} {
  global sbottle scap sfull color
  oline $sbottle $x $y 2 darkgreen b${b}
  oline $scap    $x $y 2 black     b${b}
  ofill $sfull   $x $y   $color    b${b}
}
proc shelve_bottle {b} {
  bot2xy $b x y; place_bottle $b $x $y
}
## # if its lager, we'll get a head
proc bottle_head {tag} {
  global beer; if {$beer != {lager}} {return}
  set coords [.c coords $tag]
  set x0 [lindex $coords 0]
  set x1 [lindex $coords end-1]
  set y  [lindex $coords 1]
  .c create line $x0 $y $x1 $y -width 4 -fill white -tag $tag
} 
## # calculate parameters for straight line animation
# x/y to y/x "velocity", calculated: count, dx, dy
proc straight {x0 y0 x1 y1 v cnt_ mdx_ mdy_} {
  upvar $cnt_ cnt
  upvar $mdx_ mdx
  upvar $mdy_ mdy
  set dx  [expr double($x1-$x0)]
  set dy  [expr double($y1-$y0)]
  set cnt [expr int(sqrt($dx*$dx+$dy*$dy)/$v+0.5)]
  set mdx [expr $dx/double($cnt)]
  set mdy [expr $dy/double($cnt)]
}
## # calculate parameters for "ballistic" curve animation
# x/y to y/x, steps, "gravity", calculated: initial dx, dy
proc ballistic {x0 y0 x1 y1 cnt g dx_ dy_} {
  upvar $dx_ dx; upvar $dy_ dy
  set dx [expr ($x1-$x0)/$cnt]
  set dy [expr ($y1-$y0)/$cnt-$g*$cnt/2.0]  
}
#######################################################
## # take it down,
## #
proc take0 {} {
  global bottles cap ecap
  .c delete b${bottles} 
  set cap(x)  [expr double(30*((99-$bottles)%11))]
  set cap(y)  [expr double(60*((99-$bottles)/11))]
  set cap(x1) [expr $cap(x)-12.0+rand()*24.0]
  set cap(y1) [expr $cap(y)+51.0]
  ballistic $cap(x) $cap(y) $cap(x1) $cap(y1) $cap(cnt) $cap(g) cap(dx) cap(dy)
  putn "Take one down,"
  take
}
proc take {} {
  global delay cap mv ecap bbottle bf color
  .c delete big cap fill
  oline $ecap $cap(x) $cap(y) 2 black cap
  oline $bbottle $mv(x) $mv(y) 4 darkgreen big
  ofill $bf(1)   $mv(x) $mv(y)   $color    fill
  bottle_head fill
  incr mv(cnt) -1
  if {$mv(cnt) > 0} {
    add cap(x) $cap(dx); add cap(y) $cap(dy); add cap(dy) $cap(g)
    add mv(x) $mv(dx); add mv(y) $mv(dy)
    after $delay take
  } else {
    .c delete cap
    oline $ecap $cap(x1) $cap(y1) 2 black scrap
    after $delay around
  }
}
#######################################################
## # pass it around,
## #
proc around {} {
  global cir delay bbottle bf ecap bottles color
  .c delete big fill
  if {$cir(n) == 0} {putn " pass it around,\n"}
  incr cir(n); if {[expr $cir(n)%4] == 0} {incr cir(f)}
  set x [expr int($cir(x0)+sin($cir(an))*$cir(ra))]
  set y [expr int($cir(y0)+cos($cir(an))*$cir(ra))]
  oline $bbottle $x $y 4 darkgreen big
  if {[info exist bf($cir(f))]} {
    ofill $bf($cir(f)) $x $y $color fill
    bottle_head fill
  } else {
    after $delay empty0; return
  }
  add cir(an) $cir(da) 
  after $delay around
}
#######################################################
## # do not litter :)
## #
proc empty0 {} {
  global delay em ebottle
  set coords [.c coords big]
  set em(x1) [expr int(660.0+rand()*270.0)]
  set em(y1) [expr int(20.0+rand()*490.0)]
  set em(x) [lindex $coords 0]
  set em(y) [lindex $coords 1]
  set em(cnt) $em(nn)
  ballistic $em(x) $em(y) $em(x1) $em(y1) $em(cnt) $em(g) em(dx) em(dy)
  .c delete big;
  empty1
}
proc empty1 {} {
  global delay em bottles ebottle
  .c delete empty
  oline $ebottle $em(x) $em(y) 2 darkgreen empty
  add em(x) $em(dx); add em(y) $em(dy); add em(dy) $em(g)
  incr em(cnt) -1
  if {$em(cnt) > 0} {
    after $delay empty1; return
  }
  after $delay empty2
}
proc empty2 {} {
  global delay em bottles ebottle
  .c delete empty
  oline $ebottle $em(x1) $em(y1) 2 darkgreen scrap
  incr bottles -1
  if {$bottles > 0} {
    putn [format "%s of beer on the wall!\n\n" [bottles]]
    after $delay start
  } else {
    putn "No bottles of beer on the wall\n"
    putn "No bottles of beeeer\n"
    putn "Go to the store and buy some more\n"
    putn "No bottles of beer on the wall\n"
    after $delay recycle0
  }
}
#######################################################
## # go on - recycle
## # 
proc recycle0 {} {
  global delay re
  set re(delay) $re(after)
  after $delay recycle1
}
proc recycle1 {} {
  global delay re he
  incr re(delay) -1; 
  if {$re(delay) <= 0} {
    set re(dy) [expr $he/$re(nn)]; set re(cnt) $re(nn)
    after $delay recycle2
  } else {
    after $delay recycle1
  }
}
proc recycle2 {} {
  global delay re
  .c move scrap 0 $re(dy)
  incr re(cnt) -1; 
  if {$re(cnt) > 0} {after $delay recycle2} else {after $delay refill0}
}
#######################################################
## # here we go again
## # 
proc refill0 {} {
  global delay re he color
  global vat
  .c delete scrap
  set re(b) 99; # 99 to fill up
  set re(vat.wi) [expr [lindex $vat 4]-[lindex $vat 0]]
  set re(vat.he) [expr [lindex $vat 5]-[lindex $vat 1]]
  set re(cnt) $re(nn)
  set re(x) $re(x0); set re(y) [expr $he+$re(vat.he)]
  set re(dy) [expr ($re(y0)-$re(y))/$re(nn)]
  set re(y)  [expr $re(y)+$re(dy)]; # make bottles appear at bottom of vat
  oline $vat $re(x) $re(y) 6 black vat
  ofill $vat $re(x) $re(y)   $color  refill
  after $delay refill1
}
proc refill1 {} {
  global delay re
  .c move refill 0 $re(dy)
  .c move vat    0 $re(dy)
  incr re(cnt) -1
  if {$re(cnt) > 0} {
    after $delay refill1
  } else {
    set re(vat.x0) [lindex [.c coords refill] 0]
    set re(vat.y0) [lindex [.c coords refill] 1]
    set re(vat.x1) [expr $re(vat.x0)+$re(vat.wi)]
    set re(vat.y1) [expr $re(vat.y0)+$re(vat.he)]
    after $delay refill2
  }
}
proc refill2 {} {
  global delay re he color
  if {$re(b) > 0} {
    ## # start a new bottle
    bot2xy $re(b) re(x1) re(y1)
    straight $re(x0) $re(y0) $re(x1) $re(y1) 20.0 \
              re(cnt.$re(b)) re(dx.$re(b)) re(dy.$re(b))
    place_bottle $re(b) $re(x0) $re(y0)
    set re(an.$re(b)) 1; # this bottle is animated
    ## # zick-zacking throught shelves space
    incr re(b) -11; if {$re(b) <= 0  && $re(b) > -10} {incr re(b) 98}
    ## # vat empties
    .c delete refill
    add re(vat.y0) 2.0
    .c create rectangle $re(vat.x0) $re(vat.y0) $re(vat.x1) $re(vat.y1) \
                        -fill $color -width 2 -outline white -tag refill
    .c lower refill
  }
  ## # movement
  set moved 0
  for {set b 1} {$b < 100} {incr b} {
    if {![info exists re(an.$b)]} {continue}
    incr re(cnt.$b) -1
    if {$re(cnt.$b) >= 0} {
      .c move b${b} $re(dx.$b) $re(dy.$b)
      incr moved
    } else {
      unset re(an.$b)
    }
  }
  if {$moved} {
    after $delay refill2
  } else {
    set re(cnt) $re(nn); set re(dy) [expr ($re(y)-$re(y0))/$re(nn)]
    after $delay refill3
  }
}
proc refill3 {} {
  global delay re vat bottles
  .c move vat    0 $re(dy)
  .c move refill 0 $re(dy)
  incr re(cnt) -1
  if {$re(cnt) > 0} {
    after $delay refill3
  } else {
    .c delete vat refill
    putn "\n\n"
    set bottles 99
    after $delay start
  } 
}
#######################################################
## # take it one bottle at a time
## # 
proc start {} {
  global delay mv cap cir bottles
  ## # calculate parameters for bottle movement (take it down)
  set coords [.c coords b${bottles}]
  set mv(x) [lindex $coords 0]; set mv(y) [lindex $coords 1]
  set x1 $cir(x0); set y1 [expr ($cir(y0)+$cir(ra))]
  straight $mv(x) $mv(y) $x1 $y1 25.0 mv(cnt) mv(dx) mv(dy)
  ## # cap falling down
  set cap(cnt) $mv(cnt)
  ## # circular movement (pass it around)
  set cir(an) 0.0; set cir(f) 1; set cir(n) 0
  ## # action
  putn [format "%s of beer on the wall, " [bottles]]
  putn [format "%s of beer!\n" [bottles]]
  after $delay take0
}

#######################################################
## # what flavour?
## # 
set beer lager; # adjust to taste

if {$argc > 0} {set beer [lindex $argv 0]}
switch -exact -- $beer {
  {lager}  {set color gold}
  {bitter} {set color darkred}
  {stout}  {set color black}
  default  {
    puts stderr "Sorry folks, the shop has only lager, bitter or stout."
    exit 1
  }
}

#######################################################
## # lets get going, folks
## # 
pack [canvas .c -width $wi -height $he]
# shelves for the beer bottles
for {set y [expr $dy-1]} {$y < $wi} {incr y $dy} {
  .c create line 0 $y $ww $y -fill black -width 2 -tag shelves
}
# stack up the good stuff
for {set b 99} {$b > 0} {incr b -1} {shelve_bottle $b} 

## # let the party of 99 bottles begin
## # ... and this time the party never ends
set bottles 99
start```