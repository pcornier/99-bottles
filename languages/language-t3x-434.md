
## Language T3X ##
---
- Author: Nils M. Holm
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 11 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-t3x-434.html
---

```module bottles(t3x, string);

! 99 bottles of beer on the wall
! 2002-05-03 Nils M Holm <nmh@t3x.org>

#packstrings;

object	t[t3x], str[string];

writes(s) t.write(T3X.SYSOUT, s, str.length(s));

writef(s, v) do var tmp::40;
	writes(str.format(tmp, s, v));
	writes(t.newline(tmp));
end

bottles(n, w, c) do var tmp::3;
	writef("%s bottle%s of beer%s%c",
		[(n-> str.format(tmp, "%d", [(n)]):
			c='.'-> "no more": "No more"),
		 (n=1-> "": "s"),
		 (w-> " on the wall": ""),
		 (c)]);
end

do var i;
	for (i=99, 0, -1) do
		bottles(i, 1, ',');
		bottles(i, 0, '.');
		writef("Take one down and pass it around,", 0);
		bottles(i-1, 1, '.');
		writef("", 0);
	end
	bottles(0, 1, ',');
	bottles(0, 0, '.');
	writef("Go to the store, buy some more,", 0);
	writef("99 bottles of beer on the wall.", 0);
end```