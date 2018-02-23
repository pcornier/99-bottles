
## Language Iphigeneia ##
---
- Author: Marinus Oosters
- Date: 12/15/10
- Info: http
- Score:  (3.33 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-iphigeneia-2565.html
---

```print 1 + valueof bottles in 
begin
    bottles := 99;
    
    while bottles >= 0 do
        begin
            (* print number
               there are no functions so this is repeated a few times
               I'm only commenting the first one *)
            if bottles = 0 then
                (* no more *)
                begin 
                    print 78; print 111; print 32; print 109;
                    print 111; print 114; print 101
                end
            else if bottles < 0 then
                (* 99 (last verse) *)
                begin
                    print 57; print 57
                end
            else (* number *) 
                begin
                    (* print tens digit *)
                    if bottles >= 10 then
                        print bottles / 10 + 48
                    else (* not having an else is a syntax error *)
                        bottles := bottles;

                    (* print units digit - there is no modulo operator *)
                    print valueof d in
                    begin
                        d := bottles;
                        while d >= 10 do d := d - 10;
                        d := d + 48
                    end
                end;
            
            (* first line *)
            print 32; print 98; print 111; print 116; print 116; print 108;
            print 101; print if bottles=1 then 0 else 115; print 32; print 111;
            print 102; print 32; print 98; print 101; print 101; print 114;
            print 32; print 111; print 110; print 32; print 116; print 104;
            print 101; print 32; print 119; print 97; print 108; print 108;
            print 44; print 10;

            (* condensed number output routine *)
            if bottles=0 then begin print 78;print 111;print 32;print 109;
            print 111;print 114;print 101 end else if bottles<0 then begin
            print 57;print 57 end else begin if bottles>=10 then print bottles
            /10+48 else bottles:=bottles;print valueof d in begin d:=bottles;
            while d>=10 do d:=d-10;d:=d+48 end end;

            (* second line *)
            print 32; print 98; print 111; print 116; print 116; print 108;
            print 101; print if bottles=1 then 0 else 115; print 32; print 111;
            print 102; print 32; print 98; print 101; print 101; print 114;
            print 44; print 10;          

            (* third line *)
            if bottles/=0 then
                begin (* take one down *) 
                    print 84; print 97; print 107; print 101; print 32; print 111;
                    print 110; print 101; print 32; print 100; print 111; print 119;
                    print 110; print 32; print 97; print 110; print 100; print 32;
                    print 112; print 97; print 115; print 115; print 32; print 105;
                    print 116; print 32; print 97; print 114; print 111; print 117;
                    print 110; print 100
                end
            else
                begin (* go to the store *)
                    print 71; print 111; print 32; print 116; print 111; print 32;
                    print 116; print 104; print 101; print 32; print 115; print 116;
                    print 111; print 114; print 101; print 32; print 97; print 110;
                    print 100; print 32; print 98; print 117; print 121; print 32;
                    print 115; print 111; print 109; print 101; print 32; print 109;
                    print 111; print 114; print 101
                end;
            print 44; print 10;
                  
            (* drink one *)
            bottles := bottles - 1;

            (* fourth line *) 
            if bottles=0 then begin print 78;print 111;print 32;print 109;
            print 111;print 114;print 101 end else if bottles<0 then begin
            print 57;print 57 end else begin if bottles>=10 then print bottles
            /10+48 else bottles:=bottles;print valueof d in begin d:=bottles;
            while d>=10 do d:=d-10;d:=d+48 end end;
            print 32; print 98; print 111; print 116; print 116; print 108;
            print 101; print if bottles=1 then 0 else 115; print 32; print 111;
            print 102; print 32; print 98; print 101; print 101; print 114;
            print 32; print 111; print 110; print 32; print 116; print 104;
            print 101; print 32; print 119; print 97; print 108; print 108;
            print 46; print 10; print 10

        end
end```