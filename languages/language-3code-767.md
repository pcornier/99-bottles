
## Language 3code ##
---
- Author: Sean Heber
- Date: 06/26/05
- Info: http
- Score:  (3.02 in 248 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-3code-767.html
---

```F a 0 write[97]
F b 0 write[98]
F d 0 write[100]
F e 0 write[101]
F l 0 write[108]
F n 0 write[110]
F o 0 write[111]
F r 0 write[114]
F s 0 write[115]
F t 0 write[116]
F w 0 write[119]
F _ 0 write[32]
F . 0 write[46]nl[]
F , 0 write[44]_[]
F ne 2 =[i j]then 0 else 1?
F bo 0 _[]b[]o[]t[]t[]l[]e[]
F ob 0 _[]o[]write[102]_[]b[]e[]e[]r[]
F ow 0 _[]o[]n[]_[]t[]write[104]e[]_[]w[]a[]l[]l[]
F td 0 write[84]a[]write[107]e[]_[]o[]n[]e[]_[]d[]o[]w[]n[]
F at 0 _[]a[]n[]d[]_[]write[112]a[]s[]s[]_[]write[105]t[]
F ad 0 _[]a[]r[]o[]write[117]n[]d[],[]
F nm 0 n[]o[]_[]write[109]o[]r[]e[]
F p1 1 print[i]bo[]ne[1 i]then s[]?ob[]ow[],[]print[i]bo[]ne[1 i]then s[]?ob[].[]
F p2 1 i then print[i]else nm[]?bo[]ne[1 i]then s[]?ob[]ow[].[]nl[]
F sing 1 i then p1[i]td[]at[]ad[]p2[-[i 1]]sing[-[i 1]]?
sing[99]```