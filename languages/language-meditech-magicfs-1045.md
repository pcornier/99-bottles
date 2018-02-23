
## Language MEDITECH MagicFS ##
---
- Author: nobody
- Date: 02/07/06
- Info: n/a
- Score:  (2.93 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-meditech-magicfs-1045.html
---

```MEDITECH's MagicFS is a proprietary language, so you'll probably not be able to find much info about
it.  But here you go:

@OW,
100@XV@FV
@[@{@(@IF{=0 "No more"}," bottle",IF{~=1 "s"}," of beer on the wall, ",
      @IF{=0 "no more"}," bottle",IF{~=1 "s"}," of beer"),
    @IF{=0 "Go to the store and buy some more, 99 bottles of beer on the wall.";
        @("Take one down and pass it around, ",
          -1@IF{=0 "no more"}," bottle",IF{~=1 "s"}," of beer on the wall")},
    ""}]
@MV@Av@Wb@TW```