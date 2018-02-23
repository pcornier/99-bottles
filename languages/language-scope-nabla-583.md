
## Language Scope Nabla ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: http
- Score:  (3.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-scope-nabla-583.html
---

```<!-- Scope Nabla version of 99 bottles of beer
  http://indirect3d.sf.net/ -->

<!loadsyntax =language.sntx/>
<!loadsyntax =conio.sntx/>

<Nabla>
 <defvar Class=int Identifier=i><int_const value=99/></defvar>
 <loop>
  <cout><varref =i/><str_const =" bottle(s) of beer on the wall"/>
   <char_const =0xA /></cout>
  <cout><varref =i/><str_const =" bottle(s) of beer"/>
   <char_const =0xA /></cout>
  <cout><str_const ="take one down and pass it around" />
   <char_const =0xA /></cout> 
  <Equal><Deca><varref =i/></><int_const =1/></Equal> 
  <cout>
   <varref =i/>
    <str_const value=" bottle(s) of beer on the wall" />
   <char_const =0xA /></cout> 
 </loop>
 <cout><str_const ="No more bottles of beer on the wall!

"/></cout>
 <cout><str_const ="Time to buy more beer!"/></cout> 
</Nabla>```