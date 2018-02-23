
## Language D ##
---
- Author: Bryan Knowles
- Date: 11/17/10
- Info: n/a
- Score:  (3.00 in 17 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-d-2547.html
---

```module beer;

private {
    import std.stdio;
    import core.thread;
}

class Bar{
    this(int beer){
        this.beer = beer;
        this.opened = true;
    }
    int getBeer(){
        return beer;
    }
    bool isOpened(){
        return opened;
    }
    void subBeer(int amount){
        beer -= amount;
    }
    void addBeer(int amount){
        beer += amount;
    }
    void closeBar(){
        opened = false;
    }
    private:
        int beer;
        bool opened;
}

class Singer: Fiber{
    this(Bar bar, Fiber drinker){
        this.bar = bar;
        this.drinker = drinker;
        super(&run);
    }
    private:
        Bar bar;
        Fiber drinker;
        void run(){
            while(bar.isOpened()){
                writef("%d bottles of beer on the wall,\n%d bottles of beer!\n", bar.getBeer(),
bar.getBeer());
                drinker.call();
                Fiber.yield();
            }
            drinker.call();
        }
}

class Drinker: Fiber{
    this(Bar bar, Fiber barkeep){
        this.bar = bar;
        this.barkeep = barkeep;
        super(&run);
    }
    private:
        Bar bar;
        Fiber barkeep;
        void run(){
            while(bar.isOpened()){
                writef("Take one down, pass it around!\n");
                bar.subBeer(1);
                //barkeep.call();
                Fiber.yield();
            }
            //barkeep.call();
        }
}

class Barkeep: Fiber{
    this(Bar bar){
        this.bar = bar;
        super(&run);
    }
    private:
        Bar bar;
        Fiber singer;
        void run(){
            while(bar.isOpened()){
                singer.call();
                //Fiber.yield();
                if(bar.getBeer() <= 0){
                    bar.closeBar();
                }
                writef("%d bottles of beer on the wall!\n\n", bar.getBeer());
            }
            singer.call();
        }
        void setSinger(Fiber singer){
            this.singer = singer;
        }
}

void main(){
    Singer singer;
    Drinker drinker;
    Barkeep barkeep;
    Bar bar = new Bar(99);
    barkeep = new Barkeep(bar);
    drinker = new Drinker(bar, barkeep);
    singer = new Singer(bar, drinker);
    barkeep.setSinger(singer);
    barkeep.call();
    
    assert(singer.state == Fiber.state.TERM);
    assert(drinker.state == Fiber.state.TERM);
    assert(barkeep.state == Fiber.state.TERM);
}```