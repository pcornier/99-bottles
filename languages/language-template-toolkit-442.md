
## Language Template Toolkit ##
---
- Author: David Mullen
- Date: 04/20/05
- Info: http
- Score:  (3.00 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-template-toolkit-442.html
---

```[% # 99 beers for the Template Toolkit (http://www.template-toolkit.org/)
   # Author: David Mullen -%]

[%- BLOCK bottles -%]
[% beers or 'No' %] bottle[% beers == 1 ? '' : 's' %] of beer
[%- END -%]

[%- beers = 99; WHILE beers > 0 %]
<p>[% PROCESS bottles %] on the wall,<br />
[% PROCESS bottles %],<br />
You take one down, pass it around,<br />
[% beers = beers - 1; PROCESS bottles %] on the wall.</p>
[% END %]```