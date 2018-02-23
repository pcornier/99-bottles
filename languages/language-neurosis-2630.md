
## Language Neurosis ##
---
- Author: Marinus Oosters
- Date: 04/10/11
- Info: http
- Score:  (3.80 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-neurosis-2630.html
---

```#link :bottlecount {_, !ct} -> {
    #sift -1 -> ?echo 99 bottles
             x> ?echo (#sift 0 -> ?echo No more x> ?echo !ct, !ct)
                      (#sift 1 -> ?echo bottle x> ?echo bottles, !ct), !ct
};

#link :verse {_, !ct} -> {
    #alias $.ofbeer, (?echo (:bottlecount !ct) of beer);
    #alias $.ofbeer2, (?echo (:bottlecount (#subtract !ct 1)) of beer);
    #alias $.takedown, (#sift 0 -> ?echo Go to the store and buy some more
                                x> ?echo Take one down and pass it around, !ct);
    ?echo .ofbeer on the wall #n 
          .ofbeer #n 
          .takedown #n 
          .ofbeer2 on the wall #n 
};

#link :verses {_, !ct} -> {
    #out (:verse !ct);
    ?if (#greater !ct 0) { :verses (#subtract !ct 1) }
};

:verses 99;

#exit```