
## Language S-Plus ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.73 in 107 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-s-plus-575.html
---

```Using S-Plus code
 
for(i in 100:1){
            if(i>1){
                        cat(i,"bottles of beer on the wall,",i,"bottles of beer\n")
                        cat("Take one down, pass it around\n")
                        cat(i-1,"bottles of beer on the wall\n",fill=TRUE)
            }
            else{
                        cat(i,"bottle of beer on the wall,",i,"bottle of beer\n")
                        cat("Take one down and pass it around\n")
                        cat("No bottles of beer on the wall!!\n",fill=TRUE)
            }
}```