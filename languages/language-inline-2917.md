
## Language Inline ##
---
- Author: OberoN
- Date: 07/18/12
- Info: n/a
- Score:  (2.50 in 2 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-inline-2917.html
---

```$[0:h](99:d)$s[1:h]( bottles of beer on the wall,\n:a)
$s[20:h](Take one down, pass it around,\n:a)
\1:h(2e:h)\2:h(a:h)\3:h(0:h)
$s[40:h](No more:a)
$s[48:h](Go to the store and buy some more,:a)
{b_loop}#{print} ' x bottles of beer on the wall,
1:h<>[11:h]2:h<>[12:h]3:h<>[13:h]#{print} ' x bottles of beer.
*s[20:h] ' Take one down and pass it around,
0:h<[0:h]-0:h0:h>[0:h]1:h<>[11:h]2:h<>[12:h]3:h<>[13:h]1:h<>[1d:h]#{print} ' x bottles of beer on
the wall.
1:h<>[1d:h]?0:h(!2:h)_{b_loop}
#{print} ' 2 bottles of beer on the wall,
1:h<>[11:h]2:h<>[12:h]3:h<>[13:h]#{print} ' 2 bottles of beer.
*s[20:h] ' Take one down and pass it around,
\5:h(1e:h)4:h<[1f:h]
{canc_s}4:h<>[5:h:r]%{canc_s}5:h(=8:h)(ff:h)
0:h<[0:h]-0:h0:h>[0:h]1:h<>[10:h]2:h<>[11:h]3:h<>[12:h]1:h<>[1c:h]#{print} ' 1 bottle of beer on the
wall.
1:h<>[1c:h]#{print} '1 bottle of beer on the wall,
1:h<>[10:h]2:h<>[11:h]3:h<>[12<:h](0:h)#{print} ' 1 bottle of beer.
*s[20:h] ' Take one down and pass it around,
*s[40:h]\5:h(8:h)\4:h(73:h) ' No more
{add_s}4:h<>[5:h:r]%{canc_s}5:h(=20:h)(1:h)
1:h<>[11:h]2:h<>[12:h]3:h<>[13:h]1:h<>[1d:h]*s[1:h] ' bottles of beer on the wall.
1:h<>[1d:h]*s[40:h]*s[1:h] ' No more bottles of beer on the wall,
1:h<>[11:h]2:h<>[12:h]3:h<>[13:h]*s[40:h]*s[1:h] ' No more bottles of beer.
*s[48] ' Go to the store and buy some more,
$[0:h](99:d)1:h<>[11:h]2:h<>[12:h]3:h<>[13:h]1:h<>[1d:h]#{print}//
{print}"[0:h]*s[1:h]/```