
## Language actionscript ##
---
- Author: atom3000
- Date: 01/10/06
- Info: n/a
- Score:  (3.01 in 94 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-actionscript-1010.html
---

```for(_root.i=0;_root.i<99;_root.i++) {
createEmptyMovieClip( "br"+_root.i, _root.i );
tellTarget("br"+_root.i) {
lineStyle( 1, 0, 50);
moveTo(0, 0);
lineTo(0,-10);
lineTo(-5,-15);
lineTo(-5,-20);
lineTo(-10,-20);
lineTo(-10,-15);
lineTo(-15,-10);
lineTo(-15,0);
lineTo(0,0);
createTextField("t",1,-15,0,90,30);
t.text=_root.i+1;
_x=50+_root.i%20*25;
_y=50+(Math.floor(_root.i/20))*50;
}
}
x=99;
setInterval( 
function(){
x--;
if(x+1>0)tellTarget("br"+x)_alpha=0;
}
, 
100
);```