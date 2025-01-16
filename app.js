alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 11);
let tentativas = 1;
let chute;

while (chute != numeroSecreto) {
    let chute = prompt('Escolha um número entre 1 e 10');
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert('O número secreto é menor');
        } else {
            alert('O número secreto é maior');
        }
    }
    tentativas++;
}
alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} tentativas`);