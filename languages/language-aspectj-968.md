
## Language AspectJ ##
---
- Author: Tilo Dickopp
- Date: 11/30/05
- Info: http
- Score:  (3.01 in 70 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-aspectj-968.html
---

```aspect BeerAspect {
  static String[][] REPLACE = {
    { "1 bottles", "1 bottle" },
    { "^0", "No more" },
    { "0", "no more" },
    { ".*-1",  "Go to the store and buy some more, 99" },
  };
  
  void around (String text, int count) : 
      call(* *.println(..)) && 
      args(text) && 
      cflowbelow(call (* Beer.lyrics(..)) && args(count)) && 
      !within(BeerAspect) &&
      if(count <= 2) {
    for (String[] replace : REPLACE) {
      text = text.replaceAll(replace[0], replace[1]);
    }
    proceed(text, count);
  }

  after(int count) :
      call (* Beer.lyrics(..)) && 
      args(count) && 
      if (count > 0) {
    ((Beer)thisJoinPoint.getTarget()).lyrics(count - 1);
  }
}

class Beer {
  static final String BEER = " bottles of beer";
  static final String BEER_WALL = BEER + " on the wall";
  static final String TAKE = "Take one down and pass it around, ";
  
  void lyrics(int count) {
    System.out.println(count + BEER_WALL + ", " + count + BEER + ".");
    System.out.println(TAKE + (count - 1) + BEER_WALL + ".");
    System.out.println();
  }
  
  public static void main(String[] args) {
    new Beer().lyrics(99);
  }
}```