
## Language Yacc ##
---
- Author: James Copher
- Date: 04/20/05
- Info: n/a
- Score:  (2.96 in 27 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-yacc-66.html
---

```%{
/*
** 99 bottles of beer yacc-like
** by: James Copher jec@netcom.com
*/

#include<stdio.h>
static int bottles=99;
%}

%union{ int bottle; }
%token <bottle> BOTTLES NOMORE
%type <bottle> beer nomore
%start round

%%
round    : beer nomore {
            YYACCEPT;
        };
beer    : BOTTLES {
            printf("%d bottles of beer on the wall\n%d bottles of beer\n"
                "Take one down,\npass it around\n",$1,$1);
        }
        | beer BOTTLES {
            printf("%d bottle%s of beer on the wall\n\n"
                "%d bottle%s of beer on the wall\n%d bottle%s of beer\n"
                "Take one down\npass it around\n",
                $2,$2!=1?"s":"",$2,$2!=1?"s":"",$2,$2!=1?"s":"");
        };
nomore	: NOMORE {
            printf("No more bottles of beer on the wall\n");
        };
%%

yyerror(){}
yylex(){ if(bottles){ yylval.bottle=bottles--; return BOTTLES; } return NOMORE; }
main(){ yyparse(); }```