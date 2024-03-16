import { Cliente } from "./cliente.js";
import { Impuesto } from "./impuestos.js";

//Ejemplo para mostrar instancias por consola

// Instanciar impuesto.
const impuesto1 = new Impuesto(12000000, 3600000);

//Instanciar cliente (incluyendo impuesto previamente instanciado).
const cliente1 = new Cliente("Olivia", impuesto1);

//Realizar el cálculo del impuesto del cliente, usando el método calcularImpuesto().
const impuestoCliente1 = cliente1.calcularImpuesto();

console.log(cliente1);
console.log(impuesto1);
console.log(impuestoCliente1);