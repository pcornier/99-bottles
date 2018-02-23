
## Language Macintosh WordPerfect ##
---
- Author: John Rethorst
- Date: 04/26/06
- Info: http
- Score:  (3.50 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-macintosh-wordperfect-1139.html
---

```New Document
Assign (Var01;99)
Repeat
Type Var (Var01)
; 
If (Var01=1)
Type ( bottle of beer on the wall, )
Else
Type ( bottles of beer on the wall, )
End If
; 
Type Var (Var01)
If (Var01=1)
Type ( bottle of beer,)
Else
Type ( bottles of beer,)
End If
Hard Return
; 
Type (Take one down and pass it around, )
Assign (Var01;Var01-1)
; 
If (Var01!=0)
Type Var (Var01)
Else
Type (No more)
End If
; 
If (Var01=1)
Type ( bottle of beer on the wall.)
Else
Type ( bottles of beer on the wall.)
End If
Hard Return
Hard Return
Until (Var01=0)
; 
Type (No more bottles of beer on the wall, )
Type (No more bottles of beer,)
Hard Return
Type (Go to the store and buy some more, )
Type (99 bottles of beer on the wall.)
; 
Beep
Beep
Alert ("Buy more beer!")```