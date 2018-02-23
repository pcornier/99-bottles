
## Language Bean Sheet ##
---
- Author: Alexey Zinger
- Date: 06/26/05
- Info: http
- Score:  (3.00 in 5 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-bean-sheet-769.html
---

```=
import java.text.*;
import zinger.bsheet.*;
import zinger.bsheet.text.*;

bottlesPat = "0#no bottles|1#one bottle|1<{0} bottles";
bottlesPatCap = "0#No bottles|1#One bottle|1<{0} bottles";

firstLineFormat = new MessageFormatBean(
	"{0,choice," + bottlesPatCap + "} of beer on the wall, {0,choice," + bottlesPat + "} of beer."
);

secondLineFormat = new MessageFormatBean(
	"Take one down, pass it around, {0,choice," + bottlesPat + "} of beer on the wall."
);

lastLineFormat = new MessageFormatBean(
	"Go to the store and buy some more... {0,choice," + bottlesPat + "} of beer."
);

bottleCount = 99;
for(range = [a1:a300]; range.hasNext(); )
{
	// first line
	p = range.next();
	model.setFormat(firstLineFormat, p.x, p.y);
	model.setValueAt(new Object[] {bottleCount}, p.y, p.x);
	
	// second line
	--bottleCount;
	p = range.next();
	if(bottleCount < 0)
	{
		bottleCount = 99;
		model.setFormat(lastLineFormat, p.x, p.y);
	}
	else
	{
		model.setFormat(secondLineFormat, p.x, p.y);
	}
	model.setValueAt(new Object[] {bottleCount}, p.y, p.x);
	
	// skip a line
	p = range.next();
}```