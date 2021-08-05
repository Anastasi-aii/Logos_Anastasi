<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php 
$number = 1;
echo gettype($number), "\n";
$number = $number / ($number + 1);
echo $number, "\n"; //0.5 не целое число

$fraction = &$number;

$number = 4;
$fraction = 2;

echo $number, "\n"; // получилось 2 так как переменная $fraction является синонимом переменной $number и у них может быть только одно и то же общее значение которое мы задали последним


$value="number";
$$value = 7;
echo $$value, "\n"; //второй символ $ говорит, что надо взять не значение самой $p, а значение переменной, имя которой хранится в переменной $p.

unset($number);
echo $number; //ошибка так как переменная $number удалена и ее не существует

?>
</body>
</html>

