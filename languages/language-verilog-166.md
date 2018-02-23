
## Language Verilog ##
---
- Author: Danny Mulligan
- Date: 04/20/05
- Info: n/a
- Score:  (2.70 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-verilog-166.html
---

```/***********************************************************
*    Module: 99 bottles of beer
* By Danny Mulligan
***********************************************************/
module beer;
    integer i;
    initial begin
        for (i=99; i>0; i=i-1)
        begin
            $display("%0d bottles of beer on the wall,", i);
            $display("%0d bottles of beer,", i);
            $display("Take one down and pass it around,");
            if (i==1)
                $display("No more bottles of beer on the wall.\n");
            else
                $display("%0d bottles of beer on the wall.\n", i-1);
        end
        $display("Go to the store and buy some more.");
    end
end```