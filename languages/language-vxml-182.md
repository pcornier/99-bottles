
## Language VXML ##
---
- Author: Bj�rn Andersson
- Date: 04/20/05
- Info: http
- Score:  (2.95 in 20 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-vxml-182.html
---

```The following is a VoiceXML implementation of the 99 Bottles of Beer song.
It can be executed at http://studio.tellme.com/
Author: Bj�rn Andersson <vxml-guru@rymden.nu>

<vxml version="2.0">
  <form>
    <var name="bottles" expr="99"/>
    <block name="verse">
      <if cond="bottles == 1">
        1 bottle of beer on the wall,
        1 bottle of beer.
      <else/>
        <value expr="bottles"/> bottles of beer on the wall,
        <value expr="bottles"/> bottles of beer.
      </if>
      Take one down, pass it around.
      <assign name="bottles" expr="bottles-1"/>
      <if cond="bottles == 0">
        No more bottles of beer on the wall.
        <disconnect/>
      <elseif cond="bottles == 1"/>
        1 bottle of beer on the wall,
      <else/>
        <value expr="bottles"/> bottles of beer on the wall,
      </if>
      <goto nextitem="verse"/>
    </block>
  </form>
</vxml>```