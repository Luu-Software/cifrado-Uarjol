import { preguntar } from './lib/consola.ts';

let tarjetaTexto: string = preguntar('Ingresá el número de tarjeta: ');
Number(tarjetaTexto);

function obtenerPrefijo(numero: number, tamañoPrefijo: number): number {

  return numero/10^(16-tamañoPrefijo);
}

//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

let red: string = ''; // COMPLETAR
console.log(red);
