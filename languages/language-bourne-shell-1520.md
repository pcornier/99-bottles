
## Language bourne shell ##
---
- Author: Jeff Popp
- Date: 06/14/07
- Info: n/a
- Score:  (2.75 in 8 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-bourne-shell-1520.html
---

```#!/bin/sh
#
#  Copyright (C)  1996   Jeff Popp
#      Narnian Sky Software
#       All Rights Reserved
#       Used by Permission
#
# beer
#
# Computer saves time with the "Ninety-nine Bottles of Beer" song.
#
# Written  October   26, 1999 - Jeff Popp V1.0
# Modified August    22, 2000 - Jeff Popp V1.1  -Add capabilities to
#                                                modify decrement
#                                                count and allow $N>99
#
#
# Note:  This program has been written so that song rhymes by using
#        the line "If one of those bottles should happen to fall" as
#        opposed to the usual "You take one down and pass it around".
#
#        It also manicures the output lines so that the number of
#        syllables remains constant. One and two syllable numbers are
#        followed by the word "more".
#
#        ie: "18 more bottles of beer on the wall"
#                 vs.
#            "17 bottles of beer on the wall"
#
#        Special consideration is also given to remaining bottle counts
#        of one and zero. Instead of "If 1 of those bottles should happen
#        to fall" the line becomes "If that one bottle should happen to
#        fall", and "0 more bottles of beer on the wall" becomes "No more
#        bottles of beer on the wall".
#
#
###################################################################
# Set Variables
###################################################################

  N=99                           # Beginning number of bottles
  DECREMENT=1                   # Number to decrease each round

###################################################################
# Functions
###################################################################

BottleCheck () {
    case $NN in
      1)
        BOTTLES="bottle"
      ;;
      0)
        NN="No"
        BOTTLES="bottles"
      ;;
      *)
        BOTTLES="bottles"
      ;;
    esac
    }

Decrement () {
    case $DECREMENT in
      12|10|9|8|6|5|4|3|2)
        IF="$DECREMENT of those"
      ;;
      1)
        IF="one of those"
      ;;
      *)
        IF=$DECREMENT
      ;;
    esac
    }

Gravity () {
    BOTTLES=bottles
    while [ $N -gt "0" ] ; do
      FirstLines
      NN=`expr $N - $DECREMENT`
      ZeroCheck
      echo "If $IF $BOTTLES should happen to fall,"
      BottleCheck
      LastLine
    done
    }

FirstLines () {
    echo "$N $BOTTLES of beer on the wall,"
    echo "$N $BOTTLES of beer,"
    }

LastLine () {
    N=`expr $N - $DECREMENT`
    if [ $N -lt 20 -a $N != 17 -o $N -lt 100 \
         -a `expr $N % 10` = 0 -a $N != 70 ] ; then
      echo "$NN more $BOTTLES of beer on the wall"
     else
      echo "$N $BOTTLES of beer on the wall"
    fi
    echo
    }

ZeroCheck () {
    if [ $N -le $DECREMENT ] ; then
      DECREMENT=$N
    fi
    if [ $NN -le 0 ] ; then
      DECREMENT=$N
      NN=0
      Decrement
    fi
    case $N in
      1)
        IF="that one"
        BOTTLES="bottle"
      ;;
      *)
        if [ $DECREMENT = $N ] ; then
          IF="those $N"
        fi
      ;;
    esac
    }

###################################################################
#  Main
###################################################################

    Decrement

    Gravity```