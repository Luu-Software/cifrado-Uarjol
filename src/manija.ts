import { preguntar } from './lib/consola.ts';

let tarjetaTexto: string = preguntar('Ingresar el numero de tarjeta: ');
Number(tarjetaTexto);
let tamañoPrefijo: string = preguntar('Cuantos digitos tiene el prefijo? ');

function obtenerPrefijo(numero: number, tamañoPrefijo: number): number {
  return Math.floor(numero / 10 ** (16-tamañoPrefijo));
}

let prefijo: number = obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo));

let red: string = 'No funciona';

if(Number(tamañoPrefijo) === 2){
  if(prefijo === 34 || prefijo === 37){
  red = 'Amex';
  }
  else if(prefijo === 51 || prefijo === 52 || prefijo === 53 || prefijo === 54 || prefijo === 55){
    red = 'Mastercard';
  }
  else{
    red = 'Error';
  }
}
else if(Number(tamañoPrefijo) === 1){
  if(prefijo === 4){
    red = 'Visa';
  }
  else{
    red = 'Error';
  }
}

console.log(red);
