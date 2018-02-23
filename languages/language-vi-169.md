
## Language Vi ##
---
- Author: Scott Engberg
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 36 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-vi-169.html
---

```! 99 bottles of beer lyrics generation using vi macros!
! 
! instructions:
!  1. rename your .exrc (so you have no existing macros to conflict with mine)
!  2. vi outfile < this_file >/dev/null 2>&1
! the output will be in outfile
!
! Please note that this file is littered with control characters.
!   All ^V, and ^] and ^M character sequences are control characters.
!   The other occurrences of ^ are actually supposed to be there.
!
! I also might be the first to point out that I took the liberty of
! using 'bc' to do my recalculations (sorry).
!
! Scott Engberg
! 6/8/96
! Scott.Engberg@mfa.com
!
^[Gd1G
:set magic
:map F A bottles of beer on the wall^V^M
:map K A bottles of beer^V^M
:map H Atake one down pass it around^V^M
:map Q "aP
:map O "ayy
:map W A-1
:map E !!bc^V^M
:map S :s/^\([1-9]\)/\1/^V^M
:map R OF^V^[QK^V^[H^V^[QW^V^[EST
:map T R
i99^[R^[
G
?^0
dG
oNo more bottles of beer on the wall!^[
:wq!```