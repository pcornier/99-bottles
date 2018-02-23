
## Language cmake ##
---
- Author: Marc Schodermayr
- Date: 01/16/07
- Info: http
- Score:  (2.60 in 5 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-cmake-1375.html
---

```# cmake is a nice, cross-platform autotools replacement. Just give
# it a try.
#
# CMakeLists.txt for the 99-bootles-of-beer song. ;o)
#
# Copy the file to a directory of your choice and call cmake <PathToCMakeLists.txt>.
# Remember that cmake creates some files on execution, so using a clean, temporary
# directory makes it more easy to remove them all.
#
# Have a lot of fun. ;)

MACRO (TRINK_BEER)
  
  MESSAGE ("")
  MESSAGE ("${BOTTLE_COUNT} bottles of beer on the wall, ${BOTTLE_COUNT} bottles of beer.")

  MATH(EXPR BOTTLE_COUNT "${BOTTLE_COUNT} - 1")

  IF (BOTTLE_COUNT GREATER 0)
    MESSAGE ("Take one down, pass it around, ${BOTTLE_COUNT} bottles of beer on the wall.")
    TRINK_BEER()
  ELSE (BOTTLE_COUNT GREATER 0)
    MESSAGE ("Take one down, pass it around, no more bottles of beer on the wall.")
    MESSAGE ("")
    MESSAGE ("No more bottles of beer on the wall, no more bottles of beer.")
    MESSAGE ("Go to the store and buy some more, 99 bottles of beer on the wall.")
    MESSAGE ("")
  ENDIF (BOTTLE_COUNT GREATER 0)

ENDMACRO (TRINK_BEER)

# Start with drinking. *hicks*
SET (BOTTLE_COUNT 99)
TRINK_BEER()```