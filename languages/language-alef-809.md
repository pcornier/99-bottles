
## Language Alef ##
---
- Author: Christian Klein
- Date: 07/24/05
- Info: http
- Score:  (2.96 in 23 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-alef-809.html
---

```adt Shelf
{
    int count;
    Shelf *s init(int);
    void decrease (Shelf *s);
    int left (Shelf *s);
    void print (Shelf *s);
}

Shelf * Shelf.init (int cnt)
{
    Shelf *s;

    alloc s;
    s->count = cnt;

    return s;
}

void Shelf.decrease (Shelf *s)
{
    s->count--;
    return;
}

int Shelf.left (Shelf *s)
{
    if s->count > 0
        return 1;

    return 0;
}

void Shelf.prints (Shelf *s)
{
    if (!s->left(s))
        print("no more bottles of beer on the wall");

    print("%d one the wall",s->count,"Bottles" ? b->count>1 : "Bottle");

    return;
}

void main (int argc, char **argv)
{
    int i;
    Shelf *s;

    s = s.init(99);
    while (s->left(s))
    {
        prints(s);
        b.decreass(s);
    }

    return;
}```