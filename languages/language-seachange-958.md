
## Language seachange ##
---
- Author: James Robson
- Date: 11/24/05
- Info: http
- Score:  (4.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-seachange-958.html
---

```public proc beer()
{
    let bottles := 99

    while bottles > 0
    {
        display bottles^" bottles of beer on the wall," wait -1
        display bottles^" bottles of beer." wait -1
        display "Take one down, pass it around," wait -1

        bottles := bottles - 1

        if bottles > 0
        {
            display bottles^" bottles of beer on the wall." wait -1
            display ""
        }
        else
        {
            display "No more bottles of beer on the wall." wait -1
            display ""
            display "No more bottles of beer." wait -1
            display "Go to the store and buy some more, 99 bottles of beer on the wall." wait -1
        }
    }
}```