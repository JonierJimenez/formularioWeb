/*$(document).ready(function(){
    $("#boton").click(function(){
        alert("hola mundo");
    });
});*/

$(function() {
    agregarUsuario();
    editarUsuario();
    guardarEdicionUsuario();
    eliminar();
});


function agregarUsuario(){

    $('#boton').on('click', function(e) {
        e.preventDefault();

        var no =      $("input[id=no]");
        var nombre =  $("#nombre");
        var estatura =$("input[id=estatura]");
        var edad =    $("#edad");
        var localidad=$("input[id=localidad]");
    
        
        $('#u-tabla').append("<tr>" +
                                    "<td>" + no.val()        + "</td>" +
                                    "<td>" + nombre.val()    + "</td>" +
                                    "<td>" + estatura.val()  + "</td>" +
                                    "<td>" + edad.val()      + "</td>" +
                                    "<td>" + localidad.val() + "</td>" +
                                    
            
            "<td><a href='#' name='edit' class='editar button'>Editar</a>" +
            "<a href='#' class='eliminar button'>Eliminar</a></td>" +
            "</tr>");

    });
}

function editarUsuario() {
    $('#u-tabla').on('click', '.editar', function(e) {
        e.preventDefault();

        var tr =   $(this).closest('tr');
        var tdNo =         tr.children("td:nth-child(1)");
        var tdNombre =     tr.children("td:nth-child(2)");
        var tdEstatura =   tr.children("td:nth-child(3)");
        var tdEdad   =     tr.children("td:nth-child(4)");
        var tdLocalidad =  tr.children("td:nth-child(5)");
        var tdOpciones =   tr.children("td:nth-child(6)");
        

        var vno = tdNo.html();
        tdNo.html("<input type='number' id='txtNo' value='" + vno + "'/>");

        var vnombre = tdNombre.html();
        tdNombre.html("<input type='text' id='txtNombre' " + vnombre +"/>");

        var vestatura = tdEstatura.html();
        tdEstatura.html("<input type='number' id='txtEstatura' value='" + vestatura + "'/>");

        var vedad = tdEdad.html();
        tdEdad.html("<input type='number' id='txtEdad' value='" + vedad +"'/>");

        var vlocalidad = tdLocalidad.html();
        tdLocalidad.html("<input type='text' id='txtLocalidad' " + vlocalidad + "/>");


        tdOpciones.html("<a href='#' class='guardar button'>Guardar</a>" +
                        "<a href='#' class='eliminar button'>Eliminar</a>");
    });
}

function guardarEdicionUsuario() {

    $('#u-tabla').on('click', '.guardar', function(e) {
        e.preventDefault();

        var tr = $(this).closest('tr');
        var tdNo =         tr.children("td:nth-child(1)");
        var tdNombre =     tr.children("td:nth-child(2)");
        var tdEstatura =   tr.children("td:nth-child(3)");
        var tdEdad =       tr.children("td:nth-child(4)");
        var tdLocalidad =  tr.children("td:nth-child(5)");
        var tdOpciones =   tr.children("td:nth-child(6)");

        var nuevoNo = tdNo.children("input[type=number]").val();
        tdNo.html(nuevoNo);

        var nuevoNombre = tdNombre.children("input[type=text]").val();
        tdNombre.html(nuevoNombre);

        var nuevoEstatura = tdEstatura.children("input[type=number]").val();
        tdEstatura.html(nuevoEstatura);

        var nuevoEdad = tdEdad.children("input[type=number]").val();
        tdEdad.html(nuevoEdad);

        var nuevoLocalidad = tdLocalidad.children("input[type=text]").val();
        tdLocalidad.html(nuevoLocalidad);

        tdOpciones.html("<a href='#' class='editar button'>Editar</a>" +
            "<a href='#' class='eliminar button'>Eliminar</a>");
    });
}

function eliminar() {
    $('#u-tabla').on('click', '.eliminar', function(e) {
        e.preventDefault();
        $(this).closest('tr').remove();
    });
}