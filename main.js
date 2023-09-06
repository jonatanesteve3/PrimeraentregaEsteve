function verificarNumero(){
let numero;

while (true) {
    let entrada = prompt("Por favor, ingresa un número:");
    numero = parseFloat(entrada);

    if (!isNaN(numero)) {
        break;
    } else {
        alert("Entrada no válida. Por favor, ingresa un número válido.");
    }
}

if (numero > 0) {
    alert("El número es positivo");
} else if (numero < 0) {
    alert("El número es negativo");
} else {
    alert("El número es igual a cero");
}
}
verificarNumero ()