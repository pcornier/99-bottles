
## Language BeanShell ##
---
- Author: Tom Edelson
- Date: 06/18/05
- Info: http
- Score:  (3.33 in 3 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-beanshell-752.html
---

```// 99bottles.bsh
//
// Tom Edelson, last modified 2005-06-18

// This is BeanShell, a scripting language based on, and implemented in,
// Java.
//
// Mostly, the BeanShell language just is Java; but type declarations
// on variables are optional, and some scripting-friendly features
// have been added.  One of these features is the ability of a method
// to return a "closure", which is a bundle of [persistent] data and
// code; thus, like an object, but not derived from a class.
//
// In this example, each of the methods "newWall" and "newSinger" creates and
// returns a closure, whose content is defined by statements,
// and nested method definitions, within the "constructor" itself.

// For more information on BeanShell, and to download it, visit
//
//    http://www.beanshell.org/


formatBottleCount (number) {

    if (number == 0) {
        return "No bottles ";
    }

    if (number == 1) {
        return "One bottle ";
    }

    return number + " bottles ";

} // end method formatBottleCount


newWall (initialCount) {

    count = initialCount;

    getCount () {
        return count;
    }

    hasBottles () {
        return count > 0;
    }

    takeOne () {
        count--;
        return count;
    }

    return this;

} // end method newWall


newSinger (wallRef) {

    wall = wallRef;
    count = wall.getCount();
    countString = formatBottleCount (count);
    print ("");

    singVerse () {

        print (countString + "of beer on the wall,");
        print (countString + "of beer;");

        count = wall.takeOne();
        print ("Take one down, pass it around,");

        countString = formatBottleCount (count);
        print (countString + "of beer on the wall.");
        print ("");
 
    } // end method singVerse

    finish () {
        print ("Gotta be another beer wall around here somewhere ...");
        print ("");
    }

    return this;

} // end method newSinger


// Main program code:

wall = newWall (99);

singer = newSinger (wall);

while (wall.hasBottles()) {
    singer.singVerse();
}

singer.finish();


// end of file "99bottles.bsh".```