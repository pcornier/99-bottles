
## Language texinfo ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-texinfo-446.html
---

```\input texinfo @c -*-texinfo-*-
@c  texinfo version of 99 bottles of beer
@c  Laurent Vogel,  http://lvogel.free.fr
@c  run as: makeinfo --no-headers -o - THIS_FILE
@macro e @end macro
@macro p{c} @value{i} bottle@value{s} of beer\c\ 
@end macro
@set i 99
@set s s
@macro a{i,s}
@noindent @p{@e on the wall\\,}@*@p{.}@*@set s \s\
Take one down, pass it around,@*@set i \i\
@p{@e on the wall.}@sp 1
@end macro 
@macro l{i} @a{\i\,s} 
@end macro
@macro m{a}
@l{\a\8}@l{\a\7}@l{\a\6}@l{\a\5}@l{\a\4}@l{\a\3}@l{\a\2}
@end macro
@macro n{a} @l{\a\9}@m{\a\}@l{\a\1}@l{\a{CODE}}
@end macro
@m{9}@l{91}@l{90}
@n{8}@n{7}@n{6}@n{5}@n{4}@n{3}@n{2}@n{1}
@l{9}@m{}@a{1,}@a{No,}
@bye```