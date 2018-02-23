
## Language XSLT ##
---
- Author: Bernd Sokolowsky
- Date: 04/20/05
- Info: n/a
- Score:  (3.02 in 130 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-xslt-76.html
---

```<?xml version="1.0"?>

<!-- 
     XSLT version of 99 Bottles of Beer
     author: Bernd Sokolowsky <ulmo@garozzo.franken.de>
     Erlangen/Germany, 11/2001
-->

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="1.0">

<xsl:variable name="newline">
<xsl:text>
</xsl:text>
</xsl:variable>

<xsl:template match="/">
    <xsl:call-template name="loop"/>
</xsl:template>

<xsl:template name="bottles">
    <xsl:param name="bottles"/>

    <xsl:choose>
        <xsl:when test="$bottles = 0">
            <xsl:text>no bottles</xsl:text>
        </xsl:when> 
        <xsl:when test="$bottles = 1">
            <xsl:text>1 bottle</xsl:text>
        </xsl:when> 
        <xsl:otherwise>
            <xsl:value-of select="$bottles"/>
            <xsl:text> bottles</xsl:text>
        </xsl:otherwise>
     </xsl:choose>

</xsl:template>

<xsl:template name="loop">
    <xsl:param name="n" select="99"/>

    <xsl:call-template name="bottles">
        <xsl:with-param name="bottles" select="$n"/>
    </xsl:call-template>

    <xsl:text> of beer on the wall,</xsl:text>
    <xsl:value-of select="$newline"/>

    <xsl:call-template name="bottles">
        <xsl:with-param name="bottles" select="$n"/>
    </xsl:call-template>

    <xsl:text> of beer,</xsl:text>
    <xsl:value-of select="$newline"/>

    <xsl:text>take one down, pass it around,</xsl:text>
    <xsl:value-of select="$newline"/>

    <xsl:call-template name="bottles">
        <xsl:with-param name="bottles" select="$n - 1"/>
    </xsl:call-template>

    <xsl:text> of beer on the wall.</xsl:text>
    <xsl:value-of select="$newline"/>

    <xsl:if test="$n &gt; 1">
        <xsl:value-of select="$newline"/>
        <xsl:call-template name="loop">
            <xsl:with-param name="n" select="$n - 1"/>
        </xsl:call-template>
    </xsl:if>

</xsl:template>
</xsl:stylesheet>```