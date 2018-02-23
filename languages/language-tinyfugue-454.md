
## Language TinyFugue ##
---
- Author: Carey Evans
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-tinyfugue-454.html
---

```; 99 bottles of beer in TF macros.
; by Carey Evans.
;
; Type "/beer" to use after loading it.

/def beerecho = /echo - %{*}
/def beerbreath = /echo

; Uncomment the following lines instead to send to the MUD:
; /def beerecho = say %{*}
; /def beerbreath = :takes a deep breath.

/def beerbottles = \
    /if ({1} == 1) /echo 1 bottle of beer%; \
    /else /echo %{1} bottles of beer%; \
    /endif

/def beer1 = /beerecho $(/beerbottles %{1}) on the wall%2
/def beer2 = /beerecho $(/beerbottles %{1}).
/def beer3 = /beerecho Take one down and pass it around,

/def beer = \
    /let bottles=%{1-99}%; \
    /while ( bottles > 0 ) \
	/beer1 %{bottles} ,%; \
	/beer2 %{bottles}%; \
	/beer3%; \
	/let bottles=$[bottles - 1]%; \
	/if ( bottles == 0 ) /break%; /endif%; \
	/beer1 %{bottles} .%; \
	/beerbreath%; \
    /done%; \
    /beerecho No more bottles of beer on the wall.```