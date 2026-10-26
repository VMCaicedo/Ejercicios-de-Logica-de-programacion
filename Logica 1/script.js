
const numero1 = Number(prompt("Ingresa el primer número:"));
const numero2 = Number(prompt("Ingresa el segundo número:"));
const numero3 = Number(prompt("Ingresa el tercer número:"));

const numeros = [numero1, numero2, numero3];
const resultado = document.getElementById("resultado");

if (numeros.some(numero => !Number.isFinite(numero))) {
    resultado.textContent = "Error: debes ingresar tres números válidos.";
} else {
    const ordenados = [...numeros].sort((a, b) => b - a);
    const ascendentes = [...ordenados].reverse();

    console.log("De mayor a menor:", ordenados.join(", "));
    console.log("De menor a mayor:", ascendentes.join(", "));

    resultado.innerHTML = `
        <p>De mayor a menor: ${ordenados.join(", ")}</p>
        <p>De menor a mayor: ${ascendentes.join(", ")}</p>
    `;

    if (numero1 === numero2 && numero2 === numero3) {
        console.log("Los tres números son iguales.");
        resultado.innerHTML += "<p>Los tres números son iguales.</p>";
    }
}
