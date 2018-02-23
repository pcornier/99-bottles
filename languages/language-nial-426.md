
## Language Nial ##
---
- Author: Akira Kida
- Date: 04/20/05
- Info: http
- Score:  (3.00 in 105 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-nial-426.html
---

```Nial stands for Nested Interactive Array Language, which incorporates 
ideas from APL2, Lisp, FP and structured programming. Q'Nial is a Nial 
programming system developed at Queen's University in Canada 
<a href="http://www.qucis.queensu.ca/home/nsl/info.html">Click here</a> 
for more info.

% Nial (Q'Nial) version of 99 bottles of beer
%;
% loaddef "beer;
% beer 99;
%;
% Hacked by Akira KIDA, SDI00379@niftyserve.or.jp;

bottles IS OPERATION A {
	IF A = 0 THEN
		'No more bottles'
	ELSEIF A = 1 THEN
		link (sketch A) ' bottle'
	ELSE
		link (sketch A) ' bottles'
	ENDIF
}

beer IS OPERATION A {
	FOR x WITH reverse count A DO
		write link (bottles x) ' of beer on the wall, '
			(bottles x) '.';
		write 'Take one down, pass it around.';
		write link (bottles (x - 1)) ' of beer on the wall.';
		write '';
	ENDFOR;
}```