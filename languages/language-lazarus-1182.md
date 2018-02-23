
## Language Lazarus ##
---
- Author: Luis Carlos F. Dias
- Date: 06/13/06
- Info: http
- Score:  (3.00 in 74 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-lazarus-1182.html
---

```//  ----  file Singers.pas  ----

unit Singers;

interface

uses
  SysUtils;

type
  ISinger = interface(IUnknown)
    function Sing: string;
    function CanSing: boolean;
  end;

  TAbstractSinger = class(TInterfacedObject,ISinger)
  private
    FLine: string;
    FCanSing: boolean;
    function GetLine: string; virtual;
    procedure SetLine(aLine: string); virtual;
  public
    function CanSing: boolean; virtual;
    property Line: string read GetLine write SetLine;
    function Sing: string; virtual; abstract;
  end;

  TBottlesSinger = class(TAbstractSinger)
  private
    FCounter: integer;
    function EvalS: string;
    procedure SetCounter(aValue: integer);
    procedure PrepareLine;
    property Counter: integer read FCounter write SetCounter;
  public
    constructor Create;
    function Sing: string; override;
  end;

const
  CRLF: string = '' + #13#10;

implementation

{ TAbstractSinger }

function TAbstractSinger.CanSing: boolean;
begin
  result := FCanSing;
end;

function TAbstractSinger.GetLine: string;
begin
  result := FLine;
end;

procedure TAbstractSinger.SetLine(aLine: string);
begin
  FLine := aLine;
end;

{ TBottlesSinger }

constructor TBottlesSinger.Create;
begin
  inherited;
  FCounter := 99;
  FCanSing := true;
end;

function TBottlesSinger.EvalS: string;
var
  res : string;
begin
  res := 's';
  if FCounter = 1 then
    res := '';
  result := res;
end;

procedure TBottlesSinger.PrepareLine;
var
  lineForOne, lineForMore, lineForNone: string;
begin
  lineForMore := inttostr(Counter) +
                 ' bottles of beer on the wall, ' + inttostr(Counter) +
                 ' bottles of beer.' + CRLF +
                 'Take one down and pass it around, ' + inttostr(Counter-1) +
                 ' bottle' + EvalS + ' of beer on the wall.' + CRLF;

  lineForOne  := '1 bottle of beer on the wall, 1 bottle of beer.' + CRLF +
                 'Take one down and pass it around,' +
                 ' no more bottles of beer on the wall.' + CRLF;

  lineForNone := 'No more bottle of beer on the wall,' +
                 ' no more bottles of beer.' + CRLF +
                 'Go to the store and buy some more,' +
                 ' 99 bottles of beer on the wall.' + CRLF;

  case Counter of
  1 : begin
        FLine := lineForOne;
        Counter := Counter-1;
      end;
  0 : begin
        FLine := lineForNone;
        FCanSing := false;
      end;
  else
      begin
        FLine := lineForMore;
        Counter := Counter-1;
      end;
  end; {case}
end;

procedure TBottlesSinger.SetCounter(aValue: integer);
begin
  FCounter := aValue;
end;

function TBottlesSinger.Sing: string;
begin
  PrepareLine;
  result := Line;
end;

end.  //  ----  end of file Singers.pas  ----

//  ----  file Bottles.lpr  ----

program Bottles;

{$APPTYPE CONSOLE}

uses
  SysUtils,
  Singers in 'Singers.pas';

var
  Singer: ISinger;

begin
  Singer := TBottlesSinger.Create ;

  while Singer.CanSing do
    WriteLn(Singer.Sing) ;

  Readln;
end.    //  ----  end of file Bottles.lpr```