
## Language TMT Pascal ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.60 in 10 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-tmt-pascal-456.html
---

```// TMT Pascal version of 99 Bottles of beer (Bottles.pas)
// See http://www.tmt.com/
// Philipp Winterberg, http://www.winterbergs.de  

 
          program BoB99;  
         {$ifdef __GUI__} 
         uses WinCRT; {+}
         {$endif} {+++++}
         var b: byte;  a, 
         c: string; begin 
         a:= #32+#98+#111
       +#116+#116+#108+#101
      +#40+#115+#41+#32+#111
     +#102+#32+#98+#101+#101+
     #114; b:= 99; c:= #32+++
     #111+#110+#32+#116+#104+
     #101+#32+#119+#97+#108++
     #108; repeat writeln(b:2
     , a+c+#44+#13+#10,b:2, a
     +#46+#13+#10+#84+#97++++
     #107+#101+#32+#111+#110+
     #101+#32+#100+#111+#119+
     #110+#44+#32+#112+#97+++
     #115+#115+#32+#105+#116+
     #32+#97+#114+#111+#117++
     #110+#100+#44+#0);dec(b)
     ;writeln(b:2, a+c+#46+++
     #13+#10);until b=0; end.```