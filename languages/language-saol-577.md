
## Language SAOL ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: http
- Score:  (1.50 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-saol-577.html
---

```SAOL is the music-synthesis language which is part of the MPEG-4 
standard.  There's a homepage for SAOL at http://sound.media.mit.edu

Orchestra (beer.saol) :

global {
  srate 1000; // sip rate
  krate 100;  // beer rate
}

instr beer() {
  ksig drink;

  drink = kline(99,1,1);

  if (drink == 0) {
    kdump("No bottles of beer on the wall.");
    kdump("Everybody's drunk!");
    turnoff;
    }

  else {
    if (drink == 1) {
      kdump(drink," bottle of beer on the wall.");
      kdump(drink," bottle of beer.");
    } 
    else { 
      kdump(drink," bottles of beer on the wall.");
      kdump(drink," bottles of beer.");
    }
    kdump("Take one down, pass it around,");

    if (drink-1 == 1) {
      kdump(drink-1," bottle of beer on the wall.");
    } 
    else { 
      kdump(drink-1," bottles of beer on the wall.");
    }
    kdump();
  }
}

------------

Score (beer.sasl) :

0 beer 1```