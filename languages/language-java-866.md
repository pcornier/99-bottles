
## Language Java ##
---
- Author: Jarek Ratajski
- Date: 09/08/05
- Info: http
- Score:  (3.02 in 200 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-java-866.html
---

```/**
 * 99 Bottles in Java - Exception Oriented Programming :-)
 * This program abuses concept of exceptions. 
 * notice: it does not use any loops (for, while) or if statements
 *
 * use java 1.4 or newer
 * @author Jarek Ratajski 
 */
public class EOP99Bottles
{
    /**
     * this main method is very simple - 
     * only throws exception and prints stack trace
     * would You suspect it is 99 bottles program ? :-) 
     */
    public static void main(String[] args)
    {
	try
	{
	    throw new BottleException(1, null);
	}
	catch (Exception e)
	{
	    e.printStackTrace();
	}
    }
    
    private static class BottleException extends Exception
    {
	private final int cnt;
	/** 
	 * notice beauty of this signature: object that may throw exception of 
	 * its own type during its creation !!!
	 */
	public BottleException(int i, BottleException c)
	throws BottleException
	{
	    super(c);
	    this.cnt = i;
	    try
	    {
		int a  = 03 / (99-i);
		throw new BottleException(i+1, this);
	    }
	    catch (ArithmeticException e)
	    {
		//deliberately
	    }
	}
	
	public  void printStackTrace()
	{
	    System.out.println(cnt+" Bottle(s) of beer on the wall,"+cnt+"bottle(s) of beer");
	    System.out.println("Take one down and pass it around,");
	    System.out.println((cnt-1)+" bottle(s) of beer on the wall");
	    try
	    {
		getCause().printStackTrace();
	    }
	    catch (NullPointerException npe)
	    {
		//deliberately
	    }
	    
	}
    }
    
}```