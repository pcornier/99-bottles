
## Language Maple 11 ##
---
- Author: Stefan Vorkoetter
- Date: 06/21/07
- Info: http
- Score:  (2.96 in 94 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-maple-11-1531.html
---

```module Sing()
    local initialSize, what, where, bottles, action, ModuleApply;

    bottles := proc( n::integer, { lowercase::truefalse := false } )
	option remember;
	if n < 0 then
	    bottles(initialSize)
        elif n = 0 then
	    if lowercase then
		StringTools:-LowerCase(procname(n))
	    else
		"No more bottles"
	    fi
	elif n = 1 then
	    "1 bottle"
	else
	    "" || n || " bottles"
	fi
    end;

    action := proc( n::integer )
        if n = 0 then
	    "Go to the store and buy some more"
	else
	    "Take one down and pass it around"
	fi
    end;

    what := " of beer";
    where := " on the wall";

    ModuleApply := proc( packSize::integer := 99 )
        local n;
	initialSize := packSize;
	for n from initialSize to 0 by -1 do
	    printf("%s%s%s, %s%s.\n",
	    	   bottles(n),what,where,bottles(n,lowercase),what);
	    printf("%s, %s%s%s.\n",action(n),bottles(n-1,lowercase),what,where);
	    if n > 0 then
	        printf("\n")
	    fi
	od
    end
end;

Sing();```