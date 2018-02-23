
## Language C++ ##
---
- Author: Jono
- Date: 04/15/09
- Info: n/a
- Score:  (2.50 in 8 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-c++-2047.html
---

```// green_bottles.cpp 
// by jono <jp@day-one.com>

#include <iostream>
#include <sstream>
#include <string>
#include <vector>

using std::ostringstream;
using std::cout;
using std::vector;
using std::string;
using std::endl;

const unsigned MAX_DECIMATE = 1000000000;
const unsigned MAX_BOTTLES =  0 - 1;

struct BottlesOfBeer
{
      BottlesOfBeer(unsigned n, bool cap = false)
         :_(n)
         ,cap_(cap)
         {}
      const unsigned _;
      const bool cap_;
};


string englishNumber(unsigned n)
{
   ostringstream os;
   vector<unsigned> result;
   unsigned decimate = MAX_DECIMATE;

   static const char *ONES[] = {
      "", "one", "two", "three", "four", "five", "six", "seven", "eight",
      "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
      "sixteen", "seventeen", "eighteen", "nineteen"
      };

   static const char *TENS[] = {
      "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty",
      "ninety"
      };

   static const char *THOUS[] = {
      "", 
      "thousand", 
      "million", 
      "billion"
      };
   
   bool keep = false;
   for(unsigned tmp = n; decimate > 0; tmp = tmp%decimate, decimate /= 10)
   {
      keep = keep ? keep : (tmp >= decimate);
      if(keep)
      {
         unsigned unit = (tmp - tmp%decimate)/decimate;
         result.push_back(unit);
      }
   }

   bool and = false, space = false, comma = false;
   unsigned tens = 0;  //tens buffer
   unsigned decades = result.size();
   vector<unsigned>::iterator it = result.begin();
   for(int cnt = 1; it != result.end(); it++, cnt++)
   {
      if(!(tens || *it))
         continue;

      if(comma)os << ',';
      comma = false;
      if(space)os << ' ';
      space = false;

      switch((decades-cnt)%3)
      {
         case 0:
            {
               unsigned number = tens + *it;

               if(!number)
                  continue;

               if(number && and)
                  os << " and ", and = false;

               if(number < 20)os << ONES[number];
               else 
               {
                  unsigned ones = number%10;
                  os << TENS[number/10];

                  if(ones)
                     os << ' ' << ONES[ones];
               }
               unsigned dec = (decades-cnt)/3;
               if(dec)os << ' ';
               os << THOUS[dec];
               comma = true;
               space = true;
            }
            break;

         case 1:
            tens = *it * 10;
            continue;

         case 2:
            if(*it)
               os << ONES[*it] << ' ' << "hundred";
            and = true;
            break;

         default:
            break;
      }
   }

   os << std::ends;
   return os.str();
}


inline std::ostream &operator<<(std::ostream &os, const BottlesOfBeer &bottles)
{
   static unsigned nCache = 0;
   static string sCache;

   if(!nCache || nCache != bottles._)
      if(!bottles._)sCache = "no more ";
      else sCache = englishNumber(bottles._), nCache = bottles._;

   if(!sCache.length())
      throw "a banana";

   os << char(bottles.cap_ ? sCache.at(0) - 32 : sCache.at(0)) << sCache.substr(1).c_str();
   os << " bottle";
   if(bottles._ != 1)
      os << 's';
   os << " of beer";
   return os;
}

struct Bar
{
   Bar(unsigned capacity)
      : shelving_((capacity <= MAX_BOTTLES) ? capacity : MAX_BOTTLES)
      , stock_(shelving_)
      {}

   inline void open(bool never_close = false);

  private:
    const unsigned shelving_;
    unsigned stock_;
};

inline void Bar::open(bool never_close)
{
   static const char coda[] = " on the wall";
   static const char next[] = "Take one down and pass it around, ";
   static const char last[] = "Go to the store and buy some more, ";

   for(;; stock_--)
   {
      std::cout   << std::endl << BottlesOfBeer(stock_, true) 
         << coda << ", " << BottlesOfBeer(stock_) <<  '.'
         << std::endl << (stock_?next:last) 
         << BottlesOfBeer(stock_?stock_-1:shelving_) 
         << coda << '.' << std::endl 
         ;

      if(!stock_)
         if(never_close)stock_ = shelving_;
         else break;
   }
}



int main(int argc, char* argv[])
{
   Bar bar(0 - 1);
   bar.open(true);

   return 0;
}```