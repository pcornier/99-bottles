
## Language A+ ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.88 in 197 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-a+-11.html
---

```$mode uni
// Usage: fallsong n for "American" verison starting at n bottles.
//        takesong n for "British" version 
//        eM n - general utility which returns english version of n.
// Note: Definition of billion, trillion, etc. follow American usage.
// Limits: Some counting and reporting problems caused by comparison
// tolerance and floating-point numbers above one trillion.
// Absolute limit: Approximately 9.9998354e65, at which point
// floating-point representation becomes unreliable.

ewd1:=("zero";"one";"two";"three";"four";"five";"six";"seven";"eight";"nine";
  "ten";"eleven";"twelve";"thirteen";"fourteen";"fifteen";"sixteen";
  "seventeen";"eighteen";"nineteen")
ewd10:=("";"";"twenty";"thirty";"forty";"fifty";"sixty";"seventy";
  "eighty";"ninety"); ewdh:=" hundred"; ewdc:=" and ";
epow:=("";" thousand")," ",~("m";"b";"tr";"quadr";"quint";"sext";"sept";
  "oct";"non";"dec";"undec";"duodec";"tredec";"quattuordec";"quindec";
  "sexdec";"septendec";"octodec";"novemdec";"vigint"),~<"illion"
eH n:{if(20<=n){(t;xx):=0 10 M.>n;(t I.>ewd10),if(0=xx)""else "-",xx I.>ewd1}
  else n I.> ewd1}
eT n:{if(100<=n){(h;x):=0 100 M.>n;(h I.>ewd1),ewdh,if(0=x)""else ewdc,eH x}
  else eH n}
eM n:{z:="";(i:=#epow)do{
  (n;x):=0 1000 M.>n;
  if(0!=x)z:=,(((100>x)&(i=0)&0!=n)/"and "),(eT M.-x),(i I.>epow),
    ((0!=#z)/", "),z;
  if(0=n):=z};z}
cap str:{n:=`int|1 S.+str;if((97<=n)&122>=n)str[0]:=`char|n- 32;str}
nb n:(if(0!=n)(cap eM n)else "No more"),((- 1=n)S.-" bottles")," of beer"
ootb n:if(1!=n)"one of those bottles"else"that bottle"
fate{b;n}:{if(b)".\nIf ",(ootb n)," should happen to fall,\n" else 
  ".\nTake ",((1=n)I.>("one";"it"))," down; pass it around,\n"}
b stanza n:{w:=" on the wall.";
  (nb n),w,"\n",(nb n),(b fate n),(nb n- 1),w,"\n"}
fallsong n:{(i:=n)do S.- 1 stanza n-i;}
takesong n:{(i:=n)do S.- 0 stanza n-i;}```