
## Language Visual LISP ##
---
- Author: Nicol�s da Silva Santamar�a
- Date: 06/23/06
- Info: http
- Score:  (2.88 in 17 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-visual-lisp-1191.html
---

```;This is an example of 99 bottles of beer song
   ;for Visual LISP, programming lenguaje for AutoCAD
;Author   :   Nicol�s da Silva Santamar�a, Greetings from this side of the wall
;Date     :   Yesterday was Wednesday June-2006, the 21th.
;Subject  :   Dear Nick. Some days ago, I went to a disco and I met some friends.
   ;Somebody told to the barman serve something to drink. He put some beers on the wall.
   ;We drunk and sang at the same time. The song was very amusing, but I can't remember.
   ;It was about "drink" and "beers". Not very difficult, but I drunk too much.
   ;Please, write down the song lyrics, if you know. Thanks!!
                                                                                         
(defun c:99BottlesOfBeer (/ fileOut c00 c01 c10
                     c12 c15 c20
                     c30 c31 c32
                     c33 numberOfBeers lyrics )
   
   ;First of all, build an stream to the output file for writting
   (setq fileOut (open "C:\\lyrics.txt" "w"))
   
   ;Let set some strings to make it different
   (setq c00 "bottle");bottle
   (setq c01 (strcat c00 "s"));bottles
   (setq c10 "Take one down and pass it around, ")
   (setq c12 " of beer")
   (setq c15 (strcat c12 " on the wall"))
   (setq c20 (strcat c01 c15));bottles of beer on the wall
   (setq c30 "o more")
   (setq c31 (strcat "n" c30))
   (setq c32 (strcat "N" c30))
   (setq c33 "Go to the store and buy some more, 99 ")
   (setq c34 ".\n\n")
   (setq c35 ".\n")
   (setq c36 " ")
   (setq c37 ", ")
   (setq c38 "1 ")
   (setq c39 ".")
   (setq c40 ", 1 ")
   (setq numberOfBeers 99);Loop keeping condition
   
   ;Do you remember the song?
   (setq lyrics "");No, could you sing it for me, please?
   
   ;Oh, yes. Ejjemm, ejjemmm:
   (while (> numberOfBeers 1)
      ;Keeping condition: Output was not be shown 100 times
      (if (= numberOfBeers 2)
         (progn
            ;Entry condition: Two bottles of beer on the wall
            (setq lyrics (strcat lyrics (itoa numberOfBeers)
                         c36 c20 c37
                         (itoa numberOfBeers)
                         c36 c01 c12 c35))
            (setq lyrics (strcat lyrics c10 (itoa (- numberOfBeers 1)) c36 c00 c15 c34))
            (setq lyrics (strcat lyrics c38 c00 c15 c40 c00 c12 c35))
            (setq lyrics (strcat lyrics c10  c31 c36 c20 c34))
            (setq lyrics (strcat lyrics c32 c36 c20  c37 c31 c36 c01 c12 c35))
            (setq lyrics (strcat lyrics c33 c20 c39))
         );progn
         (progn
            ;Entry condition: Several boottles of beer on the wall
            ;Keep waiting, the song continues. Please, take a beer, and
               ;I will continue singing
            (setq lyrics (strcat lyrics (itoa numberOfBeers) c36 c20 c37
                                        (itoa numberOfBeers) c36 c01 c12 c35))
            (setq lyrics (strcat lyrics c10 (itoa (- numberOfBeers 1)) c36 c20 c34))
         );progn
      );if

      ;One beer less on the wall
      (setq numberOfBeers (- numberOfBeers 1))
   );while
   ;I told you the entire song. Do you remember now?
   (write-line lyrics fileOut);Oh yes, let me take some words
   ;Close the output stream
   (close fileOut)
   ;Exit quietly
   (princ)
   ;You understand the sonn, aren't you? All was
      ;above. It looks like de da Vinci Code.
      ;You can open the C:\lyrics.txt file to decode.
);99BottlesOfBeer```