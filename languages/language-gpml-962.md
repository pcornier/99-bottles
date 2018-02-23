
## Language GPML ##
---
- Author: Ronald S. Brown
- Date: 11/25/05
- Info: n/a
- Score:  (2.50 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-gpml-962.html
---

```<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!DOCTYPE b-o-w [
     <!ELEMENT b-o-w (program-head+,data-declaration+,main+)>
     <!ELEMENT main
(loop*,comment*,set-value*,target-label*,input*,test*,branch*,display*,file-open*,file-close*,file-write*,file-read*,compute*,perform*,print*)>
     <!ELEMENT program-head
(program-name+,program-version+,program-revision-date+,program-author+,program-purpose+)>
     <!ELEMENT program-name (#PCDATA)>
     <!ELEMENT program-version (#PCDATA)>
     <!ELEMENT program-revision-date (#PCDATA)>
     <!ELEMENT program-author (#PCDATA)>
     <!ELEMENT program-purpose (#PCDATA)>
     <!ELEMENT data-declaration (declare-variables?,declare-strings?,define-array?)>
     <!ELEMENT declare-variables (#PCDATA)>
     <!ELEMENT declare-strings (#PCDATA)>
     <!ELEMENT define-array (numeric+ | string+)>
     <!ELEMENT numeric (#PCDATA)>
     <!ELEMENT string (#PCDATA)>
     <!ELEMENT loop (loop-count+,loop-stop+,loop-step+,loop-body+)>
     <!ELEMENT loop-count (#PCDATA)>
     <!ELEMENT loop-stop (#PCDATA)>
     <!ELEMENT loop-step (#PCDATA)>
     <!ELEMENT loop-body (#PCDATA)>
     <!ELEMENT comment (#PCDATA)>
     <!ELEMENT set-value ((string-name+ | variable-name+),value+)>
     <!ELEMENT string-name (#PCDATA)>
     <!ELEMENT variable-name (#PCDATA)>
     <!ELEMENT target-label (#PCDATA)>
     <!ELEMENT input (input-prompt?,(string-name+ | variable-name+))>
     <!ELEMENT input-prompt (#PCDATA)>
     <!ELEMENT test (test-condition+,test-action)>
     <!ELEMENT test-condition (#PCDATA)>
     <!ELEMENT test-data (#PCDATA)>
     <!ELEMENT operator (#PCDATA)>
     <!ELEMENT compare-to (#PCDATA)>  
     <!ELEMENT test-action (#PCDATA)>
     <!ELEMENT branch (#PCDATA)>
     <!ELEMENT compute (#PCDATA)>
     <!ELEMENT display ((tab? | loc?),(string-name+ | variable-name+))>
     <!ELEMENT tab (#PCDATA)>
     <!ELEMENT loc (#PCDATA)>
     <!ELEMENT perform (#PCDATA)>
     <!ELEMENT print (tab?,(string-name+ | variable-name+))>
     <!ELEMENT file (open+ | close+ | read+ | write+)>
     <!ELEMENT open (file-name+,file-use+,channel+)>
     <!ELEMENT file-name (#PCDATA)>
     <!ELEMENT file-use (#PCDATA)>
     <!ELEMENT channel (#PCDATA)>
     <!ELEMENT close (channel?)>
     <!ELEMENT write (channel+,(record-name+ | field-name+))>
     <!ELEMENT record-name (#PCDATA)>
     <!ELEMENT field-name (#PCDATA)>
     <!ELEMENT read (channel+,(record-name+ | field-name+))>
     ]>


<b-o-w>

     <program-head>
       <program-name>b-o-w</program-name>
       <program-version>1.0</program-version>
       <program-revision-date>11/25/05</program-revision-date>
       <program-author>Ronald S. Brown</program-author>
       <program-purpose>This is a GPML version of a program to displays the lyrics to the song "99
Bottles of Beer on the Wall".</program-purpose>
          </program-head>

     <main>

<loop>
    <loop-count>99</loop-count>
    <loop-stop>0</loop-stop>
    <loop-step>-1</loop-step>
       <loop-body>
            <test>
                <test-condition>
                     <test-data>loop-count</test-data>
                     <operator>GT</operator>
                     <compare-to>1</compare-to>
                          </test-condition>
                 <test-action>
                     <display>
                     loop-count; bottles of beer on the wall.<br/>
                     loop-count; bottles of beer.<br/>
                     Take one down and pass it around.<br/>
                     ((loop-count)-1); bottles of beer on the wall.<br/>
                     <br/>
                     </display>
                          </test-action>
                                </test>
            <test>
                <test-condition>
                     <test-data>loop-count</test-data>
                     <operator>EQ</operator>
                     <compare-to>1</compare-to>
                          </test-condition>
                 <test-action>
                     <display>
                     1; bottle of beer on the wall.<br/>
                     1; bottle of beer.<br/>
                     Take it down and pass it around.<br/>
                     No more bottles of beer on the wall.<br/>
                     <br/>
                     </display>
                          </test-action>
                                </test>
            <test>
                <test-condition>
                     <test-data>loop-count</test-data>
                     <operator>LT</operator>
                     <compare-to>1</compare-to>
                          </test-condition>
                  <test-action>
                     <display>
                     No more bottles of beer on the wall.<br/>
                     No more bottles of beer.<br/>
                     Go to the store and buy some more.<br/>
                     99 bottles of beer on the wall.<br/>
                     <br/>
                     </display>
                           </test-action>
                                </test>
       </loop-body>
  </loop>

     </main>

</b-o-w>```