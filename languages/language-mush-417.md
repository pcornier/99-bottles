
## Language MUSH ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-mush-417.html
---

```Stuff to program multi-user games on the net.

A bunch of drunk engineers(#54326) Owner: eric.korpela Key: 
eric.korpela(#54351PeoZ)  Money: 2 You see a bunch of engineers 
from a south bay firm who look like they've had a bit too much 
to drink. They are random walking all over town, stopping where 
ever they can find approprate beverages. I bet they'd sing 
"99 bottles of beer" if you asked them to.

Listen: *sing*99*

Ahear: use me;
       @wait 3={
          @while gt(V(vi),1)={
            @if eq(V(vj),V(vi))=think,{@trigger me/vy;@decrement me/vj}
          };
          @wait DONE=:collapses into an algoholic stupor.
       }

VY: say concat(V(vi),bottles of beer on the wall!); 
    say concat(V(vi),bottles of beer.); 
    say You take one down, and pass it around; 
    @decrement me/vi; 
    say concat(V(vi),bottles of beer on the wall.);
    @emit

Ause: @vi me=99;@vj me=100

Ouse: takes a deep breath and begins to sing.

Scent: They smell of 43 different types of liquor.

Functions: #69```