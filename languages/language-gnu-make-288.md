
## Language GNU Make ##
---
- Author: Phil Ashby
- Date: 04/20/05
- Info: n/a
- Score:  (2.25 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-gnu-make-288.html
---

```# Makefile to sing the infamous 99 Bottles of Beer song, without resorting
# to ugly shell escapes for the math :)

# Author: Phil Ashby (phlash@ashbysoft.com)
# Date: 30/Jan/2002

# Inital values of digits.. (mostly overridden on command line)
UNITS=9
TENS=9

.SILENT:

# GNU make can do math using conditionals!
NTENS=$(TENS)
ifeq "$(UNITS)" "9"
NUNITS=8
endif
ifeq "$(UNITS)" "8"
NUNITS=7
endif
ifeq "$(UNITS)" "7"
NUNITS=6
endif
ifeq "$(UNITS)" "6"
NUNITS=5
endif
ifeq "$(UNITS)" "5"
NUNITS=4
endif
ifeq "$(UNITS)" "4"
NUNITS=3
endif
ifeq "$(UNITS)" "3"
NUNITS=2
endif
ifeq "$(UNITS)" "2"
NUNITS=1
endif
ifeq "$(UNITS)" "1"
NUNITS=0
	ifeq "$(TENS)" "0"
	NTENS=STOP
	endif
endif
ifeq "$(UNITS)" "0"
NUNITS=9
	ifeq "$(TENS)" "9"
	NTENS=8
	endif
	ifeq "$(TENS)" "8"
	NTENS=7
	endif
	ifeq "$(TENS)" "7"
	NTENS=6
	endif
	ifeq "$(TENS)" "6"
	NTENS=5
	endif
	ifeq "$(TENS)" "5"
	NTENS=4
	endif
	ifeq "$(TENS)" "4"
	NTENS=3
	endif
	ifeq "$(TENS)" "3"
	NTENS=2
	endif
	ifeq "$(TENS)" "2"
	NTENS=1
	endif
	ifeq "$(TENS)" "1"
	NTENS=0
	endif
	ifeq "$(TENS)" "0"
	NTENS=STOP
	endif
endif

# default target..
stanza: 
	@echo $(TENS)$(UNITS) bottles of beer on the wall $(TENS)$(UNITS) bottles of beer.
	@echo Take one down, pass it around..
ifeq "$(NTENS)" "STOP"
	@echo No more beer.
else
	@echo $(NTENS)$(NUNITS) bottles of beer.
	@echo .
	$(MAKE) -f makefile.bob UNITS=$(NUNITS) TENS=$(NTENS)
endif```