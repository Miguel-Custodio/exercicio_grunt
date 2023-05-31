function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const operacao = document.getElementById('operator').value;
    const num2 = parseFloat(document.getElementById('num2').value);

    let resultado;

    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        default:
            resultado = 'Operador inválido!';
    }

    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}