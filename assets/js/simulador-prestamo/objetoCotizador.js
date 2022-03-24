class Prestamo {
    constructor(solicitudDePrestamo, diaDeDevolucion, interesDelPrestamo) {
        this.solicitudDePrestamo = solicitudDePrestamo
        this.diaDeDevolucion = diaDeDevolucion
        this.interesDelPrestamo = interesDelPrestamo

    }
    cotizarPrestamo() {
        //debugger

        let interesDiarios = (this.interesDelPrestamo * this.solicitudDePrestamo) / 100;
        let totalDeIntereses = interesDiarios * this.diaDeDevolucion;
        let resultado = this.solicitudDePrestamo + totalDeIntereses;
        return parseInt(resultado)
    }
}