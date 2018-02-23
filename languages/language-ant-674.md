
## Language Ant ##
---
- Author: K. Seifert
- Date: 05/18/05
- Info: http
- Score:  (2.97 in 38 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ant-674.html
---

```<!-- 
Author: K. Seifert 2005
1. Ant is a Java build tool 
   (sorta like a cross between make and xml)
   More Info:  http://ant.apache.org/
2. This script requires the library ant-contrib.jar
   More Info:  http://ant-contrib.sourceforge.net/
   Drop this jar in ${ANT_HOME}/lib/
-->
<project name="Bottles" default="init">
  <taskdef
resource="net/sf/antcontrib/antcontrib.properties" />
  <target name="init">
    <var name="i" value="99" />
    <antcall target="sing" />
  </target>
  <target name="sing">
    <echo>${i} bottles of beer on the wall</echo>
    <echo>${i} bottles of beer</echo>
    <antcall target="drink" />
  </target>
  <target name="drink">
    <math result="i" operand1="${i}" operation="-"
        operand2="1" datatype="int" />
    <echo>take one down, pass it around</echo>
    <if>
      <not>
        <equals arg1="${i}" arg2="1" />
      </not>
      <then>
        <echo>${i} bottles of beer</echo>
        <antcall target="sing" />
      </then>
      <else>
        <echo>one bottle of beer on the wall</echo>
      </else>
    </if>
  </target>

</project>```