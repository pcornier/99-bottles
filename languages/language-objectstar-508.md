
## Language Objectstar ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 48 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-objectstar-508.html
---

```Also known as HURON.


BOTTLES_OF_BEER;
_ LOCAL COUNT;
_ ----------------------------------------------------------------------
_ ------------------------------------------------------------+---------
_ COUNT = 99;                                                 � 1
_ UNTIL EQUAL :                                               � 2
_    CALL MSGLOG(COUNT || ' BOTTLE(S) OF BEER ON THE WALL');  �
_    CALL MSGLOG(COUNT || ' BOTTLE(S) OF BEER');              �
_    CALL MSGLOG('TAKE ONE DOWN AND PASS IT AROUND');         �
_    COUNT = COUNT - 1;                                       �
_    CALL MSGLOG(COUNT || ' BOTTLE(S) OF BEER ON THE WALL');  �
_    CALL MSGLOG('');                                         �
_    CALL SIGNAL_EQUAL(COUNT, 0);                             �
_    END;                                                     �
_ ----------------------------------------------------------------------```