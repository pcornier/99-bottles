
## Language CADOL II ##
---
- Author: David Weintraub
- Date: 07/28/06
- Info: n/a
- Score:  (2.38 in 42 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-cadol-ii-1222.html
---

```Cadol II was the language of the Cado Systems. It was a 2 KHz 8085A eight bit processor with either
32 or 48K of memory. Cado was a popular business system in the late 1970s and early 1980s. The early
versions had 2 to 3 8" single sided floppies for storing data (576K per disk). Later versions had
double sided floppies, and even a hard drive as large as 20 megabytes! They were all multiple user
systems. The 32K model supported 2 users and the 48K model supported 4 users.


# PROG #20

#
#    ####BUILD SCREEN
#

    RESET
    ATT 6
    SPACE 20
    DISPLAY "BOTTLES OF BEER SONG"
    NL
    NL
    SPACE 10
    ATT 0		#XX BOTTLES OF BEER ON THE WALL
    NL
    SPACE 10
    ATT 0		#XX BOTTLES OF BEER
    NL 2
    SPACE 10
    ATT 0		#TAKE ONE DOWN AND PASS IT AROUND
    NL
    SPACE 10
    ATT 0		#XX BOTTLES OF BEER

#
#   ####INITIALIZE THE SONG BUFFER
#

    N = 1		#INITIALIZE SONG
    GOSUB 21
#
#   ####NOW SING THE SONG
#

    LET N10 = 99		#BOTTLES OF BEER
10  IF N10 = 0 GO TO 900
    CLEAR
    
#
#   ####XX BOTTLE(S) OF BEER ON THE WALL
#
    LET N = 2
    LET N1 = N10
    GOSUB 21
    DISPLAY A			#XX BOTTLE(S) OF BEER
    SPACE
    STAY

    LET N = 3			#ON THE WALL
    GOSUB 21
    DISPLAY A

#
#   ####XX BOTTLE(S) OF BEER
#

    LET N = 2
    LET N1 = N10
    GOSUB 21
    DISPLAY A

#
#   ####TAKE ONE DOWN AND PASS IT AROUND
#

    LET N = 3
    GOSUB 21
    DISPLAY A

#
#   ####XX BOTTLE(S) OF BEER
#
    LET N10 = N10 - 1		#REMOVE ONE BOTTLE OF BEER
    LET N1 = N10
    LET N = 2
    GOSUB 21
    LET N = 2
    LET N1 = N10		#BOTTLES OF BEER
    GOSUB 21
    DISPLAY A			#BOTTLE OR BOTTLES OF BEER
    DELAY 2
    GO TO 10

900 NOP				#END OF PROGRAM
     LOAD 0			#BACK TO MENU
    
 END 20

# PROG #21

#
#   ####DECIDE WHETHER SINGULAR OR PLURAL BOTTLE
#

IF N = 1 GO TO 10	#LOAD THE X BUFFER
IF N = 2 GO TO 20	#N1 BOTTLE(S) OF BEER
IF N = 3 GO TO 30	#ON THE WALL
IF N = 4 GO TO 40	#LOAD UP "TAKE ONE DOWN AND PASS IT AROUND
GO TO 100		#OBVIOUSLY YOU MADE AN ERROR

#
#   ####LOAD UP X BUFFER
#

10 INIT XP
    X(A) = " BOTTLES OF BEER"
    X(A) = " BOTTLE OF BEER"
    X(A) = "ON THE WALL"
    X(A) = "TAKE ONE DOWN PASS IT AROUND"
    X(A) = "NO MORE"



#
#   ####SINGLE OR PLURAL BOTTLE OF BEER
#

20  IF N1 = 0 GO TO 22		#NO MORE BOTTLES
    INIT ZP
    SPOOL (2.0) N1 TO Z(A)	#NUMBER OF BOTTLES OF BEER
    INIT XP
    IF N1 = 1 SKIP X(A)		#SINGULAR BOTTLE OF BEER
    LET Z(A) = X(A)
    INIT ZP
    LET A = Z(A)
    RETURN

22  INIT XP			#NO MORE BOTTLES OF BEER
    LET A = X(A)		#BOTTLES OF BEER
    SKIP X(A) 3			#BOTTLE OF BEER...TAKE ONE DOWN
    INIT ZP
    SPOOL X(A) TO Z(A)		#NO MORE 
    LET Z(A) = A		#BOTTLE OF BEER ON THE WALL
    INIT ZP
    LET A = Z(A)
    RETURN	

#
#   ####DISPLAY "ON THE WALL"
#

30  INIT XP
    SKIP X(A) 2		#PLURAL AND SINGULAR BOTTLE(S) OF BEER
    A = X(A)		#ON THE WALL
    RETURN

40  INIT XP
    SKIP X(A) 3		#BOTTLE OF BEER...ON THE WALL
    A = X(A)		#TAKE ONE DOWN AND PASS IT AROUND
    RETURN


#
#   ####ERROR
#

100 A = "BAD FUNCTION SET IN <N> REGISTER"
    N = PROG
    LOAD 32		#ERROR DISPLAY
 END 21


How did they do this? Simple, they designed the machine to use a minimum amount of memory. There
wasn't even a file system. Each disk had 72 tracks. Each track had 32 sectors. Each sector had 256
bytes. You specified where files were located by track and drive. If you weren't careful, you could
overlay two files. We kept paper charts for each system mapping the files and program locations on
the drives.

Programs shared the same space as files. You had eight libraries per drive, and each library
consisted of eight tracks. Each sector can hold one program which couldn't be more than 256 bytes.
Otherwise, you had to go to another program in the library. Each library could have 256 programs.
Library #0 took tracks 4 to 11. Library #2 took tracks 12 to 19. Library #3 took tracks 20 to 27,
etc. The first four tracks (0 to 3) contained the basic OS. If you weren't careful, a file could
overwrite your programs or maybe you put your programs on top of your files.

Programs weren't compiled, but translated into an Intermediate Language (IL Code). Each command in
Cadol was represented by a single IL byte. When the program was executed, the byte was doubled which
was an entry into a memory table. That was a pointer to the assembly routine that executed the
instructions. Instruction data followed the IL byte. For example, NL would move the cursor to the
beginning of the line, and down to the next line. It was followed by a byte that explained how many
new lines to display, so a NL command took up two bytes in IL. Text was expensive since each
character took up a byte of IL code.

Text strings were represented in an interesting fashion. The high byte was turned on except for the
last character where it was turned off. This is how Cadol knew where the string ended. This becomes
important when you program.

There was not much in memory. You had 26 numeric registers (N through N25) which were six bytes
long. Then you had 9 alpha registers (A, B, and C were 40 bytes long. A1, A2, B1, B2, C1, and C2
were 20 bytes long). The registers were arranged in this order A, A1, A2, B, B1, B2, C, C1, C2. If
you stored 80 bytes in A, then it would also use the storage in A1 and A2. The longest string you
could store would be 180 bytes, and it would take up all 9 Alpha registers. All memory was global to
all programs the user executed. Therefore, it was standard to use the A, N, N1, N2, N3, and N4
registers for GOSUB data and not to store any long term data in them.

You also had 5 buffers of 255 bytes a piece. X, Y, and Z were general purpose buffers. The R buffer
was the read buffer, and the W buffer was the write buffer. You had to be careful with the Z buffer
because it was used by system routines, so storage was very temporary. Fortunately, records were
variable lengths (because string storage was variable length), so if you knew that the records you
were reading or writing were no more than 150 bytes, you could use the last 100 bytes of the R and W
buffer for storage.

You manipulated the buffers with SKIP and INIT statements. INIT would set the buffer pointer to the
first byte of the buffer. SKIP X(A) 3 would skip 3 alpha fields in the X buffer. SKIP X(4) would
skip four bytes in the X buffer. Every time you mentioned a buffer (Like "DISPLAY X(A)") you
advanced the buffer pointer to the next field.

The screen on the CADOL computer was 80 x 24 lines. RESET completely cleared the screen. Attributes
(the ATT) command put attributes on the screen. ATT 0 started an unprotected field. ATT 2 was a
protected field ATT 4 was half brightness. ATT 8 was flashing, etc. You added Attributes values to
produce different things. For example, ATT 6 was half bright and protected. Every time you said
"DISPLAY", it would go to the next unprotected field (unless you said STAY before the DISPLAY).
CLEAR Cleared all unprotected fields, and move the cursor to the HOME position.

Well, with this background, you should be able to read the little program I wrote in Cadol. By the
way, this is two programs. Program #20 is the main program, and Program #21 contains some
sub-routines for Program #20 because you only have 255 IL bytes per program, and you almost always
ended up doing GOSUBs and LOADs to other programs. Program #32 is the standard error routine, and
Program #0 was the main menu program.```