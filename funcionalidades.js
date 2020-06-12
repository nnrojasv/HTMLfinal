
//pagina 4 
$(document).ready(function () {
$(document).ready(function() {
  $("#tablaregistro").DataTable();
} );

$(document).ready(function() {
  $("#misregistros").DataTable();
} );

$(document).ready(function() {
  $("#todoregistro").DataTable();
} );


  $(function () {
    $("#tabs").tabs();
  });//agrega pestañas para tablas



  $("#dialog").dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "explode",
      duration: 1000
    }
  });
  var N = 1
  $("#nuevaentrada").on("click", function () {
    N = N+1;
    var nombre = $('input:text[name=nuevonombre]').val();
    var fecha = document.getElementById("nuevafecha").value ;
    var hora = document.getElementById("nuevahora").value;
    var lugar = $('input:text[name=nuevolugar]').val();
    var cant =document.getElementById("nuevacant").value;
   
    $("#dialog").dialog("open");
    
    var nuevafila = "<tr> <td>" + N + "</td> <td>" + nombre + "</td> <td>" + fecha + "</td> <td>" + hora + "</td> <td>" + lugar + "</td> <td>" + cant + "</tr> </tr>";


    $("#tablaregistro").append(nuevafila);
    $("#misregistros").append(nuevafila);
    $("#todoregistro").append(nuevafila);
  });//muestra mensaje para iniciar sesion y agrega registro a tablas

//pagina 4 hasta aqui

//pagina 2
$( function() {
  $( "#accordion" ).accordion();
} );

// pagina 2 hasta aqui

})
