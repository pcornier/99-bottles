
## Language FILDZAN 32 ##
---
- Author: Samir Ribic
- Date: 02/10/07
- Info: http
- Score:  (3.00 in 38 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-fildzan-32-1394.html
---

````FILDZAN 32 is small programming language used in System programming course of University Sarajevo
`to quickly show compiling principles, because the compiler is just about 600 lines long
`This is Bottles example written in version for the course of 2006
`It has not own library so it uses Windows API. Remark that keywords are in Bosnian language

varijable cporuka;
funkcija GetStdHandle(pbrhan);
funkcija WriteConsoleA(prez,pupisano,pupisati,pbafer,phan);
funkcija Prikazistring (pporuka){
  varijable lhandle,lpriv,lduz;
   lhandle:=GetStdHandle(-11);
   lduz:=0;
   cporuka:=pporuka;
   dok (cporuka[lduz]#0) { lduz:=lduz+1;}
   WriteConsoleA(lhandle,cporuka,lduz,&lpriv,0);
}

funkcija Novired () {
  cporuka:="  ";
  cporuka[0]:=13;
  cporuka[1]:=10;
  Prikazistring(cporuka);
}

funkcija Prikazibroj(pbroj) {
  varijable ldes,ljed;
  cporuka:="  ";
  ldes:=pbroj / 10;
  ljed:=pbroj % 10;
  cporuka[0]:=ldes+48;
  cporuka[1]:=ljed+48;
  ako ldes=0 { 
     cporuka[0]:=cporuka[1];
     cporuka[1]:=0;
  }
  Prikazistring(cporuka);
} 
 
funkcija Pjesma(pboca) {
  varijable lbrojac;
  lbrojac:=pboca;
  dok lbrojac > 0 {
    Prikazibroj(lbrojac);
    Prikazistring(" bottle"); 
    ako lbrojac # 1 { Prikazistring("s"); }
    Prikazistring(" of beer on the wall, ");
    Prikazibroj(lbrojac);
    Prikazistring(" bottle"); 
    ako lbrojac # 1 { Prikazistring("s"); }
    Prikazistring(" of beer.");
    Novired();
    Prikazistring("Take one down and pass it around, ");
    ako lbrojac>1 {
      Prikazibroj(lbrojac-1);
    }
    inace {
      Prikazistring("no more ");
    }
    Prikazistring(" bottles of beer on the wall.");
    Novired();
    Novired();
    lbrojac:=lbrojac-1;
  }
  Prikazistring("No more bottles of beer on the wall, no more bottles of beer.");
  Novired();
  Prikazistring("Go to the store and buy some more, ");
  Prikazibroj(pboca);
  Prikazistring(" bottles of beer on the wall.");
  Novired();
}
{
  Pjesma(99);
}```