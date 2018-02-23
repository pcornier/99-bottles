
## Language EPICS ##
---
- Author: Andreas Luedeke
- Date: 07/08/06
- Info: http
- Score:  (2.96 in 23 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-epics-1209.html
---

```record(calcout,"songsinger") {
  field(SCAN,"5 second")
  field(DESC,"Main record")
  field(INPA,"bottlecount")
  field(CALC,"A>0?A+1:0")
  field(OOPT,"When Non-zero")
  field(OCAL,"A-1")
  field(DOPT,"Use OCAL")
  field(OUT,"bottlecount PP")
}
record(ai,"bottlecount") {
  field(FLNK,"textseq PP")
}
record(scalcout,"bottleline") {
  field(AA," bottles")
  field(BB,"1 bottle")
  field(CC,"no more bottles")
  field(CALC,"(A>1)?(PRINTF('%i',A)+AA):(A?BB:CC)")
}
record(calc,"bottlecount-1") {
  field(INPA,"bottlecount NPP")
  field(CALC,"A>0?A-1:99")
}
record(seq,"textseq") {
  field(DOL1,"bottlecount NPP")
  field(LNK1,"bottleline.A PP")
  field(DLY1,"0.1")
  field(DO2,"1")
  field(LNK2,"textline1.B PP")
  field(DLY2,"0.1")
  field(DO3,"0")
  field(LNK3,"textline1.B PP")
  field(DLY3,"0.1")
  field(DOL4,"bottlecount-1 PP")
  field(LNK4,"bottleline.A PP")
  field(DLY4,"2.1")
  field(DOL5,"bottlecount NPP")
  field(LNK5,"textline2a.A PP")
  field(DLY5,"0.1")
  field(DOL6,"bottlecount-1 NPP")
  field(LNK6,"textline2b.A PP")
  field(DLY6,"0.1")
  field(LNK7,"linefeed PP")
  field(DLY7,"0.1")
}
record(scalcout,"textline1") {
  field(INPA,"bottlecount.VAL NPP")
  field(INAA,"bottleline.SVAL")
  field(CC," of beer on the wall,")
  field(DD," of beer.")
  field(CALC,"AA+(B?CC:DD)")
  field(OUT,"printer CPP")
}
record(scalcout,"textline2a") {
  field(INPA,"bottlecount.VAL NPP")
  field(AA,"Take one down and pass it around, ")
  field(BB,"Go to the store and buy some more, ")
  field(CALC,"A?AA:BB")
  field(OUT,"printer CPP")
}
record(scalcout,"textline2b") {
  field(INPA,"bottlecount.VAL NPP")
  field(INAA,"bottleline.SVAL PP")
  field(BB," of beer on the wall.")
  field(CALC,"AA+BB")
  field(OUT,"printer CPP")
}
record(scalcout,"linefeed") {
  field(CALC,"")
  field(OUT,"printer CPP")
}
record(stringin,"printer") {
}```