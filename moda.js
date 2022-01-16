const lista1 = [
	1,
	2,
	3,
	4,
	2,
	1,
	1,
	3,
];




function calcularmoda(lista){
	const listaCount = {};
	lista.map(
		function(elemento) {
			if (listaCount[elemento]) {
				listaCount[elemento] += 1;
			} else {
				listaCount[elemento] = 1;
				
			}
	
		}
	);
	
	const listaArray = Object.entries(listaCount).sort(
		function (valorAcumulado, nuevoValor) {
			return valorAcumulado[1] - nuevoValor[1];
	
		}
	);
	
	
	const moda = listaArray[listaArray.length - 1];

	return "La moda es: " + moda[0] + "que se repite " + moda[1] + " veces";
	
}

// console.log(moda);