
## Language TeX/LaTeX ##
---
- Author: Craig J. Copi
- Date: 04/20/05
- Info: n/a
- Score:  (2.95 in 119 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-tex-latex-445.html
---

```%% TeX/LaTeX version of 99 bottles of Beer
%%
%% Craig J Copi - copi@oddjob.uchicago.edu
%%
\parindent=0pt
\newcount\beercurr
\def\beer#1{\beercurr=#1\let\next=\removebeer\removebeer}
\def\removebeer{
 \ifnum\beercurr>1 
   \the\beercurr\ bottles of beer on the wall,\par 
   \the\beercurr\ bottles of beer,\par 
   take one down, pass it around,\par 
   \advance\beercurr by -1 
   \the\beercurr\ bottle\ifnum1<\beercurr{s}\fi\ of beer on the wall.\par 
   \vskip 2ex\relax
 \else 
   1 bottle of beer on the wall,\par 1 bottle of beer,\par 
   take one down, pass it around,\par no bottles of beer on the wall.\par 
   \vskip .5ex
   Time to buy some more beer\ldots. \let\next=\relax
 \fi 
 \next}

\beer{99}```