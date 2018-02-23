
## Language Visual J++ ##
---
- Author: Reuben Saunders
- Date: 02/25/08
- Info: http
- Score:  (2.78 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-visual-j++-1702.html
---

```public class EOP99Bottles
{
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
	    }
	    
	}
    }
    
}```