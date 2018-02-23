
## Language bash ##
---
- Author: Bill Brown
- Date: 07/31/08
- Info: n/a
- Score:  (2.75 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-bash-1831.html
---

```#!/bin/bash
#A way-overcomplicated implementation of the bottles
# of beer song in bash.
#Optional argument: --careless   Generate the "happen to fall" version

standardBreakLine="Take one down and pass it around"
wastefulBreakLine="If one of those bottles should happen to fall"
breakLine=$([ "$1" = --careless ] && echo $wastefulBreakLine ||
                                     echo $standardBreakLine)

function pred() {  #get predecessor to a number
  case $1 in
    *nine)  echo ${1%nine}eight;;
    *eight) echo ${1%eight}seven;;
    *seven) echo ${1%seven}six;;
    *six)   echo ${1%six}five;;
    *five)  echo ${1%five}four;;
    *four)  echo ${1%four}three;;
    *three) echo ${1%three}two;;
    *two)   echo ${1%two}one;;
    one)    echo zero;;
    *-one)  echo ${1%-one};;
    *one)   echo ${1%one};;
    ten)    echo nine;;
    eleven) echo ten;;
    twelve) echo eleven;;
    *teen)  teenpred $1;;
    *ty)    tenspred $1;;
    zero)   echo "";  #to terminate
  esac
  }
  
function teenpred() { #predecessor of a teen
  case $1 in
     thirteen)   echo twelve;;
     *)     echo $(crunchprefix $(pred $(uncrunchprefix ${1%teen})))teen;;
     esac  
  }
  
function tenspred() { #predecessor of a multiple of ten
  case $1 in
     twenty)     echo nineteen;;
     *) echo $(crunchprefix --tens $(pred $(uncrunchprefix ${1%ty})))ty-nine;;
     esac  
  }
  
function crunchprefix() {
  #crunch number prefix to its conventional form
  # such as three --> thir
  # option --tens     multiples of ten are a bit different
  [ $1 = --tens ] && { tensop=true; shift; }
  case $1 in 
    two)   [ -n "$tensop" ] && echo twen || echo $1;;
    three) echo thir;;
    four)  [ -n "$tensop" ] && echo 'for' || echo $1;;
    five)  echo fif;;
    eight) [ -n "$tensop" ] && echo eigh || echo $1;;
    *)     echo $1;;
  esac
  }

function uncrunchprefix() { #reverse crunchprefix
  case $1 in
    twen)  echo two;;
    thir)  echo three;;
    'for') echo four;;
    fif)   echo five;;
    eigh)  echo eight;;
    *)     echo $1;;
  esac
  }
    
function grammar() { #peculiarities of English grammar
  local oneBottle=false  #can effect the following line
  while read line; do
    line="${line/one more bottles/one more bottle}"
    case "$line" in
       *"one of those bottles"*) line="$([ $oneBottle = true ] && 
                         echo ${line/one of those bottles/that lone bottle} ||
                         echo $line )"
                         ;;
       *"one down"*) line="$([ $oneBottle = true ] && 
                         echo ${line/one down/it down} ||
                         echo $line )"
                         ;;
       *bottles*)   oneBottle=false;;
       *bottle*)    oneBottle=true;;
       esac
      #Some say the twenties should have no hyphen
    line="${line/twenty-/twenty }"
    echo $line
    done
  }
  
function capitalize() {  #fix beginning of each line
  while read line; do
    echo -n ${line:0:1} | tr '[:lower:]' '[:upper:]'
    echo ${line#?}
    done
  }
function punctuate() {  #add punct to each line
  while read line; do 
    case "${line}" in
      [Ii]f*)   echo ${line},;;
      '')       echo;;
      *)        echo ${line}.;;
      esac
    done
  }

function verse () { #write one verse
  local nb=$1
  echo $nb bottles of beer on the wall
  echo $nb bottles of beer
  if [ $nb = zero ]; then
    echo Go to the store and buy some more
    nb=ninety-nine
  else
    echo $breakLine
    nb=$(pred $nb)
  fi
  echo $nb bottles of beer on the wall
  }
  
function poeticize() { #make it nice
  while read first rest; do
    case "$rest" in
      *beer*)
        first=${first/zero/no}
        local syl=$(syllables ${first% *})
        case $syl in  #improve meter
          1|2)   echo $first 'more' $rest;;
          *)     echo $first $rest;;
          esac;;
      *)         echo $first $rest
      esac
    done
  }
  
function syllables { #estimate number of syls in word
  local n=1
  case $1 in
    eleven)       n=2;; #sounds better if not considered 3
    *teen)        n=2;;
    *ty)          n=2;;
    *-*)          n=3;; #don't care about more than 3
    esac
  case $1 in
    *seven*)      let $((n = n+1));;
    esac
  echo $n
  }
    

nb=ninety-nine

while [ -n "$nb" ]; do
  verse $nb
  echo
  nb=$(pred $nb)
  done | poeticize | grammar | punctuate | capitalize```