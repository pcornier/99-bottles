
## Language Objective C ##
---
- Author: C.W. Betts
- Date: 12/01/08
- Info: n/a
- Score:  (2.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-objective-c-1932.html
---

```/*
 * 99 Bottles of Beer written in Objective-C for Mac OS X.
 * Should work on most OpenStep and GNUStep environments as well.
 *
 * Please note that since Objective-C is a superset of C, all
 * C versions are valid Objective-C as well. Therefore, this
 * version is written in fancy OO, and using NSLog rather than
 * printf for optimum uglyness.
 *
 * Compiles on Mac OS X with "gcc -framework Foundation 99Bottles.m"
 *
 * (c) 2002 Dan Christiansen
 * Modified by C.W. Betts
 */

#import <Foundation/Foundation.h>

//Lets make the output look better than NSLog
void WriteToStandardOutput(NSString *string)
{
	NSFileHandle *so =[NSFileHandle fileHandleWithStandardOutput];
	[so writeData:[[NSString stringWithFormat:@"%@\n",string]
dataUsingEncoding:NSUTF8StringEncoding]];
}

@interface BeerBottle : NSObject
{
}
- (void)chug;
@end

@interface BeerWall : NSObject
{
    NSMutableArray *bottles;
}
+ (BeerWall *)wallWithBottles:(int)nbottles;
- (int)bottles;
- (BeerBottle *)getBottle;
- (void)throwParty;
@end

@implementation BeerWall
- (id)initWithBottles:(int)nbottles
{
    self = [super init];

    bottles = [NSMutableArray arrayWithCapacity:nbottles];

    int i;
    for (i = 0; i < nbottles; i++) {
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
            WriteToStandardOutput(@"1 bottle of beer on the wall, 1 bottle of beer,");
            WriteToStandardOutput(@"Take one down, pass it around,");
            [[self getBottle] chug];
            WriteToStandardOutput(@"No bottles of beer on the wall.");
            WriteToStandardOutput(@"");
			[self throwParty];
            break;
		case 0: 
			WriteToStandardOutput(@"No bottles of beer on the wall, no bottles of beer,");
            WriteToStandardOutput(@"Go to the store, buy some more,");
            WriteToStandardOutput(@"99 bottles of beer on the wall.");
			break;
        default:
            WriteToStandardOutput([NSString stringWithFormat:@"%d bottles of beer on the wall, %d
bottles of beer,",
                  [self bottles], [self bottles]]);
            WriteToStandardOutput(@"Take one down, pass it around,");
            [[self getBottle] chug];
            WriteToStandardOutput([NSString stringWithFormat:@"%d bottles of beer on the wall.",
                  [self bottles]]);
            WriteToStandardOutput(@"");
            [self throwParty];
            break;
    }

    return;
}

-(void)dealloc
{
	[NSMutableArray release];
	[super dealloc];
}
@end

@implementation BeerBottle
- (id)init
{
    self = [super init];
    srand(time(0));
    return self;
}

- (void)chug
{
    if (rand()/(double)RAND_MAX < 0.025)
		WriteToStandardOutput(@"BUUUUUUUUURP!");
}
@end

int main()
{
    NSAutoreleasePool *pool = [[NSAutoreleasePool alloc] init];

    [[BeerWall wallWithBottles:99] throwParty];

    [pool release];
}```