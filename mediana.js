function calcularMediaAritmetica(lista){
	// let sumaLista = 0;
	// for (let i = 0; i < lista.length; i++){
	// 	sumaLista += lista[i]; 

	// }

	const sumaLista = lista.reduce(
		function (valorAcumulado = 0, nuevoElemento) {
			return valorAcumulado + nuevoElemento;
		}
	);


	const promedioLista = sumaLista / lista.length;

	return promedioLista;


}


// const lista1 = [
//     100,
//     200,
//     400,
//     4000000,
// ];


function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }

}

function calcularMediana (lista) {
	
	const mitadLista = parseInt(lista.length / 2);
	let mediana1;
	if (esPar(lista.length)) {
			
			const elemento1 = lista[mitadLista];
			const elemento2 = lista[mitadLista - 1];
	
			const promedioElemento1y2 = calcularMediaAritmetica([
			elemento1,
			elemento2,
			]);
	
			// necesitamos dos elementos
			// -> el promedio
			// -> mediana
	
			mediana1 = promedioElemento1y2;
	
	} else {
			mediana1 = lista[mitadLista];
			
			
	}

	return mediana1;
}



const numeros = [3, 23, 12,123213,12312,-12312];

numeros.sort(function(a, b){return a - b});