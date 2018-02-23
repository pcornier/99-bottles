
## Language Game Maker Language ##
---
- Author: brac37
- Date: 10/24/09
- Info: http
- Score:  (2.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-game-maker-language-2207.html
---

```/* Lyric 99 bottles of beer.
 * This script has only ONE variable.
 * This script has only TWO statements.
 * This script does NOT have case selection and neither has loops. 
 * This script does NOT call scripts, i.e. not other scipts and
 * no recursive calls.
 * This script does NOT execute strings with case selection 
 * (IF and SWITCH) and neither strings with loops.
 * This script DOES use string_repeat, but the repeat argument is 
 * always a PROPER integral constant and no boolean. 
 * The value of EOB (End Of Beer) is 100, but can easily be adapted
 * to any value greater than 3.
 */
a := string_replace_all (
  "a := string_replace_all (a, string(EOB), string(EOB - 1));" +
  "a := string_replace_all (a, '(0', '(0 + 1');" +
  "a := string_repeat (a, 2 - 1);" +  
  "show_message (string_repeat ('No more', 1 + 1 - 2) + " +
  "  string_repeat (string(EOB - 1), 2 - 1) + ' bottle' + " + 
  "  string_repeat ('s', 3 + 1 + 1 - 2 - 2) + ' of beer on the wall, ' + " +
  "  string_repeat ('no more', 1 + 1 - 2) + " +
  "  string_repeat (string(EOB - 1), 2 - 1) + ' bottle' + " + 
  "  string_repeat ('s', 3 + 1 + 1 - 2 - 2) + ' of beer.#' + " +
  "  string_repeat ('Go to the store and buy some more, ', 1 + 1 - 2) + " + 
  "  string_repeat ('Take one down and pass it around, ', 2 - 1) + " + 
  "  string_repeat (string(0), 1 + 1 - 2) + " +
  "  string_repeat ('no more', 2 + 2 - 1 - 3) + " +
  "  string_repeat (string(EOB - 2), 3 - 2) + ' bottle' + " +
  "  string_repeat ('s', 4 + 2 + 1 - 3 - 3) + " +
  "  ' of beer on the wall.');" +
  "execute_string (a); ", "EOB", "100");
execute_string (a);```