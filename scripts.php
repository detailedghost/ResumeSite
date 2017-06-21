<?php
    foreach(glob("js/*.js") as $fname){
      echo "<script type='text/javascript' src='".$fname."'></script>";
    }
?>
