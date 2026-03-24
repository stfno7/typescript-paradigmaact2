class Persona {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  saludar(): void {
    console.log(`Hola! mi nombre es ${this.nombre}`);
  }
}

const persona1 = new Persona("Stefano");
persona1.saludar();