
## Language Clipper ##
---
- Author: Tim Nason
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 12 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-clipper-129.html
---

```/* Tim Nason, 27 Oct 95 */

procedure beer
local nBeers := 99
    while .t.
        ?
        ? alltrim( str( nBeers ) ) + ' bottle' + iif( nBeers = 1, '', 's' ) + ;
             ' of beer on the wall.'
        ? alltrim( str( nBeers ) ) + ' bottle' + iif( nBeers-- = 1, '', 's' ) + ;
                ' of beer.'
        if nBeers < 0
            ? "Go to the store and buy some more."
            nBeers := 99
            ? '99 bottles of beer on the wall.'
        else        
            ? 'Take one down, pass it around,'
            ? alltrim( str( nBeers ) ) + ' bottles of beer on the wall.'
        endif
    enddo
return```