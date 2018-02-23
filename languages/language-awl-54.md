
## Language AWL ##
---
- Author: Marzhuhin Alexandr aka Sly
- Date: 04/20/05
- Info: n/a
- Score:  (1.76 in 21 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-awl-54.html
---

```+--------------------------------------------------------+
| This is program "99 botels of beer on the wall" on AWL |
| of Simantic Siemens STEP7 (with simply output)         |
| by Marzhuhin Alexandr aka Sly  AlMRu@Beep.ru           |
| more info about STEP7 www.ad.siemens.com               |
+--------------------------------------------------------+
declare variebles:
---------------------
db2.dbw  "Botels_of_Beer"  dec 99
---------------------
address  decl    name                 type     comments 
0.0      in      take_botel_of_beer   bool     Signal for take on botel
2.0      in      Timer_Function       timer    timer function used for take-off delay 
4.0      out     Process_Message      char     Message XXX Botels of beer on the wall
6.0      out     End_Message          char     No more beer :-(  
         in_out
         temp
--------------------
AUTHOR Sly
FAMILY The Program 99 Botels of beer
NAME : 99 Botels of beer
VERSION : 1.0
FUNCTION_BLOCK FB20
VAR_INPUT
Botels_of_beer: INT; 
END_VAR
BEGIN
CONTROL:=FALSE;
INDEX := 99;
Process_Message := "Botels of beer on the wall";
End_message := "No more beer :-(";
Botels_of_beer := 99;
FOR INDEX:= 1 TO ENDVALUE DO
Botels_of_beer := Botels_of_beer - 1;
IF Botels_of_beer >0000 THEN
CONTROL = TRUE
OUT := Botels_of_beer;
OUT := Process_Message;
END_IF
END_FOR;
OUT := End_Message;```