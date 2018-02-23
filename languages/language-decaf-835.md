
## Language Decaf ##
---
- Author: Timothy Chen
- Date: 08/11/05
- Info: http
- Score:  (2.83 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-decaf-835.html
---

```class Wall {
  Bottle[] bottlesOnWall;
  
  void InitWall() {
    int i;	

    bottlesOnWall = NewArray (100, Bottle);
    for (i = 1; i <= 99; i = i + 1) {
      bottlesOnWall[i] = New (Bottle);
      bottlesOnWall[i].SetNumberOnWall(i);
    }
    bottlesOnWall[0] = New(NoBottle);
  }

  Bottle[] GetBottlesOnWall() {
    return bottlesOnWall;
  }
}

class Bottle {
  int numberOnWall;

  void SetNumberOnWall(int number) {
    numberOnWall = number;
  }
  
  int GetNumberOnWall() {
     return numberOnWall;
  }
}

class NoBottle extends Bottle {
  void SetNumberOnWall() {}

  int GetNumberOnWall() {
    return 0;
  }
}

  


void main() {
  Wall myWall;
  int i;
	
  myWall = New (Wall);
  myWall.InitWall();
  for (i = (myWall.GetBottlesOnWall()).length() - 1; i >= 0; i = i - 1) {  
    if ((myWall.GetBottlesOnWall())[i].GetNumberOnWall() == 0) {
      Print ("No more bottle of beer on the wall, ");
      Print ("no more bottles of beer.\n");
      Print ("Go to the store and buy some more, ");
      Print ("99 bottles of beer on the wall.\n");
    } else {
	Print ((myWall.GetBottlesOnWall())[i].GetNumberOnWall(), " bottles of beer on the wall, ");
	Print ((myWall.GetBottlesOnWall())[i].GetNumberOnWall(), " bottles of beer.\n");
	Print ("Take one down and pass it around, ");
	Print ((myWall.GetBottlesOnWall())[i].GetNumberOnWall() - 1, " bottles of beer on the wall.\n\n");
    }
  }
}```