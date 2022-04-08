let solicitudDePrestamo = 0
let diaDeDevolucion = 0
const interesDelPrestamo = 30

/* function formatDate(date, format) {
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        YYYY: date.getFullYear()
    }

    return format.replace(/mm|dd|YYYY/gi, matched => map[matched])
} */


function formatDate(date) {

    return `${ date.getDate()}/${ date.getMonth() + 1 }/${date.getFullYear()}`

}

function addDate(date) {

    let addDays = date.setDate(date.getDate() + 14);

    return formatDate(new Date(addDays));

    //return `${date.getMonth() + 1}/${ date.getDate()}/${date.getFullYear()}`

}