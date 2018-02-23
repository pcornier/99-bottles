
## Language Kotlin ##
---
- Author: Franck Rasolo
- Date: 06/22/12
- Info: http
- Score:  (2.90 in 31 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-kotlin-2901.html
---

```fun main(args: Array<String>) = 99 downto 0 map { verse(it) } forEach { println(it) }

fun verse(n: Int) = when (n) {
  0 -> """N${n.bottles().substring(1)} of beer on the wall, ${n.bottles()} of beer.
Go to the store and buy some more, ${99.bottles()} of beer on the wall."""

  else -> """${n.bottles()} of beer on the wall, ${n.bottles()} of beer.
Take one down and pass it around, ${(n - 1).bottles()} of beer on the wall.
"""
}

fun Int.bottles() = when (this) { 0 -> "no more bottles" 1 -> "1 bottle" else -> "$this bottles" }```