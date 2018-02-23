
## Language LaTeX2e ##
---
- Author: David Short
- Date: 08/07/08
- Info: http
- Score:  (3.00 in 13 votes)
- URL: https
- Original URL: http://www.99-bottles-of-beer.net/language-latex2e-1842.html
---

```\documentclass[12pt,a4paper]{memoir}                         %This doc class enables \numname
\usepackage{ifthen}                                          %This enables conditionals
\newcounter{quantity}\setcounter{quantity}{99}               %This lines up 99 bottles for us
\newcounter{rounds}                                          %This allows us to count rounds
\newcommand{\s}{\ifthenelse{\equal{\thequantity}{1}}{}{s}}   %This deals with pluralisation
\newcommand{\Howmany}{\ifthenelse{\equal{\thequantity}{0}}{No more}{\numtoName{\thequantity}}}
\newcommand{\howmany}{\ifthenelse{\equal{\thequantity}{0}}{no more}{\numtoname{\thequantity}}}

\begin{document}

\whiledo{\value{rounds}<1}{  %Change "1" this value to the number of times to sing the song
	\par
	\noindent
	\Howmany\ bottle\s\ of beer on the wall,
	\howmany\ bottle\s\ of beer.\\
	\ifthenelse{\equal{\thequantity}{0}}
	{Go to the store and buy some more,\addtocounter{quantity}{99}\addtocounter{rounds}{1}}
	{Take one down and pass it around,\addtocounter{quantity}{-1}}
	\howmany\ bottle\s\ of beer on the wall.\\
}

\end{document}```