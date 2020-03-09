function getEquationFromNumbers(left, right) {
    let result = setPlusIfNeeded(left) + '=' + setPlusIfNeeded(right);
    while (result.indexOf(',') !== -1) {
        result = result.replace(',', '');
    }
    return result;
}

function setPlusIfNeeded(numbers) {
    numbers.forEach((i, index, array) => {
        if (index > 0 && i.indexOf('-') < 0) {
            array[index] = '+' + i;
        }
    });
    return numbers;
}

function getNumbersFromEquation(equation) {
    return equation.match(/[-]?\d+(?:\.\d+)?/g);
}


function compareSolutions(sol1, sol2) {
    sol1 = {
        'equation': '4+3=2',
        'numberOfMoves': 3
    }
    sol2 = {
        'equation': '4+3=2',
        'numberOfMoves': 3
    }
    return sol1.equation === sol2.equation && sol1.numberOfMoves === sol2.numberOfMoves;

}

function checkEquation(arr1, arr2) {

    let sum1 = arr1.reduce((a, b) => a + b, 0);
    let sum2 = arr2.reduce((a, b) => a + b, 0);

    if (sum1 - sum2 === 0) return true;
    if (arr1.length === 1 && sum1 === sum2 % 10) return true;
    if (arr2.length === 1 && sum2 === sum1 % 10) return true;

    return false;
}

function algo(equation) {
    equation = '2+3=-4 + 0';

    let leftString = equation.split("=")[0];
    let rightString = equation.split("=")[1];

    let leftNumbers = getNumbersFromEquation(leftString);
    let rightNumbers = getNumbersFromEquation(rightString);

    console.log(checkEquation(leftNumbers, rightNumbers));

    console.log(getEquationFromNumbers(leftNumbers, rightNumbers))
}

module.exports = {
    compareSolutions,
    getEquationFromNumbers,
    getNumbersFromEquation,
    setPlusIfNeeded,
    checkEquation,
    algo
};
