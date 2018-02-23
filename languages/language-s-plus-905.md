
## Language S-Plus ##
---
- Author: Giovanni Millo
- Date: 10/05/05
- Info: http
- Score:  (2.95 in 20 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-s-plus-905.html
---

```# 99 bottles of beer, S (R, S-Plus) version.
# Demonstrates inherent vectorization of S.
# Creates the correct lyrics, not as in the 
# original BASIC example. 
# Works for any n>2, default n=99. 
#
# Giovanni Millo, Trieste (Italy) 4/10/2005
###########################

song<-function(n=99) {
  a<-" bottle"
  b<-" of beer on the wall, "
  c<-" of beer. "
  d<-"Take one down and pass it around: "
  #
  ## set "beer counter" vector
  counter<-c(as.character(n:1),"No more")
  # 
  ## set plural 
  s<-ifelse(counter=="1","","s")
  #
  ## build up the verses vector
  firsthalf<-paste(counter,a,s,b,counter,a,s,c,sep="")
  sechalf1.99<-paste(d,counter[-1],a,s[-1],b,sep="")
  sechalf100<-paste("Go to the store and buy some more: ",
                    counter[1],a,"s",b,sep="")
  ##
  ## song is the vector of n+1 complete verses
  song<-paste(firsthalf,c(sechalf1.99,sechalf100),sep="")
}  

print(song)```