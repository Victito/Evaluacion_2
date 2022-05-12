  $(document).ready(function(){
    $("#error").hide();
    $("#valido").hide();
    $("#valido2").hide();
    $("#valido3").hide();
    $("#valido4").hide();
    

    $("#formulario").submit(function() {
        var mensaje ="";
        var mensaje2 ="";
        var mensaje3 ="";
        var mensaje4 ="";
   
        if($("#descuentopro").val().trim().length == 0  ) {
            mensaje = "Ingrese un % de descuento ";
        }
        if($("#descuentopro").val().trim().length != 0 && $("#descuentopro").val() <= 4 ) {
            mensaje = "Error descuento ingresado incorrecto! Ingrese un numero igual o mayor a 5";
        }

        
        if($("#idproducto").val() != 001 && $("#idproducto").val() != 002 && $("#idproducto").val() != 003 ) {
            mensaje = "Ingrese una id existente ";
        }
        if($("#idproducto").val().trim().length == 0  ) {
            mensaje = "Ingrese una id ";
        }
        
        if($("#idproducto").val() == 1  ) {
            
        }
        
        if($("#preciopro").val().trim().length == 0  ) {
            mensaje = "Ingrese un precio";
        }

        if($("#preciopro").val().trim().length != 0 && $("#preciopro").val() != 2000 && $("#preciopro").val() != 2500 && $("#preciopro").val() != 4000 ) {
            mensaje = "Error precio ingresado incorrecto! Ingrese el monto actual del producto.";
        }
      
         
        
        if($("#np").val().trim().length == 0 && $("#np").val() != "collar" && $("#np").val() != "bandana" && $("#np").val() != "identificador" ) {
            mensaje = "Error! Ingrese un nombre o ingrese el nombre de un producto existente!.";
            $("#valido").hide();
        }
        if($("#np").val() == "collar" || $("#np").val() == "bandana" || $("#np").val() == "identificador" ) {

         $("#valido").show();
          
        }
        if($("#preciopro").val() == 2000 || $("#preciopro").val() == 2500 && $("#preciopro").val() == 4000) {

        
            $("#valido2").show();
             
           }
           if($("#idproducto").val() == 001 || $("#idproducto").val() == 002 || $("#idproducto").val() == 003) {

        
            $("#valido3").show();
             
           }

           if($("#descuentopro").val() >= 5) {
                $("#valido4").show();
           }

           

        if(mensaje != "" ) {
            $("#error").html(mensaje);
            $("#error").show();

            event.preventDefault();
            
        }else {
         alert("Los datos del producto han sido actualizados")
         $("#formulario")[0].reset();
         $("#error").hide();
         $("#valido").hide();
         $("#valido2").hide();
         $("#valido3").hide();
         $("#valido4").hide();
        }
            
            

            
        
              
    });
       
    });




