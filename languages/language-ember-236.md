
## Language Ember ##
---
- Author: Phil Homewood
- Date: 04/20/05
- Info: n/a
- Score:  (3.02 in 113 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ember-236.html
---

```#!/usr/local/ember/bin/ember

/* 99 Bottles of Ember Fluid                                  */
/* Phil Homewood dot@atat.dotat.org, 20020905                 */
/* Written in Ember, http://www.hughes.com.au/products/ember/ */

funct yob (int $nbot, int $f)
{
  if ($nbot == 1) { $s = ""; } else { $s = "s"; }
  if ($f==0) {
    if ($nbot == 0) {
      echo ("no more bottles of beer on the wall.\n");
      return (0);
    }
    echo ("$nbot bottle$s of beer on the wall.\n\n");
  }
  echo ("$nbot bottle$s of beer on the wall,\n$nbot bottle$s of beer,\n");
  $nbot--;
  echo ("take one down, pass it around,\n");
  if ($nbot >= 0) { return (yob ($nbot, 0)); }
}

yob (99, 1);```