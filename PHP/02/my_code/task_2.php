<?php
$str = 'dfghjk';
$ls = list(0, 1, 1, 2);

if (strlen($str) >= 1) {
    for($i = 1; $i < strlen($str); $i++) {
        echo $str[$i];
    } 
} else {
    return $str[0];
}

   