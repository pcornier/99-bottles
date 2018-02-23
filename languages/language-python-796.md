
## Language Python ##
---
- Author: Ivan Tkatchev
- Date: 07/14/05
- Info: n/a
- Score:  (2.79 in 215 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-python-796.html
---

```## Functional Python:
## Fully-features '99 bottles' with proper English grammar and English numerals.
## Written without procedures or side-effects; no assignment was used except
## that which is inherent in generator expressions and lambda calls.
##
## Nicely fits on one (long) line. :)

print ''.join('%(pre)s%(num)s %(bot)s on the wall, %(nul)s %(bot)s,\n%(tak)s\n' % (lambda c,b:
{'pre':['','%s %s on the wall.\n\n' % (c,b)][abs(cmp(c,'Ninety-nine'))],
 'num':c, 'nul':c.lower(), 'bot':b,
 'tak':['Go to the store and buy some more... Ninety-nine %s.' % b,'Take one down, pass it
around,'][abs(cmp(x,0))]
})((lambda x,o: [(['Twenty','Thirty','Forty','Fifty',
'Sixty','Seventy','Eighty','Ninety'][x/10-2]+'-'+o.lower()).replace('-no more',''),
o][int(x<20)])(x, ['No more','One','Two',
'Three','Four','Five','Six','Seven','Eight',
'Nine','Ten','Eleven','Twelve','Thirteen','Fourteen',
'Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'][[x,x%10][int(x>=20)]]),'bottle%s of beer' %
['','s'][abs(cmp(x,1))])
for x in xrange(99,-1,-1))```