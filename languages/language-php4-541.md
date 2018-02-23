
## Language PHP4 ##
---
- Author: Samuel Dennler
- Date: 04/20/05
- Info: n/a
- Score:  (2.90 in 31 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-php4-541.html
---

```By Samuel Dennler for PHP4

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0//EN">
<html>
<head>
<title>99 Bottle of beer</title>
<meta name="author" content="Samuel Dennler">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body>

<h1>99 Bottle of beer</h1>

<?php
  for($i=99; $i>=1; $i--){
  $s = $i > 1?"s":"";
  echo "<p>$i Bottle$s of beer on the wall, $i bottle$s of beer.<br>";
  echo "Take one down and pass it around,<br>";
  echo ($i-1)." bottle$s of beer on the wall.</p>\n";
}
?>

<p>No more bottles of beer on the wall.<br>
No more bottles of beer...<br>
<a href="<?php echo $PHP_SELF ?>">Go to the store</a> and buy some more...<br>
99 bottles of beer.</p>

</body>
</html>```