
## Language ScalaScript ##
---
- Author: Ulrich Peters
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-scalascript-581.html
---

```!ScalaScript

/* 99 bottles of beer (99bottles.sca)                                    */
/* written in ScalaScript for Scala InfoChannel Designer (www.scala.com) */
/* (c) 2002 Ulrich Peters                                                */
/* http://www.oktrier.de/                                                */

EVENT
  Group:
    Integer(i);
    BackgroundSettings(Size(640, 480));
    Config.SaveOpts(SaveEditable(On));
  Sequence:
    i = 100;
    :"loop"
    i = i - 1;
    EVENT
      Group:
        Display(Backdrop(Pen(16)), Margin(10, 10, 0, 0), Tabs(Explicit(80, 160, 240, 320, 400, 480,
560)),
         UserPalette(RGBPen(1, $0, $ffffff, $999999, $555555, $712068, $df449c, $dc110e, $662200,
$ff5a00,
         $ff9c00, $ffee00, $8800, $dd00, $cccc, $66ff, $aa, $777777, $bbbbbb, $dddddd)));
        Text(20, 20, "!(i) Bottle(s) of beer on the wall, !(i) bottle(s) of beer", AntiAlias(On),
         Update(Normal), Font("FranklinGotTReg (Western [])", 50), Wrap(On, Auto(610)));
    END
    EVENT
      Group:
        Display(Backdrop(Pen(16)), Margin(10, 10, 0, 0), Tabs(Explicit(80, 160, 240, 320, 400, 480,
560)),
         UserPalette(RGBPen(1, $0, $ffffff, $999999, $555555, $712068, $df449c, $dc110e, $662200,
$ff5a00,
         $ff9c00, $ffee00, $8800, $dd00, $cccc, $66ff, $aa, $777777, $bbbbbb, $dddddd)));
        Text(20, 20, "Take one down and pass it around,", AntiAlias(On), Update(Normal),
         Font("FranklinGotTReg (Western [])", 50), Wrap(On, Auto(610)));
    END
    EVENT
      Group:
        Display(Backdrop(Pen(16)), Margin(10, 10, 0, 0), Tabs(Explicit(80, 160, 240, 320, 400, 480,
560)),
         UserPalette(RGBPen(1, $0, $ffffff, $999999, $555555, $712068, $df449c, $dc110e, $662200,
$ff5a00,
         $ff9c00, $ffee00, $8800, $dd00, $cccc, $66ff, $aa, $777777, $bbbbbb, $dddddd)));
        Text(20, 20, "!(i-1) bottle(s) of beer on the wall", AntiAlias(On), Update(Normal),
         Font("FranklinGotTReg (Western [])", 50), Wrap(On, Auto(610)));
    END
    EVENT
      Group:
        If(i > 1);
        Goto("loop", Bookmark(Off));
    END
    Quit(1);
END```