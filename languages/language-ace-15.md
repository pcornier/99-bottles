
## Language ACE ##
---
- Author: Shane McNeil
- Date: 04/20/05
- Info: n/a
- Score:  (2.29 in 14 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ace-15.html
---

```# ACE language - www.TeraText.com
# Simple console version of 99 bottles
# by Shane McNeil 2003
# 
# Download ACE here...
# http://www.teratext.com.au/get/page/browser/browser?category=Support/Download%20Center

import ConsoleAccess;

begin
    Integer bottles     := 99;
    String  nl          := "\n";

    while bottles > 0 do
        cout << bottles << " bottle" << (bottles = 1 ? "" : "s") << " of beer on the wall," << nl
             << bottles << " bottle" << (bottles = 1 ? "" : "s") << " of beer." << nl
             << "Take one down, pass it around," << nl
             << --bottles << " bottle" << (bottles = 1 ? "" : "s") << " of beer on the wall." << nl
<< nl;
        cout.flush();
    end;

    return null;
end```