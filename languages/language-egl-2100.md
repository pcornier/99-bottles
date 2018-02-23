
## Language EGL ##
---
- Author: Alexandre Santos ( alexos )
- Date: 05/24/09
- Info: http
- Score:  (2.86 in 7 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-egl-2100.html
---

```package p99bottlesPack;

// 99 Bottles of Beer on the Wall **  EGL - Enterprise Generation Language 
// Copyright (C) 2009 Alexandre Santos <alexos@br.ibm.com>
// May be freely distributed    

program bottles type  BasicProgram
		
	function main()
		bott int = 99;
		line string; 
		while(bott > 2)
			line = "" +bott + " bottles of beer on the wall, "
			+ bott + " bottles of beer,\nTake one down and pass"
			+ " it around, ";
			bott = bott-1;
			line = line + bott + " bottles of beer on the wall.\n";
			writeStdOut(line);
		end
		writeStdOut("2 bottles of beer on the wall, 2 bottles of beer,");
		writeStdOut("Take one down and pass it around, 1 bottle of beer on the wall.\n");
		
		writeStdOut("1 bottle of beer on the wall, 1 bottle of beer,");
		writeStdOut("Take one down and pass it around, no more bottles of beer on the wall.\n");
		writeStdOut("No more bottles of beer on the wall, no more bottles of beer.");
		writeStdOut("Go to the store and buy some more, 99 bottles of beer on the wall.");
	end
end```