
## Language Obix ##
---
- Author: Christian Neumanns
- Date: 06/05/09
- Info: http
- Score:  (4.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-obix-2116.html
---

```service obix_demo

    command display_99_bottles_of_beer
    
        // display the lyrics of the song "99 Bottles of Beer" on the system console,
        // as specified at http://99-bottles-of-beer.net

        script

            repeat from zero_positive32 bottle_count = 99 down to 0

                var string bottles_of_beer = xx_bottles_of_beer ( bottle_count )
                console.message ( """{{bottles_of_beer}} on the wall, {{bottles_of_beer}}.""" )
                
                var string order
                var zero_positive32 bottles
                if bottle_count > 0 then
                    order = "Take one down and pass it around"
                    bottles = bottle_count - 1
                else
                    order = "Go to the store and buy some more"
                    bottles = 99
                end if
                console.message ( &
                    """{{order}}, {{xx_bottles_of_beer(bottles)}} on the wall.
""" )
    
            end repeat

        end script
    end command
    
    
    command xx_bottles_of_beer private:yes

        in number_of_bottles type:zero_positive32 end

        out result type:string end
        
        script

            if number_of_bottles > 1 then
                result = number_of_bottles.to_string & " bottles"

            else if number_of_bottles =v 1 then
                result = "1 bottle"

            else
                result = "no more bottles"
            end if

            result = result & " of beer"

        end script

    end command

end service```