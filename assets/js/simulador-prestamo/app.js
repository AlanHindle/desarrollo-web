// Esta linea dice que cuando cargue la pagina por complete (el html) entonces ejecutara la funcion "load()"
window.onload = load;

const inputPrestamo = document.getElementById('SimuladorMontoId');
const simuladorOuput = document.getElementById('SimuladorOutputId')
const lblSimuladorOutput = document.getElementById('SimuladorOutputImpPrestamoId')

const simuladorMonto = document.getElementsByName('SimuladorMonto');



//console.log(formatDate(Date.now, 'dd|mm|yyyy'));
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
console.log(formatDate(today))

console.log("14 dias dsp" + addDate(today))
    //SimuladorMonto
    //SimuladorRangeMonto

//SimuladorDias
//SimuladorRangeDias

//tasaCeroRange

//SimuladorTotalDias

//SimuladorTotalMonto

inputPrestamo.oninput = (evt) => {


    simuladorMonto.forEach(x => x.innerText = evt.target.value + " €")
        // alert("Se ejecuto oninput");
        //console.log(evt.target.value + " €");
}


function load() {
    // Busco el boton con id="btn_onboarding" usando document.getElementById("btn_onboarding") y le agrego un evento "click"
    // Entonces cuando se haga click sobre el boton indicado, llamara a la funcion "cotizarNuevoPrestamo"
    document.getElementById("btn_onboarding").addEventListener("click", cotizarNuevoPrestamo);
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