
## Language CRM114 ##
---
- Author: Dave Plonka
- Date: 04/20/05
- Info: n/a
- Score:  (2.76 in 102 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-crm114-147.html
---

```# 99 Bottles for "the CRM114 Discriminator"
# Dave Plonka - plonka@doit.wisc.edu, Mar 15 2003
# with modifications by WSY 

window
isolate (:n:)
alter (:n:) /99/
isolate (:s:)
alter (:s:) /s/

{
   # print starting preamble of verse
   output /:*:n: bottle:*:s: of beer on the wall,:*:_nl:/
   output /:*:n: bottle:*:s: of beer:*:_nl:/

   # actually decrement the bottles
   output /take one down, pass it around,:*:_nl:/
   syscall ( :*:n:-1:*:_nl: ) (:n:) /bc/
   # remove the trailing new-line:
   match (:n:) [:n:] /[0-9]+/

   # handle the one case (get rid of the "s")
   {
      match [:n:] /^1$/
      alter (:s:) //
   }

   # handle the zero case:
   match <absent> [:n:] /^0$/

   #  and if we get to here, we're nonzero on bottles, so go round again.
   output /:*:n: bottle:*:s: of beer on the wall.:*:_nl::*:_nl:/
   liaf
}
output /no more bottles of beer on the wall.:*:_nl:/```