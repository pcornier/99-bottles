
## Language EPM Macro ##
---
- Author: Todd Fox
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 26 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-epm-macro-226.html
---

```E is the macro language for IBM's EPM editor.

;  99 bottles of beer in E, the macro language for IBM's EPM editor.
-- Todd Fox
/* The most interesting thing about this language is that it has 3
 * different commenting styles and that the macros must be recompiled
 * directly into the editor to be used. */

defproc make_bottle_text(num_bottles)
   if (num_bottles > 1) then
      bottle_text = num_bottles || ' bottles'
   elseif (num_bottles = 1) then
      bottle_text = num_bottles || ' bottle'
   else
      bottle_text = 'No bottles'
   endif

   return(bottle_text)

defproc sing_beer_main_line(num_bottles, is_long)
   lyrics = make_bottle_text(num_bottles) || ' of beer'

   if (is_long) then
      lyrics = lyrics || ' on the wall'
   endif

   insertline lyrics

defproc sing_beer_song()
   init_bottle_cnt = 99
   curr_bottle_cnt = init_bottle_cnt

   do while curr_bottle_cnt >= 1
      sing_beer_main_line(curr_bottle_cnt, 1)
      sing_beer_main_line(curr_bottle_cnt, 0)
      insertline 'Take one down and pass it around'
      curr_bottle_cnt = curr_bottle_cnt - 1
      sing_beer_main_line(curr_bottle_cnt, 1)
      insertline '' -- don't use "insert", existing text will get mixed 
in
   enddo

   sing_beer_main_line(curr_bottle_cnt, 1)
   sing_beer_main_line(curr_bottle_cnt, 0)
   insertline 'Go to the store and buy some more'
   curr_bottle_cnt = init_bottle_cnt
   sing_beer_main_line(curr_bottle_cnt, 1)


; Define a command to execute it from the EPM command line.

defc sing_beer_song
   call sing_beer_song()

; Execute with ctrl-X

def c_X = 'sing_beer_song'

; done```