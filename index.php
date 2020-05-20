<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="dist/css/main.css">
</head>
<body>
<?php 
include_once __DIR__ . '/partial/template/data.php';

?>
<h1>album</h1>
<div class="container">
<?php foreach ($cds as $cd) { ?>
        <div class="album">
            <div class="poster">
                <?php echo $cd['poster'] ?>
            </div>
            <div class="description">
                <div class="title"> <?php echo $cd['name'] ?> </div>
                <div class="author"> <?php echo $cd['author'] ?> </div>
                <div class="year"> <?php echo $cd['year'] ?> </div>
            </div>
        </div>
<?php } ?>
</div>
</body>
</html>