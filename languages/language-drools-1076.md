
## Language Drools ##
---
- Author: Mikhail Podgurskij
- Date: 03/05/06
- Info: http
- Score:  (2.90 in 59 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-drools-1076.html
---

```//File Wall.java

/** 
 * Simple demonstration working with
 * Java semantec module
 * @authon Mikhail Podgurskij
 * 2006/03/05 
 */


import java.net.URL;

import org.drools.RuleBase;
import org.drools.WorkingMemory;
import org.drools.io.RuleBaseLoader;

public class Wall {
    public static URL ruleSource = Wall.class
            .getResource("bottles.java.drl");
        
    private int bottles;

    public Wall(int bottles) {
        this.bottles = bottles;
    }
    
    public int getBottlesCount() {
        return bottles;
    }
    
    public void takeOne() {
        bottles--;
    }
    
    public static void main(String[] args) throws Exception {
        RuleBase ruleBase = RuleBaseLoader.loadFromUrl(ruleSource);
        WorkingMemory workingMemory = ruleBase.newWorkingMemory();      
        workingMemory.assertObject(new Wall(99));       
        workingMemory.fireAllRules();               
    }
}


//File bottles.java.drl

<rule-set name="Bottles song"
          xmlns="http://drools.org/rules"
          xmlns:java="http://drools.org/semantics/java"
          xmlns:xs="http://www.w3.org/2001/XMLSchema-instance"
          xs:schemaLocation="http://drools.org/rules rules.xsd
                             http://drools.org/semantics/java java.xsd">
    <import>Wall</import>
        
    <rule name="Process the wall with bottles">
        <parameter identifier="wall">          
            <class>Wall</class>              
        </parameter>
        <java:condition>wall.getBottlesCount() > 2</java:condition>
        <java:consequence>
            System.out.println(wall.getBottlesCount() +
                " bottles of beer on the wall. "+ 
                wall.getBottlesCount()+
                " bottles of beer");
            System.out.println("Take one down and pass it around, "+
                (wall.getBottlesCount()-1) + 
                " bottles of beer on the wall");
            System.out.println();
            wall.takeOne();
            drools.modifyObject(wall);
        </java:consequence>
    </rule>    

    <rule name="Process the wall with two bottles">
        <parameter identifier="wall">          
            <class>Wall</class>              
        </parameter>
        <java:condition>wall.getBottlesCount() == 2</java:condition>
        <java:consequence>
            System.out.println("2 bottles of beer on the wall. 2 bottles of beer");
            System.out.println("Take one down and pass it around, 1 bottle of beer on the wall");
            System.out.println();
            wall.takeOne();
            drools.modifyObject(wall);
        </java:consequence>
    </rule>    

    <rule name="Process the wall with one bottle">
        <parameter identifier="wall">          
            <class>Wall</class>              
        </parameter>
        <java:condition>wall.getBottlesCount() == 1</java:condition>
        <java:consequence>
            System.out.println("1 bottle of beer on the wall. 1 bottle of beer");
            System.out.println("Take one down and pass it around, "+
                "No more bottles of beer on the wall");
            System.out.println();
            wall.takeOne();
            drools.modifyObject(wall);
        </java:consequence>
    </rule>    

    <rule name="Process the wall without bottles">
        <parameter identifier="wall">          
            <class>Wall</class>              
        </parameter>
        <java:condition>wall.getBottlesCount() == 0</java:condition>
        <java:consequence>
            System.out.println("No more bottles of beer on the wall. No more bottles of beer");
            System.out.println("Go to store and buy some more, "+
                "99 bottles of beer on the wall");
            wall.takeOne();
            drools.modifyObject(wall);
        </java:consequence>
    </rule>    
</rule-set>```