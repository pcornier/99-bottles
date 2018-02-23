
## Language IBasic ##
---
- Author: Larry Adcock
- Date: 08/03/05
- Info: http
- Score:  (2.90 in 120 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ibasic-821.html
---

```'=== 99 Bottles of Beer  by  L a r r y  A d c o c k ===
'=== Language: IBasic Professional by Pyxia   www.pyxia.com ===
'=== Windows program with beer bottle graphics ===
'=== Plurals and last two verses properly handled ===
DEF win:WINDOW
DEF st[6]:string
def aa, bb, brown, white, run:int
autodefine "off"
st=" bottle","","s"," of beer"," on the wall", "take one down and pass it around "
OPENWINDOW win, 5, 10, 630, 200, @caption, 0, "99 Bottles of Beer", &winhandler
control win, @button, "DRINK A BEER !", 300, 130, 150, 25, 0, 1
brown=rgb(90,80,0) : white=rgb(255,255,255)
rect win, 5, 40, 596, 3, brown, brown
for bb=1 to 99
  rect win, bb*6+1, 20, 3, 6, brown, brown
  rect win, bb*6, 26, 5, 10, brown, brown
next bb
aa=100
drink_one()
run = 1 : WAITUNTIL run = 0 : CLOSEWINDOW win : END

'=============================================
SUB winhandler
  SELECT @CLASS
	CASE @IDCLOSEWINDOW
		run = 0
	CASE @IDCONTROL
    select @controlid
     case 1
       if aa>0 then drink_one() else run=0
     endselect
  ENDSELECT
  RETURN
ENDSUB

'=============================================
SUB drink_one
  def a$, b$, music:string
  def x, xx:int
  aa=aa-1
  rect win, 4, 56, 596, 60, white, white
  rect win, 4, 19, 596-aa*6, 20, white, white
  move win, 5, 60

  select 1
    case (aa=0)
      x=2 : xx=2
      setcontroltext win, 1, "NO BEER  -  QUIT"
    case (aa>2)
      x=2 : xx=2
    case (aa=2)
      x=2 : xx=1
    case (aa=1)
      x=1 : xx=2
  endselect

  a$=st[0]+st[x]+st[3]
  if aa>0
    b$=str$(aa)
  else
    b$="No more"
  endif
  print win, b$+a$+st[4]+"... ",b$+a$+"... "
  move win, 10 , 85

  a$=st[0]+st[xx]+st[3]
  select aa
    case 0
      print win, "Go to the store and buy some more...99 bottles of beer."
    case 1
      print win, st[5]+"... "+"no more"+a$+st[4]
    default
      print win, st[5]+"... "+str$(aa-1)+a$+st[4]
  endselect
  'instrument is a glasswind (beer bottle)
  music="I75 O5G16 G16 G16 D16 D16 D16 G16 G16 G16 G16 R8 "
  music=music+"A16 A16 A16 E16 E16 E16 A8 R16 "
  music=music+"G16 F#16 F#16 F#16 F#16 F#16 F#16 F#16 F#16 F#16 F#8 R16 "
  music=music+"D16 D16 D16 D16 E16 F#16 G16 G16 G16 G8 R16"
  playmidi$ music, true
 return
ENDSUB```