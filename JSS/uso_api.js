$(document).ready(inicioapi)
    console.log("DOM cargado")

    function inicioapi(){
        console.log("Boton traer datos fue clickeado")
        var urlheyhey = 'https://api.artic.edu/api/v1/artworks?page=102&limit=20'
        $.get({
            url: urlheyhey, //DIRECCIÓN SERVER
            success: function(listadopinturas) {
                console.log(listadopinturas)
                var carta=$('#listado')
                carta.empty()

                $.each(listadopinturas.data, function(i, arte){

                    carta.append(
                        agregarpintura(arte.title, arte.image_id, arte.artist_title)
                    );
                })
            },
            error: function() {
                console.error("Respuesta con error");
                console.error(error);       
            }
        })
    };

    function agregarpintura(titulo, img, artista){
        var pintura = "<div class='card'>"+
        "<img src='https://www.artic.edu/iiif/2/" + img + "/full/400,/0/default.jpg' class='card-img-top' alt='" + titulo + "'><div class='card-body'>"+
        "<h5 class='card-title'>" + titulo + "</h5>" + 
        "<p class='card-text'>" + artista + "</p></div></div>"
    
        return pintura
    }