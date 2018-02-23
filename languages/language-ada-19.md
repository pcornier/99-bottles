
## Language Ada ##
---
- Author: tmoran[at]bix[dot]com
- Date: 04/20/05
- Info: n/a
- Score:  (3.70 in 187 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ada-19.html
---

```-- Just for amusement, here's a multi-tasking version.
-- Ten customers enter bar to sing and drink.  Bartender serializes
-- access to 'take one down' to avoid fights
-- contributed by tmoran@bix.com
with Text_IO;
procedure Bar is

  Out_Of_Beer : Exception;

  protected Bartender is
    function Count return Integer;
    procedure Take_One_Down;
  private
    Remaining : Integer range 0 .. 99 := 99;
  end Bartender;

  protected body Bartender is
    function Count return Integer is
    begin return Remaining; end Count;

    procedure Take_One_Down is
    begin
      if Remaining = 0 then raise Out_Of_Beer;
      else Remaining := Remaining - 1;
      end if;
    end Take_One_Down;
  end Bartender;

  type Names is (Charles, Ada, John, Grace, Donald,
                 Edsger, Niklaus, Seymour, Fred, Harlan);

  task type Customers is
    entry Enter_Bar(Who : in Names);
  end Customers;

  Customer_List : array(Names) of Customers;

  task body Customers is
    Me : Names;
    procedure Sing_And_Drink(Singer_ID : in String) is
      procedure Sing(S : in String) renames Text_IO.Put_Line;
    begin
      loop
        declare
          Bottle_Part : constant String
            := Integer'image(Bartender.Count) & " bottles of beer";
        begin
          Sing(Bottle_Part & " on the wall" & Singer_ID);
          Sing(Bottle_Part & Singer_ID);
        end;
        Sing(" Take one down and pass it arround" & Singer_ID);
        Bartender.Take_One_Down;
        delay 10.0;  -- allow ten seconds to gulp one down
      end loop;
    exception
      when Out_Of_Beer => Sing("no more beer!" & Singer_ID);
    end Sing_And_Drink;
  begin -- customer task
    accept Enter_Bar(Who : in Names) do
      Me := Who;
    end Enter_Bar;
    Sing_And_Drink(" - " & Names'image(Me));
  end Customers;

begin -- operating bar

  for Person in Customer_List'range loop
    Customer_List(Person).Enter_Bar(Person);
    delay 2.0; -- allow two seconds between customers entering bar
  end loop;

end Bar;```