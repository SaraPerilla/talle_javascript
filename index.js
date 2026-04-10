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