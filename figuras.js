// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");


function perimetroCuadrado(lado) {
    return lado * 4;
}


// console.log("El perímetro del cuadrado es: " + perimetroCuadrado+ "cm");

function areaCuadrado(lado) {
    return lado * lado;
} 
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();
// Código del triángulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del triángulo miden: " 
// + ladoTriangulo1 + "cm, " 
// + ladoTriangulo2 + "cm, " 
// + baseTriangulo + "cm");

// const alturaTriangulo = 5.5;

// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;

}



// console.log("El perímetro de triángulo es: " 
// + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) /2;

}

// function alturaTrianguloIsoseles(lado1, lado2, base) {
//     if(lado1 === lado2 && lado1 != base){
//         alert("Isoceles")
//         const altura = Math.sqrt((lado1*lado2)-(base**2/4));
//         console.log(altura)
//     } else {
//         alert("No lo se")
//     }
//         console.error("Los lados 1 y 2 no son iguales")
//     } else {

//     }
//     return Math.sqrt((lado1*lado2)-(base**2/4));

// }

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}

// console.log("El área del Triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

// Código del círculo

console.group("Círculos");

// Radio 
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

//Diámetro

function diametroCirculo(radio) {
    return radio * 2;

}
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del círculo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
//console.log("PI es: " + PI);

// Circuferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;

} 

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;

} 

console.groupEnd();


// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);   
}

function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const value = input.value;
    const value1 = input1.value;
    const value2 = input2.value;

    const perimetro = perimetroTriangulo(value, value1, value2);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const value = input.value;
    const value1 = input1.value;
    const value2 = input2.value;

    
    const altura = alturaTrianguloIsoseles(value,value1, value2)
    const area = areaTriangulo(value2,altura);
    alert(area);   
}

// function calcularAlturaTrianguloIsoseles(){
//     const input = document.getElementById("InputTriangulo2");
//     const value = input.value;

//     const altura = alturaTrianguloIsoseles(value,);
//     alert(perimetro);
// }

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);   
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo1");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);   
}



