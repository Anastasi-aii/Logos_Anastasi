<?php
$list = [0, 1, 2, 2, 1];
$result = 'true';

foreach ($list as $elem) {
    if ($elem > 10) $result = 'false'; 
}
print_r($result);