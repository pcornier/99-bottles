
## Language CL for AS400 ##
---
- Author: Werner Grzemba
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 29 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-cl-for-as400-128.html
---

```    PGM
    /*  99 Bottles of Beer in AS/400 CL (Command Language)           */
    /*  Programmer:  Werner Grzemba, 101326.3300@compuserve.com      */

    /*  To avoid the necessity of any user action, the output is     */
    /*  sent to the status line (except of the buy-request at end)   */

             DCL        VAR(&MSG) TYPE(*CHAR) LEN(79)
             DCL        VAR(&BEER1) TYPE(*CHAR) LEN(30) VALUE(' +
                          bottles of beer on the wall, ')
             DCL        VAR(&BEER2) TYPE(*CHAR) LEN(31) VALUE('Take +
                          one down, pass it around, ')
             DCL        VAR(&BEER3) TYPE(*CHAR) LEN(78) VALUE('Go +
                          to the store and by some more... 99 +
                          bottles of beer')
             DCL        VAR(&BOTTLES) TYPE(*DEC) LEN(2 0) VALUE(99)
             DCL        VAR(&XB) TYPE(*CHAR) LEN(2)
             DCL        VAR(&RPY) TYPE(*CHAR) LEN(4)

             CHGVAR     VAR(&XB) VALUE(&BOTTLES)

    MOREBEER:
             CHGVAR     VAR(&MSG) VALUE(&XB *CAT &BEER1 *CAT &XB +
                          *CAT %SST(&BEER1 1 16))
             SNDPGMMSG  MSGID(CPF9898) MSGF(QCPFMSG) MSGDTA(&MSG) +
                          TOPGMQ(*EXT) MSGTYPE(*STATUS)
             DLYJOB     DLY(1)
             CHGVAR     VAR(&BOTTLES) VALUE(&BOTTLES - 1)
             CHGVAR     VAR(&XB) VALUE(&BOTTLES)
             CHGVAR     VAR(&MSG) VALUE(&BEER2 *CAT &XB *CAT +
                          %SST(&BEER1 1 28))
             SNDPGMMSG  MSGID(CPF9898) MSGF(QCPFMSG) MSGDTA(&MSG) +
                          TOPGMQ(*EXT) MSGTYPE(*STATUS)
             DLYJOB     DLY(1)
             IF         COND(&BOTTLES > 0) THEN(GOTO CMDLBL(MOREBEER))

             CHGVAR     VAR(&MSG) VALUE('No more' *CAT &BEER1 *CAT +
                          'no more' *CAT %SST(&BEER1 1 16))
             SNDPGMMSG  MSGID(CPF9898) MSGF(QCPFMSG) MSGDTA(&MSG) +
                          TOPGMQ(*EXT) MSGTYPE(*STATUS)
             DLYJOB     DLY(2)
             SNDPGMMSG  MSGID(CPF9898) MSGF(QCPFMSG) MSGDTA(&BEER3) +
                          TOPGMQ(*EXT) MSGTYPE(*INQ) KEYVAR(&RPY)

    ENDPGM```