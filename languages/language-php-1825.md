
## Language PHP ##
---
- Author: James Wright
- Date: 07/25/08
- Info: http
- Score:  (2.74 in 43 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-php-1825.html
---

```<?
	/* CONFIG FROM URL STRING, DEFAULT TO 99 BOTTLES OF BEER ON THE WALL*/
	if($_REQUEST['bottleNumber']) { $bottleNumber = $_REQUEST['bottleNumber']; } else { $bottleNumber =
99; }
	if($_REQUEST['fluid']) { $fluid = $_REQUEST['fluid']; } else { $fluid = 'beer'; }
	if($_REQUEST['location']) { $location = $_REQUEST['location']; } else { $location = 'wall'; }

	/* CREATE LYRICS */
	for($i = $bottleNumber; $i >= 0; $i--) {

		/* SET DEFAULTS */
		$bottleCount = $i;
		$bottle = 'bottles';
		$action = 'Take one down and pass it around';
		$remainingBottles = $i-1;

		/* HANDLE EXCEPTIONS */
		if($i == 0) {
			$bottleCount = 'no more';
			$action = 'Go to the store and buy some more';
			$remainingBottles = $bottleNumber;
		}
		if($i == 1) {
			$bottle = 'bottle';
			$action = 'Take it down and pass it around';
			$remainingBottles = 'no more';
		}

		/* BUILD LYRICS */
		$lyrics .= ucfirst($bottleCount).' '.$bottle.' of '.$fluid.' on the '.$location.',
'.$bottleCount.' '.$bottle.' of '.$fluid.'.<br>'."\n";
		$lyrics .= $action.', '.$remainingBottles.' bottles of '.$fluid.' on the '.$location.'.<p
\>'."\n\n";
	}

	/* OUTPUT TO PAGE */
	echo $lyrics;
?>```