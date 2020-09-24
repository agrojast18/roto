//////7Declaracion de Variables
/* <form >
        <input type="text" id="numero1">
        <input type="text" id="numero2">
        <input type="button" value="Sumar" onclick="alert(suma(10,50));">
    </form>

    <form>
        <input type="text" id="resta1">
        <input type="text" id="resta2">
        <input type="button" value="resta" onclick="alert(resta(10,15));">
    </form>


    <form>
        <input type="text" id="multi1">
        <input type="text" id="multi2"></input>
        <input type="button" value="Multiplicar" onclick="alert(multiplicar(10,20));">
        </input>
    </form>

    <form>
        <input type="text" id="div1">
        <input type="text" id="div2">
        <input type="button" value="Dividir" onclick="alert(dividir(10,30));">
    </form>


    <div>
        <ol id="lista"> <!--Viñetas enumeradas-->
            <li>Amor</li>
            <li>Erick</li>
        </ol>
    </div>

    <form>
        <input type="button" value="Cambio de Tamaño" onclick="zoom();">
    </form>

    <img id="thumb" class="thumb" src="images/giro.png" width="400">

    <form action="" name="formulario" method="get">
        <input type="text" name="nombre" id="nombre" placeholder="Nombre:">
        <br>
        <input type="radio" name="sexo" id="hombre" value="Masculino">Hombre
        <input type="radio" name="sexo" id="mujer" value="Femenino">Mujer
        <br>
        <input type="checkbox" name="terminos" id="terminos">Terminos y Condiciones
        <br>
        <input type="submit" id="submit" name="submit" value="Enviar">
    </form>

*/
var nombre;
nombre = prompt("Ingrese su nombre");
edad = prompt("Ingrese su edad");
document.write(nombre + edad);



///////////ARREGLOS /////////

var amigos = ["juan", "sara"];
document.write(amigos[1]);
document.write( "tienes" + amigos.length + "amigos" );


/////Ciclo for////////77
var nombre = prompt("Ingrese su nombre"),
	edad = 19;


for (i = 1; i <= 12; i++){
	document.write(i + "<br>");
}


var familia = ["Juan", "Sara", "Clara", "Sandro", "David", "Angela"];

for(i=0; i<= familia.length - 1; i++){
	document.write(familia[i] + "<br>");
}

//la mayoria del tiempo deben devolver valores
/////funciones/////

function tutu(nombre2){

	var nombre1 = nombre2;
	return nombre1;

}

document.write( tutu("Juan") ); 

///////7Condiciona/////////
function numeromaximo(numero1, numero2){
	var numero1 = numero1;
	var numero2 = numero2;

	if(numero1 > numero2 ){
		return numero1;
	}
		return numero2;
}

document.write(numeromaximo(10, 2));

alert(numeromaximo(2,3));

//////Calculadora///////////

var suma = function (numero1, numero2){
	var numero1 = parseFloat(document.getElementById("numero1").value);
	var numero2 = parseFloat(document.getElementById("numero2").value);

	var resultado = numero1 + numero2;
	return resultado;
}

var resta = function(numero1, numero2){
	var numero1 = document.getElementById("resta1").value;
	var numero2 = document.getElementById("resta2").value;

	var resultado = numero1 - numero2;
	return resultado;
}

var multiplicar = function(numero1, numero2){
	var numero1 = document.getElementById("multi1").value;
	var numero2 = document.getElementById("multi2").value;

	var resultado = numero1*numero2;
	return resultado;
}

var dividir = function(numero1, numero2){
	var numero1 = document.getElementById("div1").value;
	var numero2 = document.getElementById("div2").value;

	var resultado = numero1 / numero2;
	return resultado;
}

var texto = "Angela Gisela Rojas";
var nuevotexto = texto.length;

document.write(nuevotexto);

////////////DOM////////////////////////////////////////////


var elemento = document.createElement("li"),
	contenido = document.createTextNode("Nuevo Texto");

elemento.appendChild(contenido);


var padre = document.getElementsByTagName("li")[0].parentNode;
//padre.appendChild(elemento);
var hijo = document.getElementsByTagName("li")[0];
padre.insertBefore(elemento,hijo);

///////Imagen Zoom///////////////7777

var zoom = function(){
	var thumb = document.getElementById("thumb");

	
		if(thumb.className == "thumb"){
			thumb.className = "thumb grande";
		}else{
			thumb.className = "thumb";
		}
	
}

////////////////Formulario sencillo/////////////////

	////////Declaracion de variables en JS///////
	var formulario = document.getElementsByName("formulario")[0], //porque si son varios
	// formularios en el Documento entonces toca hacerlo por posicion, en este caso la 0
		elementos  = formulario.elements, // como ya tenemos la variable forumlario entonces se 
		//le agrega elements para tener todos los elementos del formulario
		boton = document.getElementById("submit");//envio de datos 

		validarNombre = function(e){
			if(formulario.nombre.value == 0){
				alert("Completa el campo nombre");
				e.preventDefault(); //deja que no se actualice con cada cambio que se haga
			}
		}

		validarSexo = function(e){
			if(formulario.sexo[0].checked == true || formulario.sexo[1].checked == true){

			}else{
				alert("Completa el campo sexo")
				e.preventDefault(e);
			}
		}

		ValidarCondiciones = function(e){
			if(formulario.terminos.checked == true){

			}else{
				alert("Completa el campo de terminos y condiciones");
				e.preventDefault(e);
			}
		}


// 2° va a ejecutar todas las funciones osea va a ser la que llame el resto
//ejecutara más funciones
		var validar = function(e){ //parametro e E
			validarNombre(e);
			validarSexo(e);
			ValidarCondiciones(e);
		};

/// 1° Queremos leer un elemento que es de tipo event listener que qioere ser
//escuchado y de tipo submit osea que mandará los datos con la funcion validar
	formulario.addEventListener("submit", validar); //Aqui se envia la funcion validar al boton

//Aqui es escuchado el boton para llamar todo!!!!!!!!


.thumb{
  width: 200px;
  transition: 300ms all ease;
}

.grande{
  width: 400px;
}