$(document).ready(function () { 

    var container = $('.container');
    var search = $('#cerca');

    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);
    //RIchiamo funzione per chaimata ajax al caricamento della pagina
    getData(template, container);

    //Ricerca autore canzoni all' ENTER su input
    search.keyup(function (e) { 
        if (e.keyCode == 13 || e.which == 13) {
            var valore = search.val().trim().toLowerCase();
            
            container.html('');
        
            $.ajax({
                url: 'http://localhost:8888/php-ajax-dischi/partial/template/json-script.php/',
                method: 'GET',
                success: function(res) {
                    for (var i = 0; i < res.length; i++) {
                        var self = res[i];
                        if (self.author.toLowerCase() == valore) {
                            container.html('');
                            
                            var data = {
                                poster: self.poster,
                                titolo: self.name,
                                autore: self.author,
                                anno: self.year,
                            }
                            var html = template(data);
                            container.append(html);
                        } 
                    }
                    valore = search.val('');
                } , 
                error: function() {
                    alert('errore chiamta ajax');
                }
            });//fine chiamata ajax
        }
    });
    //Ritorno alla homepgae iniziale con click su logo spotify
    $('.logo img').click(function () { 
        container.html('');
        
        getData(template, container );
        
    });
});// fine doc ready
/***
 * FUNZIONI
 ***/
function getData(template, container) {
    $.ajax({
        url: 'http://localhost:8888/php-ajax-dischi/partial/template/json-script.php/',
        method: 'GET',
        success: function(res) {
            for (var i = 0; i < res.length; i++) {
                var self = res[i];
                
                var data = {
                    poster: self.poster,
                    titolo: self.name,
                    autore: self.author,
                    anno: self.year,
                }
                var html = template(data);
                container.append(html);
            }
            
        } , 
        error: function() {
            alert('errore chiamata ajax');
        }

    });//fine chiamata ajax
}//FINE FUNZIONE
