
## Language Fortran 90 ##
---
- Author: Akira Kida
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 37 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-fortran-90-265.html
---

```!  F90 (Fortran 90) version of 99 bottles of beer.
!    written by Akira KIDA,  SDI00379@niftyserver.or.jp
!    Note that this source is in FIXED format.

	program ninetynine
	implicit none
	integer, parameter :: BOTTLES = 99
	integer :: i
	integer :: k
	character*7 :: btl = 'bottles'

	do i = BOTTLES, 1, -1
		k = len(btl)
		if (i == 1) k = k - 1
		print *, i, btl(1:k), ' of beer on the wall, ',
     c			 i, btl(1:k), ' of beer.'
		print *, 'Take one down, pass it around.'
		if (i == 0) exit
		print *, i, btl(1:k), ' of beer on the wall.'
	end do
	print *, 'No more bottles of beer on the wall.'
	end```