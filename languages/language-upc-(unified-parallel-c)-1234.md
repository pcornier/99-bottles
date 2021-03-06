
## Language UPC (Unified Parallel C) ##
---
- Author: Phil Merkey
- Date: 08/09/06
- Info: http
- Score:  (2.77 in 124 votes)
- URL: www.upc.mtu.edu
- Original URL: http://www.99-bottles-of-beer.net/language-upc-(unified-parallel-c)-1234.html
---

```*
 * UPC (Unified Parallel C: www.upcworld.org) by Phil Merkey
 * To run as a C program compile: gcc 99bottles.c
 * To run as a UPC program on a Cray X1 
 *   compile: cc -hupc -hssp 99bottles.c
 *       run: aprun -n <THREADS> ./a.out
 * Other versions of UPC will require an appropriate macro
 * for 'fetch_and_minus'
 */
#include <stdio.h>
#include <time.h>

#define ROUNDS 100
#define VERSE_LEN 132

#if __UPC__

#include <upc.h>
#include <intrinsics.h>
shared long counter;
#define fetch_and_minus(A) _amo_afadd((volatile long *)(A), -1)
shared [] char song[ROUNDS*VERSE_LEN];

#else

#define upc_barrier
#define MYTHREAD 0
#define upc_memput memcpy
long counter;
#define fetch_and_minus(A) serial_fetch_and_add((long *)(A), -1)
char song[ROUNDS*VERSE_LEN];

#endif

main()
{
    int cnt, offset;
    char verse_buf[VERSE_LEN];

    srand48(33*MYTHREAD);
    if(MYTHREAD == 0) counter = ROUNDS-1;
    upc_barrier;

    while(1){
        cnt = fetch_and_minus( &counter );
        if( cnt < 0 )
            break;
        offset = build_verse( cnt , verse_buf );
        upc_memput( &song[offset], verse_buf, VERSE_LEN );
    }
    upc_barrier;
    if(MYTHREAD == 0 )  printf("%s", (char *) song);
}

/*
 * Note that each thread pulls the next available bottle off the wall,
 * takes a random amount of time to complete the task of building 
 * the verse, then writes it into the correct location in the song. 
 * This allows each thread to contribute to the construction of the 
 * song while handling issues of load-balancing and synchronization 
 * in a natural way.
 */

int build_verse(int cnt, char *vrs)
{
    char stash[60];
    struct timespec surfeiting;

    report_stash(1, cnt, stash );
    sprintf(vrs,"\n\n%s on the wall, ", stash);
    report_stash(0, cnt, stash );
    sprintf(vrs+strlen(vrs),"%s.", stash);
    surfeiting.tv_sec = 0;
    surfeiting.tv_nsec = (ROUNDS-cnt)*(lrand48() % 100000);
    nanosleep(&surfeiting, NULL);
    if ( cnt ==  0 ){
        sprintf(vrs+strlen(vrs), "\nGo to the store and buy some more, ");
        report_stash(0, ROUNDS-1, stash );
        sprintf(vrs+strlen(vrs), "%s on the wall.\n", stash);
     } else {
        sprintf(vrs+strlen(vrs), "\nTake one down and pass it around, ");
        report_stash(0, cnt-1, stash );
        sprintf(vrs+strlen(vrs), "%s on the wall.                 ", stash);
    }
    return( (ROUNDS-1-cnt) * VERSE_LEN );
}

report_stash(int cap, int nb, char *stash )
{
    if( nb == 0 )
        sprintf(stash, "%co more bottles of beer", (cap)?'N':'n' );
    else
        sprintf(stash, "%d bottle%s of beer", nb, (nb>1)?"s":"");
}

int serial_fetch_and_add( long *cntr, int val )
{
    int ret;
    ret = *cntr;
    *cntr += val;
    return(ret);
}```