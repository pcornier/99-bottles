
## Language FreeBASIC ##
---
- Author: Michael
- Date: 12/16/05
- Info: http
- Score:  (2.71 in 48 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-freebasic-980.html
---

```Dim bottles as Integer
Dim text as String

screen 12

declare sub dprint(text as string)

For bottles = 99 to 1 Step -1
    text=ltrim$(str$(bottles))+" bottle(s) of beer on the wall . . ."
    dprint text
    text=ltrim$(str$(bottles))+" bottles(s) of beer!"
    dprint text
    text="Take one down, pass it around . . ."
    dprint text
    text=ltrim$(str$(bottles-1))+" bottle(s) of beer on the wall!"
    dprint text
    print
next

Sub dprint(text as string)
    Dim scroll as integer
    static scrollold
    
    for i = 1 to len(text)
        getmouse null,null,scroll

        If scroll<scrollold-1 then scroll=scrollold
        scrollold=scroll
        If scroll>25 Then 
            scroll=25
        Elseif scroll<0 Then
            scroll=0
        End IF
        
        PRINT mid$(text,i,1);
        sleep 50-(scroll*2)
        if inkey$=CHR$(255)+"k" Then end
    next i
    print
end sub

Sleep 
End```