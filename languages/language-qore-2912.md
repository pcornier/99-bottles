
## Language Qore ##
---
- Author: Brett Estrade
- Date: 07/11/12
- Info: http
- Score:  (1.50 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-qore-2912.html
---

```#!/usr/bin/env qore                                                                        
                                                                                           
%require-our                                                                               
%enable-all-warnings                                                                       
%require-types                                                                             

# make sure we have the right version of qore
%requires qore >= 0.8.3
    
# no gui
%no-gui                                                                                    

# global variables (truly shared among threads) must be declared with "our" keyword
%require-our

our Counter $count();

sub t() {
  on_exit { 
        $count.dec();
  }
  my int $i = gettid()-1;
  printf("%d bottles of beer on the wall\n", $i);
  printf("%d bottles of beer\n", $i);
  printf("take one down, pass it around\n");
  printf("%d bottles of beer on the wall\n", $i);
}

#-- following run by main thread
for (my int $i = 99; $i > 0; $i--)  {
  $count.inc();
  background t();
}

$count.waitForZero();```