
## Language Scala ##
---
- Author: D Mackenzie
- Date: 10/02/09
- Info: http
- Score:  (3.00 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-scala-2191.html
---

```import java.awt.{Font, Color, Dimension, Graphics, List => _}
import javax.swing.{JPanel, JFrame, SwingUtilities}
import java.util.{Timer, TimerTask}

object NinetynineBottles {
  abstract class DrawnThing {def draw(gc: Graphics)}

  class Bottle(var x: Int, var y: Int) extends DrawnThing {
    private val r = new java.util.Random()

    def draw(gc: Graphics) {
      gc.setColor(new Color(80,40,20))
      gc.fillRoundRect(x - 12,y - 30,24,60,15,15); gc.fillRoundRect(x - 5,y - 50,10,40,5,5)
      gc.setColor(new Color(0,0,255)); gc.fillRect(x - 6,y - 20,16,28)
    }

    def move(doff: Int) {x = 1160 + (r.nextInt(400) - 200); y = 470 + doff / 2}

    def move(p: (Int, Int)) {x = p._1; y = p._2}
  }

  object Wall extends DrawnThing {
    def draw(gc: Graphics) {
      gc.setColor(new Color(230,120,90)); gc.fillRect(0,300,900,300)
      gc.setColor(new Color(160,160,160)); gc.setClip(0,300,900,300)
      for (h <- -20 to 900 by 36; v <- 300 to 600 by 19; o = v % 2 * 18)
        gc.drawRect(h + o,v,32,16)
      gc.setClip(0,0,1400,600)
    }
  }

  object Lyrics extends DrawnThing {
    val f1 = new Font("Serif", Font.PLAIN, 20)

    def lyric = {
      def qty(n:Int) =
        (n match {case 0 => "no more bottles"
                  case 1 => "1 bottle"
                  case n => n + " bottles"}) + " of beer"

      qty(bc).capitalize + " on the wall, " + qty(bc) + "." +
            (if (bc > 0)
              "\nTake one down and pass it around, \n" + qty(bc - 1) + " on the wall.\n"
             else
              "\nGo to the store and buy some more, \n" + qty(99) + " on the wall.")
    }

    def draw(gc: Graphics) {
      gc.setColor(new Color(100 + bc,200,100 + bc)); gc.fillOval(850,30,550,200)
      gc.fillPolygon(Array(900,940,1020),Array(320,150,180),3)
      gc.setColor(new Color(255,0,0)); gc.setFont(f1)
      List.fromString(lyric, '\n').foldLeft(0){(d,l:String) =>
        gc.drawString(l,900,120 + d); d + 20}
    }
  }

  private var bc = 99
  val timer      = new Timer()
  val bottles    = (for {bi <- 0 until bc
                         (x,y) = stacker(bi,34,0,0)} yield new Bottle(x,y)).toList
  val things     = Wall :: bottles ::: List(Lyrics)
  val top        = new JFrame {
         setPreferredSize(new Dimension(1400,600))
         setTitle("99 Bottles of Beer")
         getContentPane.add(new JPanel{
           override def paintComponent(gc: Graphics) {things.foreach(_.draw(gc))}})
       }

  def stacker(ind: Int, lrc: Int, lri: Int, rh: Int):(Int, Int) = {
    if ((ind - lri) < lrc) (25 + rh * 12 + 25 * (ind - lri),270 - rh * 78)
    else stacker(ind,lrc - 1,lri + lrc,rh + 1)
  }

  def main(args: Array[String]) {
    def moveEmpties {bottles.drop(bc).head.move(bc)}

    def swingRequest(req: => Unit) {SwingUtilities.invokeLater(new Runnable{def run{req}})}

    swingRequest{top.pack(); top.setVisible(true)}
    timer.schedule(new TimerTask{
      def run {
        if (bc > 0) {bc -= 1; moveEmpties; swingRequest{top.repaint()}}
        else {
          bottles.foldLeft(0){(d, b) => b move stacker(d,34,0,0); d+1}
          Thread.sleep(4000); swingRequest{top.repaint()}; timer.cancel()
        }}}, 2000, 1500)
  }
}```