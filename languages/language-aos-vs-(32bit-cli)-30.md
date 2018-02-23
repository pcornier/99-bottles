
## Language AOS/VS (32bit CLI) ##
---
- Author: Robert de Mander
- Date: 04/20/05
- Info: n/a
- Score:  (2.80 in 98 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-aos-vs-(32bit-cli)-30.html
---

```\\ Data General AOS/VS 32-bit CLI
\\ 99 Bottles of Beer
\\ by Robert de Mander, Robdem Soft AB, Stockholm, Sweden (www.robdemsoft.se)
\\
\\ If you wonder about the [!ascii 254] it's really a comma with the parity
\\ bit set, and write/7bit strips it away. The ordinary comma is there to
\\ get a space(sic!) after the parity bit comma. Weird, but true!

push
prompt pop
var0 99
[!loopstart [!var0]]
    string [!var0] bottle[!une,[!var0],1]s[!end]
    write/nonewline/7bit [!string] of beer on the wall[!ascii 254],
    write [!string] of beer.
    write/nonewline/7bit Take one down and pass it around[!ascii 254],
    var0 [!usub,[!var0],1]
    string [!ueq,[!var0],0]no more[!else][!var0][!end]
bottle[!une,[!var0],1]s[!end]
    write [!string] of beer on the wall.
[!loopend]
write/7bit No more bottles of beer on the wall[!ascii 254], no more
bottles of beer.
write/7bit Go to the store[!ascii 254], buy some more[!ascii 254], 99
bottles of beer on the wall.

pop```