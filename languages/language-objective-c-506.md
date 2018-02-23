
## Language Objective-C ##
---
- Author: Dan Christiansen
- Date: 04/20/05
- Info: n/a
- Score:  (2.85 in 147 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-objective-c-506.html
---

```/*
 * 99 Bottles of Beer written in Objective-C for Mac OS X.
 * Should work on most OpenStep environments as well.
 *
 * Please note that since Objective-C is a superset of C, all
 * C versions are valid Objective-C as well. Therefore, this
 * version is written in fancy OO, and using NSLog rather than
 * printf for optimum uglyness.
 *
 * Compiles on Mac OS X with "gcc -framework Foundation 99Bottles.m"
 *
 * (c) 2002 Dan Christiansen
 */

#import <Foundation/Foundation.h>

@class BeerBottle;
@class BeerWall;

@interface BeerWall : NSObject
{
    NSMutableArray *bottles;
}
+ (BeerWall *)wallWithBottles:(int)nbottles;
- (int)bottles;
- (BeerBottle *)getBottle;
- (void)throwParty;
@end

@interface BeerBottle : NSObject
{
    BOOL full;
}
- (void)chug;
@end

@implementation BeerWall
- (id)initWithBottles:(int)nbottles
{
    self = [super init];

    bottles = [NSMutableArray arrayWithCapacity:99];

    int i;
    for (i = 0; i < 99; i++) {
        [bottles addObject:[[[BeerBottle alloc] init] retain]];
    }

    return self;
}

+ (BeerWall *)wallWithBottles:(int)nbottles
{
    return [[BeerWall alloc] initWithBottles:nbottles];
}

- (int)bottles
{
    return [bottles count];
}

- (BeerBottle *)getBottle
{
    BeerBottle *bottle = [bottles lastObject];
    [bottles removeLastObject];
    [bottle release];
    return [bottle autorelease];
}
- (void)throwParty
{
    /* Objective-C is only supposed to handle 63 recursive calls - we do 99.
    * Life's a bitch.
    */

    switch([self bottles]) {
        case 1:
            NSLog(@"1 bottles of beer on the wall, 1 bottles of beer,");
            NSLog(@"Take one down pass it around,");
            [[self getBottle] chug];
            NSLog(@"No bottles of beer on the wall.",
                  [self bottles], [self bottles]);
            NSLog(@"");
            break;
        default:
            NSLog(@"%d bottles of beer on the wall, %d bottles of beer,",
                  [self bottles], [self bottles]);
            NSLog(@"Take one down pass it around,");
            [[self getBottle] chug];
            NSLog(@"%d bottles of beer on the wall.",
                  [self bottles], [self bottles]);
            NSLog(@"");
            [self throwParty];
            break;
    }

    return;
}
@end

@implementation BeerBottle
- (id)init
{
    self = [super init];
    srand(time(0));
    full = YES;
    return self;
}

- (void)chug
{
    if (full) {
        if (rand()/(double)RAND_MAX < 0.025)
            NSLog(@"BUUUUUUUUURP!");
        full = NO;
    } else {
        printf("WTF!? This bottle's empty!!!\n");
    }
}
@end

int main()
{
    NSAutoreleasePool *pool = [[NSAutoreleasePool alloc] init];

    [[BeerWall wallWithBottles:99] throwParty];

    [pool release];
}```