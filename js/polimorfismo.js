// ==========================================
// 1: CLASE PADRE Y CÍRCULO
// ==========================================
class Figura {
  #nombre;

  constructor(nombre) {
    this.#nombre = nombre;
  }

  getNombre() {
    return this.#nombre;
  }

  calcularArea() {
    return 0;
  }

  calcularPerimetro() {
    return 0;
  }
}

class Circulo extends Figura {

  constructor(nombre,radio) {
    super(nombre);
    this.radio = radio;
  }

  calcularArea() {
    return Math.PI * this.radio ** 2;
    
  }

  calcularPerimetro() {
    return Math.PI * 2 * this.radio;
  }
}

// ==========================================
// 2: RECTÁNGULO
// ==========================================
class Rectangulo extends Figura {
  

  constructor(ancho, altura) {
    super("Rectángulo");
    this.ancho=ancho;
    this.altura=altura;
    
  }

  calcularArea() {
    return this.ancho*this.altura;
    
  }

  calcularPerimetro() {
    return this.ancho*2 + this.altura*2;
  }
}

// ==========================================
// 3: TRIÁNGULO RECTÁNGULO
// ==========================================
class TrianguloRectangulo extends Figura {
  

  constructor(nombre, base, altura ) {
    super(nombre);
    this.base=base;
    this.altura=altura;

  }

  calcularArea() {
    return this.base*this.altura / 2;
    
  }

  calcularPerimetro() {
    return this.altura+this.base+Math.sqrt(this.base ** 2 + this.altura ** 2);
    
  }
}

// ==========================================
// 4: ZONA DE PRUEBAS
// ==========================================

const cir1 = new Circulo("cir1",5);
const rect1= new Rectangulo(2,10);
const tr1 = new TrianguloRectangulo("tr1",10,2);

console.log(cir1.getNombre());
console.log(cir1.calcularArea());
console.log(cir1.calcularPerimetro());
console.log(rect1.getNombre());
console.log(rect1.calcularArea());
console.log(rect1.calcularPerimetro());
console.log(tr1.getNombre());
console.log(tr1.calcularArea());
console.log(tr1.calcularPerimetro());