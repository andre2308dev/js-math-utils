// Suma promedio

const sumar = (a,b) => {
    const resultado = a + b;
    console.log(resultado);

    return resultado
};

// Función para calcular el promedio
const calcularPromedio = (num1, num2) => {
    const total = sumar(num1 + num2)
    
    console.log(total / 2)
}

const resta = (a,b) => {
    console.log(a - b);
};

resta(100,50);

(function (a,b) {
    console.log(a * b);
})(6,5)

const division = (a,b) => {
    try {return console.log(a/b)}
    catch(err) {
        console.log(err)
    }
    finally {return 0}
}

division(200,2);

// Función Que Retorna El Número Mayor
const getBigger = (a,b) => {
    if( !isNaN(a) && typeof b === 'number' ) {
        return a>b ? console.log(a) : console.log(b); 
    }
    alert("Debe ser un número")
};

getBigger(74,57)

/**
 * This function calculates pow of a number
 * @param {*} num num base
 * @param {*} pow num pow
 * @returns
 */

const getPow = (num,pow) => {
    if( isNaN(num) || isNaN(pow)) {
        console.log("No son valores validos!");
        return
    }
    return num**pow
    //Math.pow(num, pow); // Using Math Library
}
