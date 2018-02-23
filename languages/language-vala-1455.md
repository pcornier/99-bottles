
## Language Vala ##
---
- Author: Kahnamta
- Date: 04/16/07
- Info: http
- Score:  (2.81 in 101 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-vala-1455.html
---

```/* 99 Bottles of Beer in Vala (live.gnome.org/Vala)
   by Kahnamta, Apr 15 2007 */

using GLib;

public class Beer {
        private int bottles = 99;

        public void drink() {
                if (bottles > 2) {
                        stdout.printf("%d bottles of beer on the wall.\n", bottles);
                        stdout.printf("%d bottles of beer.\n", bottles);
                        stdout.printf("Take one down, pass it around\n");
                        stdout.printf("%d bottles appear on the wall!\n\n", --bottles);

                        drink();
                }
                else if (bottles == 2) {
                        stdout.printf("Two bottles of beer on the wall.\n");
                        stdout.printf("Two bottles of beer.\n");
                        stdout.printf("Take one down, pass it around\n");
                        stdout.printf("One bottle appear on the wall!\n\n");
                        bottles--;

                        drink();
                }
                else {
                        stdout.printf("One bottle of beer on the wall.\n");
                        stdout.printf("One bottle of beer.\n");
                        stdout.printf("Take it down, pass it around\n");
                        stdout.printf("No more bottles appear on the wall!\n\n");
                }
        }

        static int main(string[] args) {
                var bottle = new Beer();

                bottle.drink();

                return 0;
        }
}```