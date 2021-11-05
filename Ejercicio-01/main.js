// Función suma dentro de un setTimeout

setTimeout(() => {
    const suma = (a,b) => {
        console.log(a+b);
        console.log('Primera suma con tiempo')
    };
    
    suma(10,5);
}, 4000)

