
## Language PL/B ##
---
- Author: Tony Presnow
- Date: 01/06/09
- Info: http
- Score:  (3.00 in 8 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-pl-b-1943.html
---

```./////////////////////////////////////////////////////////////////////////////.
.//   ANSI Standard PL/B version of 99 bottles of beer                      //.
.//   Tony Presnow, Triangle Mfg. Co. (www.triangleoshkosh.com)		    //.
.//   January 6, 2009                                                       //.
./////////////////////////////////////////////////////////////////////////////.
bottleCount     form    2
pauseTheProgram dim 	1
./////////////////////////////////////////////////////////////////////////////.
start
    ; set our bottle counter to 99, then begin our descent
    move "99" to bottleCount
    loop
        if (bottleCount = 1)
           ; 1 bottle of beer left
	   display *ROLL," 1 bottle of beer on the wall, 1 bottle of beer.",*n:
	           " Take one down and pass it around, no more bottles of beer on the wall.",*n,*n;
	   subtract "1" from bottleCount
        elseif (bottleCount = 2)
	   ; 2 bottles left
	   display *ROLL," 2 bottles of beer on the wall, 2 bottles of beer.",*n:
	           " Take one down and pass it around, 1 bottle of beer on the wall.",*n,*n;
	   subtract "1" from bottleCount
        else
	   ;3 or more bottles left
	   display *ROLL,bottleCount," bottles of beer on the wall, ",bottleCount," bottles of beer."
	   subtract "1" from bottleCount
	   display *ROLL," Take one down and pass it around, ",bottleCount," bottles of beer on the
wall.",*n,*n;
        endif
    repeat until (bottleCount = 0)
    display *ROLL," No more bottles of beer on the wall, no more bottles of beer.",*n:
	    " Go to the store and buy some more, 99 bottles of beer on the wall.",*n,*n;
    ;Pause the program so you can see if it worked! then press any key to exit
    keyin pauseTheProgram    
stop
.///////////////////////////////////////////////////////////////////////////////```