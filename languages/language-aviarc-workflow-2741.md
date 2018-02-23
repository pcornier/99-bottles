
## Language Aviarc Workflow ##
---
- Author: Wellington
- Date: 08/25/11
- Info: http
- Score:  (3.00 in 5 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-aviarc-workflow-2741.html
---

```<workflow url="/99-bottles">
  <dataset name="wall"/>
  <create-row dataset="wall"/>
  <set-field field="wall.bottles" value="99"/>

  <loop>
    <if test="equal" value1="{$wall.bottles}" value2="0">
      <then>
        <set-field field="var.str1" value="No more bottles"/>
        <set-field field="var.str2" value="no more bottles"/>
      </then>
      <else>
        <if test="equal" value1="{$wall.bottles}" value2="1">
          <then>
            <set-field field="var.str1" value="1 bottle"/>
            <set-field field="var.str2" value="1 bottle"/>
          </then>
          <else>
            <set-field field="var.str1" value="{$wall.bottles} bottles"/>
            <set-field field="var.str2" value="{$wall.bottles} bottles"/>
          </else>
        </if>
      </else>
    </if>
    <set-field field="wall.output" value="{$wall.output} {$var.str1} of beer on the wall,
{$var.str2} of beer."/>
    <if test="equal" value1="{$wall.bottles}" value2="0">
      <then>
        <set-field field="wall.output" value="{$wall.output} Go to the store and buy some more, 99
bottles of beer on the wall."/>
        <break/>
      </then>
      <else>
        <set-field-expression field="wall.bottles" value="{$wall.bottles}-1"/>
        <if test="equal" value1="{$wall.bottles}" value2="0">
          <then>
            <set-field field="var.str3" value="no more bottles"/>
          </then>
          <else>
            <if test="equal" value1="{$wall.bottles}" value2="1">
              <then>
                <set-field field="var.str3" value="1 bottle"/>
              </then>
              <else>
                <set-field field="var.str3" value="{$wall.bottles} bottles"/>
              </else>
            </if>
          </else>
        </if>
        <set-field field="wall.output" value="{$wall.output} Take one down and pass it around,
{$var.str3} of beer on the wall."/>
      </else>
    </if>
  </loop>
</workflow>```