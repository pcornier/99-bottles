
## Language Wlangage ##
---
- Author: rompetit
- Date: 04/22/11
- Info: http
- Score:  (1.67 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-wlangage-2640.html
---

```eNbBouteillesAuD�but est un entier = 99
c est un entier
sParolesChanson est une chaine
sDebutLigne2 est une chaine
sNbBouteillesEnCours, sNbBouteillesRestantes sont des chaines
sPluriel1, sPluriel2 sont des chaines

POUR c = eNbBouteillesAuD�but A 0 PAS -1
	sPluriel1 = "s"
	sPluriel2 = "s"
	sNbBouteillesSurLeMur = NumeriqueVersChaine(c)
	sNbBouteillesRestantes = NumeriqueVersChaine(c-1)
	sDebutLigne2 = "Take one down and pass it around"
	SELON c
		CAS 0
			sNbBouteillesSurLeMur = "No more"
			sNbBouteillesRestantes = NumeriqueVersChaine(eNbBouteillesAuD�but)
			sDebutLigne2 = "Go to the store and buy some more"
		CAS 1
			sPluriel1 = ""
			sNbBouteillesRestantes = "no more"
		AUTRES CAS
			SI c=2 ALORS sPluriel2 = ""
	FIN
	sParolesChanson+=sNbBouteillesSurLeMur + " bottle" + sPluriel1 + ...
			" of beer on the wall, " + ...
			Minuscule(sNbBouteillesSurLeMur) + " bottle" + sPluriel1 + ...
			" of beer." + RC + ...
			sDebutLigne2 + ", " + ...
			sNbBouteillesRestantes + "bottle" + sPluriel2 + ...
			" of beer on the wall." + RC
	SI c>0 ALORS sParolesChanson+= RC
FIN
Trace(sParolesChanson)```