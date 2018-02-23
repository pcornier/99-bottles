
## Language C++ ##
---
- Author: Henrik Theiling
- Date: 12/04/11
- Info: n/a
- Score:  (2.91 in 11 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-c++-2797.html
---

```// -*- Mode: C++ -*-
// Oct 2011 by Henrik Theiling
// Licence: BSD
// Checked to work with g++-4.6.2 -std=c++0x


// Base char type for the strings: you can very well use char32_t, but unfortunately,
// the compiler will not show it as a character in its messages, so to demonstrate
// 'readable' type names, we use char.
typedef char Char;


// If
template<bool Cond, typename Then, typename Else>
struct If {
    typedef Then Type;
};
template<typename Then, typename Else>
struct If<false, Then, Else> {
    typedef Else Type;
};


// String
template<Char... string>
struct String {
    // The funny thing is that we do not store the string at all:
    // It is only stored in the type itself.  If you want a
    // C string, use 'CArray<char,...>::value'.
};


// Conversion to C values:
template<typename Elem, typename String>
struct CArray;

template<typename Elem, Char... string>
struct CArray< Elem, String<string...> > {
    enum { size = sizeof...(string) };
    static Elem const value[size + 1];
};
template<typename Elem, Char... string>
Elem const CArray<Elem, String<string...> >::value[] = { string..., '{CODE}' };


// Edit a string, list style:
template<typename String>
struct Car;

template<Char first, Char... rest>
struct Car< String<first, rest... > > {
    enum { value = first };
};


template<typename String>
struct Cdr;

template<Char first, Char... rest>
struct Cdr< String<first, rest... > > {
    typedef String<rest...> Type;
};


template<typename String, int n>
struct Nth
    : public Nth< typename Cdr<String>::Type, n - 1>
{};

template<typename String>
struct Nth< String, 0 >
    : public Car< String >
{};


template<Char car, typename cdr>
struct Conc;

template<Char first, Char... rest>
struct Conc< first, String<rest...> >
{
    typedef String<first, rest...> Type;
};


// Concatenate strings:
template<typename... Strings>
struct Concat;

template<typename String>
struct Concat<String>
{
    typedef String Type;
};

template<
    Char... part1,
    Char... part2>
struct Concat< String<part1...>,
               String<part2...> >
{
    typedef String<part1..., part2...> Type;
};

template<typename First, typename Second, typename... Rest>
struct Concat<First,Second,Rest...>
    : public Concat< typename Concat<First,Second>::Type, Rest...>
{};


// Join: similar to Concat, but adds a string in between each element.
template<typename Separator, typename... Strings>
struct Join;

template<typename Separator>
struct Join<Separator>
{
    typedef String<> Type;
};

template<typename Separator, typename Single>
struct Join<Separator,Single>
{
    typedef Single Type;
};

template<typename Separator, typename First, typename... Rest>
struct Join<Separator,First,Rest...>
    : public Concat<
        First,
        Separator,
        typename Join<Separator, Rest...>::Type >
{};


// Stringify integers:
enum class Show0 { no, yes };

template<unsigned long long num, Show0 show0 = Show0::yes>
struct Unsigned2String {
    typedef
    typename Concat<
        typename Unsigned2String< (num / 10), Show0::no >::Type,
        String<('0' + (num % 10))>
        >::Type
    Type;
};

template<>
struct Unsigned2String<0, Show0::yes> {
    typedef String<'0'> Type;
};

template<>
struct Unsigned2String<0, Show0::no> {
    typedef String<> Type;
};


// Convert a single letter to upper case:
// (FIXME: add Unicode support)
template<Char orig>
struct ToUpper {
    enum { value = orig };
};
template<> struct ToUpper<'a'> { enum { value = 'A' }; };
template<> struct ToUpper<'b'> { enum { value = 'B' }; };
template<> struct ToUpper<'c'> { enum { value = 'C' }; };
template<> struct ToUpper<'d'> { enum { value = 'D' }; };
template<> struct ToUpper<'e'> { enum { value = 'E' }; };
template<> struct ToUpper<'f'> { enum { value = 'F' }; };
template<> struct ToUpper<'g'> { enum { value = 'G' }; };
template<> struct ToUpper<'h'> { enum { value = 'H' }; };
template<> struct ToUpper<'i'> { enum { value = 'I' }; };
template<> struct ToUpper<'j'> { enum { value = 'J' }; };
template<> struct ToUpper<'k'> { enum { value = 'K' }; };
template<> struct ToUpper<'l'> { enum { value = 'L' }; };
template<> struct ToUpper<'m'> { enum { value = 'M' }; };
template<> struct ToUpper<'n'> { enum { value = 'N' }; };
template<> struct ToUpper<'o'> { enum { value = 'O' }; };
template<> struct ToUpper<'p'> { enum { value = 'P' }; };
template<> struct ToUpper<'q'> { enum { value = 'Q' }; };
template<> struct ToUpper<'r'> { enum { value = 'R' }; };
template<> struct ToUpper<'s'> { enum { value = 'S' }; };
template<> struct ToUpper<'t'> { enum { value = 'T' }; };
template<> struct ToUpper<'u'> { enum { value = 'U' }; };
template<> struct ToUpper<'v'> { enum { value = 'V' }; };
template<> struct ToUpper<'w'> { enum { value = 'W' }; };
template<> struct ToUpper<'x'> { enum { value = 'X' }; };
template<> struct ToUpper<'y'> { enum { value = 'Y' }; };
template<> struct ToUpper<'z'> { enum { value = 'Z' }; };


// Change the first character of a string to upper case:
template<typename String>
struct Capitalise
    : public Conc<
        ToUpper< Car<String>::value >::value,
        typename Cdr<String>::Type >
{};

template<>
struct Capitalise< String<> >
{
    typedef String<> Type;
};


// Sentence components:
typedef String<' '>                      _SPACE_;
typedef String<'\n'>                     _LINEBREAK_;
typedef String<'.'>                      _PERIOD_;
typedef String<',',' '>                  _COMMA_SPACE_;

typedef String<'a','n','d'>              _and_;
typedef String<'a','r','o','u','n','d'>  _around_;
typedef String<'b','e','e','r'>          _beer_;
typedef String<'b','o','t','t','l','e'>  _bottle_;
typedef String<'b','u','y'>              _buy_;
typedef String<'d','o','w','n'>          _down_;
typedef String<'g','o'>                  _go_;
typedef String<'i','t'>                  _it_;
typedef String<'m','o','r','e'>          _more_;
typedef String<'n','o'>                  _no_;
typedef String<'o','f'>                  _of_;
typedef String<'o','n','e'>              _one_;
typedef String<'o','n'>                  _on_;
typedef String<'p','a','s','s'>          _pass_;
typedef String<'s','o','m','e'>          _some_;
typedef String<'s','t','o','r','e'>      _store_;
typedef String<'t','a','k','e'>          _take_;
typedef String<'t','h','e'>              _the_;
typedef String<'t','o'>                  _to_;
typedef String<'w','a','l','l'>          _wall_;


// Pluralisation: the default is to add an 's':
// Irregular plurals can be added by specilising PluralOf<>.
// But we don't need that.
template<typename Singular>
struct PluralOf
    : public Concat<Singular, String<'s'> >
{};


// Singular or Plural depending on a number:
template<unsigned count, typename Singular>
struct SingularOrPlural
    : public If<
        (count == 1),
        Singular,
        typename PluralOf<Singular>::Type >
{};


// Add a number in front of a noun and adjust the pluralisation
// of the noun accordingly:
template<unsigned count, typename Singular>
struct CountNoun
    : public Concat<
        typename Unsigned2String<count>::Type,
        _SPACE_,
        typename SingularOrPlural <count,Singular>::Type >
{};


// 'N Units of beer':
template<int count, typename Unit>
struct NUnitsOfBeer
    : public Join<
        _SPACE_,
        typename CountNoun<count,Unit>::Type, _of_, _beer_>
{};
template<typename Unit>
struct NUnitsOfBeer<0,Unit>
    : public Join<
        _SPACE_,
        _no_, _more_, typename PluralOf<Unit>::Type, _of_, _beer_>
{};


// 'N Units of beer on the wall':
template<int count, typename Unit>
struct NUnitsOfBeerOnTheWall
    : public Join<
        _SPACE_,
        typename NUnitsOfBeer<count,Unit>::Type, _on_, _the_, _wall_ >
{};


// Last line of verse:
template<int count, int totalCount, typename Unit>
struct NMinus1UnitsOfBeerOnTheWall
    : public Concat<
        typename Join<
            _SPACE_,
            _take_, _one_, _down_, _and_, _pass_, _it_, _around_
        >::Type, _COMMA_SPACE_,
        typename NUnitsOfBeerOnTheWall<count - 1,Unit>::Type
    >
{};
template<int totalCount, typename Unit>
struct NMinus1UnitsOfBeerOnTheWall<0,totalCount,Unit>
    : public Concat<
        typename Join<
            _SPACE_,
            _go_, _to_, _the_, _store_, _and_, _buy_, _some_, _more_
        >::Type, _COMMA_SPACE_,
        typename NUnitsOfBeerOnTheWall<totalCount, Unit>::Type
    >
{};


// One Verse:
template<int count, int totalCount, typename Unit>
struct Verse
{
    typedef
    typename Concat<
        typename NUnitsOfBeerOnTheWall<count,Unit>::Type, _COMMA_SPACE_,
        typename NUnitsOfBeer<count,Unit>::Type, _PERIOD_
        >::Type
    Line1;

    typedef
    typename Concat<
        typename NMinus1UnitsOfBeerOnTheWall<count,totalCount,Unit>::Type, _PERIOD_
        >::Type
    Line2;

    typedef
    typename Concat<
        typename Capitalise<Line1>::Type, _LINEBREAK_,
        typename Capitalise<Line2>::Type, _LINEBREAK_
        >::Type
    Type;
};


// Bottles:
template<int count, int totalCount, typename Unit>
struct MakeSong
{
    typedef
    typename Concat<
        typename Verse<count, totalCount, Unit>::Type,
        _LINEBREAK_,
        typename MakeSong<count - 1, totalCount, Unit>::Type
        >::Type
    Type;
};
template<int totalCount, typename Unit>
struct MakeSong<0,totalCount,Unit>
    : public Verse<0, totalCount, Unit>
{};


// Make the song:
template<int count, typename Unit>
struct Song: public MakeSong<count,count,Unit>
{};

//////////////////////////////////////////////////////////////////////
// Usage:

typedef Song<99,_bottle_>::Type TheBeerSong;

//////////////////////////////////////////////////////////////////////
// Usage 1: Let the compiler sing the song

#if 1

static int i= TheBeerSong();
    // cause an error => the compiler prints the type name...

#endif

//////////////////////////////////////////////////////////////////////
// Usage 2: Print the song

#if 0

#include <stdio.h>

int main(void)
{
    puts(CArray<char,TheBeerSong>::value);
    return 0;
}

#endif```