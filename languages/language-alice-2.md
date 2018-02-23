
## Language Alice 2.x ##
---
- Author: Kevin G. Mess
- Date: 04/21/12
- Info: http
- Score:  (2.25 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-alice-2.x-2871.html
---

```world

Events

When the world starts
Do: world.99bottles

Methods

world.99bottles()
    bottles = 99, text = "99.0 bottles"
    // Alice 2.2 Implementation
    // Author: Kevin G. Mess
    // Date: 04/21/2012
    While ( bottles != 0 )
        skater_guy say ( text joined with " of beer on the wall," )
        skater_guy say ( text joined with " of beer" )
        skater_guy say ( "Take one down, pass it around," )
        decrement bottles by 1
        If ( bottles == 1 )
            text set value to "1.0 bottle"
        Else
            text set value to ( ( bottles as string ) joined with " bottles" )
        skater_guy say ( text joined with " of beer on the wall." )
        Wait 1 second```