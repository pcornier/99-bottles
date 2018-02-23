
## Language MTUP ##
---
- Author: John Tiller
- Date: 06/29/06
- Info: n/a
- Score:  (2.50 in 2 votes)
- URL: None
- Original URL: http://www.99-bottles-of-beer.net/language-mtup-1197.html
---

```MTUP stands for Message Text Update Program. It is a compiler used on 
Fujitsu's VME mainframes to produce a Message Text Module (MTM). The 
MTM is used to merge fixed blocks of text held within the module with
parameter data supplied at run-time.

The MTM doesn't have the ability to log anything to the screen - it's
simply a formatter of text - so following the source of the MTM below
is a "wrap" to it written in System Control Language (SCL) to call it
and log the messages.

This is the Message Text Module. The run-time data supplied to it
appears as P1, P2...

*CREATE(NNBBWMTM)
*PARAMS(HLL&EXP)
*SPACEFILL(NO)
*ESCAPE(<>)
 
*ADD(1)
<

@ Deal with the first line. @

CASE P1 EQUALS             @ Put out "No more" or number of bottles @
<0>   THEN
      <No more>
DEFAULT
      P1
ESAC,
 
< bottle>,                 @ Literal value @
 
CASE P1 EQUALS             @ Add an "s" or not @
<1>   THEN
      <>
DEFAULT
      <s>
ESAC,
 
< of beer on the wall, >,  @ Another literal @
 
CASE P1 EQUALS             @ "no more" or number of bottles @
<0>   THEN
      <no more>
DEFAULT
      P1
ESAC,
 
< bottle>,
 
CASE P1 EQUALS
<1>   THEN
      <>
DEFAULT
      <s>
ESAC,
 
< of beer.>,
 
L,                         @ Newline @
 
@ Now deal with the second line. @

CASE P2 EQUALS             @ Is it the final line? @
<-1>  THEN
      <Go to the store and buy some more, 99>
DEFAULT
      <<
            <Take one down and pass it around, >,
 
            CASE P2 EQUALS
            <0>   THEN
                  <no more>
            DEFAULT
                  P2
            ESAC
      >>
ESAC,
 
< bottle>,
 
CASE P2 EQUALS
<1>   THEN
      <>
DEFAULT
      <s>
ESAC,
 
< of beer on the wall.>,
 
L
 
>
*END

This is the SCL wrap. See Steve Hammond's SCL example.

PROC NNBBW_SCL IS ()
PROCBEGIN
 
      EXT PROC NNBBW_MTM (NORESCHEDULE) IS (       @ Define parameters @
                   SPDRIR     TEXT_NO     ,
                   SPDRIW     RESPONSE    ,
                   REF STRING MESSAGE     ,
                   SPDRIW     MSG_LENGTH  ,
                   REF STRING RECALL_DATA ,
                   SPDRIR     PARAM_1     ,
                   SPDRIR     PARAM_2     )
 
      STRING (256) MESSAGE := FILL(256)
 
      INT          MSG_LENGTH
      INT          RESP
 
      FOR   BOTTLES
      FROM  99
      TO    0
      BY    -1
      DO

            NNBBW_MTM (
                  TEXT_NO     = 1           ,
                  RESPONSE    = RESP        ,
                  MESSAGE     = MESSAGE     ,  
                  MSG_LENGTH  = MSG_LENGTH  ,   
                  RECALL_DATA = NIL         ,      @ Not used
                  PARAM_1     = BOTTLES     ,      @ P1 in the MTM
                  PARAM_2     = BOTTLES - 1 )      @ P2 in the MTM
 
            SEND_MESSAGE (
                  MESSAGE = SUBSTR(MESSAGE,,MSG_LENGTH) )
 
      REPEAT
 
PROCEND```