//Ejercicio 1
console.log("--> Ejercicio 1 <--");
var nombre = "Nestor Kauil";
var edad = 25;
var Personaje = {
    nombre: nombre,
    edad: edad
};
console.log(Personaje);
//Ejercicio 2
console.log("--> Ejercicio 2 <--");
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
console.log(batman);
//Ejercicio 3
console.log("--> Ejercicio 3 <--");
var resultadoDoble = function (a, b) { return (a + b) * 2; };
console.log(resultadoDoble(2, 2));
//Ejercicio 4
console.log("--> Ejercicio 4 <--");
var getAvenger = function (nombre, poder, arma) {
    if (nombre === void 0) { nombre = requerido(); }
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder != undefined) {
        mensaje = "".concat(nombre, " tiene el poder de: ").concat(poder, " y un arma: ").concat(arma);
    }
    else {
        mensaje = "".concat(nombre, " NO tiene poder");
    }
    return mensaje;
};
var requerido = function () {
    throw new Error("Falta información");
};
console.log(getAvenger("Mujer maravilla"));
//Ejercicio 5
console.log("--> Ejercicio 5 <--");
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}());
var clase = new Rectangulo(2, 3);
console.log(clase.calcularArea());
