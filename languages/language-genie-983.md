
## Language Genie ##
---
- Author: Ian Reid
- Date: 12/21/05
- Info: n/a
- Score:  (3.01 in 118 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-genie-983.html
---

```#  GENIE (GENeric Interpreter and Evaluator) is an interpreted
#  scripting language from the Geological Institute, Copenhagen University. 
#  For information, contact Ian Reid (idr@geol.ku.dk)

b ob otw c s = "bottle" "of beer" "on the wall" "," "."
define n[m][n]
	if [m] > 0 [m] else if [m] = 0 [n]"o more" else 99 
define s[n]
	if [n] = 1 else "s"
define action[n]
	if [n] > 0 "Take" one[[n]] "down and pass it around"
	else "Go to the store and buy some more"
define one[n]
	if [n] = 1 "it" else "one"

for n from 99 to 0 step -1
	print n[n]["N"] bs[n] ob otwc n[n]["n"] bs[n] obs
	print action[n]c n[n-1]["n"] bs[n-1] ob otws<-```