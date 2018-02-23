
## Language Conzept 16 ##
---
- Author: Christian Worreschk
- Date: 08/28/07
- Info: http
- Score:  (4.00 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-conzept-16-1585.html
---

```// 99 bottles of beer - Conzept 16 version
// developed by Christian Worreschk 
// August 28th, 2007 - Mainz, Germany
// 
// This language is part of the development environment "Conzept 16" developped by vectorsoft
// http://www.vectorsoft.de/


DEFINE {
  BOTTLE_COUNT : 99
}

SUB BottlePluralizer( aBottleCount : int ) : alpha
  Local{ tBottleString : alpha }{  
  
  SWITCH( aBottleCount ) {
    CASE 0  : tBottleString # 'no more bottles';
    CASE 1  : tBottleString # '1 bottle';
    DEFAULT : tBottleString # cnvAI( aBottleCount ) +' bottles';
  }  
  
  RETURN tBottleString;
}

SUB buildFirstPartOfVerse( aBottleCount : int ) : alpha
  Local{ tFirstPart : alpha ; tBottleString : alpha }{
  
  tBottleString # BottlePluralizer( aBottleCount );
  tFirstPart    # tBottleString + ' of beer on the wall, ' + tBottleString + ' of beer.';  
 
  IF ( aBottleCount = 0 ) {
    tFirstPart # 'N' + StrDel( tFirstPart, 1, 1 );
  }
  
  RETURN tFirstPart;
}

SUB buildSecondPartOfVerse( aBottleCount : int ) : alpha
  Local{ tSecondPart : alpha ; tBottleString : alpha }{
 
  IF ( aBottleCount = 0 ) {    
    aBottleCount # BOTTLE_COUNT;
    tSecondPart  # 'Go to the store and buy some more, ';
  } ELSE {
    dec( aBottleCount );    
    tSecondPart # 'Take one down and pass it around, '; 
  }
  
  tBottleString # BottlePluralizer( aBottleCount );  
  tSecondPart # tSecondPart + tBottleString + ' of beer on the wall.';
  
  RETURN tSecondPart;
}

SUB SingTheSong()
  Local{ tBottleCounter : int ; tFirstPart : alpha ; tSecondPart : alpha }{
  
  FOR tBottleCounter # BOTTLE_COUNT;
  LOOP dec( tBottleCounter );
  WHILE ( tBottleCounter >= 0 ) {  
    tFirstPart  # buildFirstPartOfVerse( tBottleCounter );
    tSecondPart # buildSecondPartOfVerse( tBottleCounter );
    
    // Output in Debugger
    DbgTrace( tFirstPart );    
    DbgTrace( tSecondPart );
    DbgTrace('');   
  }
}

MAIN() {
  DbgConnect( '*', y, y );

  SingTheSong();

  DbgDisConnect();
}```