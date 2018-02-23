
## Language Yorick ##
---
- Author: Eric Korpela
- Date: 04/20/05
- Info: n/a
- Score:  (2.46 in 13 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-yorick-68.html
---

```/*  The Bottles of Beer song (c) 1996 Eric Korpela
 *   Yorick version-- Modeled after the IDL version.
 * USAGE:  bottles or bottles, number
 */

/* Set up our song structure............ */

struct _song {
  int n0;
  string s1;
  int n1;
  string s2,s3;
  int n2;
  string s4;
} 

func bottles( number )
{

  if (is_void(number)) { 
    number=99
    write,"BOTTLES: Defaulting to 99 bottles!"
  }
 
  song=array(_song(n0=0,s1=" bottles of beer on the wall.\n",n1=0,
                   s2=" bottles of beer.\n",
                   s3="You take one down and pass it around\n",
                   n2=0,
                   s4=" bottles of beer on the wall.\n"), number)

  /* put in the appropriate numbers */

  i=(number)-indgen(number)
  song(*).n0=i+1
  song(*).n1=i+1
  song(*).n2=i
 
  write,song.n0,song.s1,song.n1,song.s2,song.s3,song.n2,song.s4
 
}```