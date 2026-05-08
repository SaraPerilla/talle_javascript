let nombreCompleto = document.getElementById(nombreCompleto)
let edad = document.getElementById(edad)
let tipoDocumento = document.getElementById(tipoDocumento)
let numeroDocumento = document.getElementById(nombreDocumento)

let salario = document.getElementById(salario)
let comisiones = document.getElementById(comisiones)
let horasExtras = document.getElementById(horasExtras)
let nivelRiesgo = document.getElementById(nivelRiesgo)

if ( edad < 18 ) {
    console.log ("No se puede calcular");
} 
else if ( edad >= 18 && edad < 25 ) {
     console.log ("Usuario beneficiario por cotizante");
} 
else if ( edad >= 60 ) {
    console.log ("Se calcularà la pensiòn");
} 
else { 
    console.log ("Podrà continuar con el siguiente paso del proceso");
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

let fondoSolidaridad = calcularPorcentaje ( IBC, porcentFondoSolidaridad );
IBC>=4*salarioMinimoLegalV ? fondoSolidaridad : fondoSolidaridad = 0;

let salarioTotal = salario + comisiones + horasExtras ;
let IBC = calcularPorcentaje ( salarioTotal, porcentajeIBC );
let salud = calcularPorcentaje ( IBC, porcentajeSalud);
let pension = calcularPorcentaje ( IBC, porcentajePension);
