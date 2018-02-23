
## Language Sendmail ##
---
- Author: Felix von Leitner
- Date: 04/20/05
- Info: n/a
- Score:  (3.45 in 47 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sendmail-588.html
---

```Sendmail is used by mail systems for routing and controlling e-mail delivery.  
It was never really intended for general purpose programming, but here you go.

# Save this to /tmp/foo.bar
# echo '49 9 9' | /usr/lib/sendmail -bt -d21 -C/tmp/foo.bar
# Sorry, Smail is too brain dead to run this.  Use sendmail instead.
# Programmed by: Felix von Leitner <leitner@inf.fu-berlin.de>

DH"take one down\, pass it around\,"
DG"bottles of beer"
DF"$G on the wall\."
DE"$G on the wall\,"
DN"No beer left\."

S45
R$- 2 $*	foo bar $1 1 $F
R$- 3 $*	$1 2 $F
R$- 4 $*	$1 3 $F
R$- 5 $*	$1 4 $F
R$- 6 $*	$1 5 $F
R$- 7 $*	$1 6 $F
R$- 8 $*	$1 7 $F
R$- 9 $*	$1 8 $F
R9 0 $*		8 9 $F
R8 0 $*		7 9 $F
R7 0 $*		6 9 $F
R6 0 $*		5 9 $F
R5 0 $*		4 9 $F
R4 0 $*		3 9 $F
R3 0 $*		2 9 $F
R2 0 $*		1 9 $F
R1 0 $*		0 9 $F
R$- 1 $*	$1 0 $F
Rfoo bar $- 1 $F	$1 1 $F
R0 0 $*		$N

S47
R$- $- $E	$1 $2 $G,

S48
R$- $-		$>47 $1 $2 $E
R$- $- $G,	$>45 $1 $2 $H
R$- $- $F	$1 $2
R$N		*burp*

S49
R$- $-					$>48 $1 $2```