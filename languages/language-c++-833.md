
## Language c++ ##
---
- Author: Tapi (Paddy O'Brien)
- Date: 08/11/05
- Info: http
- Score:  (2.16 in 25 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-c++-833.html
---

```                                                     /* obfuscated 99
						     bottles   program 
						     in c++ coded  by 
						     paddy   obrien */
                                                   #include <iostream>
                                                  using namespace std;
                                                void beer(int,int);    void
					       wall(); int main() {        int
                                              bottles                        =99; 
					      while                      (bottles)
                                            {for(int i=0;    i < 2;          ++i) 
                                            beer(        bottles,i);  cout   <<
                                            "take one down pass it around"
                                           <<  endl;                        beer
                                            (--bottles,                            0)
                                            ;cout    <<                      endl;} 
                                            return      0                            ;}
                                            void beer      (int  bottles, int i)
                                            {cout <<                       bottles
					    <<            "  bottle(s) of beer "; 
                                            if(!i)            wall(); else cout << 
                                            endl;}  void wall(){              cout 
                                            << "on the wall"         <<endl;}
                                            /*Yeah I know it's          a sorry
                                            excuse for                    a bottle
                                            but given how little code    was
                                            required it's the               best I
                                            could/felt like doing,    oh  and
                                            by the way all the     comments
					     \are purely                  filler  */```