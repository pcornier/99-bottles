
## Language Nice ##
---
- Author: Manfred Kr�hnert
- Date: 05/22/05
- Info: http
- Score:  (2.00 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-nice-677.html
---

```/**
 *
 * Nice Version of 99 Bottles of beer
 * http://nice.sourceforge.net
 * File: beer.nice
 * Author: Manfred Kr�hnert
 * Mail: Manfred.Kroehnert@ira.uka.de
 * Usage: put file into a directory named beer
 *        call: 'nicec -a beer.jar beer'
 *        to compile the program into a .jar file
 *        execute by calling 'java -jar beer.jar'
 *
 */

package beer;

String beer(int n) requires n >= 0;

beer(0) = "No more beer";

beer(1) = """
1 bottle of beer on the wall,
1 bottle of beer.
Take one down, pass it around,
0 bottles of beer on the wall.""";

beer(n) = 
n + " bottles of beer on the wall,\n" +
n + " bottles of beer.\n" +
"Take one down, pass it around,\n" +
(n - 1) + " bottles of beer on the wall.\n";

void main(String[] args){
  for(int i: 0..99) println(beer(99 - i));
}```