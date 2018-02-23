
## Language SFL ##
---
- Author: John Tiller
- Date: 06/05/06
- Info: http
- Score:  (3.59 in 61 votes)
- URL: None
- Original URL: http://www.99-bottles-of-beer.net/language-sfl-1173.html
---

```@
@ Use the S3 compiler (see Steve Hammond's S3 example) to create an
@ "empty" module.
@

S3_COMPILE(,*OMF.)
----
MODULE NNBBW
GLOBAL STATIC (<STATUS 5>) PROC NNBBW IS () :
BEGIN
END;
ENDMODULE
++++

@
@ Now use Fujitsu's AMENDMODULE utility to patch the module.
@

AMENDMODULE(*OMF.NNBBW)
----
 
@
@ First, create an external reference to the message logger which
@ displays output to the screen.
@
 
CREATE_REFERENCE(SENDMESSAGE)
 
@
@ Now patch the external reference into the Procedure Linkage Table.
@
 
POINT(NNBBW.NNBBW_LT)
PATCH(
      NAME         = NNBBW_LT V1/0 ,
      JUMP         = NO            ,
      DISPLACEMENT = X00           ,
      TO           = CODE
 
      !A
      %SENDMESSAGE
 
      END                          )
 
@
@ Finally, write the module. This is a map of our stack usage:
@
@ 03    - CHAR: A single character to be strung into BUFFER.
@ 04    - Our PLT base address.
@ 05-06 - WBUFF_DESC: Descriptor to WBUFFER.
@ 07-08 - NBUFF_DESC: Descriptor to NBUFFER.
@ 09-0A - CHAR_DESC:  Descriptor to 4th byte of CHAR.
@ 0B    - WBUFF_POS:  Word (current position within WBUFFER).
@ 0C    - BOTTLES:    Word (descending count of bottles).
@ 0D... - NBUFFER:    15 bytes used for numeric conversion.
@ 13... - WBUFFER:    256 bytes used to construct lines for logging.
@
 
POINT(NNBBW.NNBBW_C)
PATCH(
      NAME         = NNBBW_C V1/0  ,
      JUMP         = YES           ,
      RETURN       = NO            ,
      DISPLACEMENT = X00           ,
      TO           = CODE
 
      *
      * Initial actions. We prime our three on-stack descriptors and
      * set WBUFF_POS and BOTTLES to their initial values.
      *

      STD.L       X03     * Store our PLT descriptor (addr. part to X04)
      STLN.B              * Store our local name base in BREG
      ASF         X60     * Claim stack space
      LSS.B               * Get LNB into the accumulator
      LUH         X00     * ACC to size 64 bits
      IAD.P       �N      * Complete the descriptor to NBUFFER
      ST.L        X07     * Store NBUFF_DESC
      LSS.B               * Get LNB again
      LUH         X00     * ACC to size 64 bits
      IAD.P       �O      * Complete the descriptor to WBUFFER
      ST.L        X05     * Store WBUFF_DESC
      LSS.B               * Get LNB again
      LUH         X00     * ACC to size 64 bits
      IAD.P       �M      * Complete the descriptor to CHAR
      ST.L        X09     * Store CHAR_DESC
      LSD         X63     * Set ACC to 99
      ST.L        X0B     * Set WBUFF_POS to zero and BOTTLES to 99
 
      *
      * This is the main processing loop, exited when BOTTLES reaches
      * zero.
      *
 
�A    LSS.L       X0C     * Fetch BOTTLES
      JZ          �F      * Jump on if zero
      JLK         �J      * Convert to numeric and store
      JLK         �G      * Call the handler for " bottle(s) of beer"
      LDRL.P      �W      * Load " on the wall"
      JLK         �K      * Store it
      LSS         X6B     * Load ","
      JLK         �I      * Store it
      LSS         X40     * Load " "
      JLK         �I      *
      LSS.L       X0C     * Fetch BOTTLES again
      JLK         �J      *
      JLK         �G      * Call the handler for " bottle(s) of beer"
      LSS         X4B     * Load "."
      JLK         �I
      JLK         �L      * Log it
      LDRL.P      �Z      * Load "Take one down and pass it around, "
      JLK         �K      * Store it
      LSS.L       X0C     * Get bottles
      USB         X01     * Decrement it
      ST.L        X0C     * Update the stored value
      JZ          �C      * Jump on if zero
      JLK         �J      *
      J           �D      * Jump on
�C    LSS         X95     * "n"
      JLK         �I      * Store it
      LDRL.P      �X      * Load "o more"
      JLK         �K      * Store it
�D    JLK         �G      * Call the handler for " bottle(s) of beer"
      LDRL.P      �W      * Load " on the wall"
      JLK         �K
      LSS         X4B     * Load "."
      JLK         �I
      JLK         �L      * Log it
      LSS         X40     * Load " "
      JLK         �I
      JLK         �L      * Log a blank line
      J           �A      * Back around the main processing loop
 
�F    *
      * We come here when BOTTLES has reached zero.
      *
 
      LSS         XD5     * Load "N"
      JLK         �I
      LDRL.P      �X      * Load "o more"
      JLK         �K
      JLK         �G      * Call the handler for " bottle(s) of beer"
      LDRL.P      �W      * Load " on the wall"
      JLK         �K
      LSS         X6B     * Load ","
      JLK         �I
      LSS         X40     * Load " "
      JLK         �I
      LSS         X95     * Load "n"
      JLK         �I
      LDRL.P      �X      * Load "o more"
      JLK         �K
      JLK         �G      * Call the handler for " bottle(s) of beer"
      LSS         X4B     * Load "."
      JLK         �I
      JLK         �L      * Log it
      LDRL.P      �Y      * Load "Go to the store and buy some more, "
      JLK         �K
      LSS         X63     * Set 99
      JLK         �J
      JLK         �G      * Call the handler for " bottle(s) of beer"
      LDRL.P      �W      * Load " on the wall"
      JLK         �K
      LSS         X4B     * Load "."
      JLK         �I
      JLK         �L      * Log the final line
      EXIT        X00     * Done
 
�G    *
      * This subroutine manages the storing of the either
      * " bottle of beer" or " bottles of beer", depending on the
      * value of BOTTLES.
      *
 
      LDRL.P      �U      * Load " bottle"
      JLK         �K      * Store it
      LSS.L       X0C     * Load BOTTLES
      UCP         X01     * Is it 1?
      JE          �H      * Jump on if so
      LSS         XA2     * Load "s"
      JLK         �I      * Store it
�H    LDRL.P      �V      * Load " of beer"
      JLK         �K
      J.T                 * Exit from subroutine
 
�I    *
      * This subroutine manages the adding of a single character in
      * the accumulator to the buffer.
      *
 
      ST.L        X03     * Store the character in CHAR
      LD.L        X09     * Prime DR with CHAR_DESC
      J           �K      * Jump on to the stringing routine
 
�J    *
      * This subroutine converts the value of the accumulator (which
      * contains the current value of BOTTLES) to a printable format
      * with leading zeros suppressed, leaving the result in DR. It
      * then drops through into the following stringing routine.
      * Note that it is not called to handle zero.
      *
 
      CDEC                * Convert to packed decimal format
      LD.L     X07        * Prime DR with NBUFF_DESC
      MPSR     X24        * Set the condition codes to 1
      SUPK                * Unpack to printable characters
      LD.L     X07        * Get NBUFF_DESC again
      SWEQ     X00,C'0'   * Suppress leading zeros, drop through
 
�K    *
      * This subroutine strings the contents of DR into WBUFFER,
      * updating WBUFF_POS in the process.
      *
 
      STD.T               * Stack DR
      LSS.T               * Drop the address part
      LSS.T               * Fetch Type and Bound
      AND      XFF        * Mask out the Type
      ST.B                * Into BREG with the length
      CYD                 * Copy DR to ACC
      LD.L     X05        * Fetch WBUFF_DESC
      MODD.L   X0B        * Drop the portion up to WBUFF_POS
      LDB.B               * Set the bound
      MV                  * Move the data into WBUFFER
      LSS.L    X0B        * Get WBUFF_POS
      UAD.B               * Add in the length of the string
      ST.L     X0B        * Store updated WBUFF_POS
      J.T                 * Exit from subroutine.
 
�L    *
      * This subroutine calls SEND_MESSAGE to log the current line,
      * after which the buffer pointer is reset, ready for the next
      * line.
      *
 
      LXN.L       X04     * Set XNB (only need it in this one place)
      PRCL        X04     * Prepare for the call
      LD.L        X05     * Get WBUFFER
      LDB.L       X0B     * Set the bound to WBUFF_POS
      STD.T               * Store the descriptor at TOS
      RALN        X07     * Raise LNB - two words of parameter space
      CALL.IX     !A      * Call SEND_MESSAGE
      LSS         X00     * Set zero
      ST.L        X0B     * Reset WBUFF_POS
      J.T                 * Exit from subroutine
 
      *
      * Declare literal data, starting with three "skeleton" 
      * descriptors used during initialisation. There then
      * follow a series of string "fragments" which are
      * stitched together at run-time.
      *
 
ALIGN 1
 
�M    X18000001 0000000F  * Outline descriptor to CHAR
�N    X1800000F 00000034  * Outline descriptor to NBUFFER
�O    X18000100 0000004C  * Outline descriptor to WBUFFER
 
�U    X1800000700000008
      C' bottle'

ALIGN 1
�V    X1800000800000008
      C' of beer'

ALIGN 1
�W    X1800000C00000008
      C' on the wall'

ALIGN 1
�X    X1800000600000008
      C'o more'

ALIGN 1
�Y    X1800002300000008
      C'Go to the store and buy some more, '

ALIGN 1
�Z    X1800002200000008
      C'Take one down and pass it around, '
 
      END                          )
++++```