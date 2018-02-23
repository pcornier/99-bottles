
## Language Java Servlet ##
---
- Author: Gregor Scheithauer
- Date: 05/08/05
- Info: http
- Score:  (3.02 in 63 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-java-servlet-629.html
---

```/**
 * Projekt: gregsINFO
 * Package: utils
 * 
 * @author: Gregor Scheithauer http://www.gregs.info
 * @version: 1.0
 * Description:
 * Java Servlet Version of 99 bottles of Beer on the wall | 2004
 */

package utils;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;

public class BottlesOfBeer extends HttpServlet {

	protected void doGet(
		HttpServletRequest request,
		HttpServletResponse response)
		throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter write = response.getWriter();
		write.println(
			"<html>\n\t<head><title>99 Bottles of Beer</title></head>");
		write.println("\t<body>\n\t\t<h1>99 Bootles of Beer</h1>");

		String s = new String("");
		for (int bottles = 99; bottles > -1; bottles--) {
			s = (bottles == 1) ? "" : "s";
			write.print(bottles + " bottle" + s + " of beer on the Wall, ");
			write.println(bottles + " bottle" + s + " of beer, ");
			write.println("<br/>");
			if (bottles > 0) {
				s = ((bottles - 1) == 1) ? "" : "s";
				write.println("<p>");
				write.print("take one down, pass it around, ");
				write.println(
					(bottles - 1) + " bottle" + s + " of beer on the wall.");
				write.println("</p>");
			} else {
				write.println("<p>");
				write.print("go to the store, buy some more, ");
				write.println("99 bottles of beer on the wall.");
				write.println("</p>");
			}
		}
		write.println("\t</body>");
		write.println("</html>");
	}
}```