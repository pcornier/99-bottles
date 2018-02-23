
## Language sed ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.02 in 201 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sed-586.html
---

```The UNIX stream editor.  The creator of sed didn't think it's 
interesting to edit empty files, so this needs some kind of input, e.g. 

echo '' | sed -f 99.sed

1{
        s/.*/99 bottles of beer on the wall/
        h
        : x
        p
        s/ on.*//
        p
        s/.*/take :&: down, pass it around/
        /one/{
                s/:.*:/it/
                p
                g
                s/on\(.*le\)/no mor\1s/
                p
                s/.*//
                q
        }
        s/:.*:/one/
        p
        g
        y/1234567890/0123456789/
        /^.[0-8] /{
                s/^.//
                x
                s/\(.\).*/\1/
                G
                s/\n//
        }
        s/^0//
        s/^1\( .*le\)s/one\1/
        h
        p
        s/.*//
        p
        g
        b x
}```