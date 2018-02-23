
## Language Aurora Macro Language (AML) ##
---
- Author: Danny Lawler
- Date: 04/20/05
- Info: n/a
- Score:  (2.86 in 22 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-aurora-macro-language-(aml)-50.html
---

```// 99 bottles written in AML (Aurora Macro Language) for the fantastic Aurora
// text editor. Although the latest version of the editor is still available
// for free download (Aurora Editor/32 v3.3 Beta 1) development is now defunct,
// and the author uncontactable.
//
// If you have experienced the beauty and power of this editor and want to
// support an open-source initiative, visit the biggest fan-site:
// http://www-personal.umich.edu/~knassen/aurora.html
//
// Author: Danny Lawler.

include bootpath "define.aml"

createbuf // Target buffer for text ops

for i = 99 downto 0 do

    plural = if? i == 1  ""  "s"
    buff = if? i == 0 "No" i

    addline buff + ' bottle' + plural + ' of beer on the wall,'
    addline buff + ' bottle' + plural + ' of beer,'
    plural = if? i-1 == 1  ""  "s"

    if not i then
      addline 'First we weep, then we sleep.'
    else
      addline  'Take one down, pass it around,'
    end

    buff = if? (i-1 <= 0) "No" i-1
    addline buff + ' bottle' + plural + ' of beer on the wall.'
    addline
end

buff = '      * 99 Bottles of Beer *      '
// Display output in popup menu
popup (getcurrbuf)  buff length buff
destroybuf```