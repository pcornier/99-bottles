
## Language LIA ##
---
- Author: Rafael Martins
- Date: 12/21/07
- Info: n/a
- Score:  (4.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-lia-1652.html
---

```algoritmo LIA;
variavel
  i: inteiro;
inicio
  i <- 100;

  enquanto (i > 1) faca
    i <- i - 1;
    escreva(i, " bottles of beer on the wall,");
    escrevaln(i, " bottles of beer.");
    escreva("Take one down and pass it around, ");
    escrevaln(i-1, " bottles of beer on the wall.");    
  fim_enquanto;

  escrevaln("1 bottle of beer on the wall, 1 bottle of beer.");
  escreva("Take one down and pass it around, ");
  escrevaln("no more bottles of beer on the wall.");

  escrevaln("No more bottles of beer on the wall, no more bottles of beer.");
  escreva("Go to the store and buy some more, 99");
  escrevaln("99 bottles of beer on the wall.");
fim.```