$(document).ready(function() {
    $("#limpiar").click(function() {
        $("#form")[0].reset();
    });
});

$(function() {
    // Clono la fila oculta que tiene los campos base, y la agrega al final de la tabla
    $("#agregar").on('click', function() {
        $("#tabla tbody tr:eq(0)").clone().removeClass('fila-base').appendTo("#tabla tbody");
        console.log("Entro para copiar la fila");
        console.log(1 + 2 + "hola");
        console.log("hola" + 1 + 2);
    });
    // Evento que selecciona la fila y la elimina 
    $(document).on("click", ".eliminar", function() {
        var parent = $(this).parents().get(0);
        $(parent).remove();
        console.log(parent);
    });
});

function AgregarNota() {

    /* var obj = {
         codi:codi = $("#codigo").val(),
         nom:$("#codigo").val(),
         cant:$("#cantidad").val(),
         precio = $("#precio").val(),
     };*/

    var codi = $("#codigo").val();
    var nom = $("#nombre").val();
    var cant = $("#cantidad").val();
    var precio = $("#precio").val();

    var iva = cant * precio;
    var ivaa = iva * 0.16;
    var to = cant * precio;
    var total = ivaa + to;

    console.log("Resultado: \n" + "Código =" + codi + "\n" + "Nombre =" + nom + "\n" + "Cantidad =" + cant + "\n" +
        "Precio =" + precio + "\n" + "Total =$" + total + ".00");

    var new_row = "<tr id='n_row'> <td>" + codi + "</td> <td>" + nom + "</td> <td>" + cant + "</td><td>" + precio + "</td><td>$" + total + ".00 con Iva  </td>";
    $("#tabla_resultados").append(new_row);

    //fata que al guardar agrege todo a la lista de  la nota de ventasgit

    // document.getElementById('registros').reset();
    //   console.log(new_row);
};