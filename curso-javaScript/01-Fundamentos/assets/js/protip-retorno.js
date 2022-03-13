//el objeto toma los valores de las variables
const crearPersona = (nombre, apellido) => ({ nombre, apellido });

//arguments no funciona con funciones lambda

//despues de ...args no puede ponerse ningún otro argumento, pero si delante
const imprimeArgumentos = (...args) => {
  console.log(args);
};

console.time("crear");
const { apellido } = crearPersona("Irene", "Gabarda");
console.timeEnd("crear");

const { apellido: nuevoApellido } = crearPersona("Irene", "Gabarda");

const diasLetras = {
  0: () => "domingo",
  1: () => "lunes",
  2: () => "martes",
  3: () => "miércoles",
  4: () => "jueves",
  5: () => "viernes",
  6: () => "sábado",
};

console.log(diasLetras[dia]());

//operacion ternaria
let dia = 3;

horaApertura = [0, 6].includes(dia) ? 9 : 11;

mensaje =
  horaActual >= horaApertura
    ? "EstaAbierto"
    : "Está cerrado, hoy abrimos a las ${ horaApertura }";
