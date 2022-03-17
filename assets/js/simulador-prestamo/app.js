function cotizarNuevoPrestamo() {

    solicitudDePrestamo = parseInt(prompt("Ingrese el valor del prestamo"))

    if (solicitudDePrestamo <= 300) {

        diaDeDevolucion = parseInt(prompt("Ingrese cantidad de tiempo a devolver:"))

        if (diaDeDevolucion <= 30) {
            const cotizarNuevoPrestamo = new Prestamo(solicitudDePrestamo, diaDeDevolucion, interesDelPrestamo)

            let res = cotizarNuevoPrestamo.cotizarPrestamo()
            let resPrestamo = solicitudDePrestamo
            let resDiasPrestamo = diaDeDevolucion

            console.log("Intereses " + interesDelPrestamo + " %")
            console.log("Importe del préstamo: " + resPrestamo + " €")
            console.log("Fecha de devolución: " + resDiasPrestamo + " días")
            console.log("Total a devolver: " + res + " €")

        } else {
            console.log("Debe ingresar menos de 30 días")
            cotizarNuevoPrestamo()
        }

    } else {
        console.log("Debe ingresar un monto menor a 300 Euros")
        cotizarNuevoPrestamo()
    }
}