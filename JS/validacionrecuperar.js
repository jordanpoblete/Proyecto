// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='recuperar']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        contraseña1: "required",
        contraseña2: "required",
        correo1: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        }

      },

      // Specify validation error messages
      messages: {
        contraseña1:"Por favor ingrese una contraseña",         
        contraseña2:"Por favor repita la contraseña",  
        correo1:  "Por favor ingrese un correo valido"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });
