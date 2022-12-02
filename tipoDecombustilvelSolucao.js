let contagemDasPreferencias = { "Alcool": 0, "Gasolina": 0, "Diesel": 0 }

const preferenciaClientes = () => {
    const respostas = Object.entries(contagemDasPreferencias);
    let numeroDaPreferencia = prompt("Digite o tipo de combustível: 1-Alcool, 2-Gasolina, 3-Disel e 4 para finalizar: ")
    while (numeroDaPreferencia != 4) {
        numeroDaPreferencia = prompt("Digite o tipo de combustível: 1-Alcool, 2-Gasolina, 3-Disel e 4 para finalizar: ");
        if (isNaN(Number(numeroDaPreferencia)) || !respostas[numeroDaPreferencia - 1] || numeroDaPreferencia == 4 || numeroDaPreferencia < 0) {
            continue;
        }
        contagemDasPreferencias[respostas[numeroDaPreferencia - 1][0]]++;

    }
}

preferenciaClientes()

console.log("Muito Obridada",
    `Alcool: ${contagemDasPreferencias.Alcool}`,
    `Gasolina: ${contagemDasPreferencias.Gasolina}`,
    `Diesel: ${contagemDasPreferencias.Diesel}`
)
