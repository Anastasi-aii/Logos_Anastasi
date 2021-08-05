<?php
$list = [0, 1, 2, 2];

$result;

foreach ($list as $elem) {
    $result = $result + $elem; 
}

if ($result % 2 == 0) {
    print_r('even');
} else {
    print_r('odd');
}



// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"