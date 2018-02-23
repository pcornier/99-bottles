
## Language Boo ##
---
- Author: Vegaseat
- Date: 11/18/05
- Info: http
- Score:  (2.71 in 7 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-boo-947.html
---

```# prints the lyrics of the entire song "99 bottles of beer on the wall"
# using string.Replace(), string slicing and concatination
# note: 1 bottle and no more bottles work properly
# tested with BOO_0.7.0       vegaseat      16nov2005

s1 = " bottles of beer on the wall"
s2 = "Take one down and pass it around, "
s3 = "Go to the store and buy some more, "
# takes s1 and removes the s from bottles for the 1 count
s4 = s1.Replace("s", "")

for k in range(1, 101):
    n as int = 100 - k
    if n > 1:
        # string slicing to use the first half of s1
        print n + s1 + ", " + n + s1[0:16] + "."
        m as int = n - 1
        if m > 1:
            print s2 + m + s1 + ".\n"
        else:
            print s2 + m + s4 + ".\n"  // m = 1
    elif n == 1:
        print n + s4 + ", " + n + s4[0:15] + "."  // n = 1
        print s2 + "no more" + s1  + ".\n" 
    else:
        print "No more" + s1 + ", no more" + s1[0:16] + "."  // n = 0
        m = 99
        print s3 + m + s1 + ".\n"```