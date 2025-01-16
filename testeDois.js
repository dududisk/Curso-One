//OBS: O comando parse é responsável por converter uma STRING para um outro tipo de várial como INT, FLOAT ou JSON para um objeto javascript.

// 1. Perguntar o dia da semana e mostrar mensagem correspondente e apresentar um alerta
const diaSemana = prompt("Qual é o dia da semana?"); 
if (diaSemana.toLowerCase() === "sábado" || diaSemana.toLowerCase() === "domingo") 
    { alert("Bom fim de semana!"); 
} else { alert("Boa semana!");
}

// 2. Verificar se um número é positivo ou negativo
const numero = parseInt(prompt("Digite um número:"));
if (numero > 0) {
    alert("O número é positivo.");
} else if (numero < 0) {
    alert("O número é negativo.");
} else {
    alert("O número é zero.");
}

// 3. Sistema de pontuação para um jogo
const pontuacao = parseInt(prompt("Digite sua pontuação no jogo:"));
if (pontuacao >= 100) {
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar.");
}

// 4. Mostrar o saldo da conta usando template string
const saldo = parseFloat(prompt("Digite o saldo da sua conta:"));
alert(`O saldo da sua conta é: R$ ${saldo.toFixed(2)}`);

// 5. Boas-vindas ao usuário pelo nome
const nomeUsuario = prompt("Digite seu nome:");
alert(`Bem-vindo(a), ${nomeUsuario}!`);