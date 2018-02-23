
## Language HotBasic ##
---
- Author: AirrSongs
- Date: 10/02/05
- Info: http
- Score:  (2.26 in 19 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-hotbasic-898.html
---

```$apptype console:$typecheck on

defstr BeerOnWall = " of Beer on the wall"
defstr TakeOne = "Take one down, pass it around,"
defbyte count = 99

do 
  select case count
    case > 1
      print count;space;"bottles";BeerOnWall;","
      print count;space;"bottles";Left$(BeerOnWall,8);",";crlf;TakeOne
      if not (count-1) = 1 then 
        print count-1;space;"bottles";BeerOnWall;crlf
      else
        print count-1;space;"bottle";BeerOnWall;crlf
      end if
      dec(count)

    case else
      print count;space;"bottle";BeerOnWall;","
      print count;space;"bottle";Left$(BeerOnWall,8);",";crlf;TakeOne
      print count-1;space;"bottles";BeerOnWall;"!";crlf;crlf
      dec(count)
  end select
loop until count = zero

pause
end```