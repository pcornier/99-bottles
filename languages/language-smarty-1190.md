
## Language Smarty ##
---
- Author: martin mauchauffee
- Date: 06/22/06
- Info: http
- Score:  (2.38 in 950 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-smarty-1190.html
---

```<?php

/**
 * 99 Bottles of Beer - Smarty version - with php and html
 *
 * @author Martin Mauchauff�e
 * @package 99_Bottles_of_Beer
 * @subpackage Smarty
 * @version 1
 */

error_reporting( E_ALL ^ E_NOTICE );

/**
 * Need the smarty application installed in the same directory of the script.
 *
 * <pre>
 * - index.php // this file
 * - Smarty.class.php // the smarty main class
 * - Smarty_Compiler.class.php // the smarty compile class
 * - debug.tpl // the debug smarty template
 * - Config_File.class.php // the smarty configuration config class
 * - internals // the internal smarty php scripts directory
 * - plugins // the smarty plugins directory
 * </pre>
 */
include( 'Smarty.class.php' );

/*#@+
 * @param string $template The template name.
 * @param smarty $smarty A reference to an instance of the smart class.
 */

/**
 * Return the timestamp of a template.
 *
 * A the return, $timestamp parameter will contain the unix timestamp of the
 * template.
 *
 * @param integer $timestamp The unix timestamp.
 * @return true.
 */
function get_timestamp( $template, &$timestamp, &$smarty )
{
  $timestamp = time();
  return true;
}

/**
 * Return if a template a secure.
 *
 * @return true.
 */
function get_secure( $template, &$smarty )
{
  return true;
}

/**
 * Return if a template a secure.
 */
function get_trusted( $template, &$smarty )
{
}

/**
 * Return a template.
 *
 * A the return, $source parameter will contain the source og the template.
 *
 * @param string $source The source.
 * @return true If the template exists.
 */
function get_template( $template, &$source, &$smarty )
{
  switch( $template )
  {
  case '99 bottles of beer.tpl' :
      $source = <<<HTML
<html>
<head>
  <title>99 bottles of beer</title>
</head>
<body>
{*smarty*}
{assign var=end value=#take#}
{assign var=last value=-1}
{foreach from=\$wall item=bottle}
  {if \$last neq -1}
<p>
  {if \$last eq 0}
    {assign var=last value=#no#}
    {assign var=end value=#store#}
  {/if}
  {\$last|pluriel:#bottle#:#pluriel#|string_format:#wall#}
  <br>
  {\$last|pluriel:#bottle#:#pluriel#|string_format:#beer#}
  <br>
  {\$end|nl2br}
  {if \$bottle eq 0}
    {assign var=bottle value=#no#}
  {/if}
  <br>
  {\$bottle|pluriel:#bottle#:#pluriel#|string_format:#wallend#}
</p>
  {/if}
  {assign var=last value=\$bottle}
{/foreach}
</body>
</html>
HTML;
    return true;
    break;
  }
}

/**#@-*/

/**
 * The song class
 */
class smarty_wall_song extends smarty
{

  /**
   * Directly add an entry to the configuration.
   *
   * @param string The var name.
   * @param mixed The value.
   */
  function add_config( $var, $value )
  {
    if( is_string($var) )
      $this->_config[0]['vars'][$var] = $value;
    else
      $this->trigger_error( "smarty_wall_song::add_config() need a stringh for is first parameter.",
E_USER_ERROR );
  }

}

/**
 * Smarty modifier to add a pluriel of a text.
 *
 * @param integer The number of things.
 * @param string The formated text, need to have 2 '%s' used with the sprintf() php instruction.
 * @param string The pluriel.
 */
function print_pluriel( $number = 1, $format = '%s', $pluriel = 's' )
{
  if( $number > 1 )
    return sprintf( $format, $number, $pluriel );
  else
    return sprintf( $format, $number, '' );
}

// create smarty object
$smarty = new smarty_wall_song();
$smarty->cache = true;
$smarty->compile_dir = './';
$smarty->cache_dir = './';

// register the mofidier
$smarty->register_modifier( 'pluriel', 'print_pluriel' );

// register the templates external database
$smarty->register_resource( 'direct',
  array( 'get_template', 'get_timestamp', 'get_secure', 'get_trusted' ) );

// add the counter of bottles
$smarty->assign( 'wall', array_merge(range(99,0),array(99)) );

// add some texte
$smarty->add_config( 'pluriel', 's' );
$smarty->add_config( 'no', 'No' );
$smarty->add_config( 'store', 'Go to the store, buy some more,' );
$smarty->add_config( 'bottle', '%s bottle%s' );
$smarty->add_config( 'wall', '%s of beer on the wall,' );
$smarty->add_config( 'wallend', '%s of beer on the wall.' );
$smarty->add_config( 'beer', '%s of beer.' );
$smarty->add_config( 'take', 'Take one down, pass it around,' );

// execute the smarty template and send the html
$smarty->display( 'direct:99 bottles of beer.tpl' );

// clear the php smarty cache
//$smarty->clear_compiled_tpl('direct:99 bottles of beer.tpl');

// vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 fileformat=unix foldmethod=marker
?>```