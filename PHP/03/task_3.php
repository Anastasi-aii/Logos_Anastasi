<?php

$str = "aabbrrrsss";

$list = [];

for ($i = 0; $i < strlen($str); $i++) {
    $list[$i] = $str[$i];
}

print_r($list);

$result;



for ($i = 1; $i < strlen($str); $i++) {

    if ($list[$i] == $list[$i--]) {
        $result = $result . '0';
    } else {
        $result = $result . $list[$i];
    }

}



print_r($result);