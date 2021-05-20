$(document).ready(inicioapi)
    console.log("DOM cargado")

    function inicioapi(){
        console.log("Boton traer datos fue clickeado")
        var urlheyhey = 'https://api.artic.edu/api/v1/artworks?page=55&limit=35'
        $.get({
            url: urlheyhey, //DIRECCIÓN SERVER
            success: function(listadopinturas) {
                console.log(listadopinturas)
                var carta=$('#listado')
                carta.empty()

                $.each(listadopinturas.data, function(i, arte){

                    carta.append(
                        agregarpintura(arte.title, arte.image_id, arte.artist_title, arte.classification_title)
                    );
                })
            },
            error: function() {
                console.error("Respuesta con error");
                console.error(error);       
            }
        })
    };

    function agregarpintura(titulo, img, artista, clasificacion){
        var pintura = "<div class='card'>"+
        validafoto(img) + titulo + "'><div class='card-body'>"+
        "<h5 class='card-title'>" + titulo + "</h5>" + 
        "<p class='card-text'>" + validaotro(artista, clasificacion) + "</p></div></div>"
    
        return pintura
    }
    function validafoto(img){
    
        var valido = ""
        if (img == null){
            valido = "<img src='http://www.santiagofoods.cl/Imagenes/nodisponible.png' class='card-img-top' alt='";
        } else {
            valido =  "<img src='https://www.artic.edu/iiif/2/" + img + "/full/400,/0/default.jpg' class='card-img-top' alt='";
        }
        return valido
    }
    function validaotro(artista, clasificacion){
        var validado = "<b>Artista/Procedencia: </b>"+ artista +"<br/><b>Clasificación: </b>" + clasificacion

        return validado
    }