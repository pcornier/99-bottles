
## Language Objecteering language ##
---
- Author: JPE
- Date: 11/04/06
- Info: http
- Score:  (1.75 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-objecteering-language-1320.html
---

```int remain = 99;
Object [] params;
String s;

// getting remaining number
getCurrentProject.<ModelPackage.<TagTaggedValue.<select (DefinitionTagType.Name == "nocode") {
    ActualTagParameter {
        remain = this.Value.toInteger ();
    }
}

if (remain > 1) s = "s";

StdOut.write (remain);
StdOut.write ( " bottle"+s+" of beer on the wall, ");
StdOut.write (remain, " bottle"+s+" of beer, ", NL);

if (remain == 1) {
     StdOut.write ( " Take one down, pass it around, ");
     StdOut.write ( "no more bottles of beer on the wall, ", NL);

    StdOut.write ( " No more bottles of beer on the wall, no more bottles of beer. ", NL);
    StdOut.write ( " Go to the store, buy some more, 99 bottles of beer on the wall.", NL);
} else {
     StdOut.write ( " Take one down, pass it around, ");
     remain = remain - 1;
     if (remain == 1) s = "";
     StdOut.write ( remain, " bottle"+s+" of beer on the wall, ", NL);
     getCurrentProject.<ModelPackage.<TagTaggedValue.<select (DefinitionTagType.Name == "nocode")
.<delete ();
     params.insert (remain.toString ());
     getCurrentProject.<ModelPackage.<createAndAddTaggedValueWithParams ("nocode",  "nocode",
params, "");
     runMacro ("bottles");
}```