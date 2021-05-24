// Wait for the DOM to be ready
$(function() {
  

  $("#rut").hide();
  $("#pasaporte1").hide();
  $("#rut2").hide();
  $("#pasaporte2").hide();

  $("#Rut").click(function(){
    $("#rut").show(),
    $("#rut2").show(),
    $("#pasaporte2").hide(),
    $("#pasaporte1").hide();
  });
  $("#Pasaporte").click(function(){
    $("#pasaporte1").show(),
    $("#pasaporte2").show(),
    $("#rut").hide(),
    $("#rut2").hide();
  });

    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        rut: {
          required: true,
          validRut: true
        },
        pasaporte1: {
          required: true,
          minlength: 9},
        Nombre: "required",
        Apellidos: "required",
        Ciudad: "required",
        correo: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
                
        Num: {
          required: true,
          minlength: 9,
          digits: true
        },
        rad: { // <- NAME of every radio in the same group
            required: true
        }

      },

      // Specify validation error messages
      messages: {
        Nombre: "Por favor ingrese su nombre",
        rad: "Seleccione una",
        pasaporte1: {
          required: "Por favor ingrese su pasaporte",
          minlegth: "Ingrese al menos 9 numeros"},
        Apellidos: "Por favor ingrese su apellido",
        rut: {
          required: "Por favor ingrese su rut"},
        Ciudad: "Por favor indique su direccion",
        Num: {
          required: "Por favor ingrese su numero",
          minlength: "El numero debe tener un minimo de 9 digitos",
          digits: "Por favor ingrese solo numeros"
        },
        
        correo:  "Por favor ingrese un correo valido"
      },     
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }     
    });

    checkRut(document.getElementById("rut"))

  });




  function checkRut(rut) {
    rut = String(rut);
    var valor = rut.replace(".", "").replace(".", "");
    valor = valor.replace("-", "");
    cuerpo = valor.slice(0, -1);
    dv = valor.slice(-1).toUpperCase();
    rut = cuerpo + "-" + dv;
    if (cuerpo.length < 7) {
      return false;
    }
    suma = 0;
    multiplo = 2;
    for (i = 1; i <= cuerpo.length; i++) {
      index = multiplo * valor.charAt(cuerpo.length - i);
      suma = suma + index;
      if (multiplo < 7) {
        multiplo = multiplo + 1;
      } else {
        multiplo = 2;
      }
    }
    dvEsperado = 11 - suma % 11;
    dv = dv == "K" ? 10 : dv;
    dv = dv == 0 ? 11 : dv;
    if (dvEsperado != dv) {
      return false;
    }
    return true;
  }
  
  $.validator.addMethod("validRut", function(value, element) {
        return checkRut(value);
      }, "Debes ingresar un rut válido");
  
  



  