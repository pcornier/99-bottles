
## Language Delphi ##
---
- Author: Luis Carlos F. Dias
- Date: 09/05/05
- Info: n/a
- Score:  (1.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-delphi-864.html
---

```//--------- file Bottles.dpr ----------
program Bottles;

{$APPTYPE CONSOLE}

uses
  SysUtils,
  Singers in 'Singers.pas';

var
  Singer: ISinger ;

begin
  Singer := TBottlesSinger.Create ;

  While Singer.CanSing do
    WriteLn(Singer.Sing) ;

  FreeAndNil(Singer) ;
end.  //end of file Bottles.dpr

//--------- file Singers.pas ----------
unit Singers;

interface

uses
  SysUtils, Classes;

type
  ISinger = interface(IUnknown)
    function Sing: String ;
    function CanSing: boolean ;
  end ;

  TAbstractSinger = class(TInterfacedObject,ISinger)
  private
    FLine: String ;
    FCanSing: boolean ;
    function GetLine: String ; virtual ;
    procedure SetLine(aLine: String) ; virtual ;
  public
    function CanSing: boolean ; virtual ;
    property Line: String read GetLine write SetLine ;
    function Sing: String ; virtual ; abstract ;
  end ;

  TBottlesSinger = class(TAbstractSinger)
  private
    FCounter: integer ;
    function EvalS: String ;
    procedure SetCounter(aValue: integer) ;
    procedure PrepareLine ;
    property Counter: integer read FCounter write SetCounter;
  public
    constructor Create ;
    function Sing: String ; override ;
  end ;

const
  CRLF: String = '' + #13#10 ;

implementation

{ TAbstractSinger }

function TAbstractSinger.CanSing: boolean;
begin
  result := FCanSing ;
end;

function TAbstractSinger.GetLine: String;
begin
  result := FLine ;
end;

procedure TAbstractSinger.SetLine(aLine: String);
begin
  FLine := aLine ;
end;

{ TBottlesSinger }

constructor TBottlesSinger.Create;
begin
  inherited;
  FCounter := 99 ;
  FCanSing := true ;
end;

function TBottlesSinger.EvalS: String;
var
  res : string ;
begin
  res := 's' ;
  if FCounter = 1 then
    res := '' ;
  result := res ;
end;

procedure TBottlesSinger.PrepareLine;
var
  lineForOne, lineForMore, lineForNone: String ;
begin
  lineForMore := inttostr(FCounter) +
                 ' bottles of beer on the wall, ' + inttostr(FCounter) +
                 ' bottles of beer.' + CRLF +
                 'Take one down and pass it around, ' + inttostr(FCounter-1) +
                 ' bottle' + evalS + ' of beer on the wall.' + CRLF ;

  lineForOne  := '1 bottle of beer on the wall, 1 bottle of beer.' + CRLF +
                 'Take one down and pass it around,' +
                 ' no more bottles of beer on the wall.' + CRLF ;

  lineForNone := 'No more bottle of beer on the wall,' +
                 ' no more bottles of beer.' + CRLF +
                 'Go to the store and buy some more,' +
                 ' 99 bottles of beer on the wall.' + CRLF ;

  case FCounter of
  1 : begin
        FLine := lineForOne ;
        FCounter := FCounter-1 ;
      end ;
  0 : begin
        FLine := lineForNone ;
        FCanSing := false ;
      end ;
  else
      begin
        FLine := lineForMore ;
        FCounter := FCounter-1 ;
      end ;
  end ; {case}
end;

procedure TBottlesSinger.SetCounter(aValue: integer);
begin
  FCounter := aValue ;
end;

function TBottlesSinger.Sing: String;
begin
  PrepareLine ;
  result := Line ;
end;

end.  //end of file Singers.pas```