let nombreCompleto = "" ;
let edad = 0 ;
let tipoDocumento = "" ;
let numeroDocumento = "" ;
let salario = 0 ;
let comisiones = 0 ;
let horasExtras = 0 ;
let nivelRiesgo = "" ;

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

let salarioTotal = salario + comisiones + horasExtras ;
let IBC = salarioTotal * porcentajeIBC ;
let salud = IBC * porcentajeSalud ;
let pension = IBC * porcentajePension 

if ( edad < 18 ) {
    console.log ("No se puede calcular");
} else if ( edad >= 18 && edad < 25 ) {
     console.log ("Usuario beneficiario por cotizante");
} else if ( edad >= 25 && edad < 60 ) {
    console.log ("Se calcularà la pensiòn");
} else { 
    console.log ("Podrà continuar con el siguiente paso del proceso");
}