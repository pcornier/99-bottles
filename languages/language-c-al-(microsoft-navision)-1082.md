
## Language C/AL (Microsoft Navision) ##
---
- Author: Carsten Scholling
- Date: 03/08/06
- Info: http
- Score:  (3.01 in 114 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-c-al-(microsoft-navision)-1082.html
---

```OBJECT Codeunit 50085 99 Bottles of Beer
{
  OBJECT-PROPERTIES
  {
    Date=01.03.06;
    Time=12:57:20;
    Modified=Yes;
    Version List=01.03.06;
  }
  PROPERTIES
  {
    OnRun=BEGIN
            char13 := 13;
            char10 := 10;

            SongFile.WRITEMODE(TRUE);
            SongFile.TEXTMODE(TRUE);
            SongFile.CREATE(c_txtFileName);

            SongFile.CREATEOUTSTREAM(SongStream);


            FOR i := 99 DOWNTO 0 DO BEGIN

              SongLine1 := c_txtLyrics001;
              SongLine2 := c_txtLyrics002;

              Plural1 := 's';
              Plural2 := 's';

              TextNumber1 := FORMAT(i);
              TextNumber2 := FORMAT(i - 1);

              CASE i OF

                2: BEGIN
                  Plural2 := '';
                END;

                1: BEGIN
                  TextNumber2 := c_txtNoMore;
                  Plural1 := '';
                END;

                0: BEGIN
                  TextNumber1 := c_txtNoMore;
                  TextNumber2 := c_txtNoMore;
                  SongLine2 := c_txtLyrics003;
                END;

              END;

              SongLine1 := STRSUBSTNO(SongLine1, TextNumber1, Plural1) +
                  FORMAT(char13) + FORMAT(char10);
              SongLine2 := STRSUBSTNO(SongLine2, TextNumber2, Plural2) +
                  FORMAT(char13) + FORMAT(char10) + FORMAT(char13) + FORMAT(char10);

              SongStream.WRITETEXT(SongLine1);
              SongStream.WRITETEXT(SongLine2);

            END;

            SongFile.CLOSE();
          END;

  }
  CODE
  {
    VAR
      c_txtLyrics001@1000000005 : TextConst 'ENU=%01 bottle%02 of beer on the wall, %01 bottle%02 of
beer.';
      c_txtLyrics002@1000000003 : TextConst 'ENU=Take one down and pass it around, %01 bottle%02 of
beer on the wall.';
      c_txtLyrics003@1000000000 : TextConst 'ENU=Go to the store and buy some more, 99 bottles of
beer on the wall.';
      SongFile@1000000010 : File;
      SongStream@1000000013 : OutStream;
      SongLine1@1000000002 : Text[100];
      SongLine2@1000000009 : Text[100];
      TextNumber1@1000000004 : Text[30];
      TextNumber2@1000000006 : Text[30];
      Plural1@1000000007 : Text[1];
      Plural2@1000000008 : Text[1];
      char13@1000000014 : Char;
      char10@1000000015 : Char;
      i@1000000001 : Integer;
      c_txtNoMore@1000000011 : TextConst 'ENU=No more';
      c_txtFileName@1000000012 : TextConst 'ENU=C:\99BottlesOfBeer.txt';

    BEGIN
    {
      99 Bottles of Beer as a Microsoft Navision Codeunit in C/AL.
      by Carsten Scholling (cscholling /at/ bugcomputer.de)

      Inspired by http://www.99-bottles-of-beer.net

      A file named "99BottlesOfBeer.txt" will be created in C: root.
      There is no console in Navision to write to, so i used this solution.

      Of course it could be shorter, nicer and so on, but with 99 bottles of
      beer in my head this was the only possible solution ;-)
    }
    END.
  }
}```