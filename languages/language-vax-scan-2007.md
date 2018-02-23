
## Language VAX SCAN ##
---
- Author: Gerardo Cacciari
- Date: 03/22/09
- Info: See source comments
- Score:  (2.91 in 11 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-vax-scan-2007.html
---

```!++
!
! "VAX SCAN is a block-structured programming language in the VAX/VMS
! environment that is designed to build tools to manipulate text strings and
! text files. The primary applications for VAX SCAN are filters, translators,
! extractors/analyzers, and preprocessors. VAX SCAN is a compiled programming
! language that includes string operators for searching, comparing, extracting,
! and assigning character strings. A significant strength of VAX SCAN is in the
! pattern-matching constructs that permit matching of one or more complex
! patterns of text in the input data. VAX SCAN can then create replacement text
! for the original patterns that were found in the input."
!
! The above text was taken from "Guide to VAX SCAN", order number AA-FU79C-TE
! Copyright (C) 1985, 1986, 1989 Digital Equipment Corporation.
!
! VAX SCAN is a hybrid language, being both procedural and pattern-driven. Every
! program executes in a classic imperative fashion up until a START SCAN
! statement is encountered. On such occurence, the program turns into a
! pattern-driven engine and tries to match whichever START SCAN input it
! receives to the pattern specified on trigger MACRO declarations. Matching
! macro code can then replace or even drop matched input by means of the ANSWER
! statement which in turn can optionally trigger other macros, either nested or
! not. The matching process stops whenever a STOP SCAN statement or the end of
! input stream is reached. Then the program continues in procedural mode.
!
! To better demonstrate VAX SCAN pattern-matching capabilities and syntax, this
! sample uses a START SCAN input procedure providing always the same sentence,
! plus some macros for numbering, formatting, and overall control. Nevertheless
! it could have been designed as a simple procedural program.
!
! VAX SCAN adheres to the common calling standard of the VAX/VMS operating
! system. An object created by the VAX SCAN compiler can be successfully linked
! and used in a multilanguage environment, thus allowing for projects written in
! other languages to take advantage of the particular VAX SCAN capabilities.
!
! VAX SCAN was retired as a product in 1994 and was submitted to the DECUS
! Library in 1995. It can be found in the [.VAXSCAN] directory of Freeware V4.0.
!
! Made on a VAX, 22-MAR-2009
!
!--

MODULE ninetynine_beers IDENT 'V1.0';

    CONSTANT SS$_NORMAL     EXTERNAL INTEGER;
    CONSTANT SCN$_ENDINPSTM EXTERNAL INTEGER;

    DECLARE  thats_all: BOOLEAN;

    SET      digit            ( '0'..'9' );

    TOKEN    how_many         { ['-'] digit... };
    TOKEN    bottles          { [' '...] 'bottle' ['s'] };
    TOKEN    placeholder      { '<' digit '>' };
    TOKEN    end_of_line      { '/' };

    MACRO take_one_beer TRIGGER { which,where: placeholder };

         IF which = '<3>' THEN
            ANSWER TRIGGER STRING ( 99 - where );
         ELSE
            ANSWER TRIGGER STRING ( 100 - where );
         END IF;

    END MACRO;

    MACRO no_more_beer TRIGGER { count: how_many bottles };

         CASE INTEGER ( count ) FROM 1 TO 99;
            [ 1 ]:        ANSWER count, ' bottle';
            [ INRANGE ]:  ANSWER count, ' bottles';
            [ OUTRANGE ]: ANSWER 'no more bottles';
                          thats_all = TRUE;
         END CASE;

    END MACRO;

    MACRO insert_carriage_returns TRIGGER { end_of_line };

         ANSWER S'EOL';

    END MACRO;

    PROCEDURE generate_song ( len: REFERENCE INTEGER,
                              buf: REFERENCE POINTER TO
                                     FIXED STRING (132) )
                              OF INTEGER;

        DECLARE song_line: DYNAMIC STRING;

        song_line = '<1> bottles of beer on the wall, ' &
                    '<2> bottles of beer./' &
                    'Take one down and pass it around, ' &
                    '<3> bottles of beer on the wall./';

        len = LENGTH ( song_line );
        buf-> = song_line;

        IF thats_all THEN
           RETURN SCN$_ENDINPSTM;
        ELSE
           RETURN SS$_NORMAL;
        END IF;

    END PROCEDURE;

    PROCEDURE end_song ( );

        WRITE 'No more bottles of beer on the wall, ' &
              'no more bottles of beer.';
        WRITE 'Go to the store and buy some more, ' &
              '99 bottles of beer on the wall.';

    END PROCEDURE;

    PROCEDURE beer_song MAIN ( );

        START SCAN
            INPUT PROCEDURE generate_song
            OUTPUT FILE 'SYS$OUTPUT';

        CALL end_song;

    END PROCEDURE;

END MODULE;```