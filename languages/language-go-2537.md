
## Language Go ##
---
- Author: Marcos Vazquez
- Date: 11/10/10
- Info: http
- Score:  (1.70 in 37 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-go-2537.html
---

```/*  The 99 Bottles of Beer in the Go Proramming Language
 *
 *  Marcos Vazquez
 *  mvazquez[at]tamps.cinvestav[dot]mx
 *  November 10, 2010
 *
 */

package main

import "fmt"

var bottlesOfBeer int = 99;

func takeOneBeer(ch chan bool) {
    bottlesOfBeer--;
    go singTheSong(ch)
}

func singTheSong(ch chan bool) {
    if bottlesOfBeer > 1 {
        fmt.Printf("%d bottles of beer on the wall, %d bottles of beer.\n", 
        bottlesOfBeer, bottlesOfBeer)
        fmt.Println("Take one down and pass it around, 97 bottles of beer on the wall.\n")
        go takeOneBeer(ch)
    } else if bottlesOfBeer == 1 {
        fmt.Println("1 bottle of beer on the wall, 1 bottle of beer.")
        fmt.Println("Take one down and pass it around, no more bottles of beer on the wall.\n")
        go takeOneBeer(ch)
    } else {
        fmt.Println("No more bottles of beer on the wall, no more bottles of beer.")
        fmt.Println("Go to the store and buy some more, 99 bottles of beer on the wall.")
        ch <- true
    }
}

func main() {
    ch := make(chan bool)
    go singTheSong(ch)
    <- ch
}```