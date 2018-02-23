
## Language SQL ##
---
- Author: Karl
- Date: 07/06/05
- Info: n/a
- Score:  (2.90 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sql-785.html
---

```declare @first_part char(20), @second_part char(34), @third_part char(7), @forth_part char(37)
declare @b char(8), @uB char(8)
declare @bottles tinyint
set @bottles = 99

set @b =' bottles'
set @uB =' Bottles'
set @first_part=' of beer on the wall'
set @second_part='Take one down and pass it around, '
set @third_part='no more'
set @forth_part='Go to the store and buy some more...'

while @bottles>0
begin
	if @bottles=2
	begin
		print convert(nvarchar, @bottles)+@uB+@first_part+', '+cast(@bottles as nvarchar)+
		@b+substring(@first_part,0,9)+'.'
		print @second_part+cast(@bottles-1 as nvarchar)+substring(@b,0,8)+@first_part+'.'
		set @bottles=@bottles-1
		print ''	
	end
	if @bottles=1
	begin
		print cast(@bottles as nvarchar)+substring(@uB,0,8)+@first_part+', '+cast(@bottles as nvarchar)+
		substring(@b,0,8)+substring(@first_part,0,9)+'.'
		print @second_part+@third_part+@b+@first_part+'.'
		set @bottles=@bottles-1
		print ''	
		break
	end	
print cast(@bottles as nvarchar)+@uB+@first_part+', '+cast(@bottles as nvarchar)+@b+
substring(@first_part,0,9)+'.'
print @second_part+cast(@bottles-1 as nvarchar)+@b+@first_part+'.'
print ''
set @bottles=@bottles-1
end

print 'No'+substring(@third_part,3,5)+substring(@b,0,8)+@first_part+'. '+'No'+
substring(@third_part,3,5)+substring(@b,0,8)
+substring(@first_part,0,9)+'...'
print rtrim(@forth_part)+'99'+@b+substring(@first_part,0,9)+'.'```