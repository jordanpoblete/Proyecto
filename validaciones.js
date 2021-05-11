// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        Nombre: "required",
        Apellidos: "required",
        rutpas: "required",
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
        Apellidos: "Por favor ingrese su apellido",
        rutpas: "Por favor complete este campo",
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
  });

