function generateAddingEquation() {
    const x = Math.floor(Math.random() * 100) + 1;
    const y = Math.floor(Math.random() * 100) + 1;
    return [x, y, x + y, '+', Math.floor(Math.random() * 3)];
}

function generateSubtractingEquation() {
    const x = Math.floor(Math.random() * 100) + 1;
    const y = Math.floor(Math.random() * x) + 1;
    return [x, y, x - y, '-', Math.floor(Math.random() * 3)];
}

function generateMultiplyingEquation() {
    const x = Math.floor(Math.random() * 100) + 1;
    const y = Math.floor(Math.random() * 10) + 1;
    return [x, y, x * y, '*', Math.floor(Math.random() * 3)];
}

function generateDividingEquation() {
    const y = Math.floor(Math.random() * 50) + 1;
    const x = (Math.floor(Math.random() * 20) + 1) * y;
    return [x, y, x / y, '/', Math.floor(Math.random() * 3)];
}

export function generateEquation() {
    const equationGenerators = [
        generateAddingEquation,
        generateSubtractingEquation,
        generateMultiplyingEquation,
        generateDividingEquation
    ];
    const randomGenerator = equationGenerators[Math.floor(Math.random() * equationGenerators.length)];
    return randomGenerator();
}
