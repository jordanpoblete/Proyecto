$(document).ready(function(){
    console.log("DOM cargado")

    $('#api1').click(function(){
        console.log("Boton traer datos fue clickeado")
        var urlheyhey = 'https://api.artic.edu/api/v1/artworks'
        $.get({
            url: urlheyhey, //DIRECCIÓN SERVER
            success: function(listadopinturas) {
                console.log(listadopinturas)
                var tabla=$('#tabla-cat-comida tbody')
                tabla.empty()

                $.each(listadopinturas.data, function(i, pintura){

                    tabla.append("<tr><td>" + pintura.place_of_origin + "</td><td>" + 
                    pintura.artist_title +"</td><td>" + 
                    "<img src=https://www.artic.edu/iiif/2/" + pintura.image_id + "/full/200,/0/default.jpg /></td><td>" + 
                    pintura.title + "</td></tr>");
                })
            },
            error: function() {
                console.error("Respuesta con error");
                console.error(error);       
            }
        });
    });
});