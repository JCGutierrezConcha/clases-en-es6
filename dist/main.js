"use strict";

var _cliente = require("./cliente.js");
var _impuestos = require("./impuestos.js");
//Ejemplo para mostrar instancias por consola

// Instanciar impuesto.
var impuesto1 = new _impuestos.Impuesto(12000000, 3600000);

//Instanciar cliente (incluyendo impuesto previamente instanciado).
var cliente1 = new _cliente.Cliente("Olivia", impuesto1);

//Realizar el cálculo del impuesto del cliente, usando el método calcularImpuesto().
var impuestoCliente1 = cliente1.calcularImpuesto();
console.log(cliente1);
console.log(impuesto1);
console.log(impuestoCliente1);