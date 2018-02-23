
## Language J ##
---
- Author: Roger Hui
- Date: 04/20/05
- Info: http
- Score:  (3.03 in 176 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-j-1.html
---

```See http://www.cs.trinity.edu/About/The_Courses/cs2322/

Date: Thu, 8 Mar 2001 09:23:02 -0500
From: Roger Hui 
Reply-To: forum@jsoftware.com
To: APL Mailing List , J Forum , TimTroyR@ionet.net
Subject: Jforum: Re: New Scientist Puzzle and Oddball Languages

NB. a solution in J (http://www.jsoftware.com) to the 99 Bottles of Beer problem.

   bob =: ": , ' bottle'"_ , (1: = ]) }. 's of beer'"_
   bobw=: bob , ' on the wall'"_
   beer=: bobw , ', '"_ , bob , '; take one down and pass it around, '"_ , bobw@<:

NB. For example:

    beer"0 >:i.-5
5 bottles of beer on the wall, 5 bottles of beer; take one down and pass it around, 4 bottles of
beer on the wall
4 bottles of beer on the wall, 4 bottles of beer; take one down and pass it around, 3 bottles of
beer on the wall
3 bottles of beer on the wall, 3 bottles of beer; take one down and pass it around, 2 bottles of
beer on the wall
2 bottles of beer on the wall, 2 bottles of beer; take one down and pass it around, 1 bottle of beer
on the wall
1 bottle of beer on the wall, 1 bottle of beer; take one down and pass it around, 0 bottles of beer
on the wall```