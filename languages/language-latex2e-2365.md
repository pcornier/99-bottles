
## Language LaTeX2e ##
---
- Author: Joel Berger
- Date: 04/19/10
- Info: n/a
- Score:  (3.00 in 9 votes)
- URL: https
- Original URL: http://www.99-bottles-of-beer.net/language-latex2e-2365.html
---

```%% 99 Bottles of Beer on the Wall
%% Distinction: Uses only pgf commands and fmtcount
%% Author: Joel Berger
\documentclass[twocolumn]{article} % Use twocolumn option to ... um ... save paper
%\usepackage{pgffor}
%\usepackage{pgfmath}
%\usepackage{pgfkeys}
\usepackage{tikz} % Loads all three packages above (plus lots of other things)
\usepackage{fmtcount} % Provides commands for converting numbers to words

\begin{document}
%% key-value pairs which, when combined with mathematical tests replace "if" statements
% keys-value pairs to add pluralization (called singular as we test for \x = 1 which is false if
plural)
\pgfkeyssetvalue{/singular/0.0}{s}
\pgfkeyssetvalue{/singular/1.0}{}
% keys-value code pairs to either display the \y converted to text or if \y = 0 say "No more"
\pgfkeys{/text/1.0/.code={\numberstringnum{#1}}}
\pgfkeys{/text/0.0/.code={no more}}

\foreach \x in {99, 98 , ..., 1} {
  \pgfmathequalto{\x}{1} % if \x = 1 set \pgfmathresult = 1.0 else 0.0
  \noindent
  \Numberstringnum{\x} bottle\pgfkeys{/singular/\pgfmathresult} of beer of the wall,\\
  \numberstringnum{\x} bottle\pgfkeys{/singular/\pgfmathresult} of beer.\\
  Take one down pass it around,\\
  \pgfmathtruncatemacro{\y}{\x - 1} % set \y = int(\x - 1)
  \pgfmathgreaterthan{\y}{0} % if \y > 0 set \pgfmathresult = 1.0 else 0.0
  \pgfkeys{/text/\pgfmathresult=\y}\pgfmathequalto{\y}{1}
    bottle\pgfkeys{/singular/\pgfmathresult} of beer on the wall.\\
  \\
}

\end{document}```