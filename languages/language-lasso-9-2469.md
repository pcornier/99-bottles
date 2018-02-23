
## Language Lasso 9 ##
---
- Author: Jonathan Guthrie
- Date: 08/10/10
- Info: http
- Score:  (3.00 in 33 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-lasso-9-2469.html
---

```[

	/* ------------------------------------------------------------------
	
	Lasso 9
	
	Jonathan Guthrie
	Treefrog Interactive
	Newmarket, ON, Canada
	
	For more information about Lasso, please visit http://www.lassosoft.com/
	
	------------------------------------------------------------------ */

	define beer99 => type { 
		data 
			public beer = 99
	
	    public s() => { .beer != 1 ? return 's' }
	    
	    public run() => {
			local(out = string)
	
			while(.beer) => {
				#out += '<p>'
				#out += .beer + ' bottle' + .s + ' of beer on the wall,<br />'
				#out += .beer+' bottle' + .s + ' of beer;<br />'
				--.beer
				#out += 'Take one down, pass it around,<br />'
				#out += .beer +' bottle' + .s +' of beer on the wall.'
				#out += '</p>'	
			}
			return #out
	    }
	}
	
	local(beerwall = beer99)
	#beerwall->run

]```