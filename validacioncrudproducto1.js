$(document).ready(function(){
    $("#error").hide();
    $("#valido").hide();
    $("#valido2").hide();
    $("#valido3").hide();
    $("#valido4").hide();

    $("#formulario").submit(function() {
        var mensaje ="";

        if($("#categoriapro").val().trim().length == 0 && $("#categoriapro").val() != "Comida" && $("#categoriapro").val() != "comida" && $("#categoriapro").val() != "Juguete" && $("#categoriapro").val() != "juguete" && $("#categoriapro").val() != "Accesorio" && $("#categoriapro").val() != "accesorio" ) {
            mensaje = "Error!. Ingrese una categoria de la lista!."
            
        }

  


        if($("#cantipro").val().trim().length == 0 || $("#cantipro").val() == 0 ) {
            mensaje = "Error!. Ingrese una cantidad para el producto y que sea mayor a 0"
            $("#valido4").hide();
        }

        if($("#cantipro").val() > 0 ) {
            $("#valido4").show();
            
            
        }

        if($("#idpro").val().trim().length == 0 ) {
            mensaje = "Error ingrese una id o ocupe otra id no ocupada!. Ingrese otras (ID OCUPADAS: 001,002,0003)"

        }

        if($("#idpro").val() == 001 || $("#idpro").val() == 002 || $("#idpro").val() == 003   ) {
            mensaje = "Error ingrese una id o ocupe otra id no ocupada!. Ingrese otras (ID OCUPADAS: 001,002,0003)"
            $("#valido3").hide();

        }
        if($("#idpro").val() != 001 && $("#idpro").val() != 002 && $("#idpro").val() != 003 && $("#idpro").val().trim().length != 0  ) {
            $("#valido3").show();

        }
       

        if($("#pr").val() < 2000 ) {
            mensaje = "Porfavor! Ingrese un precio mayor a 1999."
            $("#valido2").hide();

        }
        if($("#pr").val() >= 2000 ) {
            $("#valido2").show();

        }

        if($("#np").val().trim().length <= 3) {
            mensaje = "Porfavor! Ingrese un nombre mayor a 3 caracteres!."
            $("#valido").hide();

        }
        if($("#np").val().trim().length > 3) {
            $("#valido").show();

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
