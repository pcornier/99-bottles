
## Language Java ##
---
- Author: Kvols
- Date: 11/19/05
- Info: n/a
- Score:  (3.00 in 38 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-java-950.html
---

```/**
 * Java 5.0 version of the famous "99 bottles of beer on the wall".
 * Note the use of specific Java 5.0 features and the strictly correct output.
 *
 * @author kvols
 */

import java.util.*;

class Verse {
    private final int count;

    Verse(int verse) {
        count= 100-verse; 
    }

    public String toString() {
        String c=
            "{0,choice,0#no more bottles|1#1 bottle|1<{0} bottles} of beer";
        return java.text.MessageFormat.format(
            c.replace("n","N")+" on the wall, "+c+".\n"+
            "{0,choice,0#Go to the store and buy some more"+
            "|0<Take one down and pass it around}, "+c.replace("{0","{1")+
            " on the wall.\n", count, (count+99)%100);
    }
}

class Song implements Iterator<Verse> {
    private int verse=1;

    public boolean hasNext() {
        return verse <= 100;
    }

    public Verse next() {
        if(!hasNext()) 
            throw new NoSuchElementException("End of song!");
        return new Verse(verse++);
    }

    public void remove() {
        throw new UnsupportedOperationException("Cannot remove verses!");
    }
}

public class Beer {
    public static void main(String[] args ) {

        Iterable<Verse> song= new Iterable<Verse>() {
            public Iterator<Verse> iterator() {
                return new Song();
            }
        };

        // All this work to utilize this feature:
        // "For each verse in the song..."

        for(Verse verse : song) {
            System.out.println(verse);
        }
    }
}```