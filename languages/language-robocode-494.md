
## Language Robocode ##
---
- Author: Peter Str�mberg
- Date: 04/20/05
- Info: http
- Score:  (2.50 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-robocode-494.html
---

```package wiki.beer;
import robocode.*;
import java.awt.geom.Point2D;

// BeerPoet, one way to go about writing the 99-bottles-of-beer poem.
// By Peter Str�mberg, http://robowiki.dyndns.org/?PEZ
// For more info on the poem: http://99-bottles-of-beer.ls-la.net/
//
// Run this robot in Robocode.
// Put it against 99 SittingDuck and open its output window.

public class BeerPoet extends AdvancedRobot {
    private boolean hasStarted;

    public void run() {
        turnGunRightRadians(Double.POSITIVE_INFINITY); 
    }

    public void onScannedRobot(ScannedRobotEvent e) {
        if (!hasStarted) {
            printBottles();
            hasStarted = true;
        }
        setFire(3);
        setTurnGunRightRadians(0 - getGunTurnRemainingRadians());
    }

    public void onRobotDeath(RobotDeathEvent e) {
        printBottles();
    }

    private void printBottles() {
        out.println(bottles());
        if (getOthers() > 0) {
            out.println("Take " + (getOthers() == 1 ? "it" : "one") +
                " down, and pass it around");
            }
        else {
            out.println("Now they are all gone");
        }
    }

    private String bottles() {
        return bottles(getOthers()) + " on the wall, " + bottles(getOthers());
    }

    private String bottles(int bottles) {
        return (bottles == 0 ? "No" : "" + bottles) +
            " bottle" + (bottles == 1 ? "" : "s") + " of beer";
    }
}```