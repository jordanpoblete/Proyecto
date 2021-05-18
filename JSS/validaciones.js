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
        rut: "required",
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
        rut: "Por favor ingrese su rut",
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


  

  function checkRut(rut) {
    // Despejar Puntos
    var valor = rut.value.replace('.','');
    // Despejar Guión
    valor = valor.replace('-','');
    
    // Aislar Cuerpo y Dígito Verificador
    cuerpo = valor.slice(0,-1);
    dv = valor.slice(-1).toUpperCase();
    
    // Formatear RUN
    rut.value = cuerpo + '-'+ dv
    
    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if(cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false;}
    
    // Calcular Dígito Verificador
    suma = 0;
    multiplo = 2;
    
    // Para cada dígito del Cuerpo
    for(i=1;i<=cuerpo.length;i++) {
    
        // Obtener su Producto con el Múltiplo Correspondiente
        index = multiplo * valor.charAt(cuerpo.length - i);
        
        // Sumar al Contador General
        suma = suma + index;
        
        // Consolidar Múltiplo dentro del rango [2,7]
        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
  
    }
    
    // Calcular Dígito Verificador en base al Módulo 11
    dvEsperado = 11 - (suma % 11);
    
    // Casos Especiales (0 y K)
    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;
    
    // Validar que el Cuerpo coincide con su Dígito Verificador
    if(dvEsperado != dv) { rut.setCustomValidity("RUT Inválido"); return false; }
    
    // Si todo sale bien, eliminar errores (decretar que es válido)
    rut.setCustomValidity('');
    
}



  