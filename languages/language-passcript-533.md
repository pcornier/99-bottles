
## Language PasScript ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.22 in 9 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-passcript-533.html
---

```// PasScript version of 99 Bottles of beer (Bottles.pas)
// See http://users.ints.net/virtlabor/passcript/
// Philipp Winterberg, http://www.winterbergs.de

program Bottles;
var
  WordApp, Range: variant;
  b: integer;
  Strophe: string;
begin
  CoInitialize;
  try
    WordApp:= CreateOleObject('Word.Application');
    WordApp.Visible:= true;
    WordApp.Documents.Add;
    Range:= WordApp.Documents.Item(1).Range;
    for b:=99 downto 1 do 
      begin      
        Strophe:= inttostr(b) + ' bottle(s) of beer on the wall,' +#13#10+
                  inttostr(b) + ' bottle(s) of beer.' +#13#10+
                  'Take one down, pass it around,' +#13#10+
                  inttostr(b-1) + ' bottle(s) of beer on the wall.' +#13#10;
        Range.Text:= Range.Text + Strophe
      end
  finally
    CoUninitialize
  end
end.```