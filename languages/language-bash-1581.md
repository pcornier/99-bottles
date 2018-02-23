
## Language BASH ##
---
- Author: Bastian Bittorf
- Date: 08/20/07
- Info: http
- Score:  (2.97 in 34 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-bash-1581.html
---

```#!/bin/sh
#        
# "99 bottles of beer" in portable "-ash" / "bash" / busybox-ash
# simply copy & paste it to a terminal            
#                                     
# author: Bastian Bittorf / weimar.freifunk.net
#                                              
# This is just to show elements of this programming language:
# - functions, returncodes, commandline arguments, global and local vars,
# - while-do-loop, if-then-else-contruct, case-statement                 
# - working with strings, comments, simple calculating  

fkt_define_global_alphabet () {
        TXT_0="bottles of beer"                 # simple string assignment, you can define arrays
with var[i]=value
        TXT_1="on the wall"
        TXT_2="Take one down and pass it around"
        TXT_3="No more"
        TXT_4="Go to the store and buy some more"
        TXT_5="no more"
        TXT_6="bottle of beer"                  # ending a function without returncode, defaults to
"0", which means "ok"
}                                                                                                   
                    

fkt_define_global_vars () {
        MAX="99"                                # normally vars in bash are typeless
        MIN="0"                                 # but for speedups you can use "declare -i
var=integer"
}                                                                                                   
  

fkt_loop () {
        local CNT="$MAX"                        # we want this var only in this function, normally
all vars are global

        while [ $CNT -gt $MIN ]; do             # with the ";" we can separate multiple commands in
one line
                                                # -gt means "greater than"

                NEXT=$(( CNT - 1 ))             # tricky but everyday work: opening a subshell with
$()

                                                # correct separated string is called with
${string_name}
                                                # must be used if a "_" or "." follows (could be
part of var)

                if [ $NEXT -gt 0 ]; then
                        echo "$CNT $TXT_0 $TXT_1, $CNT ${TXT_0}."
                        echo "$TXT_2, $NEXT $TXT_0 ${TXT_1}."
                        echo
                else
                        return $CNT             # argument is returncode, but can only be an positiv
integer
                fi                              # this ends the "if-then-else": simply "if"
backwards spelled

                let CNT-=1                      # C++ like incrementing
        done
}           

fkt_bridge_and_end () {
        local LAST="$?"                         # restoring the returncode

        echo "$LAST $TXT_6 $TXT_1, $LAST ${TXT_6}."
        echo "$TXT_2, $TXT_5 $TXT_0 ${TXT_1}."
        echo
        echo "$TXT_3 $TXT_0 $TXT_1, $TXT_5 ${TXT_0}."
        echo "$TXT_4, $MAX $TXT_0 ${TXT_1}."
}

case $1 in                                      # first commandline argument is $1
        start)
                fkt_define_global_vars          # call self-defined precedure without argument
                fkt_define_global_alphabet
                fkt_loop
                fkt_bridge_and_end
        ;;
        *)
                echo "Usage: $0 start"          # trap if incorrect program call
        ;;
esac                                            # this ends the case-statement. simply "case"
backwards spelled.```