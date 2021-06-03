<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="style.css" rel="stylesheet">
</head>
<body>
    <div class="block2" id="second-content">
        <div id="avatar" class=<?= $_REQUEST['gender'] ?>></div> 

        <h2 id='user'><?= $_REQUEST ['first-name']. "\n".$_REQUEST['second-name']?></h2>

        <a href="#" id="user-email"><?= $_REQUEST ['email']?></a>

        <span id="post"><?= $_REQUEST ['post']?></span>

        <button id="sign-out"><a src="index.html">Sign Out</button>

        <footer class="footer">
            <img src="./img/facebook.png" class="social-media-icon">
            <img src="./img/instagram.png" class="social-media-icon">
            <img src="./img/whatsApp.png" class="social-media-icon">
        </footer>
    </div>
</body>
</html>



