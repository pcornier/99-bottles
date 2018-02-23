
## Language Dark ##
---
- Author: Marinus Oosters
- Date: 06/12/12
- Info: http
- Score:  (4.25 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dark-2897.html
---

```||| 99 bottles of beer in Dark |||

+beer hell

| Define objects |

| I/O |
beer$twist stalker drunk
| Flow control |
beer$twist entropy alcoholic
beer$twist entropy boozehound
| Math and variables |
beer$twist manipulator barkeep
| String handling |
beer$twist sign bard

| Unbuffered I/O mode (not that it really matters here) |
drunk$stalk
drunk$personal

| Variables |
barkeep$manufacture beer 0 8 master
barkeep$set beer 99

| End of line | 
barkeep$manufacture cr 0 8 servant beer
barkeep$set cr 10
barkeep$manufacture lf 0 8 servant beer
barkeep$set lf 13

| Label |
alcoholic$corpse overdosed

| First line |
alcoholic$choice beer != 0
   bard$scrawl # beer
alcoholic$balance
   bard$scrawl " No more
alcoholic$reprogram
bard$scrawl "  bottle
alcoholic$choice beer != 1
   bard$scrawl " s
alcoholic$reprogram
bard$scrawl "  of beer on the wall,
bard$scrawl cr
bard$scrawl lf

| Second line |
alcoholic$choice beer != 0
   bard$scrawl # beer
alcoholic$balance
   bard$scrawl " No more
alcoholic$reprogram
bard$scrawl "  bottle
alcoholic$choice beer != 1
   bard$scrawl " s
alcoholic$reprogram
bard$scrawl "  of beer,
bard$scrawl cr
bard$scrawl lf

| Third line |
alcoholic$choice beer != 0
   bard$scrawl " Take one down and pass it around,
alcoholic$balance
   bard$scrawl " Go to the store and buy some more,
alcoholic$reprogram
bard$scrawl cr
bard$scrawl lf

| Drink a beer |
barkeep$subtract beer beer 1

| Fourth line |
alcoholic$choice beer != 0
   boozehound$choice beer > 99
      bard$scrawl " 99
   boozehound$balance
      bard$scrawl # beer
   boozehound$reprogram
alcoholic$balance
   bard$scrawl " No more
alcoholic$reprogram
bard$scrawl "  bottle
alcoholic$choice beer != 1
   bard$scrawl " s
alcoholic$reprogram
bard$scrawl "  of beer on the wall.
bard$scrawl cr
bard$scrawl lf
bard$scrawl cr
bard$scrawl lf

| Jump back if there's beer left |
| (Variables are unsigned) |
alcoholic$choice beer < 99
   alcoholic$stumble overdosed
alcoholic$reprogram

| The bard will now read his song... (i.e. concatenate strings) |
bard$read

| ...and the drunk will sing along. (i.e. output) |
drunk$echo

| Delete all objects before causing the apocalypse |
beer$empty
beer$apocalypse```