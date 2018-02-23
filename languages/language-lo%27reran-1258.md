
## Language Lo'reran ##
---
- Author: udev daemon
- Date: 08/31/06
- Info: http
- Score:  (3.00 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-lo%27reran-1258.html
---

```.|->.
num![[int]]99
<?>(num!>1)?:T:!
{
out!<-num!<-" bottles of beer on the wall, "!<-num!<-"bottles of beer."!<-crlf!<-"Take one down and
pass it around, "
num!num-1
out!<-num!<-"bottles of beer on the wall."!<-n.2*(crlf)[[arr(2)[[num]]]]
}:f: del!<<num
out!<-"1 bottle of beer on the wall, 1 bottle of beer."!<-crlf!<-"Take one down and pass it around,
no more bottles of beer on the wall."!<-n.2*crlf!<-"No more bottles of beer on the wall, no more
bottles of beer."!<-crlf!<-"Go to the store and buy some more, 99 bottles of beer on the wall."```