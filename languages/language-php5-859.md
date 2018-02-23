
## Language PHP5 ##
---
- Author: Tim M
- Date: 09/02/05
- Info: n/a
- Score:  (2.61 in 38 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-php5-859.html
---

```<?php
    class Bottles{
        private $Amount = 0;
        private $Original = 0;
        
        final function __construct($Amount){
            $this->Original = $Amount;
            $this->Amount = $Amount;
        }
        
        final public function PassAround(){
            $Bottles = &$this->Amount;
            if ($Bottles == 0){
                return $this->BuySomeMore();
            }else if ($Bottles == 1){
                $BottlesString  = "1 bottle";
            }else{
                 $BottlesString = "$Bottles bottles";
            }

            $Data = "$BottlesString of beer on the wall, $BottlesString of beer.\r\n";
            
            $Bottles--;
            
            if ($Bottles == 0){
                $BottlesString  = "no more bottles";
            }elseif ($Bottles == 1){
                $BottlesString  = "1 bottle";
            }else{
                 $BottlesString = "$Bottles bottles";
            }
            
            $Data .= "Take one down and pass it around, $BottlesString of beer on the wall.\r\n";
            return $Data;
        }

        final public function BuySomeMore(){
            #
            $Bottles = $this->Original;
            $Data = "No more bottle of beer on the wall, no more bottles of beer.\r\n";
            $Data .= "Go to the store and buy some more, $Bottles bottles of beer on the
wall.\r\n";
            return $Data;
        }
    }
    

    class PlayBeerWallSong{
        private $Bottles = null;
        private $Amount = 0;
        
        final function __construct($Amount){
            #
            $this->Bottles = new Bottles($Amount);
            $this->Amount = $Amount;
            
        }

        final public function Play(){
            $this->Stream(false);
        }

        final public function Stream($doStream = true){
            #
            for ($I=0;$I<=$this->Amount;$I++){
                #
                if ($doStream){
                    echo $this->Bottles->PassAround();
                }else{
                    $Return .= $this->Bottles->PassAround();
                }
            }
            if ($doStream){
                return true;
            }else{
                return $Return;
            }
        }
    }


$Song = new PlayBeerWallSong(99);
//$Song->Play(); # Return the song as a string
$Song->Stream(); # Echo the song
?>```