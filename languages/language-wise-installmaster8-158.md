
## Language Wise InstallMaster8 ##
---
- Author: Michael Pousen
- Date: 06/17/02
- Info: n/a
- Score:  (2.92 in 13 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-wise-installmaster8-158.html
---

```Document Type: WSE
item: Global
  Version=8.1
  Title=99 Bottles of Beer Installation
  Flags=00000100
  Split=1420
  Languages=65 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
  Copy Default=1
  Japanese Font Name=MS Gothic
  Japanese Font Size=9
  Progress Bar DLL=%_WISE_%\Progress\WIZ%_EXE_OS_TYPE_%.DLL
  Start Gradient=0 0 255
  End Gradient=0 0 0
  Windows Flags=00000100000000010010110000001000
  Log Pathname=%MAINDIR%\INSTALL.LOG
  Message Font=MS Sans Serif
  Font Size=8
  Pages Modified=00000001000000000000000000000000
  Disk Label=WiseInst
  Disk Filename=SETUP
  Patch Flags=0000000000000001
  Patch Threshold=85
  Patch Memory=4000
  FTP Cluster Size=20
  Per-User Version ID=1
  Dialogs Version=8
  Crystal Format=10111100101100000010001001001001
  Crystal Destination=00000000000000000000000000001011
  Step View=&Properties
  Variable Name1=_SYS_
  Variable Default1=C:\WINDOWS\System32
  Variable Flags1=00001000
  Variable Name2=_WISE_
  Variable Default2=C:\PROGRA~1\Wise8
  Variable Flags2=00001000
end
item: Remark
  Text=99 Bottles of Beer Song
end
item: Remark
  Text=for Wise InstallMaster 8
end
item: Remark
  Text=2002 Michael Pousen, www.adpag.de
end
item: Open/Close INSTALL.LOG
  Flags=00000001
end
item: Set Variable
  Variable=APPTITLE
  Value=99 Bottles of Beer
  Flags=10000000
end
item: Set Variable
  Variable=MAINDIR
  Value=%TEMP%
  Flags=10000000
end
item: Get Temporary Filename
  Variable=SONG
end
item: Set Variable
  Variable=SONG
  Value=%TEMP%\%SONG%
end
item: Set Variable
  Variable=BOTTLES
  Value=bottles
end
item: Set Variable
  Variable=NUMBER
  Value=99
end
item: If/While Statement
  Variable=NUMBER
  Value=1
  Flags=00010111
end
item: Insert Line into Text File
  Pathname=%SONG%
  New Text=%NUMBER% %BOTTLES% of beer on the wall, %NUMBER% %BOTTLES% of
beer.
  Line Number=0
  Flags=00010000
end
item: Insert Line into Text File
  Pathname=%SONG%
  New Text=Take one down and pass it around,
  Line Number=0
  Flags=00010000
end
item: Set Variable
  Variable=NUMBER
  Value=%NUMBER%
  Flags=00001000
end
item: If/While Statement
  Variable=NUMBER
  Value=1
end
item: Set Variable
  Variable=BOTTLES
  Value=bottle
end
item: End Block
end
item: If/While Statement
  Variable=NUMBER
  Value=0
  Flags=00000001
end
item: Insert Line into Text File
  Pathname=%SONG%
  New Text=%NUMBER% %BOTTLES% of beer on the wall.
  Line Number=0
end
item: End Block
end
item: End Block
end
item: Insert Line into Text File
  Pathname=%SONG%
  New Text=no more bottles of beer on the wall.
  Line Number=0
  Flags=00010000
end
item: Display ReadMe File
  Pathname=%SONG%
  Title=99 Bottles of Beer Song
end
item: Delete File
  Pathname=%SONG%
end```