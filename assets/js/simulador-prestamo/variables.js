let solicitudDePrestamo = 0
let diaDeDevolucion = 0
const interesDelPrestamo = 20

/* function formatDate(date, format) {
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        YYYY: date.getFullYear()
    }

    return format.replace(/mm|dd|YYYY/gi, matched => map[matched])
} */


/* function formatDate() {
    return moment(new Date()).format("DD/MM/YYYY");
} */

function addDate(cantidadDias) {
    return moment().add(cantidadDias, 'days').format("DD/MM/YYYY");
}

/* function formatDate(date) {

    return `${ date.getDate()}/${ date.getMonth() + 1 }/${date.getFullYear()}`

} */

/* function addDate(date, cantidadDias) {

    let addDays = date.setDate(date.getDate() + cantidadDias);

    return formatDate(new Date(addDays));

    //return `${date.getMonth() + 1}/${ date.getDate()}/${date.getFullYear()}`

} */