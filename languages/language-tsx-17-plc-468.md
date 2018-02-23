
## Language TSX 17 PLC ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.94 in 16 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-tsx-17-plc-468.html
---

```Singing '99 bottles of beer on the wall' With a Telemecanique TSX-17 PLC
                    (Programmable Logic Controller)
 
This is a condensed listing of a PL7-2 TSX-17 PLC Program for printing the 
Lyrics to everybody's favorite beer bottle song.  This program is written
to send the lyrics out of the terminal port of the TSX-17 PLC, using the
terminal type text block.  It is presumed that some sort fo serial device
would be attached to this terminal port, that the terminal port is in its 
ASCII mode, and that the external device is set for the TSX-17 PLC's default
communication parameters of 9600 baud, 8 data bits, one stop bit, Odd parity.
Both the Ladder Logic and GRAFCET languages available in the TSX-17 PLC are 
used.  

It should be noted that PLCs in general are not well suited to this type of 
application, being designed instead for real time control of machinery.

Theory Of Operation:

The code is commented below, however, here are some general comments on how
this works.  A TSX 17-PLC, like all PLCs, continuously scans it's programs
logic.  It will update it's Input information to an internal buffer, execute
the program in the PLC, Write the output information from an internal buffer
to the real-world I/O, and then go back and update the inputs.  The TSX-17's
scan, unlike many other PLC models, is divided into three parts. The first 
portion may be programmed in Ladder Logic, and is used here to capture the
'Start' input, which, when turned on, starts the serial transmission of the
data involved.

The next portion of the program is written in GRAFCET, a precursor to the
IEC1131-3 SFC language.  In this language, each 'box' represents a step, or
action, and each 'cross' represents a condition that needs to become true in
order to advance to the next step.  The actual code inside these Steps and
Transitions is here written in Ladder Logic. The GRAFCET chart here is used to 
co-ordinate the activity of the Send Line and Send CRLF Text Blocks, to keep 
the data to be sent updated, and to determine when the song lyrics are complete.

The final portion of the program, known as the POST-PROCESSING portion, is
again written in Ladder Logic.  In this program, the Text Block structures that
control serial communications to/from the TSX-17 are placed here, with their
controlling logic.  Decrementing of the number of bottles occurs here as well.

It should be noted that the TSX-17 PLC's Text Block may send a maximum of 30
bytes at a time.  Fortuitously, the phrase '99 Bottles of beer on the wall'
contains precisely 30 characters. This made it necessary to use some other
mechanism to transmit the required CRLF's - hence the need for TXT1.

Templates for the Data to be sent over the serial line are held in the TSX-17
PLC's Constant Word Memory.  These are transferred to the transmit buffers of
the text blocks as required by program in the GRAFCET chart.

CONSTANT WORD MEMORY CONFIGURATION:

This is the CONSTANT WORD configuration, where the strings to send to the 
terminal port are stored.  Constant Words 0 through 13 contain the string:

        " BOTTLES OF BEER ON THE WALL",

Constant words 15 through 29 contain:

        "TAKE ONE DOWN, PASS IT AROUND"

and Constant Word 35 contains a CRLF pair.  These were, of course, entered in
hexadecimal.

+------------------------**** CW   0   ->   CW  63 ****------------------------+
|          -----------DECIMAL-----------  ----------HEXA---------  --MESSAGE-- |
|          --0--   --1--   --2--   --3--  --0-  --1-  --2-  --3-    0  1  2  3 |
|                                                                              |
|CW   0 :  16928   21583   19540   21317  4220  544F  4C54  5345    B OT TL ES |
|CW   4 :  20256    8262   17730   21061  4F20  2046  4542  5245    O F  BE ER |
|CW   8 :  20256    8270   18516    8261  4F20  204E  4854  2045    O N  TH E  |
|CW  12 :  16727   19532       0   16724  4157  4C4C  0000  4154   WA LL .. TA |
|CW  16 :  17739   20256   17742   17440  454B  4F20  454E  4420   KE  O NE  D |
|CW  20 :  22351   11342   20512   21313  574F  2C4E  5020  5341   OW N,  P AS |
|CW  24 :   8275   21577   16672   20306  2053  5449  4120  4F52   S  IT  A RO |
|CW  28 :  20053      68       0       0  4E55  0044  0000  0000   UN D. .. .. |
|CW  32 :      0       0       0    2573  0000  0000  0000  0A0D   .. .. .. .. |
|CW  36 :      0       0       0       0  0000  0000  0000  0000   .. .. .. .. |
|CW  40 :      0       0       0       0  0000  0000  0000  0000   .. .. .. .. |
|CW  44 :      0       0       0       0  0000  0000  0000  0000   .. .. .. .. |
|CW  48 :      0       0       0       0  0000  0000  0000  0000   .. .. .. .. |
|CW  52 :      0       0       0       0  0000  0000  0000  0000   .. .. .. .. |
|CW  56 :      0       0       0       0  0000  0000  0000  0000   .. .. .. .. |
|CW  60 :      0       0       0       0  0000  0000  0000  0000   .. .. .. .. |
+------------------------------------------------------------------------------+

PREPROCESSING SECTION:

This section consists of a single line of Ladder Logic.  Here, the internal
bit B0 is set (and will remain set) when the system sees Input 0,0 transition
from an off state to an on state.


** LABEL   10              Start Condition
  I0,0     B1                                                              B0
|--| |--+--|/|-------------------------------------------------------------(S)-|
|       |                                                                      |
|       |                                                                      |
|       |                                                                  B1  |
|       +------------------------------------------------------------------( )-|


SEQUENTIAL SECTION - THE GRAFCET CHART:

Here is the Grafcet Chart for this program.  The initial step, Step 0, waits 
until the internal bit B0 mentioned above has been set, and then starts the
process.  Steps 1,3,5,and 7 load data from tables in Constant Word memory to 
the transmission table of TXT0, the Send line Text Block.  The CRLF Text Block,
as we will see in the Post-Processing section, also fires upon activation of these
steps, as well as steps 9 and 11.  Steps 2,4,6,and 8 cause the Send Line Text block
to fire. All of these steps transition to the next step upon completion of the
sending process of their associated Text Block, using internal bits B2 (for TXT0,
the Send Line Text Block) and B4 (For TXT1, the CRLF Text  Block) as flags.

The ALternative sequence under Step 11 returns control to Step 0 upon completion
of the sequence, otherwise, control is returned to Step 1, and the next bottle's
lyrics are transmitted.

---+------+------+------+------+------+------+------+------+-------------------
 V  11         V  5                                        |
 |             |                                           |
 |             |                                           |
.-.           .-.                                          |
|#| 0         | | 6                                        |
`_'           `_'                                          |
 |             |                                           |
 |             |                                           |
-+-           -+-                                          |
 |      V  11  |                                           |
 |------'      |                                           |
.-.           .-.                                          |
| | 1         | | 7                                        |
`_'           `_'                                          |
 |             |                                           |
 |             |                                           |
-+-           -+-                                          |
 |             |                                           |
 |             |                                           |
.-.           .-.                                          |
| | 2         | | 8                                        |
`_'           `_'                                          |
 |             |                                           |
 |             |                                           |
-+-           -+-                                          |
 |             |                                           |
 |             |                                           |
.-.           .-.                                          |
| | 3         | | 9                                        |
`_'           `_'                                          |
 |             |                                           |
 |             |                                           |
-+-           -+-                                          |
 |             |                                           |
 |             |                                           |
.-.           .-.                                          |
| | 4         | | 10                                       |
`_'           `_'                                          |
 |             |                                           |
 |             |                                           |
-+-           -+-                                          |
 |             |                                           |
 |             |                                           |
.-.           .-.                                          |
| | 5         | | 11                                       |
`_'           `_'                                          |
 |             |------.                                    |
 |             |      |                                    |
-+-           -+-    -+-                                   |
 |             |      |                                    |
 |             |      |                                    |
 |             |      |                                    |
 V  6          V  0   V  1                                 |
                                                           |

SEQUENTIAL SECTION: CODE ASSOCIATED WITH STEPS AND TRANSITIONS


Step 0: Set TXT0 to send 30 characters, set bottles to 99.

** X0                      Init bottles
                                                         +------OPERATE-------+
|-------------------------------------------------------+|99  -> W0           ||
|                                                       |+--------------------+|
|                                                       |                      |
|                                                       |+------OPERATE-------+|
|                                                       +|30  -> TXT0,L       ||
|                                                        +--------------------+|


X6: send Line 3
** X6


Transition upon seeing B0 on.

** X0  --> X1              Start condition
   B0
|--| |---------------------------------------------------------------------(#)-|


After line 3 sent, wait till TXT0 done.

** X6  --> X7
   B2
|--| |---------------------------------------------------------------------(#)-|



X1: Load Line 1 info.  Convert Bottle number (in W0) to ASCII, write as 6 chars
    with leading zeros to W8, thus ensuring W10 contains the last two chars.

    Copy Line 1 info to the remainder of TXT0's transmit table.

** X1                      Load Line 1
                                                         +------OPERATE-------+
|-------------------------------------------------------+|BTA W0  -> W8       ||
|                                                       |+--------------------+|
|                                                       |                      |
|                                                       |+------OPERATE-------+|
|                                                       ||CW0[14]  -> W11[14] ||
|                                                       |+--------------------+|
|                                                       |                      |
|                                                       |                  B0  |
|                                                       +------------------(R)-|


X7: Similar to above for Line 4 - handle special case of NO Bottles (Hex 6f4e
    is 'NO')

** X7
                                                         +------OPERATE-------+
|-------------------------------------------------------+|BTA W0  -> W8       ||
|                                                       |+--------------------+|
|                                                       |                      |
|                                                       |+------OPERATE-------+|
|                                                       +|CW0[14]  -> W11[14] ||
|                                                        +--------------------+|
|                                                                              |
|+---COMPAR----+                                         +------OPERATE-------+|
||W0 <= 0      |-----------------------------------------|H'6F4E'  -> W10     ||
|+-------------+                                         +--------------------+|


When CRLF TXT block is done, continue
** X1  --> X2
   B4
|--| |---------------------------------------------------------------------(#)-|


** X7  --> X8
   B4
|--| |---------------------------------------------------------------------(#)-|


** X2


** X8


** X2  --> X3
   B4
|--| |---------------------------------------------------------------------(#)-|


** X8  --> X9
   B2
|--| |---------------------------------------------------------------------(#)-|


X3: Line 2 is like Line 1, but shorter - send same thing, only fewer bytes.
** X3
                                                         +------OPERATE-------+
|--------------------------------------------------------|18  -> TXT0,L       ||
|                                                        +--------------------+|


** X9


** X3  --> X4              b2
   B2
|--| |---------------------------------------------------------------------(#)-|


** X9  --> X10
   B4
|--| |---------------------------------------------------------------------(#)-|


** X4


** X10


** X4  --> X5
   B4
|--| |---------------------------------------------------------------------(#)-|


** X10 --> X11

|--------------------------------------------------------------------------(#)-|


X5: Load "Take one down, etc line".  Set  Transmit length back to 30 chars.
** X5
                                                         +------OPERATE-------+
|-------------------------------------------------------+|CW15[15]  -> W10[15]||
|                                                       |+--------------------+|
|                                                       |                      |
|                                                       |+------OPERATE-------+|
|                                                       +|30  -> TXT0,L       ||
|                                                        +--------------------+|

** X11


** X5  --> X6
   B4
|--| |---------------------------------------------------------------------(#)-|


** X11 --> X0
   B4    +---COMPAR----+
|--| |---|W0 <= 0      |---------------------------------------------------(#)-|
|        +-------------+                                                       |


** X11 --> X1
   B4    +---COMPAR----+
|--| |---|W0 >  0      |---------------------------------------------------(#)-|
|        +-------------+                                                       |

POST PROCESSING SECTION:

10: The SEND LINE INFO TEXT BLOCK.  When Steps 2,4,6, or 8 are activated (shown
by X2, X4, X6, and X8 respectively) Send the contents of Words W10 through W25
to the terminal port.  Upon completion, set B2 for a single PLC scan.

** LABEL   10              Line Text Block
   X2             R+--TXT0---+D            B3                              B2
|--| |--+        --|         |----------+--|/|-----------------------------( )-|
|       |          |         |          |                                      |
|       |          |         |          |                                      |
|  X4   |         S|TER      |E         |                                  B3  |
|--| |--+-------+--|         |--        +----------------------------------( )-|
|       |       |  |LOCAL    |                                                 |
|       |       |  |         |                                                 |
|  X6   |       | O|         |                                                 |
|--| |--|       +--|W10      |                                                 |
|       |          |         |                                                 |
|       |          |T,L: 30  |                                                 |
|  X8   |         I|T,S:     |                                                 |
|--| |--+        --|         |                                                 |
                   +---------+


20: The SEND CRLF Text Block.

Upon activation of steps 1,3,5,7,9, or 11, send the contents of CW35 to the
terminal port.  Set B4 for a single PLC scan upon completion.

** LABEL   20              CRLF Text Block
   X1                             R+--TXT1---+D            B5              B4
|--| |--+---------------+        --|         |----------+--| |-------------( )-|
|       |               |          |         |          |                      |
|       |               |          |         |          |                      |
|  X3   |          X7   |         S|TER      |E         |                  B5  |
|--| |--|       +--| |--+-------+--|         |--        +------------------( )-|
|       |       |       |       |  |LOCAL    |                                 |
|       |       |       |       |  |         |                                 |
|  X5   |       |  X9   |       | O|         |                                 |
|--| |--+       |--| |--|       +--|CW35     |                                 |
|               |       |          |         |                                 |
|               |       |          |T,L: 2   |                                 |
|               |  X11  |         I|T,S:     |                                 |
|---------------+--| |--+        --|         |                                 |
                                   +---------+


If X7 is active, decrement the Bottles number stored in W0.

** LABEL   30
   X7      B7                                            +------OPERATE-------+
|--| |--+--|/|-------------------------------------------|W0  -  1  -> W0     ||
|       |                                                +--------------------+|
|       |                                                                      |
|       |                                                                  B7  |
|       +------------------------------------------------------------------( )-|


That's it.  Space does not permit a complete explanation of how Ladder Logic and
GRAFCET work and interact in PLCs, but I hope you caught the gist of the program.```