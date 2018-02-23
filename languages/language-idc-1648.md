
## Language IDC ##
---
- Author: Tim Vidas
- Date: 12/18/07
- Info: http
- Score:  (2.89 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-idc-1648.html
---

```//IDC (IDA Pro) version of 99 bottles of beer on the wall
//Tim Vidas 2007

static main(){
  auto beers;
  beers=99;
  while((beers = verse(beers))>=0);
}

static verse(b){
  Message("%s of beer on the wall, %s of beer.\n",bnum(b)+bstr(b),bnum(b)+bstr(b));
  if(b){
    Message("Take one down and pass it around, %s of beer on the wall.\n\n",bnum(b-1)+bstr(b-1));
  }else{
    Message("Go to the store and buy some more, 99 bottles of beer on the wall.\n");
  }
  return b-1;
}

static bstr(b){
  auto thestr;
  thestr="bottles";
  if(b == 1){
    thestr = substr(thestr,0,strlen(thestr)-1);
  }
  return thestr;
}

static bnum(b){
  auto thenum;
  if(b == 0){
    thenum = "no more ";
  }else{
    thenum = form("%d ",b);
  }
  return thenum;  
}```