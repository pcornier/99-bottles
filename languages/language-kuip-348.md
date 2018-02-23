
## Language KUIP ##
---
- Author: R.P.Hofmann
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 16 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-kuip-348.html
---

```*******************************************
* KUIP version of 99 bottles of beer      *
* r.p.hofmann f15rph@ips105.desy.de       *
* http://ips105.desy.de:8765/             *
*******************************************
* about KUIP:                             *
* R.Brun, P.Zanarini                      *
* KUIP - Kit for a User Interface Package *
* Program library I202. CERN 1988         *
*******************************************

macro beer nbott=99 ndown=1

  if [ndown] > 0 goto ndok
  ndown=-[ndown]
ndok:
  if [ndown] > 1 goto mored
  alias/create pron it
  goto oned
mored:
  alias/create pron them
oned:
  if [nbott] < 1 goto end
  if [nbott] = 1 goto one
  alias/create bob 'bottles of beer'
  alias/create otw 'on the wall'
pass:
  mess [nbott] bob otw
  mess [nbott] bob
  mess take [ndown] down and pass pron all around 
  nbott=[nbott]-[ndown]
  if [nbott] <> 1 goto moreb
  mess 1 bottle of beer otw
  goto oneb
moreb:  
  mess [nbott] bob otw
oneb:
  if [ndown] = 0 goto end
  if [nbott] > 1 goto pass
  if [nbott] < 1 goto end
one:
  mess 1 bottle of beer otw
  mess 1 bottle of beer
  mess take [ndown] down and pass pron all around
  nbott=1-[ndown]
  mess [nbott] bottles of beer otw
  if [nbott] < 1 goto end
end:```