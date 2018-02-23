
## Language QModem Script ##
---
- Author: Mike Gogulski
- Date: 05/22/05
- Info: http
- Score:  (2.69 in 80 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-qmodem-script-683.html
---

```; QModem Script version of 99 Bottles of beer
; By Mike Gogulski <mike@gogulski.com> 21 March 2005
; QModem is a terminal program for MS-DOS
;
; Tested with:
;   QModem 4.6 Test Drive
(http://shareware.pcmag.com/category.php%5Bid%5D239%5BSiteID%5Dpcmag)
;   under MS-DOS 7.10 (http://newdos.yginfo.net/msdos71/)
;   under VMware Workstation 4.5.2-8848 (http://www.vmware.com/)
;   under Windows 2000 (http://www.microsoft.com/)
;
; Save as 99bottlz.qsc, start with "qmodem /s=99bottlz.qsc"
 
ASSIGN 0 99
LOOP:
 DISPLAYLN "$0 bottle(s) of beer on the wall,"
 DISPLAYLN "$0 bottle(s) of beer!"
 DISPLAYLN "Take one down, pass it around,"
 DECR 0
 DISPLAYLN "$0 bottle(s) of beer on the wall!"
 IF $0 = 0 DONE
 GOTO LOOP
DONE:
EXIT```