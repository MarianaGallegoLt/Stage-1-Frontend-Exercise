//Ejercicio 1
console.log("--> Ejercicio 1 <--");

const nombre: string = "Nestor Kauil";
const edad: number = 25;

type personajesTipado = {
    nombre: string,
    edad: number
}

let Personaje: personajesTipado = {
  nombre,
  edad
};
console.log(Personaje);

//Ejercicio 2
console.log("--> Ejercicio 2 <--");

interface ISuperHero {
  nombre: string;
  artesMarciales: string[];
}

var batman: ISuperHero = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"],
};
console.log(batman);

//Ejercicio 3
console.log("--> Ejercicio 3 <--");

var resultadoDoble = (a: number, b: number) => (a + b) * 2;
console.log(resultadoDoble(2, 2));

//Ejercicio 4
console.log("--> Ejercicio 4 <--");

var getAvenger = function (
  nombre: string = requerido(),
  poder?: string,
  arma: string = "arco"
) {
  var mensaje;
  if (poder != undefined) {
    mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
  } else {
    mensaje = `${nombre} NO tiene poder`;
  }
  return mensaje;
};

var requerido = function () {
  throw new Error("Falta información");
};
console.log(getAvenger("Mujer maravilla"));

//Ejercicio 5
console.log("--> Ejercicio 5 <--");


interface IFigure{
    base: number;
    altura: number;
}

class Rectangulo implements IFigure {
  public base: number;
  public altura: number;

  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }

  calcularArea(): number {
    return this.base * this.altura;
  }
}

let clase: Rectangulo = new Rectangulo(2, 3);
console.log(clase.calcularArea());