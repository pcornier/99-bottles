
## Language Objective C ##
---
- Author: Joshua Pennington
- Date: 04/11/09
- Info: n/a
- Score:  (2.93 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-objective-c-2027.html
---

```#import <Foundation/Foundation.h>

#define kWallDefaultBottles			99

@interface Wall : NSObject {
	NSUInteger _bottles;
}
- (id)initWithBottles:(NSUInteger)numBottles; // designated initializer
- (void)drinkingCascade;
- (NSUInteger)bottles;
@end

@interface Wall (Private)
- (void)setBottles:(NSUInteger)newBottles;
- (void)drinkOne;
@end

@implementation Wall
- (id)initWithBottles:(NSUInteger)numBottles {
	if (self = [super init]) {
		_bottles = numBottles;
	}
	return self;
}

- (NSUInteger)bottles { return _bottles; }

- (void)drinkingCascade {
	while ([self bottles] > 0)
		[self drinkOne];
}
@end

@implementation Wall (Private)
- (void)setBottles:(NSUInteger)newBottles { // To be KVC compliant
	_bottles = newBottles;
}

- (void)drinkOne {
	NSUInteger bottles = [self bottles];
	
	if (bottles > 1) {
		printf("%lu bottles of beer on the wall, %lu bottles of beer,\n", bottles, bottles);
		printf("Take one down, pass it around,\n");
		printf("%lu bottles of beer on the wall.\n\n", bottles-1);
	}
	else {
		printf("1 bottle of beer on the wall, 1 bottle of beer,\n");
		printf("Take one down, pass it around,\n");
		printf("No bottles of beer on the wall.\n\n");
	}
	
	[self setBottles:bottles - 1];
}
@end

int main (int argc, const char *argv[]) {
    NSAutoreleasePool *pool = [[NSAutoreleasePool alloc] init];
	
	Wall *wall = [[Wall alloc] initWithBottles:kWallDefaultBottles];
	[wall drinkingCascade];
	[wall release];
	
    [pool drain];
    return 0;
}```