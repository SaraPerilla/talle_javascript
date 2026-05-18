let nombreCompleto = document.getElementById("nombreCompleto")
let edad = document.getElementById("edad")
let tipoDocumento = document.getElementById("tipoDocumento")
let numeroDocumento = document.getElementById("numeroDocumento")

let salario = document.getElementById("salario")
let comisiones = document.getElementById("comisiones")
let horasExtras = document.getElementById("horasExtras")
let nivelRiesgo = document.getElementById("nivelRiesgo")

let valorEdad = parseInt(edad.value)

let valorSalario = parseFloat(salario.value)
let valorComisiones = parseFloat(comisiones.value)
let valorHorasExtras = parseFloat(horasExtras.value)

alert("Por favor llene el formulario con su información")

const salarioMinimoLegalV = 1750905 ;
const salarioMinimoIntegralV = 22761765 ;
const subsidioTransporte = 249095 ;
const valorTributario = 52.37 ;

const riesgoMinimo = 0.522 ;
const riesgoBajo = 1.044 ;
const riesgoMedio = 2.436 ;
const riesgoAlto = 4.350 ;
const riesgoMaximo = 6.960 ;

const porcentajeIBC = 0.7 ; 
const porcentajeSalud = 0.04 ;
const porcentajePension = 0.04 ;
const porcentFondoSolidaridad= 0.01;

function calcularPorcentaje ( base, porcentaje ) {
    return base * porcentaje
}


let salarioTotal =
(parseFloat(salario.value) || 0) + (parseFloat(comisiones.value) || 0) + (parseFloat(horasExtras.value) || 0)
let IBC = calcularPorcentaje ( salarioTotal, porcentajeIBC );
let fondoSolidaridad = calcularPorcentaje ( IBC, porcentFondoSolidaridad );
let salud = calcularPorcentaje ( IBC, porcentajeSalud);
let pension = calcularPorcentaje ( IBC, porcentajePension);

fondoSolidaridad = IBC >= 4 * salarioMinimoLegalV ? fondoSolidaridad : 0;

let formulario = document.querySelector("form")

formulario.addEventListener("submit", function(event){

    let valorEdad = parseInt(edad.value)

    let valorSalario = parseFloat(salario.value)
    let valorComisiones = parseFloat(comisiones.value)
    let valorHorasExtras = parseFloat(horasExtras.value)

    if(valorSalario <= 0){

        event.preventDefault()

        alert("El salario debe ser mayor a 0")

        return
    }

    if(valorComisiones > valorSalario){

        event.preventDefault()

        alert("Las comisiones no pueden ser mayores al salario")

        return
    }

    if(valorHorasExtras > 2000000){

        event.preventDefault()

        alert("Horas extras demasiado altas")

        return
    }

    if(nombreCompleto.value.trim().length < 3){

        event.preventDefault()

        alert("Nombre demasiado corto")

        return
    }

    if(nombreCompleto.value.trim() === ""){

        event.preventDefault()

        alert("El nombre está vacío")

        return
    }

    if(isNaN(valorEdad)){

        event.preventDefault()

        alert("Edad inválida")

        return
    }

    if(numeroDocumento.value.length < 9){

        event.preventDefault()

        alert("Documento muy corto")

        return
    }

    let regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if(!regexNombre.test(nombreCompleto.value)){

        event.preventDefault()

        alert("Nombre inválido")

        return
    }

    if(numeroDocumento.value < 0){

        event.preventDefault()

        alert("Documento inválido")

        return
    }

    if(numeroDocumento.value.length > 10){

        event.preventDefault()

        alert("Documento demasiado largo")

        return
    }

    if(valorEdad < 18){

        event.preventDefault()

        alert("El usuario es menor de edad y no puede enviar el formulario")

        return
    }

    else if(valorEdad >= 18 && valorEdad <= 25){

        event.preventDefault()

        alert("Usuario beneficiario por cotizante")

        return
    }

    else if(valorEdad >= 60){

        alert("Se necesita proceso de pensión")

        return
    }

})