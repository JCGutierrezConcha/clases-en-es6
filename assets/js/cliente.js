export class Cliente {
    #nombre;
    #impuesto;
    constructor(nombre, impuesto = {}) {
        this.#nombre = nombre;
        this.#impuesto = impuesto;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    calcularImpuesto() {
        const calculo = (this.#impuesto.montoBrutoAnual - this.#impuesto.deducciones) * .21;
        return `El cálculo del impuesto es: ${calculo}`;
    }
}