
## Language PowerShell ##
---
- Author: Halo_Four
- Date: 08/20/08
- Info: http
- Score:  (2.82 in 11 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-powershell-1851.html
---

```99..0 |
add-member -pass ScriptMethod SingStanza { $b = [int]$args[0]; if($b -eq 0) { "No more bottles of
beer" } else { "$b bottle$(if($b -ne 1) { 's' }) of beer" } } |
add-member -pass ScriptProperty CurrentStanza { $this.SingStanza($this) } |
add-member -pass ScriptProperty NextStanza { if($this -eq 0) { $this.SingStanza(99) } else {
$this.SingStanza($this - 1) } } |
add-member -pass ScriptProperty Action { if($this -eq 0) { "Go to the store and buy some more" }
else { "Take one down and pass it around" } } |
%{ "$($_.CurrentStanza) on the wall, $($_.CurrentStanza.ToLower())`n$($_.Action),
$($_.NextStanza.ToLower()) on the wall" }```