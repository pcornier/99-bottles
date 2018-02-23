
## Language gnuplot ##
---
- Author: Bastian Maerkisch
- Date: 09/14/07
- Info: http
- Score:  (3.02 in 49 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-gnuplot-1598.html
---

```# 99bottles.gp:
#   Gnuplot is a well-known, portable command-line driven interactive data and 
#   function plotting utility (http://www.gnuplot.info). So arguably it should 
#   have some graphics output. Here is a script for gnuplot version 4.2 that 
#   outputs the 99-bottles-of-beer-song and also draws some bottles on the 
#   screen... (written by Bastian Maerkisch)

# Define a maximum number of bottles in case we do not want so many beers...
if (!exists("max")) max = 99

# Create and initialize the (remaining) bottles counter
if (!exists("bottles")) bottles = max

# Initialize the plot settings
if (bottles == max) \
   unset border;\
   unset tics ;\
   set lmargin 1;\
   set rmargin 1;\
   unset key; \
   set parametric; \
   set xrange [-1:29.5]; \
   set yrange [-11:29]; \
   set samples 561; \
   set style line 1 linetype 1 lc rgb "#008800" lw 0; \
   set style line 2 linetype 1 lc rgb "brown" lw 3; \
   set style line 3 linetype 1 lc rgb "#008800" lw 5;

# Define a string valued function to create the "bottle(s)" string
# Note that there is no name conflict with the bottles variable.
bottles(b) = " bottle" . "s"[0:(b != 1)] . " "

# Function which returns the number b or the string "no more" iff b=0.
# The case of the first letter can be switched by the parameter c
# (c==1 means capital, c==0 lower case)
number(b, c) = (b > 0) ? sprintf("%d", b) : "nN"[c+1:c+1] . "o more"

# We use a ternary operator to decide what to do next -- Get more beer! ;-)
action(b) = (b != 0) ? \
    "Take one down and pass it around" : \
    "Go to the store and buy some more"

# Calculate the number of bottles after "taking one down"
bmm(b) = (b + max) % (max + 1)

# Function to return a complete verse
verse(b) = number(b, 1) . bottles(b) . "of beer on the wall, " . \
           number(b, 0) . bottles(b) . "of beer.\n" .\
           action(b) . ", " .\
           number(bmm(b), 0) . bottles(b - 1) .\
           "of beer on the wall."

# Parametric function definition of one half of a bottle
halfabottle_x(t) = (t < 1) ?  t : ((t<4) ? 1 : ((t<=6) ? \
    ((t-3.)**(-0.8)) : (halfabottle_x(6) -((t-6)*halfabottle_x(6))) ))
halfabottle_y(t) = (t < 1) ? 0 : ((t<6) ? (t-1) : 5)

# Mirror and combine to halves to get a whole bottle
# and apply scaling to get a descent aspect ration.
# Plot range for a single bottle is [-7:7]
abottle_x(t) = 0.25 * ((t < 0) ? - halfabottle_x(7 + t) : halfabottle_x(7 - t))
abottle_y(t) = (t < 0) ? halfabottle_y(7 + t) : halfabottle_y(7 - t)

# Modulo function for floats
fmod(x, y) = x - int(x / y) * y

# Extend the function to produce several bottles at once
somebottles_x(t, ofs) = abottle_x(7 - fmod(t, 14)) + int(t / 14.) * ofs
somebottles_y(t) = abottle_y(7 - fmod(t,14))

# Calculate the number of bottles on shelf number i
bottles_on_shelf(i, b) = (bmm(b) < (i * 20)) ? \
    0 : (bmm(b) > ((i + 1) * 20)) ? 20 : (bmm(b) - i*20)

# Helper function to limit the plotting range
epsilon = 0.001
range(low, x, high) = (low > x) ? low : ((high <= x) ? high-epsilon : x)

# Space between two bottles (you have to adjust the yrange accordingly)
spacing = 1.5

# y-position of shelf number i
shelf(i) = i * (5 + 1)

# Draw 5 shelves of beer bottles and reserve space for the song text
set arrow 1 from -1, shelf(0) to 19 * spacing + 1, shelf(0) ls 2 front nohead
set arrow 2 from -1, shelf(1) to 19 * spacing + 1, shelf(1) ls 2 front nohead
set arrow 3 from -1, shelf(2) to 19 * spacing + 1, shelf(2) ls 2 front nohead
set arrow 4 from -1, shelf(3) to 19 * spacing + 1, shelf(3) ls 2 front nohead
set arrow 5 from -1, shelf(4) to 19 * spacing + 1, shelf(4) ls 2 front nohead

# Show the song text in a label
set label 1 verse(bottles) at 13, -6 center offset character 0, 0.5 front

# Plot all the bottles, with a maximum of 20 per shelf
plot [0:20 * 14] \
   somebottles_x(range(0, t, bottles_on_shelf(4, bottles) * 14), spacing) + \
      0.5*spacing, \
   somebottles_y(range(0, t, bottles_on_shelf(4, bottles) * 14)) + shelf(4) \
      ls 1 with filledcurves y1=shelf(4), \
   somebottles_x(range(0, t, bottles_on_shelf(3, bottles) * 14), spacing), \
   somebottles_y(range(0, t, bottles_on_shelf(3, bottles) * 14)) + shelf(3) \
      ls 1 with filledcurves y1=shelf(3), \
   somebottles_x(range(0, t, bottles_on_shelf(2, bottles) * 14), spacing), \
   somebottles_y(range(0, t, bottles_on_shelf(2, bottles) * 14)) + shelf(2) \
      ls 1 with filledcurves y1=shelf(2), \
   somebottles_x(range(0, t, bottles_on_shelf(1, bottles) * 14), spacing), \
   somebottles_y(range(0, t, bottles_on_shelf(1, bottles) * 14)) + shelf(1) \
      ls 1 with filledcurves y1=shelf(1), \
   somebottles_x(range(0, t, bottles_on_shelf(0, bottles) * 14), spacing), \
   somebottles_y(range(0, t, bottles_on_shelf(0, bottles) * 14)) + shelf(0) \
      ls 1 with filledcurves y1=shelf(0), \
   (bottles > 0) ? (abottle_y(range(-7, t/10. - 7, 7)) * 5.3 + 1) : 100, \
   (bottles > 0) ? (abottle_x(range(-7, t/10. - 7, 7)) * 18  - 6) : 100 ls 3;

# Print out the song text to the console, too
print verse(bottles)."\n"

# Wait a little while before drawing the next plot...
pause 0.5

# gnuplot's loop mechanism is a restart of the current script file (reread)
bottles = bottles - 1
if (bottles >= 0) reread

# We only get here once the song is finished,
# so prepare the (persitent) bottle counter for a new start...
bottles = max
# and reset the plot options
reset```