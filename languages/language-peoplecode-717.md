
## Language PeopleCode ##
---
- Author: Adam Krebet
- Date: 05/30/05
- Info: http
- Score:  (2.86 in 7 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-peoplecode-717.html
---

```[THE_99_BOTTLES_SONG Application Class]

   [Wall class]
      import THE_99_BOTTLES_SONG:*;

      class Wall
         method Wall();
         method Sing();
         method TakeOneDown() Returns Bottle;

         property array of Bottle theBottles;
      end-class;

      method Wall
         &theBottles = CreateArrayRept(create Bottle(), 99);
         %This.Sing();
      end-method;

      method Sing
         Local number &howMany;
         Local Bottle &theBottle;

         %Response.Write("<h1>99 Bottles of Beer Song</h1><p/>");
         &howMany = &theBottles.Len;
         While &howMany > 0

            %Response.Write(&howMany | " bottles of beer on the wall, " |
      &howMany | " bottles of beer,<p/>");
            &theBottle = %This.TakeOneDown();
            &theBottle.PassAround();

            &howMany = &theBottles.Len;
            If &howMany = 0 Then
               %Response.Write("No more bottles of beer on the wall.<p/>");
            Else
               %Response.Write(&howMany | " bottles of beer.<p/>");
            End-If;

         End-While;
      end-method;

      method TakeOneDown
         /+ Returns THE_99_BOTTLES_SONG:Bottle +/
         Local Bottle &theBottle;

         %Response.Write("Take one down ");
         &theBottle = &theBottles.Pop();
         Return &theBottle;
      end-method;

   [Bottle class]
      class Bottle
         method Bottle();
         method PassAround();
      end-class;

      method Bottle
      end-method;

      method PassAround
         %Response.Write("and pass it around,<p/>");
      end-method;

   [script to invoke the song]
      import THE_99_BOTTLES_SONG:*;

      Function ISCRIPT_99_bottles
         Local Wall &myWall;

         &myWall = create Wall();
      End-Function;```