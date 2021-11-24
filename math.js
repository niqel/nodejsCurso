
const match = {}

function add(x1, x2){
    return x1 + x2;
}

function subtract(x1, x2){
    return x1 - x2;
}

function multiplicity(x1, x2){
    return x1 * x2;
}

function divide(x1, x2){
    if(x2 == 0) {
        console.log('No se puede dividir por 0')
    } else {
        return x1 / x2;
    }
}

match.add = add;
match.multiplicity = multiplicity;
match.divide = divide;
match.subtract = subtract;


// exports.add = add;
// exports.subtract = subtract;
// exports.multiplicity = multiplicity;
// exports.divide = divide;

module.exports = match;