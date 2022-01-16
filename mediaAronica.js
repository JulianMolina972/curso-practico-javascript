// Paso 1: Definir el conjunto de distancias junto a sus velocidades

const movement = [
    {
        distanceKm: 100,
        velocity: 120,
    },
    {
        distance: 100,
        velocity: 20,
    },
    {
        distance: 100,
        velocity: 100,
    },
    {
        distance: 100,
        velocity: 130,
    },  
];

// //Paso 2: Crear un array con la Invera de las velocidades.

// const velocityInvert = movement.map(function(movementObject) {
//     return (1 / movementObject.velocity);
// });

// //Paso 3: Hacer una sumatoria de las Velocidades Invertidas

// const velocityProm = velocityInvert.reduce(
//     function (sum = 0, newVal){
//         return sum + newVal;
//     }
// );

// //Paso 4: División de Promedio de Velocidades Invertidas entre cantidad de velocidades, y almacenarlas en una variable a reutilizar.

// const mediaArmonica = (velocityInvert.length / velocityProm);

// //Paso 5: Creamos una funcion que acepte como parametro cualquier objeto en movimiento que incluya distancias y velocidades y ademas permite calcular la media armonica automaticamente.

function calcularMediaArmonica(movement){
    const velocityInvert = movement.map(function(movement){
        return (1 / movement.velocity);
    });

    const velocityProm = velocityInvert.reduce (
        function (sum = 0, neVal){
            return sum + neVal;
        }
    );

    const mediaArmonica = (velocityInvert.length / velocityProm);
    
    return mediaArmonica;
}