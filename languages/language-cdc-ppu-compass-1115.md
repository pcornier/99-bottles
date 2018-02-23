
## Language CDC PPU COMPASS ##
---
- Author: Paul Koning
- Date: 04/12/06
- Info: n/a
- Score:  (2.36 in 53 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-cdc-ppu-compass-1115.html
---

```          ident  bot,ppfw
          title  bot -- 99 bottles of beer
          comment 99 bottles of beer on the wall.
***       bot -- 99 bottles of beer on the wall
*
*         cdc peripheral processor code version.
* 
*         04.02.15.  paul koning.  ni1d@arrl.net
*
*         dedicated to the controlfreaks group.
* 
          periph

          sst    rds

 opl      xtext  compmac
          
          base   m
          
 ch       equ    chds        display channel number
 ref      equ    0           number of refreshes + 1 before scroll
 rr       equ    30d         refresh delay in ms
 lh       equ    24          height of a line
 charmod  equ    7001        character mode (medium chars)
 ymax     equ    660
          
****      direct location assignments - 
  
 bc       equ    20          bottle count
 rd       equ    21          refresh delay (in ms)
 rf       equ    22          refresh count
 tp       equ    23          text pointer
 xc       equ    24          x - coordinate 
 yc       equ    25          y - coordinate
 ly       equ    26          line y
 lyh      equ    27
 ms       equ    30
 yt       equ    31          y for top of scroll
 yth      equ    32

 name     micro  1,, bot 
          
          org    ppfw

          rjm    prs         initialize vars, obtain console eq/ch
 main1    ldc    ref
          std    rf          set refresh count per iteration
 main2    ldc    99d
          std    bc          set initial bottle count
          dcn    ch+40
          fnc    charmod,ch  left screen, medium size character mode
          acn    ch
          ldd    yt
          std    ly          set current y to top of scoll y
          ldd    yth
          std    lyh
 main3    rjm    crlf
          njn    main4       if this line not visible
          ldd    bc
          zjn    main00      if no bottles left
          rjm    bot         *nn bottles*
          ldn    l.ofb1
          oam    ofb1,ch     * of beer on the wall,*
 main4    rjm    crlf
          njn    main5       if this line not visible
          ldd    bc
          rjm    bot         *nn bottles*
          ldn    l.ofb2
          oam    ofb2,ch     *of beer.*
 main5    rjm    crlf
          njn    main6       if this line not visible
          ldn    l.pass
          oam    pass,ch     *take one down, pass it around, *
 main6    sod    bc
 main00   zjn    main0       if no more
          rjm    crlf
          njn    main7       if this line not visible
          ldd    bc
          rjm    bot         *nn bottles*
          ldn    l.ofb1
          oam    ofb3,ch     * of beer on the wall.*
 main7    rjm    crlf
          ljm    main3       do the next few lines

 main0    rjm    crlf
          njn    main8       if this line not visible
          ldn    l.nobot
          oam    nobot,ch    *no more bottles of beer on the wall*
 main8    rjm    dss         display system status  
          rjm    delay       delay and check for move/drop
          sod    rf          count refreshes
          pjn    main10      if not time to scroll yet
          ldc    ref
          std    rf          reload refresh count
          ldd    lyh
          njn    main9       if last line y off-screen
          ldd    ly
          lmc    ymax-lh
          zjn    main10      if last line at top of screen
 main9    aod    yt          advance scroll
          shn    -12d
          rad    yth
 main10   ljm    main2
*
          title  move down a line
**
*         exit   (a) = 0 if line in range, non-0 otherwise
 crlfy    ldn    1
 crlf     subr
          ldd    lyh
          shn    12d
          add    ly
          sbn    lh
          std    ly
          shn    -12d
          std    lyh
          njn    crlfx
          ldd    ly
          adc    -ymax
          pjn    crlfy
          ldd    ly
          adc    7000
          oan    ch
          ldc    6010
          oan    ch
          ldn    0
          ujn    crlfx
* 
          title  output bottle count
**
*         entry (a) = count of bottles
 bot      subr
          lmn    1
          zjn    bot1
          lmn    1
          std    t0          save the value
          ldn    0
          std    t1          initialize tens
 bot2     ldd    t0
          sbn    10d
          mjn    bot3
          std    t0
          aod    t1          advance tens
          ujn    bot2

 bot3     ldd    t1          get tens
          njn    bot4        ten or more
          ldd    t0
          adc    2r 0
          ujn    bot5        send *nn bottles*

 bot4     shn    6
          add    t0
          adc    2r00
 bot5     stm    botl
          ldn    l.botl
          oam    botl,ch     *nn bottles*
          ujn    botx

 bot1     ldn    l.botl
          oam    botl1,ch    *one bottle*
          ljm    botx
*
          title  delay between refreshes
**
*         delay 30 ms, while checking for drop and storage move
 delay    subr
          ldn    rr
          std    rd          ms to delay
          ldc    rtcl
          crd    cm          get system time
          ldd    cm+4        get current ms
          std    ms
 del1     rjm    pss         check for storage move
 del2     ldc    rtcl
          crd    cm
          ldd    cm+4
          lmd    ms
          zjn    del1        if millisecond not elapsed yet
          sod    rd
          njn    del1        if 30 ms not up yet
          dcn    ch+40
          fnc    7020,ch     select input
          acn    ch
          ian    ch
          lmn    1rd         check for *d* to drop
          zjn    del9
          ljm    delayx

 del9     dcn    ch+40       leave channel inactive
 del10    rjm    dds         drop display 
 dpp      monitor dppm       drop pp  
          ljm    ppr         exit to pp resident  
*
 dss      space  4  
**        dss - display system status.  
*         calls  sys. 
  
  
 dss      subr               entry/exit 
          ldc    6000        set x-coordinate 
          std    xc
          dcn    ch+40       make sure console channel inactive
          rjm    sys  
          ujn    dssx 
 comdsys  space  4  
 opl      xtext  comdsys
 opl      xtext  comddsp
 opl      xtext  compcua
* 
          title  initialization
 prs      subr               entry/exit 
          rjm    cua         check user access  
          zjn    prs1        if access allowed  
          ldc    prsa        dayfile message *illegal control card.*  
          rjm    dfm  
          monitor abtm       abort job  
          ljm    ppr         exit to pp resident  
  
 prs1     pause 
          ldd    fl 
          zjn    prs3        if fl = 0  
          ldd    cm+1 
          zjn    prs2        if error flag not set  
          ljm    dpp         drop pp  
  
 prs2     std    cm+2        set cm request 
          monitor rstm       request 0 fl 
          ujn    prs1 
 prs3     rjm    rds         request display
          ldm    /comddsp/ddsb
          lmn    ch
          njn    prs4        if not expected channel number
          std    yth         initialize scroll position
          ldn    lh
          std    yt
          ljm    prsx

 prs4     ljm    del10

 prsa     data   c*illegal control card.* 
*
          title  strings

 len      macro  s
 l._s     equ    *-s
          endm
          
 botl1    data   h*one bottle*
 botl     data   h*xx bottles*
          len    botl
*
 ofb1     data   h* of beer on the wall,*
          len    ofb1
 ofb2     data   h* of beer.*
          len    ofb2
 pass     data   h* take one down, pass it around,*
          len    pass
 ofb3     data   h* of beer on the wall.*
 nobot    data   h*no more bottles of beer on the wall.*
          len    nobot

          end```