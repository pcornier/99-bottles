
## Language make ##
---
- Author: wrtlprnft
- Date: 07/30/10
- Info: n/a
- Score:  (4.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-make-2466.html
---

```#!/usr/bin/make -qf

BOTTLES := 99

define BOTTLE
$(if $(1),$(if $(word 2,$(1)),$(words $(1)) bottles,1 bottle),no more bottles)
endef

define VERSE
$(call BOTTLE,$(1) .) of beer on the wall, $(call BOTTLE,$(1) .) of beer.
Take one down and pass it around, $(call BOTTLE,$(1)) on the wall.
endef

define LASTVERSE
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, $(BOTTLES) bottles of beer on the wall.
endef

define SONG
$(if $(word $(BOTTLES),$(1) .),,$(call SONG,$(1) .))$(call VERSE,$(1))


endef

$(info $(SONG)$(LASTVERSE))

.PHONY: all
all:```