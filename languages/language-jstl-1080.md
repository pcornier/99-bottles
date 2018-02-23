
## Language JSTL ##
---
- Author: Dave Johnston
- Date: 03/07/06
- Info: http
- Score:  (3.01 in 116 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-jstl-1080.html
---

```<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> 

<c:set var="n" value="99"/>
<html>
<head>
<title><c:out value="${n}"/> Bottles of Beer</title>
</head>
<body>
<c:set var="a" value=" of beer on the wall"/>
<c:set var="c" value=" of beer"/>
<c:set var="d" value="Take one down, pass it around"/>
<c:set var="e" value="."/>
<c:forEach var="i" begin="0" end="${n}" step="1">
  <c:set var="j" value="${n-i}"/>
  <c:choose>
    <c:when test="${j eq 0}">
      <c:set var="b"  scope="session" value="No more bottles"/>
      <c:set var="z"  scope="session" value="${n} bottles"/>
      <c:set var="d" value="Go to the store, buy some more"/>
      <c:set var="e" value="!"/>
    </c:when>
    <c:when test="${j eq 1}">
      <c:set var="b" scope="session" value="${j} bottle"/>
      <c:set var="z"  scope="session" value="No more bottles"/>
    </c:when>
    <c:when test="${j eq 2}">
      <c:set var="b" scope="session" value="${j} bottles"/>
      <c:set var="z"  scope="session" value="${j-1} bottle"/>
    </c:when>
    <c:otherwise>
      <c:set var="b" scope="session" value="${j} bottles"/>
      <c:set var="z"  scope="session" value="${j-1} bottles"/>
    </c:otherwise>
  </c:choose>
  <c:out value="${b}${a}, ${b}${c},"/><br>
  <c:out value="${d}, ${z} ${a}${e}"/><br><br>
</c:forEach>
</body>
</html>```