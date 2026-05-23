// EJERCICIO 1 - LEY DE ENFRIAMIENTO

function calcularTemperatura() {

    let T0 = parseFloat(document.getElementById("temperaturaInicial").value);
    let Ts = parseFloat(document.getElementById("temperaturaEntorno").value);
    let k = parseFloat(document.getElementById("constanteK").value);
    let t = parseFloat(document.getElementById("tiempo").value);

    // Validación
    if (isNaN(T0) || isNaN(Ts) || isNaN(k) || isNaN(t)) {
        document.getElementById("resultadoTemperatura").innerHTML =
            "⚠️ Por favor completa todos los campos correctamente.";
        return;
    }

    if (k < 0 || t < 0) {
        document.getElementById("resultadoTemperatura").innerHTML =
            "⚠️ La constante y el tiempo no pueden ser negativos.";
        return;
    }

    // Fórmula
    let T = Ts + (T0 - Ts) * Math.exp(-k * t);

    // Redondear resultado
    let resultadoFinal = Math.round(T);

    // Mostrar resultado
    document.getElementById("resultadoTemperatura").innerHTML =
        `🌡️ Temperatura Final: <strong>${resultadoFinal} °C</strong>`;
}


// FUNCIÓN FACTORIAL
function factorial(numero) {

    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}


// FUNCIÓN COMBINACIÓN
function combinacion(n, r) {

    if (r > n) {
        return null;
    }

    return factorial(n) / (factorial(r) * factorial(n - r));
}


// EJERCICIO 2 - COMBINACIONES
function calcularCombinaciones() {

    let n1 = parseInt(document.getElementById("n1").value);
    let r1 = parseInt(document.getElementById("r1").value);

    let n2 = parseInt(document.getElementById("n2").value);
    let r2 = parseInt(document.getElementById("r2").value);

    // Validación
    if (isNaN(n1) || isNaN(r1) || isNaN(n2) || isNaN(r2)) {

        document.getElementById("resultadoCombinaciones").innerHTML =
            "⚠️ Completa todos los campos.";
        return;
    }

    if (r1 > n1 || r2 > n2) {

        document.getElementById("resultadoCombinaciones").innerHTML =
            "⚠️ Error: r no puede ser mayor que n.";
        return;
    }

    // Combinaciones
    let grupo1 = combinacion(n1, r1);
    let grupo2 = combinacion(n2, r2);

    // Resultado total
    let total = grupo1 * grupo2;

    // Mostrar resultado
    document.getElementById("resultadoCombinaciones").innerHTML =
        `🎲 Total de combinaciones: <strong>${total.toLocaleString()}</strong>`;
}