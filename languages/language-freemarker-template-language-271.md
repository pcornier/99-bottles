
## Language FreeMarker Template Language ##
---
- Author: Stephan Mueller
- Date: 04/20/05
- Info: n/a
- Score:  (2.67 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-freemarker-template-language-271.html
---

```<#--
  # 99 Bottles written in FTL
  # Stephan Mueller <stephan at chaquotay dot net>
  #
  # needs some lines written in Java which do nothing except merging
  # this template with an empty data model.
  #
  # For further information on FreeMarker and FTL (FreeMarker Template
  # Language), visit http://www.freemarker.org
  #-->
<#assign s="s">
<#list 99..1 as bottles>
${bottles} Bottle${s} of beer on the wall,
${bottles} bottle${s} of beer
Take one down and pass it around,
<#if bottles!=2>
<#assign s="s">
<#else>
<#assign s="">
</#if>
${bottles-1} bottle${s} of beer on the wall
<#flush>
</#list>```