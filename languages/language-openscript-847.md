
## Language OpenScript ##
---
- Author: k-zed
- Date: 08/24/05
- Info: http
- Score:  (2.00 in 17 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-openscript-847.html
---

```to handle mDMG_DisableTDP
	sysLockScreen = true

	if T_selected of self > 0
		send T_unselectTDP
	end if

	T_mode of self = false
	Visible of Group "TargetPolygon" of self = true
	CenterPosition of Group "Cursor" of self = \
		CenterPosition of Group "TDP1" of Group "TargetPolygon" of self
	step i from 1 to 4
		Visible of Group ("TDP" & i) of Group "T" of self = false
		Visible of Line ("L" & i) of Group "T" of self = false
		Visible of Line ("S" & i) of Group "T" of self = false
	end step
	visible of ellipse "HoldInsert" of group "cursor" = false

	sysLockScreen = false
end mDMG_DisableTDP```