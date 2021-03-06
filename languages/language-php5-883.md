
## Language PHP5 ##
---
- Author: Dave Marshall
- Date: 09/22/05
- Info: http
- Score:  (3.02 in 771 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-php5-883.html
---

```<?php

/**
 * One bottle left exception
 *
 * @author Dave Marshal
 * @since 22/09/2005
 * @package Bottles
 */
class LastBottleException extends Exception {}

/**
 * Out of bottles exception
 *
 * @author Dave Marshal
 * @since 22/09/2005
 * @package Bottles
 */
class OutOfBottlesException extends Exception {}

/**
 * Wall Class
 *
 * @author Dave Marshal
 * @since 22/09/2005
 * @package Bottles
 */
class Wall {

	/**
	 * Collection of Bottles
	 */
	private $bottle = array();

	/**
	 * Wall Constructor
	 *
	 * @param int $numberOfBottles The number of bottles on this wall
	 */
	public function __construct($numberOfBottles=99)
	{
		$this->addBottles($numberOfBottles);
	}

	/**
	 * Wall Desctructor
	 */
	public function __Destruct() {}

	/**
	 * Get next bottle
	 *
	 * @param boolean $force Force the function to return the last bottle
	 * @returns Bottle
	 * @throws OutOfBeerException
	 */
	public function getNextBottle($force = FALSE)
	{
		if (count($this->bottle) > 1) return array_pop($this->bottle);
		else if (count($this->bottle)==1) 
		{
			if ($force) return array_pop($this->bottle);
			else throw new LastBottleException();
		}
		else throw new OutOfBottlesException();
	}

	/** 
	 * Get number of beers left on the wall
	 *
	 * @return int
	 */
	public function getNumberOfBottles() 
	{
		return count($this->bottle);
	}

	/**
	 * Add more bottles
	 *
	 * @param int $numberOfBottles
	 */
	public function addBottles($numberOfBottles)
	{
		for ($i=0;$i<$numberOfBottles;$i++)
		{
			$this->bottle[] = new Bottle();
		}
	}
}

/**
 * Bottle Class
 *
 * @author Dave Marshal
 * @since 22/09/2005
 * @package Bottles
 */
class Bottle {
	
	/** 
	 * Bottle Constructor
	 */
	public function __construct() {}

	/**
	 * Bottle Destructor
	 */
	public function __destruct() {}

}

$wall = new Wall(99);

$continue = TRUE;

while ($continue)
{
	try {
		$bottlesLeftBefore = $wall->getNumberOfBottles();
		$bottle = $wall->getNextBottle();
		$bottlesLeftAfter = $wall->getNumberOfBottles();

		echo $bottlesLeftBefore." bottles of beer on the wall, ".$bottlesLeftBefore." bottles of
beer.\n";
		echo "Take one down and pass it around, ".$bottlesLeftAfter." bottles of beer on the wall.\n\n";
	}
	catch (LastBottleException $oneLeft)
	{
		$bottle = $wall->getNextBottle(TRUE);
		echo "1 bottle of beer on the wall, 1 bottle of beer.\n";
		echo "Take one down and pass it around, no more bottles of beer on the wall.\n\n";
	}
	catch (OutOfBottlesException $out)
	{
		echo "No more bottles of beer on the wall, no more bottles of beer.\n";
		echo "Go to the store and buy some more, ";
		$wall->addBottles(99);
		echo $wall->getNumberOfBottles()." bottles of beer on the wall.\n\n";
		$continue=FALSE;
	}
}

?>```