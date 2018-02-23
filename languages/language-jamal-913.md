
## Language jamal ##
---
- Author: Feherke
- Date: 10/11/05
- Info: http
- Score:  (2.79 in 24 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-jamal-913.html
---

```{#comment 99 bottles of beer
run it by passing this script file's name to the jamal interpreter as parameter}\
\
{@define beer count=\
{#if/{#!= count 0}/count/No more} bottle{#if/{#!= count 1}/s} of beer}\
\
{@for nr/99...0/\
{beer nr} on the wall,
{beer nr}.
{#if/{#!= nr 0}/\
Take one down and pass it around,
{beer {#- nr 1}} on the wall./\
Go to the store and buy some more,
{beer 99} on the wall.}

}```