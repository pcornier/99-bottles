
## Language Commodore 8-bit Basic ##
---
- Author: barrym
- Date: 04/07/10
- Info: n/a
- Score:  (3.03 in 30 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-commodore-8-bit-basic-2358.html
---

```1 REM BEER SONG FOR 8-BIT COMMODORE
2 REM BASIC BY BARRYM 2010-04-06
3 REM COMPLETE AND CORRECT LYRICS ARE
4 REM PRINTED, BUT IN UPPER-CASE ONLY
5 REM TO MAINTAIN COMPATIBILITY WITH
6 REM THE VERY OLD MACHINES.
10 REM THIS VERSION SHOULD RUN ON ANY
11 REM PET, VIC-20, C-64, WHATEVER.
12 REM WHAT MAKES THIS VERSION SPECIAL
13 REM IS ITS ABILITY TO PRINT A NICE
14 REM LOOKING SONG (WITHOUT BROKEN
15 REM WORDS OR UNINTENDED BLANK LINES)
16 REM REGARDLESS OF SCREEN WIDTH.
17 REM THIS FEATURE IS CRITICAL ON THE
18 REM VIC-20 WITH 22 COLUMNS (DANG!)
19 REM --------------------------------
20 REM B = CURRENT NUMBER OF BOTTLES
21 REM D = WIDTH OF DISPLAY IN COLUMNS
22 REM W = SUB-PHRASE FORMAT TYPE
23 REM     (SEE LINES 190-198 BELOW)
24 REM A$ = CURRENT SENTENCE
25 REM B$ = CURRENT CHAR
26 REM Q = POINTER TO CURRENT CHAR
29 REM --------------------------------
99 D=PEEK(213)+1:B=99
100 PRINT:A$="":W=1:GOSUB200:A$=A$+", "
110 W=0:GOSUB200:IFB=0THEN140
120 A$="TAKE ONE DOWN AND PASS IT AROUND, "
130 B=B-1:W=2:GOSUB200:GOTO100
140 A$="GO TO THE STORE AND BUY SOME MORE, "
150 B=99:W=3
189 REM -------------------------------
190 REM ADD APPROPRIATE SUB-PHRASE TO 
191 REM THE CURRENT SENTENCE, AND PRINT
192 REM IT IF IT'S COMPLETE, USING W
193 REM VARIABLE FOR GUIDANCE:
194 REM W=0: '(B) BOTTL ... BEER.'
195 REM   1: '(B) BOTTL ... THE WALL'
196 REM     AND RETURN WITHOUT PRINTING
197 REM   2: '(B) BOTTL ... THE WALL.'
198 REM   3: LIKE 2, BUT LAST TIME THRU
200 IFBTHENA$=A$+MID$(STR$(B),2):GOTO230
220 A$=A$+"NO MORE"
230 A$=A$+" BOTTLE":IFB<>1THENA$=A$+"S"
240 A$=A$+" OF BEER"
250 IFW>0THENA$=A$+" ON THE WALL"
260 IFW<>1THENA$=A$+"."
270 IFW=1THENRETURN
289 REM -------------------------------
290 REM PRINT THE SENTENCE IN A$ ONE 
291 REM WORD AT A TIME, TRYING NOT TO
292 REM BREAK ANY WORDS AGAINST THE
293 REM RIGHT SIDE OF THE SCREEN.
294 REM AN ADDED BONUS: THIS ROUTINE
295 REM SLOWS A 1 MHZ MACHINE DOWN JUST
296 REM ENOUGH FOR A HUMAN TO READ
297 REM ALONG WITH IT!
300 Q=1:IFA$=""THEN340
310 Q=Q+1:B$=MID$(A$,Q,1):IFB$<>" "ANDB$<>""THEN310
320 IFD-Q<POS(0)THENPRINT
330 PRINTLEFT$(A$,Q-1);:A$=MID$(A$,Q):GOTO300
340 IFPOS(0)THENPRINT
350 IFW<3THENRETURN```