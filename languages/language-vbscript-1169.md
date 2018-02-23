
## Language VBScript ##
---
- Author: Bob Stammers
- Date: 06/02/06
- Info: n/a
- Score:  (2.75 in 4 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-vbscript-1169.html
---

```<?xml version="1.0" ?>
<job>
<runtime>
<description>
99 bottles of beer - VBScript / WSH - recursion / translateable / Agent

This script generates the full lyrics of "99 bottles of beer" using recursion
with spelt-out numbers, easily translated owing to the use of WSH resources.

Activates Microsoft Agent to sing for and amuse us (if available)

Languages: EN - native; FR and DE courtesy of BabelFish

Bob Stammers - saphena@compuserve.com - March 2006
</description>

<named name="NUMERIC" 
	helpstring="Show numeric literals (99-2) rather than words" 
	type="simple" required="false" />
<named name="FROM" 
	helpstring="Set the initial number of bottles (0-99)" 
	type="string" required="false" />
<named name="AGENT"
	helpstring="Activate the named (Merlin) Microsoft Agent, if installed"
	type="string" required="false" />
<named name="LANG"
	helpstring="Choose which language strings to use [en]"
	type="string" required="false" />
<named name="NOAGENT"
	helpstring="Suppress the agent, just show the lyrics"
	type="simple" required="false" />
<named name="NOSOUND"
	helpstring="Suppress any agent sounds"
	type="simple" required="false" />
</runtime>

<resource id="en:First20">
One,Two,Three,Four,Five,Six,Seven,Eight,Nine,Ten,Eleven,
Twelve,Thirteen,Fourteen,Fifteen,Sixteen,Seventeen,Eighteen,Nineteen
</resource>
<resource id="en:Decades">
Ten,Twenty,Thirty,Forty,Fifty,Sixty,Seventy,Eighty,Ninety
</resource>	
<resource id="en:Line1">%1 of beer on the wall, %2 of beer.</resource>
<resource id="en:Line2Last">Go to the store and buy some more, </resource>
<resource id="en:Line2Many">Take one down and pass it around, </resource>
<resource id="en:Line2End">%1 of beer on the wall.</resource>
<resource id="en:NoMore">No more bottles</resource>
<resource id="en:OneMore">One bottle</resource>
<resource id="en:ManyMore">%1 bottles</resource>

<resource id="fr:First20">
Un,Deux,Trois,Quatre,Cinq,Six,Sept,Huit,Neuf,Dix,Onze,
Douze,Treize,Quatorze,Quinze,Seize,Dix-sept,Dix-huit,Dix-neuf
</resource>
<resource id="fr:Decades">
Dix,Vingt,Trente,Quarante,Cinquante,Soixante,Soixante-dix,Quatre-vingts,Quatre-vingt-dix
</resource>	
<resource id="fr:Line1">%1 de biere sur le mur, %2 de biere.</resource>
<resource id="fr:Line2Last">Allez au magasin et achetez encore plus, </resource>
<resource id="fr:Line2Many">Prenez un vers le bas et passez-l'autour, </resource>
<resource id="fr:Line2End">%1 de biere sur le mur.</resource>
<resource id="fr:NoMore">Plus de bouteilles</resource>
<resource id="fr:OneMore">Une bouteille</resource>
<resource id="fr:ManyMore">%1 bouteilles</resource>

<resource id="de:First20">
Ein,Zwei,Drei,Vier,Funf,Sechs,Sieben,Acht,Neun,Zehn,Elf,
Zwolf,Dreizehn,Vierzehn,Funfzehn,Sechzehn,Siebzehn,Achtzehn,Neunzehn
</resource>
<resource id="de:Decades">
Zehn,Zwanzig,Dreizig,Vierzig,Funfzig,Sechzig,Siebzig,Achtzig,Neunzig
</resource>	
<resource id="de:Line1">%1 von Bier auf der Wand, %2 von Bier.</resource>
<resource id="de:Line2Last">Gehen Sie zum Speicher und kaufen Sie mehr, </resource>
<resource id="de:Line2Many">Nehmen Sie ein herunter und fuhren Sie es herum, </resource>
<resource id="de:Line2End">%1 von Bier auf der Wand.</resource>
<resource id="de:NoMore">Keine mehr Flaschen</resource>
<resource id="de:OneMore">Eine Flasche</resource>
<resource id="de:ManyMore">%1 Flaschen</resource>

<resource id="DefaultLang">en</resource>
<resource id="SilentRunning">0</resource>

<resource id="DefaultAgent">merlin</resource>
<resource id="InterverseAction">GestureUp</resource>
<resource id="WordsPerMinute">250</resource>
<resource id="JumpAboutInterval">4</resource>

<script language="VBScript">
<![CDATA[

OPTION EXPLICIT

Const ShowTiming = False

Dim First20, Decades, InitialBottles, ShowNumerics
Dim objAgent, objMerlin, strAgentName, useAgent
Dim strLang
Dim SongLyrics, DontEcho
Dim SilentRunning, startTime


	On Error Resume Next
	
	startTime = Now()
	
	EstablishParams
	SingVerse(InitialBottles)
	
	
	If useAgent Then
		objMerlin.Play "Wave"
		objMerlin.Hide
		Do While objMerlin.Visible = TRUE
			Wscript.Sleep 250
		Loop
		If ShowTiming Then WScript.Echo "That took " & FormatDateTime((Now() - startTime),3)
	ElseIf DontEcho Then
		WriteShowLyrics
	End If
	
	

	
Sub SingVerse(numBottles)

Dim numNext, strNext

	If useAgent Then
		If (numBottles > 0) and (numBottles Mod GetResource("JumpAboutInterval") = 0) Then
			DoJumpAround
		End If
	End If
	
	If numBottles = 0 Then
		strNext = strCleanResource("Line2Last")
		numNext = InitialBottles
		If useAgent Then
			objMerlin.Play "Search"
		End If
	Else
		strNext = strCleanResource("Line2Many")
		numNext = numBottles - 1
	End If

	Sing strSubst(strCleanResource("Line1"),strBottles(numBottles),strBottles(numBottles))
	Sing strNext & strSubst(strCleanResource("Line2End"),strBottles(numNext),"")
	Sing ""
	
	if numBottles > 0 Then
	  SingVerse(numNext)
	End If
	
End Sub

Sub Sing(strLyrics)


	If useAgent Then
		Do While Not objMerlin.Visible
			Wscript.Sleep 250
		Loop
		If strLyrics = "" Then
			objMerlin.Play GetResource("InterverseAction")
			Exit Sub
		End If
		If SilentRunning Then
			Call objMerlin.Think (strLyrics)
		Else
			Call objMerlin.Speak ("\Spd=" & GetResource("WordsPerMinute") & "\" & strLyrics)
		End If
	Elseif DontEcho Then
		SongLyrics = SongLyrics & strLyrics & vbCrLf
	Else
		WScript.Echo strLyrics
	End If
		
End Sub

Sub ShowUsage()

	WScript.Arguments.ShowUsage
	WScript.Quit
	
End Sub


Sub DoJumpAround
'
' This causes the agent to jump around and generally waste time.
'
Dim intLeft, intTop, intHeight, intWidth

	GetScreenSize intHeight, intWidth
	
	With objMerlin
		intHeight = intHeight - .Height
		intWidth = intWidth - .Width

		Call .MoveTo(CInt(Rnd * intWidth),CInt(Rnd * intHeight))

	End With

End Sub

Sub GetScreenSize(intHeight,intWidth)

Dim strComputer, objWMIService, colItems, objItem

	strComputer = "."
	Set objWMIService = GetObject("winmgmts:" _
		& "{impersonationLevel=impersonate}!\\" & strComputer & "\root\cimv2")

	Set colItems = objWMIService.ExecQuery ("Select * from Win32_DisplayConfiguration")

	For Each objItem in colItems ' Only one item in collection!
		intHeight = objItem.PelsHeight
		intWidth = objItem.PelsWidth
		
	Next

End Sub

Sub WriteShowLyrics

' This writes the lyrics, built up into SongLyrics, to a temporary file
' Fires up Notepad to show them, then kills the file before terminating

Const TEMP_FOLDER = 2

Dim WshShell, F, fs, txtfile

	Set fs = CreateObject("Scripting.FileSystemObject")
	txtfile = fs.BuildPath(fs.GetSpecialFolder(TEMP_FOLDER),fs.GetTempName())
	Set F = fs.CreateTextFile(txtfile, True)
	F.WriteLine SongLyrics
	F.Close
	Set WshShell = WScript.CreateObject( "WScript.Shell" )
	WshShell.Run "notepad " & txtfile,1,True
	Set WshShell = Nothing
	fs.DeleteFile txtfile
	Set fs = Nothing

End Sub

Function isConsole

Dim x

	On Error Resume Next
	
	err.clear
	WScript.StdOut.WriteBlankLines 1
	isConsole = (err.number = 0)
	
End Function
	
Sub EstablishParams

Dim arg, txt, WshShell

	' Load the various string resources
	strAgentName = GetResource("DefaultAgent")
	strLang = GetResource("DefaultLang")
	
	' Suppress the noise during testing
	SilentRunning = (GetResource("SilentRunning") = "1")
	
	InitialBottles = 99
	ShowNumerics = False
	useAgent = True
	Randomize
	
	SongLyrics = ""
	DontEcho = Not isConsole()

	
	For Each arg in WScript.Arguments.Named
		Select Case UCase(arg)
			Case "NUMERIC"
				ShowNumerics = True
			Case "FROM"
				Err.Clear
				InitialBottles = CInt(WScript.Arguments.Named("FROM"))
				If (Err.Number <> 0) Or (InitialBottles < 0) Or (InitialBottles > 99) Then
					' Use of recursion makes it unsafe to start much higher than 99
					ShowUsage()
				End If
			Case "LANG"
				strLang = WScript.Arguments.Named("LANG")
			Case "NOAGENT"
				useAgent = False
			Case "AGENT"
				txt = WScript.Arguments.Named("AGENT")
				If txt <> "" Then
					strAgentName = txt
				Else
					strAgentName = GetResource("DefaultAgent")
				End If
				useAgent = True
			Case "NOSOUND"
				SilentRunning = True
			Case Else
				ShowUsage()
		End Select
	Next

	First20 = arrExtractResource("First20")
	Decades = arrExtractResource("Decades")
	
	If useAgent Then 
		StartupAgent strAgentName
	End If


	
End Sub


Function strCleanResource(strResID)
'
' This returns the language string held in strResID but with all CRs and LFs removed 
' (enables pretty formatting in the source)
' This attempts to get the string for the specified language but if not found then 'en'
'
	Do
		Err.Clear
		strCleanResource = Replace(Replace(GetResource(strLang & ":" & strResID),vbCr,""),vbLf,"")
		If Err.Number = 0 Then Exit Do
		If strLang = "en" Then Exit Do
		strLang = "en"
	Loop
	
End Function

Function arrExtractResource(strResID)
'
' This returns the clean contents of strResID as an array of elements separated by ","
'
		arrExtractResource = Split(strCleanResource(strResID),",")
		
End Function
		
Function strNumber(intNumber)

Dim intTens, intUnits

		
	If ShowNumerics Then
		strNumber = CStr(intNumber)
		Exit Function
	End If
	
	intTens = intNumber \ 10
	intUnits = intNumber - (intTens * 10)
	
	if intTens < 2 Then
	  strNumber = First20(intNumber-1)
	elseif intUnits > 0 Then
		strNumber = Decades(intTens-1) & " " & First20(intUnits-1)
	else
		strNumber = Decades(intTens-1)
	end if
	
End Function

Function strSubst(strMask,strArg1,strArg2)

	strSubst = Replace(Replace(strMask,"%1",strArg1),"%2",strArg2)
	
End Function
	
Function strBottles(intNumber)

	If intNumber = 0 Then
		strBottles = strCleanResource("NoMore")
	Elseif intNumber = 1 Then
		strBottles = strCleanResource("OneMore")
	Else
		strBottles = strSubst(strCleanResource("ManyMore"),strNumber(intNumber),"")
	End If
	
End Function
	
Sub StartupAgent(strAgentName)

Dim WshShell, strAgentPath, objRequest

	
	Set objAgent = CreateObject("Agent.Control.2")
	If Not IsObject(objAgent) Then
		useAgent = False
		Exit Sub
	End If
	
	Set WshShell = WScript.CreateObject( "WScript.Shell" )
	strAgentPath = WshShell.ExpandEnvironmentStrings("%WinDir%") & "\Msagent\Chars\" & strAgentName &
".acs"
	Set WshShell = Nothing

	objAgent.Connected = TRUE
	objAgent.RaiseRequestErrors = False
	
	Err.Clear
	Set objRequest = objAgent.Characters.Load (strAgentName, strAgentPath)
	If (Err.Number <> 0) Or (objRequest.Status <> 0) Then
		WScript.Echo "Agent " & strAgentname & " is not available" & vbCrLf
		useAgent = False
		Exit Sub
	End If
	Set objMerlin = objAgent.Characters.Character(strAgentName)
	If IsObject(objMerlin) Then
		If SilentRunning Then
			objMerlin.SoundEffectsOn = False
		End If
		objMerlin.Show
		Call objMerlin.Play ("Announce")
	Else
		useAgent = False
	End If
	
End Sub

]]>
</script>
</job>```