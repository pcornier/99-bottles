
## Language MyPitSelf ##
---
- Author: Hugues de Fougieres
- Date: 03/14/08
- Info: http
- Score:  (3.00 in 2 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-mypitself-1719.html
---

```Tac(
 SetVar(ValueToLoop,Cst(99)), 
 LoopVar(ValueToLoop,ind,
  Do( 
   Tac( 
    SetVar(NumberOfBot,Cst(99)),
    SubVar(NumberOfBot,Var(ind)),
    Var(NumberOfBot)
    Test(
     Cond(Greater(2)),
     IfTrue(
      Tac(
       SetVar(Message1,
        Var(NumberOfBot),Cst(' bottles of beer on the wall, '),
        Var(NumberOfBot),Cst(' bottles of beer.'),br()
       ),
       SetVar(NewCount,Var(NumberOfBot)),
       SubVar(NewCount,Cst(1)),
       SetVar(Message2,Cst('Take one down and pass it around, ')
        Var(NewCount),Cst(' bottles of beer on the wall.'),br(),br(),
       ), 
      )
     ),
     IfFalse(
      Tac(
       Var(NumberOfBot)
       Test(
        Cond(Equal(2)),
        IfTrue(
         Tac(
          SetVar(Message1,
           Var(NumberOfBot),Cst(' bottles of beer on the wall, '),
           Var(NumberOfBot),Cst(' bottles of beer.'),br()
          ),
          SetVar(NewCount,Var(NumberOfBot)),
          SubVar(NewCount,Cst(1)),
          SetVar(Message2,Cst('Take one down and pass it around, ')
           Var(NewCount),Cst(' bottle of beer on the wall.'),br(),br(),
          ), 
 
         )
        ),
        IfFalse(
         Tac(
          Var(NumberOfBot)
          Test(
           Cond(Equal(1)),
           IfTrue(
            Tac(
             SetVar(Message1,
              Var(NumberOfBot),Cst(' bottle of beer on the wall, '),
              Var(NumberOfBot),Cst(' bottle of beer.'),br()
             ),
             SetVar(Message2,Cst('Take one down and pass it around, '),
              Cst('no more bottles of beer on the wall.'),br(),br(),
             ), 
            )
           ),
          ),
 
         )
        )
       ),
 
      )
     )
    ),
    Ech(Var(Message1)), 
    Ech(Var(Message2)), 
   )
  )
 ) 
 SetVar(Message1,Cst('No more bottles of beer on the wall, '),
  Cst('no more bottles of beer.'),br()
 ),
 SetVar(Message2,Cst('Go to the store and buy some more, '),
  Cst('99 bottles of beer on the wall.'),br(),br(),
 ), 
 Ech(Var(Message1)), 
 Ech(Var(Message2)), 

)```