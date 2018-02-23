
## Language OPS Script ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 57 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ops-script-521.html
---

```@@ OPS (Operations Procedure Support) is an Ericsson product that fits in to 
@@ our Operations Support Systems (OSS) that are sold worldwide to manage 
@@ various Telecom Networks.
@@ 
@@ OPS is used to create and execute task-oriented scripts toward Network 
@@ Elements, or Switches. The Operations Procedure Support is an editor, 
@@ debugger, and execution environment for command files using the OPS 
@@ Script language. 
@@ 
@@ It originated from Telstra, Australia with a language called the PC-Ozterm 
@@ command file language. To a large extent, the OPS script language and 
@@ the PC-Ozterm command file language are compatible.


@SET noun = "bottles"
@SET string0 = "of beer"
@SET string1= "{string0} on the wall"
@SET string2 = "Take one down, pass it around,"

@FOR bottles = 1 TO 98
  @COMMENT( 100 - {bottles}, " {noun} {string1},")
  @COMMENT( 100 - {bottles}, " {noun} {string0}.")
  @COMMENT(string2)
  @IF bottles = 98 THEN SET noun = "bottle"
  @COMMENT( 99 - {bottles}, " {noun} {string1}.")
  @COMMENT
@NEXT bottles

@COMMENT("1 {noun} {string1},")
@COMMENT("1 {noun} {string0}.")
@COMMENT(string2)
@COMMENT("No more bottles {string1}.")```