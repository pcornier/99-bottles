
## Language Java 2 Micro Edition ##
---
- Author: Stefan Scheler
- Date: 04/20/05
- Info: http
- Score:  (2.91 in 88 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-java-2-micro-edition-342.html
---

```/*
 * bottles.java - 99 Bottles of Beer
 * J2ME Midlet for MIDP 1.0 compatible mobile devices, tested on nokia 6100
 * by Stefan Scheler <sts[at]synflood[dot]de> on 16-June-2004
 *
 */
 
import javax.microedition.midlet.*;
import javax.microedition.lcdui.*;

public class bottles extends MIDlet {
    
    private Display mDisplay;
    private Form mForm;
    private StringItem mString;

    public void pauseApp() {}
    
    public void destroyApp(boolean unconditional) {}
        
    public bottles() {
        
        mString = new StringItem("", "");
        mForm = new Form("99 Bottles of Beer");
        mForm.append(mString);
        mDisplay = Display.getDisplay(this);
        mDisplay.setCurrent(mForm);
    
    }
    
    public void appendText(String s) {
    
        mString.setText(mString.getText()+s);
        
    }
    
    public void startApp() {
        
        for (int i = 99; i > 1; i--) {
            int j = i-1;
            appendText(i + " bottles of beer on the wall, " + i + " bottles " +
                       "of beer. Take one down, pass it around, " + j + " ");
            if (j != 1) appendText("bottles"); else appendText("bottle");
            appendText(" of beer on the wall.\n");
        }
        appendText("1 bottle of beer on the wall, 1 bottle of beer. Take one " +
                   "down, pass it around, no more bottles of beer on the wall.");
        appendText("No more bottles of beer on the wall, no more bottles of beer. " + 
                   "Go to the store and buy some more, 99 bottles of beer on the wall.");
            
    }       
    
}```