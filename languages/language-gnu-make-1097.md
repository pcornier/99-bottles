
## Language GNU Make ##
---
- Author: Krzysztof Nosek
- Date: 03/24/06
- Info: http
- Score:  (3.02 in 51 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-gnu-make-1097.html
---

```# Put the code in some FILE, call:
#   make -f FILE
# or
#   make
# if FILE happens to be just `makefile'.

# Number of bottles to drink:
BOTTLES := 99
# Overload this variable from the command line in case of make's trouble with memory, e.g.:
#   make BOTTLES=50

.PHONY: $(BOTTLES)

all: 0; # No more bottles of beer on the wall, no more bottles of beer.
	# Go to the store and buy some more, $(BOTTLES) bottles of beer on the wall.

define chain
$1: $2; # $$(subst 1 bottles,1 bottle,$$< bottles of beer on the wall, $$< bottles of beer.)
	# Take one down and pass it around, $$(patsubst 0,no more,$$@) bottles of beer on the wall.
	#
endef

tail = $(wordlist 2,$(words $1),$1)

make-a-chain = $(if $1,$(eval $(call chain,$(words $(call tail,$1)),$(words $1))) \
                       $(call make-a-chain,$(call tail,$1)))

ten := x x x x x x x x x x
$(call make-a-chain,$(wordlist 1,$(BOTTLES),$(foreach \
	(c) nosek 2006. Credits to John Graham-Cumming's GMSL!,$(ten),$(ten))))```