
## Language C++ ##
---
- Author: Martyn Davies
- Date: 05/28/05
- Info: n/a
- Score:  (1.68 in 19 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-c++-695.html
---

```#ifndef Unit1H
#define Unit1H
#include <Classes.hpp>
#include <Controls.hpp>
#include <ExtCtrls.hpp>
#include <StdCtrls.hpp>

//---------------------------------------------------------------------------
class TForm1 : public TForm
{
__published:	// IDE-managed Components
        TTimer *Timer1;
        TMemo  *Memo1;
        void __fastcall Timer1Timer(TObject *Sender);
private:	// User declarations
public:		// User declarations
        __fastcall TForm1(TComponent* Owner);
};

//---------------------------------------------------------------------------

#endif


//---------------------------------------------------------------------------
//
// Programming language: C++ (Borland C++ Builder) 
// 99 bottles of beer, C++ GUI version
// By Martyn Davies (martynd@yahoo.com)
//

#include <vcl.h>
#include <stdio.h>
#include "Unit1.h"
// Unit1.h defines a TForm with one TMemo field (Memo1) and a TTimer (Timer1).

TForm1 *Form1;
const int max_beers=99;

//---------------------------------------------------------------------------
#pragma package(smart_init)
#pragma resource "*.dfm"

//---------------------------------------------------------------------------
__fastcall TForm1::TForm1(TComponent* Owner)
        : TForm(Owner)
{
  Memo1->Lines->Clear();
  Memo1->ScrollBars = ssVertical; 
  Timer1->Interval = 250;     //sing each verse in 250 ms
}
//---------------------------------------------------------------------------

void __fastcall TForm1::Timer1Timer(TObject *Sender)
{
  char *line=new char[30];
  static int beers=max_beers;
  char *bott;

  if(beers==1)
    bott = "bottle";
  else  
    bott = "bottles";
    
  if(beers>0){
    sprintf(line,"%d %s of beer on the wall,",beers,bott);
    Memo1->Lines->Add(line);
    
    sprintf(line,"%d %s of beer,",beers,bott);
    Memo1->Lines->Add(line);
    
    sprintf(line,"Take one down, pass it around,");
    Memo1->Lines->Add(line);
    
    if(--beers==1)
      bott = "bottle";
    else  
      bott = "bottles";
    sprintf(line,"%d %s of beer on the wall.",beers,bott);
    Memo1->Lines->Add(line);

    Memo1->Lines->Add(" ");
  }                                                
}
//---------------------------------------------------------------------------```