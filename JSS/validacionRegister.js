// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='register']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        Nombre: "required",
        Usuario: "required",
        contraseña1: "required",
        contraseña2: "required",
        confirme: "required",
        email1: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        email2: {
            required: true,
            // Specify that email should be validated
            // by the built-in "email" rule
            email: true
          }

      },

      // Specify validation error messages
      messages: {
        Nombre: "Por favor ingrese su nombre",
        Usuario: "Por favor ingrese un nombre de Usuario", 
        contraseña1:"Por favor ingrese una contraseña",         
        contraseña2:"Por favor repita la contraseña",
        confirme:"Por favor acepte los terminos",    
        email1:  "Por favor ingrese un correo valido",
        email2:  "Por favor repita su correo"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });
