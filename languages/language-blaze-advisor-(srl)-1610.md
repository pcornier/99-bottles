
## Language Blaze Advisor (SRL) ##
---
- Author: Patrick Cain
- Date: 10/10/07
- Info: http
- Score:  (3.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-blaze-advisor-(srl)-1610.html
---

```Create this Beer project:
Beer
+ Beer Folder
  + [->] BeerRuleset
         + v bottles : integer initially 99
         + v letsDrink : boolean initially false
         + v weNeedToShop : boolean initially false
         + v sing : boolean initially true
         + [->] singRule
                if sing then
                {
                  print(BottleText(bottles, true) " on the wall, " BottleText(bottles, false) ".");
                  sing is false;
                  letsDrink is (bottles is not equal to 0);
                  weNeedToShop is (bottles is 0);
                }
         
         + [->] shopRule
                if weNeedToShop then
                {
                  weNeedToShop is false;
                  bottles is 99;
                  print("Go to the store and buy some more..." BottleText(bottles, true) ".");
                }        
         + [->] drinkRule
                if letsDrink then
                {
                  letsDrink is false;
                  decrement bottles;
                  sing is true;
                  print("Take one down and pass it around..." BottleText(bottles, true) ".");
                  print("");
                }
  + f() BottleText(integer, boolean) : string
        Parameters:
          bottles : integer
          capitalise : boolean
        Function body:
          whatsInTheCrate is a string initially "" bottles;
          plural is a string initially "";
          if bottles is not equal to 1 then plural is "s";
          if bottles is 0 then
          {
            if capitalise then whatsInTheCrate is "No" else whatsInTheCrate is "no";
          }
          whatsInTheCrate is whatsInTheCrate " bottle" plural " of beer";
          return whatsInTheCrate;
  + f() main()
        Function body:
          apply BeerRuleset();


Key:
[->] Ruleset or rule
v    Variable
f()  Function```