
## Language Fantom ##
---
- Author: Per Pettersson
- Date: 12/12/10
- Info: http
- Score:  (3.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-fantom-2563.html
---

```class Beer
{
  Void main()
  {
    (99..0).each |n|
    {
      echo(verse(n) + "\n")
    }
  }

  Str verse(Int n)
  {
    q := quantStr(n)
    qq := quantStr(n == 0 ? 99 : n - 1)
    s := suffix(n)
    ss := suffix(n == 0 ? 99 : n - 1)
    lastPart := n > 0 ? "Take one down and pass it around"
                      : "Go to the store and buy some more"
    return "$q bottle$s of beer on the wall, $q.lower bottle$s of beer.
            $lastPart, $qq bottle$ss of beer on the wall."
  }

  Str suffix(Int n) { n == 1 ? "" : "s" }

  Str quantStr(Int n) { n == 0 ? "No more" : n.toStr }
}```