<?php
foreach ($_POST as $key=>$value){
   $content .= '<strong>'.$key.'</strong>: '.$value.'<br>';
}
mail('ejmora7@gmail.com','Contact from your portfolio site!',$content,"Content-type: text/html");
echo $content;

?>