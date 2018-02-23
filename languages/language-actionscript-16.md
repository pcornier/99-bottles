
## Language ActionScript ##
---
- Author: Unknown
- Date: 04/20/05
- Info: n/a
- Score:  (2.96 in 24 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-actionscript-16.html
---

```<code>
//-------------------------------------
// 99 Bottles in object oriented actionscript
// 11/2002 by Ralf Bokelberg - helpQLODhelp.de
//-------------------------------------

//-------------------------------------
// The Baseclass for the drinks
//-------------------------------------
function PackageClass(name, content){
 this.name = name;
 this.content = content;
}
//
PackageClass.prototype.display = function(nr){
 if(nr > 1)
  return nr + " " + this.name + "s of " + this.content;
 else if(nr == 1)
  return "1 " + this.name + " of " + this.content;
 else
  return "no more " + this.name + "s of " + this.content;
}

//-------------------------------------
// The class for bottles of beer
// inherits from PackageClass
//-------------------------------------
function BottleOfBeerClass(){}
//
BottleOfBeerClass.prototype = new PackageClass("bottle", "beer");


//-------------------------------------
// The WallClass to hold our bottles
//-------------------------------------
function WallClass(packageClass){
 this.storage = [];
 this.packageClass = packageClass;
}
//
WallClass.prototype.addPackages = function(count){
 for(var i=0; i<count; i++){
  this.storage.push(new this.packageClass());
 }
}
//
WallClass.prototype.getPackage = function(){
 this.storage.pop();
 return "Take one down, pass it around, ";
}
//
WallClass.prototype.getCount = function(){
 return this.storage.length;
}
//
WallClass.prototype.display = function(){
 return this.packageClass.prototype.display(this.getCount());
}
//
WallClass.prototype.displayLong = function(){
 return this.display() + " on the wall.";
}

//-------------------------------------
// Main
//-------------------------------------
wall = new WallClass(BottleOfBeerClass);
wall.addPackages(5);
//
result = "";
do {
 result += wall.displayLong() + wall.display() + "\n";
 result += wall.getPackage() + wall.displayLong() + "\n\n";
} while(wall.getCount() > 0);
//
trace(result);
</code>```