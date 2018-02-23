
## Language Corn ##
---
- Author: caminoix
- Date: 09/21/05
- Info: http
- Score:  (3.00 in 10 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-corn-882.html
---

```//Corn is designed for modelling concurrency and advanced computation. It provides lazy
//evaluation between concurrently worked threads, with object-oriented and functional style of
//semantics. It can be also used for parallel computation. - http://corn.telefonia.pl/index.html

//If you like this script, I would be most grateful if you could visit
//http://p2p.info.pl/eng/index.php and click a Google ad ;)


class ninetynine.bottles
    when drink => {
        let bottles = fun cnt1,s1,cnt2,s2 => {
            **user.println(cnt1," bottle",s1," of beer on the wall, ",
	                                   cnt1," bottle",s1," of beer.");
            user.println("Take one down and pass it around, ",
	                      cnt2," bottle",s2," of beer on the wall.\n")
        }, count in {
        count=99;
        times 99,{
            switch **count in
                1 then **bottles(1,"","no more","s");
                2 then **bottles(2,"s",1,"");
                else **bottles(count,"s",count-1,"s");
            end;
            --count
        };
        **user.println("No more bottles of beer on the wall, no more bottles of beer.");
        user.println("Go to the store and buy some more, 99 bottles of beer on the wall.")
    }}
end```