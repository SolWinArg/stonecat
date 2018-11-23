$(document).ready(events);

function events() {
	 $("#texto2kg").hide();
	 $("#texto4kg").hide();
	 $("#texto6kg").hide();
    $("#2kg").hover(function(){
    	$("#texto2kg").toggle();
    });
    $("#4kg").hover(function(){
    	$("#texto4kg").toggle();
    });

    
    $("#6kg").hover(function(){
    	$("#texto6kg").toggle();
    });
	$("#cf-submit").click(envioMail);
	$(".hideShow").click(function(){
		$(this).find("p").fadeToggle();
	});
}

function envioMail() {
var email = $("#email").val();
var nombre = $("#nombre").val();
var apellido = $("#apellido").val();
var mensaje = $("#message").val();

$.ajax({
	url:'send.php',
	type:'post',
	data: {email:email,mensaje:mensaje,nombre:nombre,apellido:apellido},
	success : enviar,
	timeout:4000,
	error: error

});
return false;
}

function enviar() {
swal({
  position: 'top-end',
  type: 'success',
  title: 'Tu mail fue enviado correctamente',
  showConfirmButton: false,
  timer: 4500
});
}
function error() {
	swal({
  position: 'top-end',
  type: 'warning',
  title: 'Tu correo no pudo ser enviado intentá de nuevo más tarde.',
  showConfirmButton: false,
  timer: 4500
});
}
