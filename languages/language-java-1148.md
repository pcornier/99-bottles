
## Language Java ##
---
- Author: Kevin Seifert
- Date: 05/04/06
- Info: http
- Score:  (3.02 in 42 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-java-1148.html
---

```/**
This program sings the song "99 Bottles" using the Java Speech API (JSAPI).  

FreeTTS is a free JSAPI implementation.  To install:

1. Download and unzip FreeTTS from http://freetts.sourceforge.net/
2. To accept the license agreement, find the lib folder, then:
    for Windows run:            jsapi.exe 
    for unix/linux type:        sh ./jsapi.sh
3. Create a file named "speech.propeties" in your home directory, with a line:
    FreeTTSSynthEngineCentral=com.sun.speech.freetts.jsapi.FreeTTSEngineCentral
4. To compile/run, classpath must include freetts.jar and jsapi.jar, such as: 
    javac -cp "/freetts/lib/freetts.jar;/freetts/lib/jsapi.jar;." Bottles.java
    java  -cp "/freetts/lib/freetts.jar;/freetts/lib/jsapi.jar;." Bottles
*/

import java.util.Locale;
import javax.speech.Central;
import javax.speech.synthesis.Synthesizer;
import javax.speech.synthesis.SynthesizerModeDesc;
import javax.speech.synthesis.Voice;


public class Bottles {

    public static final int NUM_BOTTLES = 99;

    //define scale frequencies in hertz
    public static final int G_1  = 196;
    public static final int A_2  = 220;
    public static final int B_2  = 246;
    public static final int C_2  = 260;
    public static final int D_2  = 292;

    public Voice kevinHQ;
    public SynthesizerModeDesc generalDesc;
    public Synthesizer synth;


    public void openMouth() {

        try {

            System.out.print( "  Loading voice..." );
           
            kevinHQ = new Voice( "kevin16",
                                    Voice.GENDER_DONT_CARE, 
                                    Voice.AGE_DONT_CARE, 
                                    null );

            generalDesc = new SynthesizerModeDesc(
                                    null,           // engine name
                                    "general",      // mode name
                                    Locale.US,      // locale
                                    null,           // running
                                    null );         // voice

            synth = Central.createSynthesizer( generalDesc );

            if ( synth == null ) {
                System.err.println(
                    "Could not load general domain synthesizer. " +
                    "You probably need to configure a speech.properties file. "
                    );
                System.exit( 1 );
            }

            synth.allocate();
            
            synth.getSynthesizerProperties().setVoice( kevinHQ );
            synth.getSynthesizerProperties().setPitchRange(0.0f);
            synth.resume();
            
            System.out.print( "...\n\n" );

        } catch ( Exception e ) {
            e.printStackTrace();
        }

    }

    public void closeMouth() {
        try {
            synth.deallocate();

        } catch ( Exception e ) {
            e.printStackTrace();
        }
    }

    public void sing( String lyrics, int pitch ) {
        try {
            System.out.print( lyrics );
            synth.getSynthesizerProperties().setPitch( pitch );
            synth.speakPlainText( lyrics, null );
            synth.waitEngineState( Synthesizer.QUEUE_EMPTY );

        } catch ( Exception e ) {
            System.err.println( e );
        }
    }

    public String getBottle( int i ) {
        if ( i != 1 )
            return "bottles ";

        return "bottle ";
    }

    public String getNumber( int i ) {
        if ( i == 0 )
            return "No more ";

        return String.valueOf( i ) + " ";
    }

    public void singSong() {
        openMouth();

        int j;
        for ( int i = NUM_BOTTLES; i >= 0; i-- ) {
            
            sing( getNumber( i )             , C_2 );
            sing( getBottle( i ) + "of "     , G_1 );
            sing( "beer on the wall, "       , C_2 );
            sing( getNumber( i )             , D_2 );
            sing( getBottle( i ) + "of "     , A_2 );
            sing( "beer.\n"                  , D_2 );

            if ( i > 0 ) {
                sing( "Take one down and pass it around, "  , B_2 );
                j = i-1;
            } else {
                sing( "Go to the store and buy some more, " , B_2 );
                j = NUM_BOTTLES;
            }

            sing( getNumber( j )             , G_1 );
            sing( getBottle( j )             , A_2 );
            sing( "of "                      , B_2 );
            sing( "beer on the wall.\n\n"    , C_2 );

        }

        closeMouth();
    }

    public static void main( String[] argv ) {
        Bottles beer = new Bottles();
        beer.singSong();
    }

}```