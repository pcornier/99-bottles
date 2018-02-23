
## Language Vim ##
---
- Author: Jim Eberle
- Date: 09/18/08
- Info: http
- Score:  (2.86 in 7 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-vim-1868.html
---

```" Vim version. Vim is a mighty vi clone. http://www.vim.org.
" Source and call w/ ':so % | BeerSong'. Output is written to buffer 'beer-song'

fun! s:beer_song(n)
  new beer-song
  only
  let i = a:n
  while i > 0
    put =printf('%s of beer on the wall, %s of beer.', s:btls(i), s:btls(i))
    let i -= 1
    put =printf('Take one down and pass it around, %s of beer on the wall.', s:btls(i))
    put =''
  endw
  put ='No more bottles of beer on the wall, no more bottles of beer.'
  put =printf('Go to the store and buy some more, %s of beer on the wall.', s:btls(a:n))
  1d
  set nomodified
endf

fun! s:btls(n)
  let c = (a:n > 0) ? a:n : 'no more'
  let s = (a:n == 1) ? '' : 's'
  return printf('%s bottle%s', c, s)
endf

com! -nargs=0 -count=99 -bar BeerSong call s:beer_song(<count>)```