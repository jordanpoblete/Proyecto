// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='Solicitud']").validate({
      // Specify validation rules
      rules: 
    {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        
        correo: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },

        descripcion: { 
        required: true,
        minlength: 20,
        maxlength:500
        }

    },

      // Specify validation error messages
      messages: {
        
        descripcion: {
          required: "Por favor ingrese una descripcion",
          minlength: "La descripcion debe tener minimo 20 caracteres",
          maxlength: "La descripcion debe tener maximo 500 caracteres"
          
        },
        correo: "Por favor ingrese un correo valido"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });

