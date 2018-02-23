
## Language Delphi ##
---
- Author: Luis Carlos F. Dias
- Date: 09/04/05
- Info: n/a
- Score:  (2.14 in 7 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-delphi-861.html
---

```//------------------ File Singers.pas ------------------
unit Singers;

interface

uses
  SysUtils ;

type
  TAbstractSinger = class
  private
    FLine: String ;
    FCanSing: boolean ;
    function GetLine: String ; virtual ;
    procedure SetLine(aLine: String) ; virtual ;
  public
    property CanSing: boolean read FCanSing write FCanSing ;
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
  CanSing := true ;
end;

function TBottlesSinger.EvalS: String;
var
  res : string ;
begin
  res := 's' ;
  if Counter = 1 then
    res := '' ;
  result := res ;
end;

procedure TBottlesSinger.PrepareLine;
var
  lineForOne, lineForMore, lineForNone: String ;
begin
  lineForMore := inttostr(Counter) +
                 ' bottles of beer on the wall, ' + inttostr(Counter) +
                 ' bottles of beer.' + CRLF +
                 'Take one down and pass it around, ' + inttostr(Counter-1) +
                 ' bottle' + EvalS + ' of beer on the wall.' + CRLF ;

  lineForOne  := '1 bottle of beer on the wall, 1 bottle of beer.' + CRLF +
                 'Take one down and pass it around,' +
                 ' no more bottles of beer on the wall.' + CRLF ;

  lineForNone := 'No more bottle of beer on the wall,' +
                 ' no more bottles of beer.' + CRLF +
                 'Go to the store and buy some more,' +
                 ' 99 bottles of beer on the wall.' + CRLF ;

  case Counter of
  1 : begin
        Line := lineForOne ;
        Counter := Counter-1 ;
      end ;
  0 : begin
        Line := lineForNone ;
        Counter := 99 ;
        CanSing := false ;
      end ;
  else
      begin
        Line := lineForMore ;
        Counter := Counter-1 ;
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

end. // end of file Singers.pas


//--------------- File Bottles.dpr ----------------------
program Bottles;

{$APPTYPE CONSOLE}

uses
  SysUtils,
  Singers in 'Singers.pas';

var
  Singer: TAbstractSinger ;

begin
  Singer := TBottlesSinger.Create ;

  While Singer.CanSing do
    WriteLn(Singer.Sing) ;

  FreeAndNil(Singer) ;

end. // end of file Bottles.dpr```