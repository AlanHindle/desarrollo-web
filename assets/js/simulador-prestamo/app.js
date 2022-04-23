// Esta linea dice que cuando cargue la pagina por complete (el html) entonces ejecutara la funcion "load()"
window.onload = load;

const inputPrestamo = document.getElementById('SimuladorMontoId');
const simuladorOuput = document.getElementById('SimuladorOutputId')
const lblSimuladorOutput = document.getElementById('SimuladorOutputImpPrestamoId')
const lblDias = document.getElementById('simuladorDias');
const inputDias = document.getElementById('simuladorRangeDias');
const simuladorMonto = document.getElementsByName('SimuladorMonto');
const lblFechaDevolucion = document.getElementById('simuladorTotalDias');
const lblSimuladorTotalMonto = document.getElementById('simuladorTotalMonto');
const inputSimuladorMonto = document.getElementById('SimuladorMontoId');
const flexSwitchCheckChecked = document.getElementById('flexSwitchCheckChecked');
const dolarhoy = document.getElementById('dolarhoy');
let objCotizacion = {};

//const apiOficial = 'https://api-dolar-argentina.herokuapp.com';

//Pruebas con fechas
//console.log(formatDate(Date.now, 'dd|mm|yyyy'));
//const timeElapsed = Date.now();
//const today = new Date(timeElapsed);
//console.log(formatDate(today))

//console.log("14 dias dsp" + addDate(today))


//SimuladorMonto
//SimuladorRangeMonto

//SimuladorDias
//SimuladorRangeDias

//tasaCeroRange

//SimuladorTotalDias

//SimuladorTotalMonto

//lblDias.addEventListener("oninput", (evt) => {});

// Librería https://profile.es/blog/librerias-javascript/
// AJAX -> API Dolares ??? API KEY SECRET KEY



function actualizarPrestamo() {


    let interesDiarios = (interesDelPrestamo * parseInt(inputSimuladorMonto.value) / 100);

    let totalDeIntereses = interesDiarios * parseInt(lblDias.innerText);
    let resultadoPrestamo = parseInt(inputSimuladorMonto.value) + totalDeIntereses;
    //return parseInt(resultado)
    lblSimuladorTotalMonto.innerText = resultadoPrestamo.toFixed() + " €";



}


inputDias.oninput = (evt) => {

    //console.log(evt);
    //const timeElapsed = Date.now();
    //const today = new Date(timeElapsed);
    //console.log(today);
    lblDias.innerText = evt.target.value + " d";
    let cantidadDias = parseInt(evt.target.value); //este value va ser un string
    let fecha = addDate(cantidadDias);
    lblFechaDevolucion.innerText = fecha;
    actualizarPrestamo();
}

inputPrestamo.oninput = (evt) => {


    simuladorMonto.forEach(x => x.innerText = evt.target.value + " €");
    actualizarPrestamo();

    // alert("Se ejecuto oninput");
    //console.log(evt.target.value + " €");
}


flexSwitchCheckChecked.onchange = (evt) => {

    if (flexSwitchCheckChecked.checked) {
        // console.log("esta activo")

        const txtdolar = 'Esta es la cotización del dolar hoy'

        dolarhoy.innerHTML = "";
        let element = document.createElement('p');
        element.innerText = txtdolar + ' ' + objCotizacion.blueventa;
        dolarhoy.appendChild(element);

        lblSimuladorTotalMonto.innerText = (parseInt(lblSimuladorTotalMonto.value) / parseInt(objCotizacion.blueventa)).toFixed() + " U$D";

    } else {
        // console.log("esta desactivo")
        lblSimuladorTotalMonto.innerText = inputSimuladorMonto.value + " ARS";
        dolarhoy.innerHTML = "";
    }

    //alert("Cambio desde JS");
    /* let header = new Headers();
     header.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5503/');
     header.append('Access-Control-Allow-Credentials', 'true');
     header.append('Content-type', 'application/json');

     let dolarDesdeApi = fetch("https://justcors.com/tl_068356f/https://api-dolar-argentina.herokuapp.com/api/dolarblue", {
         method: 'GET',
         headers: header,
         mode: 'no-cors'
     }).then(response => console.log(response.json()));
     */
    /* let dolarDesdeApi = fetch(apiOficial + "/api/dolarblue").then(x => console.log(x.json));
    console.log(dolarDesdeApi);*/
}



/* function sendRequest(url, method, body) {
    const options = {
        method: method,
        headers: new Headers({ 'content-type': 'application/json' }),
        mode: 'no-cors'
    };

    if (body) {
        options.body = JSON.stringify(body);
    }
    return fetch(url, options);

} */

async function load() {
    // Busco el boton con id="btn_onboarding" usando document.getElementById("btn_onboarding") y le agrego un evento "click"
    // Entonces cuando se haga click sobre el boton indicado, llamara a la funcion "cotizarNuevoPrestamo"

    let prueba = await fetch('./assets/js/dolar.json');
    objCotizacion = await prueba.json();

    console.log(objCotizacion);

    /* const txtdolar = 'Esta es la cotización del dolar hoy'

    let element = document.createElement('p');
    element.innerText = txtdolar + ' ' + objCotizacion.blueventa;
    dolarhoy.appendChild(element);
*/

    //console.log(prueba.then((res) => res.json()).then(data => console.log(data)));

    document.getElementById("btn_onboarding").addEventListener("click", cotizarNuevoPrestamo);

    let fechaInicioPrestamo = addDate(5);
    lblFechaDevolucion.innerText = fechaInicioPrestamo;
    lblSimuladorTotalMonto.innerText = inputSimuladorMonto.value + " €";

}

function cotizarNuevoPrestamo() {

    // Comento esta linea, puesto que ahora usare el input range del monto. Lo buscamos por su id "SimuladorMontoId"
    //solicitudDePrestamo = parseInt(prompt("Ingrese el valor del prestamo"))
    solicitudDePrestamo = parseInt(document.getElementById("SimuladorMontoId").value); // La propiedad "value" me devuelve el valor actual del elemento input. 

    if (solicitudDePrestamo <= 300) {
        // Al igual que con el monto, busco el valor de los dias del input range mediante su id "SimuladorDiasId"
        diaDeDevolucion = parseInt(document.getElementById("SimuladorDiasId").value);

        if (diaDeDevolucion <= 30) {
            const cotizarNuevoPrestamo = new Prestamo(solicitudDePrestamo, diaDeDevolucion, interesDelPrestamo)

            let res = cotizarNuevoPrestamo.cotizarPrestamo()
            let resPrestamo = solicitudDePrestamo
            let resDiasPrestamo = diaDeDevolucion

            console.log("Intereses " + interesDelPrestamo + " %")
            console.log("Importe del préstamo: " + resPrestamo + " €")
            console.log("Fecha de devolución: " + resDiasPrestamo + " días")
            console.log("Total a devolver: " + res + " €")

            // Con document.getElementById("...") obtengo ahora los elemento a los que le voy a añadir texto, al igual que en el console.log
            // La propiedad "innerText" me permite escribir texto dentro de las etiquetas del elemento.
            document.getElementById("pInteresesId").innerText = interesDelPrestamo.toString() + " %";
            document.getElementById("SimuladorOutputImpPrestamoId").innerText = resPrestamo.toString() + " €";
            document.getElementById("SimuladorOutputFechaDevId").innerText = resDiasPrestamo.toString() + " días";
            document.getElementById("SimuladorOutputTotalDevId").innerText = res.toString() + " €";

        } else {
            console.log("Debe ingresar menos de 30 días")
            alert("Debe ingresar menos de 30 días"); // Te recomiendo usar un modal de bootstrap para que quede mas atractivo. Le puse alert para hacerlo rapido.

            // Se comenta el volver a llamar la funcion, puesto que ahora la funcion se llamaria cada vez que el usuario le de click al boton btn_onboarding
            // Si no se comenta esta recursividad, entonces habria un bucle infinto, puesto que ya no hay una espera de los valores de monto y dia, ya que estos los saca
            // de los elementos "input range"
            //cotizarNuevoPrestamo()
        }

    } else {
        console.log("Debe ingresar un monto menor a 300 Euros")
        alert("Debe ingresar un monto menor a 300 Euros"); // Te recomiendo usar un modal de bootstrap para que quede mas atractivo. Le puse alert para hacerlo rapido.

        // Se comenta el volver a llamar la funcion, puesto que ahora la funcion se llamaria cada vez que el usuario le de click al boton btn_onboarding
        // Si no se comenta esta recursividad, entonces habria un bucle infinto, puesto que ya no hay una espera de los valores de monto y dia, ya que estos los saca
        // de los elementos "input range"
        //cotizarNuevoPrestamo()
    }
}