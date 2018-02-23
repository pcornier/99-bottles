
## Language C++ ##
---
- Author: Jono
- Date: 04/27/09
- Info: n/a
- Score:  (2.92 in 13 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-c++-2067.html
---

```// green_bottles.cpp v0.3
// by jono .. jp at day-one dot com
// 
// ______________________________________________________________________
// this example illustrates feature creep and how to expand a brief to 
// enhance developer interest and engagement.
// 
// it prints the numbers as english words, and allows a total stock of 
// beer of over four billion bottles.  the song can also be sung in an 
// endless loop, as happens sometimes in 'real life'.
//
// in keeping with the project philosophy, command line processing has
// been added since the last version.  any lost souls who don't have 
// Boost on their system may comment out the definition of HAVE_BOOST
// and run with the defaults (ie: total shelf space for four billion, 
// two hundred and ninety four million, nine hundred and sixty seven 
// thousand, two hundred and ninety five bottles of beer, and 24 hour opening.
// ______________________________________________________________________

#include <iostream>
#include <sstream>
#include <string>
#include <vector>

#define HAVE_BOOST
#ifdef HAVE_BOOST
#   include <boost/program_options.hpp>
   namespace po = boost::program_options;
#endif

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
      "no more", "one", "two", "three", "four", "five", "six", "seven", "eight",
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
      "billion",
      "trillion"
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
   unsigned decades = (unsigned)result.size();
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
      : capacity_((capacity <= MAX_BOTTLES) ? capacity : MAX_BOTTLES)
      , stock_(capacity_)
      {}

   inline void open(bool open24hrs = false);

  private:
    const unsigned capacity_;
    unsigned stock_;
};

inline void Bar::open(bool open24hrs)
{
   static const char coda[] = " on the wall";
   static const char next[] = "Take one down and pass it around, ";
   static const char last[] = "Go to the store and buy some more, ";

   for(;; stock_--)
   {
      std::cout   << std::endl << BottlesOfBeer(stock_, true) 
         << coda << ", " << BottlesOfBeer(stock_) <<  '.'
         << std::endl << (stock_?next:last) 
         << BottlesOfBeer(stock_?stock_-1:capacity_) 
         << coda << '.' << std::endl 
         ;

      if(!stock_)
         if(open24hrs)stock_ = capacity_;
         else break;
   }
}



int main(int argc, char* argv[])
{
   unsigned nBottles = 0 - 1;
   bool open24hrs = false;

   try 
   {

#ifdef HAVE_BOOST
      po::options_description 
        desc("\n_____________[99 Green Bottles v0.3]_____________"
             "\n\nallowed options\n:\n");

      desc.add_options()
       ("help,h", "\t| help message")
       ("capacity,c", po::value<unsigned>(), 
          "\t| available shelf space for bottles (int)")
       ("open24hrs,o", po::value<bool>(), 
          "\t| continue song indefinitely (bool)")
       ;

      po::variables_map vm;        
      po::store(po::parse_command_line(argc, argv, desc), vm);
      po::notify(vm);    

      if (vm.count("help")) 
      {
        cout << desc << "\n";
        return 1;
      }

      if (vm.count("capacity")) 
         nBottles = vm["capacity"].as<unsigned>();
      cout << "Available shelf space for bottles: " << nBottles << std::endl;

      if (vm.count("open24hrs")) 
         open24hrs = vm["open24hrs"].as<bool>();
      cout << "Available shelf space for bottles: " << nBottles << std::endl;

#endif

      Bar bar(nBottles);
      bar.open(open24hrs);


    }
    catch(exception& e) 
    {
      std::cerr << "error: " << e.what() << std::endl;
      return 1;
    }
    catch(...) 
    {
      std::cerr << "Exception of unknown type!" << std::endl;
    }

   return 0;
}```