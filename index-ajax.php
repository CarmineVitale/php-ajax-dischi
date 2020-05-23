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
    <div class="home">
        <h5 class="no-results"></h5>
    </div>
    <div class="search">
        <input id="cerca" type="text" placeholder="Search">
    </div>

</header>
<div class="container"></div>



<footer>
    <p>Made by Carmine Vitale &copy; - Boolean Student Class 12</p>
</footer>





<!-- Template handlebars -->

<script id="entry-template" type="text/x-handlebars-template">
    <div class="album {{classe}}">
            <div class="poster">
                <img src="{{poster}}" alt="">
            </div>
            <div class="description">
                <div> <span class="title">{{titolo}}</span>  </div>
                <div> <span class="author">{{autore}}</span> </div>
                <div> <span class="year">{{anno}}</span>  </div>
            </div>
    </div>
</script>

<!-- JS -->
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.min.js'></script>
<script src="dist/js/main.js"></script>

</body>
</html>

