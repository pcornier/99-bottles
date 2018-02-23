
## Language tiny-c ##
---
- Author: Tom Gibson, Scott Guthery
- Date: 11/01/07
- Info: http
- Score:  (2.50 in 2 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-tiny-c-1622.html
---

```

/* pieces.tc - lrb - Halloween 2007
/* based on a "99 bottles of beer on the wall" program in Mouse (99bot.mse)
/* made "sequential recursive" - November 1

int d /* global delay variable

/* main program

pieces [
  int s
  pl"Enter a delay value [1,200] "
  d=gn
  pl"Enter a number [1,99] "
  s=gn;s=s+9
  pl""
  while(((s=s-9)>0)*(s<100)) [
    if (s>9)
      verse(s,9)
    else
      verse(s,s)
  ]
]

/* display a verse
/* t becomes a displayed count
/* u is never greater than some maximum recursive depth (here it's 9)

verse int t,u [
  if(u) [
    number(t);piece(t);shelf;ps",";pl""
    number(t);piece(t);ps".";pl""
    fall;pl""
    number(t-1);piece(t-1);shelf;ps".";pl"";pl""
    delay
    verse(t-1,u-1) /* recursive call
  ]
]

piece int s [
  ps" piece";if(s!=1) ps"s";ps" of pumpkin pie"
]

shelf [ps" on the shelf"]

fall [
  ps"If one of those pieces of pumpkin pie should happen to fall ..."
]

/* print count in English

number int s [
  int u,w,v
  u=s;w=0
  if(s>9) [      /* we have 10 (or more)
    w=s/10       /* holds tens digit
    v=s%10       /* holds ones digit
    if(w==1) [   /* number is between 10 and 19
      if(v==0) [
        ps"Ten"
        return
      ]
      if(v==1) [
        ps"Eleven"
        return
      ]
      if(v==2) [
        ps"Twelve"
        return
      ]
      if(v==3) [
        ps"Thirteen"
        return
      ]
      if(v==4) [
        ps"Fourteen"
        return
      ]
      if(v==5) [
        ps"Fifteen"
        return
      ]
      if(v==6) [
        ps"Sixteen"
        return
      ]
      if(v==7) [
        ps"Seventeen"
        return
      ]
      if(v==8) [
        ps"Eighteen"
        return
      ]
      if(v==9) [
      ps"Nineteen"
      return
      ]
    ]
    if(w==9) ps"Nine"
    if(w==8) ps"Eigh"
    if(w==7) ps"Seven"
    if(w==6) ps"Six"
    if(w==5) ps"Fif"
    if(w==4) ps"For"
    if(w==3) ps"Thir"
    if(w==2) ps"Twen"
    ps"ty"
    if(v==0) return
    ps"-";u=v /* prepare for second part of number
  ]
  if(u==9) [     /* w is 0,2,3 ... 9 if you get here
    if(w) ps"n"  /* 29 prints as Twenty-nine but
    else ps"N"   /*  9 prints as Nine
    ps"ine"
    return
  ]
  if(u==8) [
    if(w) ps"e"
    else ps"E"
    ps"ight"
    return
  ]
  if(u==7) [
    if(w) ps"s"
    else ps"S"
    ps"even"
    return
  ]
  if(u==6) [
    if(w) ps"s"
    else ps"S"
    ps"ix"
    return
  ]
  if(u==5) [
    if(w) ps"f"
    else ps"F"
    ps"ive"
    return
  ]
  if(u==4) [
    if(w) ps"f"
    else ps"F"
    ps"our"
    return
  ]
  if(u==3) [
    if(w) ps"t"
    else ps"T"
    ps"hree"
    return
  ]
  if(u==2) [
    if(w) ps"t"
    else ps"T"
    ps"wo"
    return
  ]
  if(u==1) [
    if(w) ps"o"
    else ps"O"
    ps"ne"
    return
  ]
  if(u==0) [
    ps"No"
    return
  ]
]

/* pause a while ... uses global variable d

delay [
  int w,v
  w=d
  while(w) [
    v=d
    while(v) v=v-1
    w=w-1
  ]
]```