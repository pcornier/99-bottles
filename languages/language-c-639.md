
## Language C ##
---
- Author: Stefan Scheler
- Date: 05/11/05
- Info: http
- Score:  (3.00 in 44 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-c-639.html
---

```/*
 * C (multithreaded) using POSIX Thread Library (pthread)
 * by Stefan Scheler <sts[at]synflood[dot]de>
 * Ilmenau, Germany - May 2005
 *
 * compile with: gcc -pthread -o 99bottles 99bottles.c
 * disable debug output with: ./99bottles 2>/dev/null
 *
 */
 
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h> 
 
#define THREADS 10
#define PLURALS (bottles>1) ? "s" : ""

pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
int bottles = 99;
 
void *takeonedownandpassitaround(void *ptr) {

    struct timespec sleeptime;
    int *thread_id = (int *)ptr;
    
    while (1) {
        pthread_mutex_lock(&mutex);
        if (bottles>0) {
            fprintf(stderr, "Thread %d: ", *thread_id);
            printf("%d bottle%s of beer on the wall, %d bottle%s of beer.\n", bottles, PLURALS, \
                bottles, PLURALS);
            fprintf(stderr, "Thread %d: ", *thread_id);
            printf("Take one down and pass it around, ");
            if (bottles==1)
                printf("no more bottles of beer on the wall.\n");
            else
                printf("%d bottle%s of beer on the wall.\n", bottles-1, PLURALS);
        } else if (bottles==0) {
            fprintf(stderr, "Thread %d: ", *thread_id);
            printf("No more bottles of beer on the wall, no more bottles of beer.\n");
            fprintf(stderr, "Thread %d: ", *thread_id);
            printf("Go to the store and buy some more, 99 bottles of beer on the wall.\n");
        } else {
            pthread_mutex_unlock(&mutex);
            break;
        }
        bottles--;
        pthread_mutex_unlock(&mutex);
        sleeptime.tv_nsec = 0;
        sleeptime.tv_sec = rand() % 10;
        fprintf(stderr, "Thread %d: sleeps for %d ms\n", *thread_id, sleeptime.tv_sec);
        nanosleep(&sleeptime, NULL);
    }
}

int main(void) {

    pthread_t thread[THREADS];
    int threadid[THREADS];
    int i;
    
    srand(time(NULL));
    
    for (i=0; i<THREADS; i++) {
        threadid[i] = i;
        pthread_create(&thread[i], NULL, takeonedownandpassitaround, &threadid[i]);
    }
    
    for (i=0; i<THREADS; i++)             
        pthread_join(thread[i], NULL);
    
    exit(EXIT_SUCCESS);
    
}```