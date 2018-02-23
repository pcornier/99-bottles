
## Language Windows Installer ##
---
- Author: Christopher Painter
- Date: 10/21/06
- Info: http
- Score:  (2.98 in 190 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-windows-installer-1310.html
---

```<?xml version="1.0" encoding="US-ASCII" standalone="yes"?>
<?xml-stylesheet type="text/xsl" href="msi.xsl" ?>
<!--
      XML Dump of Windows Installer Database
      Created with msi2xml

      (C) 2001-2002 Daniel Gehriger (gehriger@linkcad.com)
-->
<!DOCTYPE msi [
   <!ELEMENT msi   (summary,table*)>
   <!ATTLIST msi version    CDATA #REQUIRED
                 xmlns:dt   CDATA #IMPLIED
                 msm        (yes|no) "no"
                 codepage   CDATA #IMPLIED
                 compression (MSZIP|LZX|none) "LZX">
   
   <!ELEMENT summary       (codepage?,title?,subject?,author?,keywords?,comments?,
                            template,lastauthor?,revnumber,lastprinted?,
                            createdtm?,lastsavedtm?,pagecount,wordcount,
                            charcount?,appname?,security?)>
                            
   <!ELEMENT codepage      (#PCDATA)>
   <!ELEMENT title         (#PCDATA)>
   <!ELEMENT subject       (#PCDATA)>
   <!ELEMENT author        (#PCDATA)>
   <!ELEMENT keywords      (#PCDATA)>
   <!ELEMENT comments      (#PCDATA)>
   <!ELEMENT template      (#PCDATA)>
   <!ELEMENT lastauthor    (#PCDATA)>
   <!ELEMENT revnumber     (#PCDATA)>
   <!ELEMENT lastprinted   (#PCDATA)>
   <!ELEMENT createdtm     (#PCDATA)>
   <!ELEMENT lastsavedtm   (#PCDATA)>
   <!ELEMENT pagecount     (#PCDATA)>
   <!ELEMENT wordcount     (#PCDATA)>
   <!ELEMENT charcount     (#PCDATA)>
   <!ELEMENT appname       (#PCDATA)>
   <!ELEMENT security      (#PCDATA)>                            
                                
   <!ELEMENT table         (col+,row*)>
   <!ATTLIST table
                name        CDATA #REQUIRED>

   <!ELEMENT col           (#PCDATA)>
   <!ATTLIST col
                 key       (yes|no) #IMPLIED
                 def       CDATA #IMPLIED>
                 
   <!ELEMENT row            (td+)>
   
   <!ELEMENT td             (#PCDATA)>
   <!ATTLIST td
                 href       CDATA #IMPLIED
                 dt:dt     (string|bin.base64) #IMPLIED
                 md5        CDATA #IMPLIED>
]>
<msi version="2.0" xmlns:dt="urn:schemas-microsoft-com:datatypes">
	
	<summary>
		<codepage>1252</codepage>
		<title>99 Bottles Of Beer On The Wall</title>
		<subject></subject>
		<author>Christopher Painter</author>
		<keywords>Install,MSI</keywords>
		<comments>Special Thanks to Kalle Olavi Niemitalo  for point out how to get
around the fact that WindowsInstaller doesn't really have a
decrement operator.</comments>
		<template>Intel;0</template>
		<lastauthor>chrpai</lastauthor>
		<revnumber>{820A7F75-4DB6-42CF-80C3-9BC0674F2BB9}</revnumber>
		<lastprinted>10/21/2006 09:27</lastprinted>
		<createdtm>10/21/2006 09:27</createdtm>
		<lastsavedtm>10/21/2006 15:41</lastsavedtm>
		<pagecount>100</pagecount>
		<wordcount>0</wordcount>
		<charcount/>
		<appname>Windows Installer</appname>
		<security>0</security>
	</summary>
	
	<table name="Control">
		<col key="yes" def="s72">Dialog_</col>
		<col key="yes" def="s50">Control</col>
		<col def="s20">Type</col>
		<col def="i2">X</col>
		<col def="i2">Y</col>
		<col def="i2">Width</col>
		<col def="i2">Height</col>
		<col def="I4">Attributes</col>
		<col def="S72">Property</col>
		<col def="L0">Text</col>
		<col def="S50">Control_Next</col>
		<col def="L50">Help</col>
		<row>
			<td>Dialog1</td>
			<td>AltMessage</td>
			<td>Text</td>
			<td>50</td>
			<td>50</td>
			<td>250</td>
			<td>50</td>
			<td>3</td>
			<td>void</td>
			<td>[IndexTen][IndexOne] bottle(s) of beer on the wall, [IndexTen][IndexOne] bottle(s) of beer.
Go to the store and buy some more, [NextIndexTen][NextIndexOne] bottle(s) of beer on the wall.</td>
			<td/>
			<td/>
		</row>
		<row>
			<td>Dialog1</td>
			<td>CancelButton</td>
			<td>PushButton</td>
			<td>301</td>
			<td>243</td>
			<td>66</td>
			<td>17</td>
			<td>3</td>
			<td>TEST</td>
			<td>&amp;Pass Out</td>
			<td>NextButton</td>
			<td/>
		</row>
		<row>
			<td>Dialog1</td>
			<td>Message</td>
			<td>Text</td>
			<td>50</td>
			<td>50</td>
			<td>250</td>
			<td>50</td>
			<td>3</td>
			<td>void</td>
			<td>[IndexTen][IndexOne] bottle(s) of beer on the wall, [IndexTen][IndexOne] bottle(s) of beer.
Take one down, pass it around, [NextIndexTen][NextIndexOne] bottle(s) of beer on the wall.</td>
			<td/>
			<td/>
		</row>
		<row>
			<td>Dialog1</td>
			<td>NextButton</td>
			<td>PushButton</td>
			<td>200</td>
			<td>243</td>
			<td>66</td>
			<td>17</td>
			<td>3</td>
			<td>TEST</td>
			<td>&amp;Drink More</td>
			<td>CancelButton</td>
			<td/>
		</row>
	</table>

	<table name="ControlCondition">
		<col key="yes" def="s72">Dialog_</col>
		<col key="yes" def="s50">Control_</col>
		<col key="yes" def="s50">Action</col>
		<col key="yes" def="s255">Condition</col>
		<row>
			<td>Dialog1</td>
			<td>AltMessage</td>
			<td>Hide</td>
			<td>Not IndexTen="No "</td>
		</row>
		<row>
			<td>Dialog1</td>
			<td>AltMessage</td>
			<td>Show</td>
			<td>IndexTen="No "</td>
		</row>
		<row>
			<td>Dialog1</td>
			<td>Message</td>
			<td>Hide</td>
			<td>IndexTen="No "</td>
		</row>
		<row>
			<td>Dialog1</td>
			<td>Message</td>
			<td>Show</td>
			<td>Not IndexTen="No "</td>
		</row>
	</table>

	<table name="ControlEvent">
		<col key="yes" def="s72">Dialog_</col>
		<col key="yes" def="s50">Control_</col>
		<col key="yes" def="s50">Event</col>
		<col key="yes" def="s255">Argument</col>
		<col key="yes" def="S255">Condition</col>
		<col def="I2">Ordering</col>
		<row>
			<td>Dialog1</td>
			<td>CancelButton</td>
			<td>EndDialog</td>
			<td>Exit</td>
			<td>1</td>
			<td>0</td>
		</row>
		<row>
			<td>Dialog1</td>
			<td>NextButton</td>
			<td>Reset</td>
			<td>NULL</td>
			<td>1</td>
			<td>100</td>
		</row>
		<row>
			<td>Dialog1</td>
			<td>NextButton</td>
			<td>[IndexOne]</td>
			<td>[NextIndexOne]</td>
			<td>1</td>
			<td>11</td>
		</row>
		<row>
			<td>Dialog1</td>
			<td>NextButton</td>
			<td>[IndexTen]</td>
			<td>[NextIndexTen]</td>
			<td>1</td>
			<td>10</td>
		</row>
		<row>
			<td>Dialog1</td>
			<td>NextButton</td>
			<td>[NextIndexOne]</td>
			<td>9</td>
			<td>IndexTen="No " and IndexOne="more"</td>
			<td>96</td>
		</row>
		<row>
			<td>Dialog1</td>
			<td>NextButton</td>
			<td>[NextIndexOne]</td>
			<td>[[NextTemp]]</td>
			<td>1</td>
			<td>41</td>
		</row>
		<row>
			<td>Dialog1</td>
			<td>NextButton</td>
			<td>[NextIndexOne]</td>
			<td>more</td>
			<td>NextIndexTen="No "</td>
			<td>91</td>
		</row>
		<row>
			<td>Dialog1</td>
			<td>NextButton</td>
			<td>[NextIndexTen]</td>
			<td>9</td>
			<td>IndexTen="No " and IndexOne="more"</td>
			<td>95</td>
		</row>
		<row>
			<td>Dialog1</td>
			<td>NextButton</td>
			<td>[NextIndexTen]</td>
			<td>No </td>
			<td>NextIndexTen="0" and NextIndexOne="0"</td>
			<td>90</td>
		</row>
		<row>
			<td>Dialog1</td>
			<td>NextButton</td>
			<td>[NextIndexTen]</td>
			<td>[[NextTemp]]</td>
			<td>NextIndexOne="0"</td>
			<td>30</td>
		</row>
		<row>
			<td>Dialog1</td>
			<td>NextButton</td>
			<td>[NextTemp]</td>
			<td>Dec[NextIndexOne]</td>
			<td>1</td>
			<td>40</td>
		</row>
		<row>
			<td>Dialog1</td>
			<td>NextButton</td>
			<td>[NextTemp]</td>
			<td>Dec[NextIndexTen]</td>
			<td>NextIndexOne="0"</td>
			<td>20</td>
		</row>
	</table>

	<table name="Dialog">
		<col key="yes" def="s72">Dialog</col>
		<col def="i2">HCentering</col>
		<col def="i2">VCentering</col>
		<col def="i2">Width</col>
		<col def="i2">Height</col>
		<col def="I4">Attributes</col>
		<col def="L128">Title</col>
		<col def="s50">Control_First</col>
		<col def="S50">Control_Default</col>
		<col def="S50">Control_Cancel</col>
		<row>
			<td>Dialog1</td>
			<td>50</td>
			<td>50</td>
			<td>374</td>
			<td>266</td>
			<td>3</td>
			<td>99 Bottles Of Beer On The Wall</td>
			<td>NextButton</td>
			<td>NextButton</td>
			<td>CancelButton</td>
		</row>
	</table>

	<table name="InstallUISequence">
		<col key="yes" def="s72">Action</col>
		<col def="S255">Condition</col>
		<col def="I2">Sequence</col>
		<row>
			<td>Dialog1</td>
			<td/>
			<td>1</td>
		</row>
	</table>

	<table name="Property">
		<col key="yes" def="s72">Property</col>
		<col def="l0">Value</col>
		<row>
			<td>Dec0</td>
			<td>9</td>
		</row>
		<row>
			<td>Dec1</td>
			<td>0</td>
		</row>
		<row>
			<td>Dec2</td>
			<td>1</td>
		</row>
		<row>
			<td>Dec3</td>
			<td>2</td>
		</row>
		<row>
			<td>Dec4</td>
			<td>3</td>
		</row>
		<row>
			<td>Dec5</td>
			<td>4</td>
		</row>
		<row>
			<td>Dec6</td>
			<td>5</td>
		</row>
		<row>
			<td>Dec7</td>
			<td>6</td>
		</row>
		<row>
			<td>Dec8</td>
			<td>7</td>
		</row>
		<row>
			<td>Dec9</td>
			<td>8</td>
		</row>
		<row>
			<td>IndexOne</td>
			<td>9</td>
		</row>
		<row>
			<td>IndexTen</td>
			<td>9</td>
		</row>
		<row>
			<td>NextIndexOne</td>
			<td>8</td>
		</row>
		<row>
			<td>NextIndexTen</td>
			<td>9</td>
		</row>
	</table>

	<table name="_Streams">
		<col key="yes" def="s62">Name</col>
		<col def="V0">Data</col>
	</table>
</msi>```