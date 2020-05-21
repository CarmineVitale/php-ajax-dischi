<?php include_once __DIR__ . '/partial/template/data.php'; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="dist/css/main.css">
</head>
<body>

<header>
    <div class="logo">
        <img src="dist/img/spotify-logo.png" alt="">
        <h1>Spotify</h1>
    </div>

</header>
<div class="container">
<?php foreach ($cds as $cd) { ?>
        <div class="album">
            <div class="poster">
                <img src="<?php echo $cd['poster'] ?>" alt="">
            </div>
            <div class="description">
                <div> <span class="title"><?php echo $cd['name'] ?></span>  </div>
                <div> <span class="author"><?php echo $cd['author'] ?></span> </div>
                <div> <span class="year"><?php echo $cd['year'] ?></span>  </div>
            </div>
        </div>
<?php } ?>
</div>
<footer>
    <p>Made by Carmine Vitale &copy; - Boolean Student Class 12</p>
</footer>
</body>
</html>