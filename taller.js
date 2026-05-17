let nombreCompleto = document.getElementById("nombreCompleto")
let edad = document.getElementById("edad")
let tipoDocumento = document.getElementById("tipoDocumento")
let numeroDocumento = document.getElementById("numeroDocumento")

let salario = document.getElementById("salario")
let comisiones = document.getElementById("comisiones")
let horasExtras = document.getElementById("horasExtras")
let nivelRiesgo = document.getElementById("nivelRiesgo")

let valorEdad = parseInt(edad.value)

if (valorEdad < 18) {
    console.log ("No se puede calcular");
} 
else if ( valorEdad >= 18 && valorEdad < 25 ) {
     console.log ("Usuario beneficiario por cotizante");
} 
else if ( valorEdad >= 60 ) {
    console.log ("Se calcularà la pensiòn");
} 
else { 
    console.log ("Podrà continuar con el siguiente paso del proceso");
}

if (isNaN(valorEdad)) {
   console.log("Edad inválida")
}

if(numeroDocumento.value.length < 9){
   console.log("Documento muy corto")
}

let regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

if(!regexNombre.test(nombreCompleto.value)){
    console.log("Nombre inválido")
}

if(numeroDocumento.value < 0){
   console.log("Documento inválido")
}

if(numeroDocumento.value.length > 10){
   console.log("Documento demasiado largo")
}

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


fondoSolidaridad = IBC >= 4 * salarioMinimoLegalV ? fondoSolidaridad : 0;

let salarioTotal =
(parseFloat(salario.value) || 0) + (parseFloat(comisiones.value) || 0) + (parseFloat(horasExtras.value) || 0)
let IBC = calcularPorcentaje ( salarioTotal, porcentajeIBC );
let fondoSolidaridad = calcularPorcentaje ( IBC, porcentFondoSolidaridad );
let salud = calcularPorcentaje ( IBC, porcentajeSalud);
let pension = calcularPorcentaje ( IBC, porcentajePension);

formulario.addEventListener("submit", function(event){
    event.preventDefault()
})
