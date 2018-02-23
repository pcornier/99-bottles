
## Language Assembler (EDSAC) ##
---
- Author: James Lingard
- Date: 05/08/07
- Info: n/a
- Score:  (3.30 in 20 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(edsac)-1478.html
---

```[----------------------------------------]
[-      99 Bottles of Beer program      -]
[-                                      -]
[-           by James Lingard           -]
[-             January 2004             -]
[-                                      -]
[-        http://www.jchl.co.uk/        -]
[----------------------------------------]
[- Download an EDSAC simulator from     -]
[- http://www.dcs.warwick.ac.uk/~edsac/ -]
[-                                      -]
[- This program uses Initial Orders 2.  -]
[----------------------------------------]


[----------------------------------------]
[-           Code letter data           -]
[----------------------------------------]
T 44 K   [start loading at address 44]

P 128 F  [code letter ! - base address of printing subroutine]
P 192 F  [code letter H - base address of string printing subroutine]

P 320 F  [code letter N - base address of string 1]
P 384 F  [code letter M - base address of string 2]
P 448 F  [code letter & - base address of string 3]
P 512 F  [code letter L - base address of string 4]

P 256 F  [code letter X - base address of the constant data area]
P 288 F  [code letter G - base address of the variable data area]


[----------------------------------------]
[-             Main routine             -]
[----------------------------------------]
T 64 K  [start loading at address 64 - start of tank 2]
G K     [store the @ code letter]

[-- Halt if (n = 0) --]

[00] A 0 G  [load LSD(n)]
[01] S 0 X  [subtract 1]
[02] E 7 @  [jump if positive or zero]
[03] A 1 G  [load MSD(n)]
[04] S 0 X  [subtract 1]
[05] E 7 @  [jump if positive or zero]
[06] Z F    [halt]

[-- Print the first line of the poem --]

[07] T 7 F  [clear the accumulator]
[08] A 46 F [load address of string 1]
[09] T 2 G  [store address of string 1 into variable 2]
[10] A 10 @ [load return address]
[11] G !    [call printing subroutine]

[-- Print the second line of the poem --]

[12] A 47 F [load address of string 2]
[13] T 2 G  [store address of string 2 into variable 2]
[14] A 14 @ [load return address]
[15] G !    [call printing subroutine]

[-- Set n := (n-1) --]

[16] A 0 G  [load LSD(n)]
[17] S 2 X  [subtract '1']
[18] U 0 G  [store LSD(n) but don't clear the accumulator]

[19] E 25 @ [jump if positive or zero]

[20] A 3 X  [add ''10'']
[21] T 0 G  [store '9' in LSD(n)]

[22] A 1 G  [load MSD(n)]
[23] S 2 X  [subtract '1']
[24] T 1 G  [store MSD(n)]

[25] T 4 G  [clear the accumulator]

[-- Print the third line of the poem --]

[26] A 48 F [load address of string 3]
[27] T 2 G  [store address of string 3 into variable 2]
[28] A 28 @ [load return address]
[29] G !    [call printing subroutine]

[-- Jump to the start of the loop --]

[30] E @    [go back to start of loop]


[----------------------------------------]
[-         Printing subroutine          -]
[-------------------------------------- -]
[- Takes one parameter in variable 2G,  -]
[- the address of the string to print.  -]
[----------------------------------------]
T 128 K  [start loading at address 128 - start of tank 4]

[-- Set up the return link --]

[00] A 3 F  [add base of return jump instruction]
[01] T 28 ! [store return jump instruction]

[-- Output the figure shift character --]

[02] O 5 X  [output figure shift]

[-- Output MSD(n) if (n > 9) --]

[03] A 1 G  [load MSD(n)]
[04] S 2 X  [subtract '1']
[05] G 7 !  [jump if negative]
[06] O 1 G  [output MSD(n)]

[-- Output LSD(n) --]

[07] O 0 G  [output LSD(n)]

[-- Print " BOTTLE" --]

[08] T 4 G  [clear the accumulator]
[09] A 49 F [load address of string 4]
[10] T 3 G  [store address of string 4 into variable 3]
[11] A 11 ! [load return address]
[12] G H    [call string printing subroutine]

[-- Print "S" unless (n = 1) --]

[13] A 1 G  [load MSD(n)]
[14] S 2 X  [subtract '1']
[15] E 22 ! [jump if positive or zero]

[16] T 7 F  [clear the accumulator]

[17] A 0 G  [load LSD(n)]
[18] S 2 X  [subtract '1']
[19] G 22 ! [jump if negative]
[20] S 2 X  [subtract '1']
[21] G 23 ! [jump if negative]

[22] O 4 X  [output 'S']

[-- Output the passed-in string --]

[23] T 4 G  [clear the accumulator]
[24] A 2 G  [load address of string from variable 2]
[25] T 3 G  [store address of string into address 1]
[26] A 26 ! [load return address]
[27] G H    [call string printing subroutine]

[-- Return --]

[28] P F    [modifiable - space for return jump instruction]


[----------------------------------------]
[-      String printing subroutine      -]
[----------------------------------------]
[- Takes one parameter in variable 3G,  -]
[- the address of the string to print.  -]
[----------------------------------------]
T 192 K  [start loading at address 192 - start of tank 6]

[-- Set up the return link --]

[00] A 3 F  [add base of return jump instruction]
[01] T 20 H [store return jump instruction]

[-- (beginning of loop) --]
[-- Create 'load' instruction --]

[02] A 3 G  [load address of next character to print]
[03] A 7 X  [add base of instruction to load next character]
[04] T 8 H  [store instruction to load next character]

[-- Create 'output' instruction --]

[05] A 3 G  [load address of next character to print]
[06] A 8 X  [add base of instruction to output next character]
[07] T 13 H [store instruction to output next character]

[-- Load next character and quit if it's the string terminator --]

[08] P F    [modifiable - space for instruction to load next character]

[09] S 6 X  [compare with terminator character]
[10] G 13 H [continue if negative]
[11] S 0 X  [subtract 1]
[12] G 19 H [exit if negative]

[-- Output the next character --]

[13] P F    [modifiable - space for instruction to output next character]

[-- Increment the string index --]

[14] T 4 G  [clear the accumulator]
[15] A 3 G  [load address of next character to print]
[16] A 1 X  [add 2]
[17] T 3 G  [store address of next character to print]

[-- Jump to the start of the loop --]

[18] E 2 H  [jump to beginning of loop]

[-- Return --]

[19] T 7 F  [clear the accumulator before returning]
[20] P F    [modifiable - space for return jump instruction]


[----------------------------------------]
[-              Constants               -]
[----------------------------------------]
T 256 K  [start loading at address 256 - start of tank 8]

[00] P D    [number - 1]
[01] P 1 F  [number - 2]

[02] Q F    [character - '1']
[03] J F    [character - ''10'' (i.e. '9' + '1')]
[04] S F    [character - S]
[05] # F    [character - figure shift]
[06] . F    [character - string terminator character]

[07] A F    [instruction - base for character load instruction]
[08] O F    [instruction - base for character output instruction]


[----------------------------------------]
[-              Variables               -]
[----------------------------------------]
T 288 K  [start loading at address 288 -  start of tank 9]

[00] O F    [variable - LSD(n) (initially '9')]
[01] O F    [variable - MSD(n) (initially '9')]
[02] P F    [variable - parameter to printing function]
[03] P F    [variable - parameter to string printing function]

[04] P F    [scrap area]


[----------------------------------------]
[-               String 1               -]
[----------------------------------------]
T 320 K  [start loading at address 320 - start of tank 10]

! F  [ ]
O F  [O]
F F  [F]
! F  [ ]
B F  [B]
E F  [E]
E F  [E]
R F  [R]
! F  [ ]
O F  [O]
N F  [N]
! F  [ ]
T F  [T]
H F  [H]
E F  [E]
! F  [ ]
W F  [W]
A F  [A]
L F  [L]
L F  [L]
# F  [figure shift]
N F  [,]
* F  [letter shift]
& F  [\n]
. F  [end]


[----------------------------------------]
[-               String 2               -]
[----------------------------------------]
T 384 K  [start loading at address 384 - start of tank 12]

! F  [ ]
O F  [O]
F F  [F]
! F  [ ]
B F  [B]
E F  [E]
E F  [E]
R F  [R]
# F  [figure shift]
M F  [.]
* F  [letter shift]
& F  [\n]
T F  [T]
A F  [A]
K F  [K]
E F  [E]
! F  [ ]
O F  [O]
N F  [N]
E F  [E]
! F  [ ]
D F  [D]
O F  [O]
W F  [W]
N F  [N]
# F  [figure shift]
N F  [,]
* F  [letter shift]
! F  [ ]
P F  [P]
A F  [A]
S F  [S]
S F  [S]
! F  [ ]
I F  [I]
T F  [T]
! F  [ ]
A F  [A]
R F  [R]
O F  [O]
U F  [U]
N F  [N]
D F  [D]
# F  [figure shift]
N F  [,]
* F  [letter shift]
& F  [\n]
. F  [end]


[----------------------------------------]
[-               String 3               -]
[----------------------------------------]
T 448 K  [start loading at address 448 - start of tank 14]

! F  [ ]
O F  [O]
F F  [F]
! F  [ ]
B F  [B]
E F  [E]
E F  [E]
R F  [R]
! F  [ ]
O F  [O]
N F  [N]
! F  [ ]
T F  [T]
H F  [H]
E F  [E]
! F  [ ]
W F  [W]
A F  [A]
L F  [L]
L F  [L]
# F  [figure shift]
M F  [.]
* F  [letter shift]
& F  [\n]
& F  [\n]
. F  [end]


[----------------------------------------]
[-               String 4               -]
[----------------------------------------]
T 512 K  [start loading at address 512 - start of tank 16]

* F  [letter shift]
! F  [ ]
B F  [B]
O F  [O]
T F  [T]
T F  [T]
L F  [L]
E F  [E]
. F  [end]

[----------------------------------------]
[-     Directives to initial orders     -]
[----------------------------------------]
E Z  [begin execution at code letter @]
P F```