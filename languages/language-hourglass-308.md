
## Language Hourglass ##
---
- Author: David Croft
- Date: 04/20/05
- Info: n/a
- Score:  (2.95 in 19 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-hourglass-308.html
---

```;
; source/Beer
; Hourglass code for the 99 bottles of beer project!
; by David Croft <david@davidc.net>
;

define_variable"bottles"
define_variable"ply"
define_variable"players"

; this should match your capacities file
  players=32

  default

define_label"input"

  input ply

  reboot 253

  if ply>players then goto"new"

  ditch_player ply
  fe[ditch_player ply]

  goto"input"

define_label"new"

  ply-=players

  if ply>players then goto"input"

  select_player ply

  bottles=99

define_label"bottles1"

  $plural=""
  if bottles?1 then $plural="s"
  message 1

  bottles-=1

  if bottles>0 then message 2:goto"bottles1"

  message 3

  send_messages

  ditch_player ply
  fe[ditch_player ply]

  goto"input"```