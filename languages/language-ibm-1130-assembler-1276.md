
## Language IBM 1130 Assembler ##
---
- Author: Steve Ketcham
- Date: 09/18/06
- Info: http
- Score:  (3.35 in 23 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ibm-1130-assembler-1276.html
---

```// JOB
// ASM
*LIST
                    ****************************************************
                    * WRITE THE LYRICS OF '99 BOTTLES OF BEER' ON
                    * THE 1132 PRINTER.
                    *
                    * WRITTEN BY STEVE KETCHAM 17 SEP 2006 FOR
                    * WWW.99-BOTTLES-OF-BEER.NET
                    *
                    * THE 1130 HAS ONE 16-BIT ACCUMULATOR, A 16-BIT
                    * ACCUMULATOR EXTENSION, AND THREE INDEX REGISTERS.
                    * THIS PROGRAM HAS BEEN TESTED WITH THE SIMH 1130
                    * EMULATOR, RUNNING DISK MANAGEMENT SYSTEM VERSION 2
                    * MOD 12.
                    ****************************************************
                    * SET THE NUMBER OF BOTTLES TO 99.
                    *
                    BOTTL DC      99            LOOP COUNTER
                    *
                    * THESE CONSTANTS ARE USED DURING THE COURSE OF
                    * THE MAIN LOOP.  THE 1130 INSTRUCTION SET 
                    * REQUIRED LOADS FROM MENORY, NOT FROM THE
                    * INSTRUCTION ITSELF.
                    *
                    ONE   DC      1             LOOP DECREMENT
                    TWO   DC      2             TEST VALUE
                    ****************************************************
                    * MAIN PROGRAM START
                    *
                    * PROGRAM OUTPUT IS TO THE IBM 1132 PRINTER, A
                    * VERY SLOW DEVICE.  IT HAS THE ADVANTAGE OF
                    * ACTUALLY USING EBCDIC CODING FOR ITS OUTPUT.
                    * OTHER DEVICES USED OTHER CHARACTER ENCODINGS,
                    * AND WOULD REQUIRE EXPLICIT CONVERSION.             
                    *
                    START EQU     *             PROGRAM START ADDRESS
                    *
                    * SKIP TO THE TOP OF THE NEXT PAGE ON THE PRINTER.
                    * PRNT1 IS THE DMS PRINT SUBROUTINE.  IT REQUIRES
                    * 1 OR 3 ARGUMENTS, DEPENDING ON FUNCTION.
                    *
                          LIBF    PRNT1         CALL PRINT FOR CONTROL
                          DC      /3100         SKIP TO CHANNEL 1
                    *
                    * BSI - BRANCH AND STORE INSTRUCTION REGISTER -
                    * IS A SUBROUTINE CALL.  YOU HAVE TO TEST EACH
                    * PRINT CALL FOR COMPLETION.
                    *
                          BSI  L  PRTST         TEST FOR COMPLETION
                    *
                    ****************************************************
                    * START OF MAIN LOOP
                    *
                    * WE'LL GET THE CURRENT NUMBER OF BOTTLES, TEST
                    * TO SEE IF WE HAVE MORE THAN TWO LEFT, EXACTLY
                    * TWO LEFT, OR ONE LEFT, AND PRINT THE APPROPRIATE
                    * LYRIC.
                    *
                    LOOP  EQU     *
                          LD      BOTTL         GET THE NUMBER OF BOTTLES
                          S       TWO           SUBTRACT 2
                          BSC  L  PRALL,Z-      IF THE RESULT IS POSITIVE,
                    *                           BRANCH TO PRALL.
                          BSC  L  PRONE,Z+      IF THE RESULT IS NEGATIVE,
                    *                           BRANCH TO PRONE.
                          BSC  L  PRTWO
                    ****************************************************
                    * BUFFERS FOR USE FROM 99 BOTTLES TO 3 BOTTLES
                    *
                    BUFFR DC      26            TEXT LENGTH
                          EBC     .XX BOTTLES OF BEER ON THE WALL, .
                    BF2   EBC     .XX BOTTLES OF BEER. .
                    *
                    TAKE  DC      33
                          EBC     .TAKE ONE DOWN AND PASS IT AROUND, .
                    TK1   EBC     .XX BOTTLES OF BEER ON THE WALL. .
                    *
                    * HANDLE LINES FROM 99 BOTTLES TO 3 BOTTLES
                    *
                    PRALL EQU     *             PROCESS LINES 99 TO 3.
                          LD   L  BOTTL
                          BSI  L  MKEBC         CONVERT TO EBCDIC
                          STO     BUFFR+1       SAVE IT IN THE LYRIC
                          STO     BF2           BOTH TIMES
                          BSI  L  PRLIN         WRITE THE CURRENT LYRIC
                          DC      BUFFR         ADDRESS OF BUFFER
                          LD   L  BOTTL         RELOAD COUNT
                          S    L  ONE           SUBTRACT ONE
                          STO  L  BOTTL         SAVE IT
                          BSI  L  MKEBC         CONVERT TO EBCDIC
                          STO     TK1           STORE IT IN LINE 2
                          BSI  L  PRLIN         PRINT THE SECOND LINE
                          DC      TAKE
                          LIBF    PRNT1         SKIP ONE LINE
                          DC      /3D00         
                          BSI  L  PRTST         TEST FOR COMPLETION
                          BSC  L  LOOP          DO NEXT LINE
                    ****************************************************
                    * BUFFER FOR THE 2 BOTTLE CASE.  ONLY THE SECOND
                    * LINE IS DIFFERENT, SO WE USE THE FIRST LINE
                    * FROM THE NORMAL CASE, ABOVE.
                    *
                    TAKE2 DC      32
                          EBC     .TAKE ONE DOWN AND PASS IT AROUND, .
                    TK2   EBC     .XX BOTTLE OF BEER ON THE WALL..
                    *
                    * HANDLE THE CASE WHEN WE HAVE EXACTLY TWO
                    * BOTTLES LEFT.
                    *
                    PRTWO EQU     *
                          LD   L  BOTTL         RELOAD THE NO OF BOTTLES
                          BSI  L  MKEBC         CONVERT TO EBCDIC
                          STO     BUFFR+1       SAVE IT IN THE LYRIC
                          STO     BF2           BOTH TIMES
                          BSI  L  PRLIN         WRITE THE CURRENT LYRIC
                          DC      BUFFR         ADDRESS OF BUFFER
                          LD   L  BOTTL         RELOAD COUNT
                          S    L  ONE           SUBTRACT ONE
                          STO  L  BOTTL         SAVE IT
                          BSI  L  MKEBC         CONVERT TO EBCDIC
                          STO     TK2           STORE IT IN LINE 2
                          BSI  L  PRLIN         PRINT THE SECOND LINE
                          DC      TAKE2         ADDRESS OF BUFFER
                          LIBF    PRNT1         SKIP ONE LINE
                          DC      /3D00         
                          BSI  L  PRTST         TEST FOR COMPLETION
                          BSC  L  LOOP          DO NEXT LINE
                    ****************************************************
                    * BUFFERS FOR THE 1 BOTTLE CASE
                    *
                    BUFF1 DC      25            TEXT LENGTH
                          EBC     . 1 BOTTLE OF BEER ON THE WALL,.
                          EBC     .  1 BOTTLE OF BEER. .
                    *
                    TK0   DC      37
                          EBC     .TAKE ONE DOWN AND PASS IT AROUND, .
                          EBC     .NO MORE BOTTLES OF BEER ON THE WAL.
                          EBC     .L. .
                    NO1   DC      31
                          EBC     .NO MORE BOTTLES OF BEER ON THE WAL.
                          EBC     .L, NO MORE BOTTLES OF BEER. .
                    NO2   DC      33
                          EBC     .GO TO THE STORE AND BUY SOME MORE,.
                          EBC     . 99 BOTTLES OF BEER ON THE WALL..
                    *
                    * PRINT THE LAST FOUR LINES.
                    *
                    PRONE EQU     *
                          BSI     PRLIN         1 BOTTLE OF BBER
                          DC      BUFF1
                          BSI     PRLIN         NO MORE BOTTLES
                          DC      TK0
                          LIBF    PRNT1         SKIP A LINE
                          DC      /3D00         
                          BSI     PRTST         TEST FOR COMPLETION
                          BSI     PRLIN         NO MORE BOTTLES
                          DC      NO1
                          BSI     PRLIN         GO TO THE STORE
                          DC      NO2
                          EXIT                  RETURN TO MONITOR
                    ****************************************************
                    * SUBROUTINE TO PRINT ONE LINE AND WAIT FOR 
                    * COMPLETION.
                    * 
                    * THE ADDRESS OF THE WORD AFTER THE BSI INSTRUCTION
                    * IS STORED IN PRLIN.  THIS IS THE ADDRESS OF THE
                    * ARGUMENT, AND IS MANIPULATED TO GET THE RETURN
                    * ADDRESS.
                    *
                    PRLIN DC      *-*           FOR RETURN ADDRESS
                          LD   I  PRLIN         LOAD THE ARGUMENT ADDR
                          STO     PADDR         STORE IT IN CALL, BELOW
                          MDX  L  PRLIN,1       INCREMENT ADDR FOR RETURN
                          LIBF    PRNT1         CALL DMS PRINT ROUTINE
                          DC      /2000         CONTROL TO PRINT ONE LINE
                    PADDR DC      *-*           ADDR OF BUFFER
                          DC      PRERR         ADDR OF ERROR RTN
                          BSI     PRTST         TEST FOR COMPLETION
                          BSC  I  PRLIN         RETURN TO CALLER
                    ****************************************************
                    * SUBROUTINE TO TEST FOR THE COMPLETION OF THE PRINT 
                    * OPERATION.
                    *
                    PRTST DC      *-*           RETURN ADDRESS
                    TLOOP LIBF    PRNT1         TEST FOR COMPLETION
                          DC      /0000
                          MDX     TLOOP         LOOP UNTIL FINISHED
                          BSC  I  PRTST         RETURN
                    ****************************************************
                    * SUBROUTINE TO TEST FOR A PRINTER ERROR.
                    * THIS GETS CALLED WHEN THE PRINTER DETECTS THE
                    * BOTTOM OF THE PAGE.
                    *
                    SKIP  DC      1             DMS SKIPS TO THE TOP
                    PRERR DC      *-*           OF THE NEXT PAGE IF
                          LD      SKIP          THE ACCUMULATOR IS 
                          BSC  I  PRERR         NON-ZERO
                    ****************************************************
                    * CONVERT THE CONTENTS OF THE ACCUMULATOR
                    * TO EBCDIC FOR PRINTING.  THE INPUT VALUE
                    * IN THE ACCUMULATOR MUST BE BETWEEN 1 AND 99.
                    *
                    * CONSTANTS AND TEMPS FOR CONVERSION.
                    *
                    TMP   BSS     1             SAVE A WORD
                    TEN   DC      10
                    ZERO  DC      /F0           EBCDIC 0
                    BLANK DC      /40           EBCDIC SPACE
                    *
                    * CONVERSION STARTS HERE.
                    MKEBC DC      *-*           RETURN ADDRESS
                          SRT     16            SHIFT THE ACC VALUE INTO
                    *                           ACC+EXT
                          D       TEN           DIVIDE BY 10
                    *
                    * THE DIVIDE INSTRUCTION LEAVES THE QUOTIENT IN THE
                    * ACCUMULATOR AND THE REMAINDER IN THE EXTENSION.
                    *
                          BSC     Z             SKIP NEXT IF ACC IS ZERO
                          OR      ZERO          PUT IN EBCDIC DIGIT BITS
                          MDX     MK1
                          OR      BLANK         MAKE IT A BLANK
                    MK1   SLA     8             SHIFT RESULT TO LEFT BYTE
                          STO     TMP           AND SAVE FOR LATER
                          XCH                   SWITCH ACC AND EXT
                          OR      ZERO          PUT IN THE DIGIT BITS
                          OR      TMP           PUT THE LEFT BYTE BACK
                          B    I  MKEBC         AND RETURN                 
                          END     START
// XEQ```