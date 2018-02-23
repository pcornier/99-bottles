
## Language PocketC ##
---
- Author: John Eriksson
- Date: 04/20/05
- Info: http
- Score:  (3.02 in 110 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-pocketc-552.html
---

```//99-Bottles-of-beer
//Made by John Eriksson 2003
//Compile with PocketC for PalmOS
//http://www.orbworks.com

#define memo "99-Bottles-of-beer"

char n='n';

getnbr(int i){
string s;
switch(i){
   case 0:
      s=n+"o more bottles";
      if(n=='n') n='N';
      else n='n';
   break;
   case 1:
      s="1 bottle";
   break;
   default:
      s=i+" bottles";
   break;
}
return(s);
}

 

main(){
int b=99,m,x=1;

if((m=mmfind(memo))>0)
   mmdelete();
m=mmnew();
mmputs(memo+"\n\n");
clear();
puts("Please wait...\n");
while(x){
   mmputs(getnbr(b)+" of beer on the wall, "+getnbr(b)+" of beer.\n");
   b--;
   if(b<0){
      b=99;
      x=0;
      mmputs("Go to the store, buy some more, ");
   }
   else 
      mmputs("Take one down, pass it around, ");
   mmputs(getnbr(b)+" of beer on the wall.\n");
}
puts("Done!\n");
mmclose();
alert("Song is stored in the memo named '"+memo+"'");
}```