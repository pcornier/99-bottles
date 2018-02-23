
## Language WOPTL ##
---
- Author: Terje Kristensen
- Date: 07/07/06
- Info: n/a
- Score:  (2.89 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-woptl-1208.html
---

```{:-SET str:}bottles{:END:}
{:-SET bottle:}99{:END:}

{:FOR NAME="beer" ARGS="0..$bottle":}
[:bottle:] [:str:] of beer on the wall, [:bottle:] [:str:] of beer.<br>
  {:-SET bottle:}
    {:-IF "$bottle" eq "1":}no more
    {:-ELSE:}{:-WOPTL calc:}[:bottle:]-1{:END:}
    {:-END:}
  {:-END:}
  {:-SET str:}bottle{:IF "$bottle" ne "1":}s{:END:}{:END:}
{:-IF $bottle < 0:}
Go to the store and buy some more, 99 [:str:] of beer on the wall.<br>
{:-ELSE:}
Take one down and pass it around, [:bottle:] [:str:] of beer on the wall.<br>
{:-END:}
<br>
{:END:}```