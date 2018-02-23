
## Language C++ ##
---
- Author: Chocapic
- Date: 02/27/07
- Info: n/a
- Score:  (2.95 in 58 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-c++-1404.html
---

```#if !x&&!y
#define  Q(A) _Q(A)
#define _Q(A) #A
#define x 99
#define y 98
#include __FILE__
#define x 98
#define y 97
#include __FILE__
#define x 97
#define y 96
#include __FILE__
#define x 96
#define y 95
#include __FILE__
#define x 95
#define y 94
#include __FILE__
#define x 94
#define y 93
#include __FILE__
#define x 93
#define y 92
#include __FILE__
#define x 92
#define y 91
#include __FILE__
#define x 91
#define y 90
#include __FILE__
#define x 80
#define y 89
#include __FILE__
#define x 89
#define y 88
#include __FILE__
#define x 88
#define y 87
#include __FILE__
#define x 87
#define y 86
#include __FILE__
#define x 86
#define y 85
#include __FILE__
#define x 85
#define y 84
#include __FILE__
#define x 84
#define y 83
#include __FILE__
#define x 83
#define y 82
#include __FILE__
#define x 82
#define y 81
#include __FILE__
#define x 81
#define y 80
#include __FILE__
#define x 80
#define y 79
#include __FILE__
#define x 79
#define y 78
#include __FILE__
#define x 78
#define y 77
#include __FILE__
#define x 77
#define y 76
#include __FILE__
#define x 76
#define y 75
#include __FILE__
#define x 75
#define y 74
#include __FILE__
#define x 74
#define y 73
#include __FILE__
#define x 73
#define y 72
#include __FILE__
#define x 72
#define y 71
#include __FILE__
#define x 71
#define y 70
#include __FILE__
#define x 70
#define y 69
#include __FILE__
#define x 69
#define y 68
#include __FILE__
#define x 68
#define y 67
#include __FILE__
#define x 67
#define y 66
#include __FILE__
#define x 66
#define y 65
#include __FILE__
#define x 65
#define y 64
#include __FILE__
#define x 64
#define y 63
#include __FILE__
#define x 63
#define y 62
#include __FILE__
#define x 62
#define y 61
#include __FILE__
#define x 61
#define y 60
#include __FILE__
#define x 60
#define y 59
#include __FILE__
#define x 59
#define y 58
#include __FILE__
#define x 58
#define y 57
#include __FILE__
#define x 57
#define y 56
#include __FILE__
#define x 56
#define y 55
#include __FILE__
#define x 55
#define y 54
#include __FILE__
#define x 54
#define y 53
#include __FILE__
#define x 53
#define y 52
#include __FILE__
#define x 52
#define y 51
#include __FILE__
#define x 51
#define y 50
#include __FILE__
#define x 50
#define y 49
#include __FILE__
#define x 49
#define y 48
#include __FILE__
#define x 48
#define y 47
#include __FILE__
#define x 47
#define y 46
#include __FILE__
#define x 46
#define y 45
#include __FILE__
#define x 45
#define y 44
#include __FILE__
#define x 44
#define y 43
#include __FILE__
#define x 43
#define y 42
#include __FILE__
#define x 42
#define y 41
#include __FILE__
#define x 41
#define y 40
#include __FILE__
#define x 40
#define y 39
#include __FILE__
#define x 39
#define y 38
#include __FILE__
#define x 38
#define y 37
#include __FILE__
#define x 37
#define y 36
#include __FILE__
#define x 36
#define y 35
#include __FILE__
#define x 35
#define y 34
#include __FILE__
#define x 34
#define y 33
#include __FILE__
#define x 33
#define y 32
#include __FILE__
#define x 32
#define y 31
#include __FILE__
#define x 31
#define y 30
#include __FILE__
#define x 30
#define y 29
#include __FILE__
#define x 29
#define y 28
#include __FILE__
#define x 28
#define y 27
#include __FILE__
#define x 27
#define y 26
#include __FILE__
#define x 26
#define y 25
#include __FILE__
#define x 25
#define y 24
#include __FILE__
#define x 24
#define y 23
#include __FILE__
#define x 23
#define y 22
#include __FILE__
#define x 22
#define y 21
#include __FILE__
#define x 21
#define y 20
#include __FILE__
#define x 20
#define y 19
#include __FILE__
#define x 19
#define y 18
#include __FILE__
#define x 18
#define y 17
#include __FILE__
#define x 17
#define y 16
#include __FILE__
#define x 16
#define y 15
#include __FILE__
#define x 15
#define y 14
#include __FILE__
#define x 14
#define y 13
#include __FILE__
#define x 13
#define y 12
#include __FILE__
#define x 12
#define y 11
#include __FILE__
#define x 11
#define y 10
#include __FILE__
#define x 10
#define y  9
#include __FILE__
#define x  9
#define y  8
#include __FILE__
#define x  8
#define y  7
#include __FILE__
#define x  7
#define y  6
#include __FILE__
#define x  6
#define y  5
#include __FILE__
#define x  5
#define y  4
#include __FILE__
#define x  4
#define y  3
#include __FILE__
#define x  3
#define y  2
#include __FILE__
#define x  2
#define y  1
#include __FILE__
#define x  1
#define y  0
#include __FILE__
#define x  0
#define y  99
#include __FILE__
#include __FILE__
#else
#if x && y
#pragma message(Q(x)" bottles of beer on the wall, "Q(x)" bottles of beer.")
#pragma message("Take one down, pass it around, "Q(y)" bottles of beer on the wall.")
#elif x
#pragma message(Q(x)" bottle of beer on the wall, "Q(x)" bottle of beer.")
#pragma message("Take one down and pass it around, no more bottles of beer on the wall.")
#else
#pragma message("No more bottles of beer on the wall, no more bottles of beer.")
#pragma message("Go to the store and buy some more, "Q(y)" bottles of beer on the wall.")
#endif
#pragma message(" ")
#undef x
#undef y
#endif```