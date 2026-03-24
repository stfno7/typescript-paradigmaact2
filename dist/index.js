"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Hola! mi nombre es ${this.nombre}`);
    }
}
const persona1 = new Persona("Stefano");
persona1.saludar();
//# sourceMappingURL=index.js.map