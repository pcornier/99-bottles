
## Language Vala ##
---
- Author: Hohoo
- Date: 03/26/10
- Info: http
- Score:  (2.87 in 8 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-vala-2344.html
---

```class Bottles {
    private int amount = 99;
    private signal void bottles (bool on_the_wall);
    private signal void drink ();
    
    public Bottles () {
        bottles.connect (on_bottles);
        drink.connect (on_drink);
        
        sing ();
    }
    
    private void sing () {
        for (int i = 99; i >= 0; i--) {
            bottles (true);
            bottles (false);
            drink ();
            bottles (true);
            if (i != 0) {
                stdout.printf ("\n");
            }
        }
    }
    
    private void on_bottles (bool on_the_wall) {
        var w_end = "";
        var s_end = "";
        
        if (on_the_wall) {
            w_end = " on the wall";
        }
        
        if (amount != 1) {
            s_end = "s";
        }
        
        stdout.printf ("%d bottle%s of beer%s\n", amount, s_end, w_end);
    }
    
    private void on_drink () {
        if (amount != 0) {
            stdout.printf ("Take one down and pass it around\n");
            amount--;
        } else {
            stdout.printf ("Go to the store and buy some more\n");
            amount = 99;
        }
    }
    
    public static int main (string[] args) {
        Bottles b = new Bottles ();
        
        return 0;
    }
}```