
## Language Procmail ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-procmail-563.html
---

```# "99 Bottles of Beer" for Procmail -- body filtering version
# era  Fri Jun 12 18:59:44 1998		http://www.iki.fi/~era/99bottles/
# Reacts on incoming mail -- if the Subject: matches the regex, start looping
# This will create a large amount of mail in your inbox. You have been warned

SHELL=/bin/sh

# Might need to change PATH e.g. if it doesn't normally include the location
#  where you have formail installed
#PATH=$PATH:/usr/local/contrib/bin

# If the incoming message matches this regex, generate a copy with a 
#  new subject line, one bottle less, and send it, too, to myself. 
#  Also change the body to reflect the new number.
#  (Other than that, this is basically the same as the looprc version)

:0c
* ^Subject:\/\<*[1-9][0-9]*\<+bottles?\<+of\<+beer\>*$
{
    # Store MATCH before processing it more
    SUBJECT="$MATCH"

    # Extract string part
    :0
    * SUBJECT ?? bottles?\/\<.*
    { STRINGPART="$MATCH" }

    # Extract number part and resend the message
    :0
    * SUBJECT ?? ^^\<*\/[0-9]+
    * $ $MATCH^0
    * -1^0
    {
        # Gack, hafta put score in a "real" variable to make it useful
        BOTTLES=$=

        # Ugliness: Precalculate the number of "one down" bottles
        #  for the last stanza of the song
        :0
        * $ $BOTTLES^0
        * -1^0
        { }
        NEWBOTTLES=$=
        :0
        * NEWBOTTLES ?? ^^0^^
        { NEWBOTTLES="No" }

        # Calculate whether we need to leave out the plural s anywhere
        S="s" NEWS="s"
        :0
        * BOTTLES ?? ^^1^^
        { S="" }
        :0
        * NEWBOTTLES ?? ^^1^^
        { NEWS="" }

        :0bfw  # Filter the body using sed
        | sed -e "s/$BOTTLES[ 	]*bottles*/$NEWBOTTLES bottle$NEWS/g" \
                -e "s/$MATCH[ 	]*bottles*/$BOTTLES bottle$S/g"

        # Okay, body filtering done. Now proceed as before:
        #  Resend the message with a new Subject: to myself

        :0
        | formail -I "Subject: $BOTTLES bottle$S$STRINGPART" | \
          $SENDMAIL $SENDMAILFLAGS $LOGNAME
    }

    # Still here? That means there are no more bottles.
    :0
    | formail -I "Subject: No bottles$STRINGPART" | \
      $SENDMAIL $SENDMAILFLAGS $LOGNAME
}

# # You might want to uncomment this recipe to put the @&$0fF!! 
# # bottles of beer messages in their own mailbox
# :0:
# * ^Subject:\<*([1-9][0-9]|No)*\<+bottles?\<+of\<+beer\>*$
# ./beer

# To test this, INCLUDERC= this file from your regular .procmailrc
# (assuming you have one set up; check the manual pages if not)
# and send yourself a message with a subject line with the required
# number of bottles. A test message is in test.msg in this directory.
#
#  unix$ /usr/lib/sendmail $LOGNAME <test.msg
#
# or for testing purposes even just
#
#  unix$ procmail ./bodyfilter < test.msg
#
# or even
#
#  unix$ procmail VERBOSE=yes DEFAULT=./oops ./bodyfilter <test.msg
#```