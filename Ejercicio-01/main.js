const suma = (a,b) => {
    console.log(a + b);
};

suma(10,5);

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
