
## Language HERA ##
---
- Author: Micah Walter
- Date: 05/01/12
- Info: http
- Score:  (1.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-hera-2876.html
---

```DLABEL(s9_bottleso)
TIGER_STRING(" bottles of beer on the wall,\n")

DLABEL(s8_bottleso)
TIGER_STRING(" bottles of beer.\n")

DLABEL(s7_takeoned)
TIGER_STRING("take one down, pass it around,\n")

DLABEL(s6_bottleso)
TIGER_STRING(" bottles of beer on the wall.\n\n")

DLABEL(s5_takeoned)
TIGER_STRING("take one down, pass it around,\n")

DLABEL(s4_1bottleo)
TIGER_STRING("1 bottle of beer on the wall.\n\n")

DLABEL(s3_1bottleo)
TIGER_STRING("1 bottle of beer on the wall,\n1 bottle of beer.\n")

DLABEL(s2_takeoned)
TIGER_STRING("take one down, pass it around,\n")

DLABEL(s1_nomorebe)
TIGER_STRING("no more beer on the wall!\n")


SETCB()


// Declaration of implicit variable i
SET(r3, 1)
SET(r1, 0)
ADD(r1, r1,FP)
STORE(r3, 0,r1)

// Determining upper bound for implicit variable i
SET(r3, 100)

LABEL(for_test_0)
SET(r1, 0)
ADD(r1, r1,FP)
LOAD(r1, 0,r1)
CMP(r3, r1)
BS(end_loop_0)
BZ(end_loop_0)

// DO statement for FOR loop 0

// Beginning of IF condition 0B
SET(r2, 100)
SET(r1, 0) // Getting variable i
// function depth difference 0
ADD(Rt, R0,FP) // Tracing back the static link path
ADD(r1, r1,Rt)
LOAD(r1, 0,r1)
SUB(r2, r2,r1)
SET(r1, 1)

// Beginning of GT (>) operation 0BC
CMP(r2, r1)
BG(gt_0BC) // True if difference is greater than zero
SET(r2, 0)
BR(end_gt_0BC)
LABEL(gt_0BC)
SET(r2, 1)
LABEL(end_gt_0BC)

CMP(r2, r0)
BZ(else_0B)

// THEN statement for condition 0B

// Initializing function printint()
MOVE(R12, SP) // Make the old SP the new FP
INC(SP, 4)    // 3 links, plus 1 parameters

// Parameter 1 of printint()
SET(r2, 100)
SET(r1, 0) // Getting variable i
// function depth difference 0
ADD(Rt, R0,FP) // Tracing back the static link path
ADD(r1, r1,Rt)
LOAD(r1, 0,r1)
SUB(r2, r2,r1)
STORE(r2, 3,R12)

// Calling function printint()
CALL(R12, printint)
LOAD(r2, 3,R12) // Result
DEC(SP, 4)



// Initializing function print()
MOVE(R12, SP) // Make the old SP the new FP
INC(SP, 4)    // 3 links, plus 1 parameters

// Parameter 1 of print()
SET(r1, s9_bottleso)
STORE(r1, 3,R12)

// Calling function print()
CALL(R12, print)
LOAD(r1, 3,R12) // Result
DEC(SP, 4)



// Initializing function printint()
MOVE(R12, SP) // Make the old SP the new FP
INC(SP, 4)    // 3 links, plus 1 parameters

// Parameter 1 of printint()
SET(r2, 100)
SET(r1, 0) // Getting variable i
// function depth difference 0
ADD(Rt, R0,FP) // Tracing back the static link path
ADD(r1, r1,Rt)
LOAD(r1, 0,r1)
SUB(r2, r2,r1)
STORE(r2, 3,R12)

// Calling function printint()
CALL(R12, printint)
LOAD(r2, 3,R12) // Result
DEC(SP, 4)



// Initializing function print()
MOVE(R12, SP) // Make the old SP the new FP
INC(SP, 4)    // 3 links, plus 1 parameters

// Parameter 1 of print()
SET(r1, s8_bottleso)
STORE(r1, 3,R12)

// Calling function print()
CALL(R12, print)
LOAD(r1, 3,R12) // Result
DEC(SP, 4)



// Beginning of IF condition 0BXT2
SET(r2, 100)
SET(r1, 0) // Getting variable i
// function depth difference 0
ADD(Rt, R0,FP) // Tracing back the static link path
ADD(r1, r1,Rt)
LOAD(r1, 0,r1)
SUB(r2, r2,r1)
SET(r1, 2)

// Beginning of GT (>) operation 0BXT2C
CMP(r2, r1)
BG(gt_0BXT2C) // True if difference is greater than zero
SET(r2, 0)
BR(end_gt_0BXT2C)
LABEL(gt_0BXT2C)
SET(r2, 1)
LABEL(end_gt_0BXT2C)

CMP(r2, r0)
BZ(else_0BXT2)

// THEN statement for condition 0BXT2

// Initializing function print()
MOVE(R12, SP) // Make the old SP the new FP
INC(SP, 4)    // 3 links, plus 1 parameters

// Parameter 1 of print()
SET(r1, s7_takeoned)
STORE(r1, 3,R12)

// Calling function print()
CALL(R12, print)
LOAD(r1, 3,R12) // Result
DEC(SP, 4)



// Initializing function printint()
MOVE(R12, SP) // Make the old SP the new FP
INC(SP, 4)    // 3 links, plus 1 parameters

// Parameter 1 of printint()
SET(r2, 99)
SET(r1, 0) // Getting variable i
// function depth difference 0
ADD(Rt, R0,FP) // Tracing back the static link path
ADD(r1, r1,Rt)
LOAD(r1, 0,r1)
SUB(r2, r2,r1)
STORE(r2, 3,R12)

// Calling function printint()
CALL(R12, printint)
LOAD(r2, 3,R12) // Result
DEC(SP, 4)



// Initializing function print()
MOVE(R12, SP) // Make the old SP the new FP
INC(SP, 4)    // 3 links, plus 1 parameters

// Parameter 1 of print()
SET(r2, s6_bottleso)
STORE(r2, 3,R12)

// Calling function print()
CALL(R12, print)
LOAD(r2, 3,R12) // Result
DEC(SP, 4)

BR(end_if_0BXT2)

// ELSE statement for condition 0BXT2
LABEL(else_0BXT2)

// Initializing function print()
MOVE(R12, SP) // Make the old SP the new FP
INC(SP, 4)    // 3 links, plus 1 parameters

// Parameter 1 of print()
SET(r1, s5_takeoned)
STORE(r1, 3,R12)

// Calling function print()
CALL(R12, print)
LOAD(r1, 3,R12) // Result
DEC(SP, 4)



// Initializing function print()
MOVE(R12, SP) // Make the old SP the new FP
INC(SP, 4)    // 3 links, plus 1 parameters

// Parameter 1 of print()
SET(r2, s4_1bottleo)
STORE(r2, 3,R12)

// Calling function print()
CALL(R12, print)
LOAD(r2, 3,R12) // Result
DEC(SP, 4)

LABEL(end_if_0BXT2)

BR(end_if_0B)

// ELSE statement for condition 0B
LABEL(else_0B)

// Initializing function print()
MOVE(R12, SP) // Make the old SP the new FP
INC(SP, 4)    // 3 links, plus 1 parameters

// Parameter 1 of print()
SET(r1, s3_1bottleo)
STORE(r1, 3,R12)

// Calling function print()
CALL(R12, print)
LOAD(r1, 3,R12) // Result
DEC(SP, 4)



// Initializing function print()
MOVE(R12, SP) // Make the old SP the new FP
INC(SP, 4)    // 3 links, plus 1 parameters

// Parameter 1 of print()
SET(r1, s2_takeoned)
STORE(r1, 3,R12)

// Calling function print()
CALL(R12, print)
LOAD(r1, 3,R12) // Result
DEC(SP, 4)



// Initializing function print()
MOVE(R12, SP) // Make the old SP the new FP
INC(SP, 4)    // 3 links, plus 1 parameters

// Parameter 1 of print()
SET(r2, s1_nomorebe)
STORE(r2, 3,R12)

// Calling function print()
CALL(R12, print)
LOAD(r2, 3,R12) // Result
DEC(SP, 4)

LABEL(end_if_0B)


LOAD(r1, 0,FP)
INC(r1, 1)
STORE(r1, 0,FP)
BR(for_test_0)
LABEL(end_loop_0)```