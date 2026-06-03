import { preguntar } from './lib/consola.ts';
import { cifrar, descifrar } from './lib/funcionesCriptográficas.ts';

let palabra: string = preguntar('Ingrese su palabra: '); // Preguntar por la palabra a cifrar o descifrar
let claveTexto: string = preguntar('Ingrese su clave: '); // Preguntar por la clave de cifrado (número)
let accion: string = preguntar('Ingrese que acción se quiere hacer (cifrar/descifrar): '); // Preguntar si se desea cifrar o descifrar (cifrar/descifrar)

let resultado: string

if (accion === 'cifrar' || accion === 'Cifrar'){
    resultado = cifrar(palabra, Number(claveTexto));
    console.log('La palabra es ' + resultado);
}

else if (accion === 'descifrar' || accion === 'Descifrar'){
    resultado = descifrar(palabra, Number(claveTexto));
    console.log('La palabra es ' + resultado);
}
else{
 console.log('Poné algo con sentido');
}
