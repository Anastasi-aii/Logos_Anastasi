<form action="warnings.php">
  <input type="submit" name="doGo" value="Click">
</form>

<?php
if (@$_REQUEST['doGo']) echo 'Вы нажали кнопку';
?>

<p>Противопоказания к использованию:</p>
<ul>
  <li>Перед директивой include</li>
  <li>Перед вызовом собственных функций (не встроенных в PHP)</li>
  <li>Перед функцией eval()</li>
</ul>