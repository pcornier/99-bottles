
## Language Python ##
---
- Author: Jamie Turner
- Date: 05/17/06
- Info: http
- Score:  (3.03 in 184 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-python-1154.html
---

```'''An extensible framework for simulated bottle buying, 
putting away, taking down, and drinking.
'''

import sys

def vernacularFilter(f):
    '''Let's say "no more" instead of "zero"
    '''
    def _f(*args, **kw):
        word = f(*args, **kw)
        if word == 'zero':
            return 'no more'
        return word
    return _f

class LanguageTranslationError(Exception): pass

class NumToLanguageTranslator:
    '''Translate integers to spoken words, for various locales.
    '''
    DEFAULT_LOCALE = 'en-US'

    def __init__(self, locale=DEFAULT_LOCALE):
        self.translate = getattr(self, 'translate_%s' % 
        locale.lower().replace('-','_'))
        if not self.translate:
            raise LanguageTranslationError, \
            "Missing locale translation tables for numeric values"

    # en-US section.  More to follow
    EN_US_SINGLETON = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',

        20: 'twenty',
        30: 'thirty',
        40: 'fourty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }

    EN_US_TEENS = (13,20)
    EN_US_TEEN_SPECIAL_PFX = {
        3: 'thir', 
        4: 'four', 
        5: 'fif',
        8: 'eigh',
    }
    EN_US_RANGE = (0, 100)
    EN_US_TEEN_SFX = 'teen'

    @vernacularFilter
    def translate_en_us(self, num):
        '''Translations for en-US; currently only 0-99
        are supported.  That should be enough bottles
        for anyone.
        '''
        if num not in range(*self.EN_US_RANGE):
            raise LanguageTranslationError, \
            "Cannot tranlsate: number out of range"
        if num in self.EN_US_SINGLETON:
            return self.EN_US_SINGLETON[num]
        remainder = num % 10
        if num in range(*self.EN_US_TEENS):
            return '%s%s' % ( 
                self.EN_US_TEEN_SPECIAL_PFX.get(remainder,
                    self.EN_US_SINGLETON[remainder]),
                self.EN_US_TEEN_SFX)
        return '%s-%s' % (self.EN_US_SINGLETON[num / 10 * 10], 
                          self.EN_US_SINGLETON[remainder])

def joinStringList(strings):
    '''Take care of those pesky contractions.
    '''
    if len(strings) == 1: 
        return strings[0]
    return '%s and %s' % (','.join(strings[:-1]), strings[-1]) 

class Collection:
    '''A collection of items, complete with
    a few common actions (taking down, passing around,
    putting away) and extensive logging.
    '''
    def __init__(self, itemClass, emptyClass,
    translator=NumToLanguageTranslator(), logfd=sys.stdout):
        self.itemClass = itemClass
        self.emptyClass = emptyClass
        self.items = []
        self.location = None
        self.numTranslator = translator
        self.logfd = logfd

    def _get_description(self):
        return '%s %s' % (self.numTranslator.translate(len(self.items)),
                          self.itemClass.name(plural=len(self.items) != 1))
    description = property(_get_description)

    def _get_longDescription(self):
        return '%s %s' % (self.description, self.location)
    longDescription = property(_get_longDescription)

    def putAway(self, items, location):
        self.items.extend(items)
        self.location = location

    (EVENT_TAKE_ONE_DOWN,
     EVENT_PASS_IT_AROUND) = range(2)
    def takeOneDown(self, actor):
        '''Get an item and log its removal and distribution.
        '''
        try:
            item_to_discard = self.items.pop(0)
        except IndexError:
            raise self.emptyClass
        self.logEvents(
            [self.EVENT_TAKE_ONE_DOWN,
             self.EVENT_PASS_IT_AROUND,
            ], actor)
        return item_to_discard

    LOG_MESSAGES = {
        EVENT_TAKE_ONE_DOWN: 'take one down',
        EVENT_PASS_IT_AROUND: 'pass it around',
    }

    def logEvents(self, events, actor):
        self.logfd.write('%s%s, ' % (
            actor and (str(actor) + ' ') or '',
            joinStringList(map(lambda x: self.LOG_MESSAGES[x], events))
        ))
        
class Item:
    '''Any damn thing.
    '''
    @staticmethod
    def name(plural=False):
        raise NotImplementedError, "Override me!"

class Person:
    '''Someone, but specifically someone with a name.
    '''
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return self.name

class TheStore:
    '''The source of many things.  At the moment, only beer.

    TODO: pretzels.
    '''
    @staticmethod
    def buyBeer(howMuch):
        return [BeerBottle() for x in range(howMuch)]

## Our application: Separate module??

class OutOfBeer(Exception): 
    '''For resonable handling of a terrible situation.
    '''
    def __str__(self):
        return "Go to the store and buy some more"


class BeerBottle(Item):
    '''A potential item for collecting, passing around, etc.
    '''
    @staticmethod
    def name(plural=False):
        return 'bottle%s of beer' % (plural and 's' or '')

    def drink(self):
        pass # Mmm. Beer.


def letsDrink(who, howMuch, whereToKeep):
    '''A "sample" application, if you will, of this framework in use.
    
    Scales easily up to 99 bottles.
    '''
    assert 1 <= howMuch <= 99
    actor = Person(who)
    collection = Collection(BeerBottle, OutOfBeer)
    def refill():
        collection.putAway(TheStore.buyBeer(howMuch), whereToKeep)
    refill()
    try:
        while True:
            print collection.longDescription.capitalize() + ', ' + collection.description + '.'
            bottle = collection.takeOneDown(actor)
            print collection.longDescription + '.'
            bottle.drink()
            print ''
    except OutOfBeer, e:
        sys.stdout.write(str(e))
        # Lets be polite and leave the wall full!
        refill()
        print ',', collection.longDescription + '.'
        # --oh wait, GC.  damn

if __name__ == "__main__":
    # test
    letsDrink('You', 99, 'on the wall')```