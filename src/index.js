//Proposta básica do desafio
let nomeHeroi = "ReluctantBrandon";
let xp = 700;
let classificacao = "";

if (xp < 1000) {
    classificacao = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    classificacao = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    classificacao = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    classificacao = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    classificacao = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    classificacao = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    classificacao = "Imortal";
} else if (xp >= 10001) {
    classificacao = "Radiante";
}

//Complemento com a ajuda criativa do ChatGPT (código devidamente compreendido ;) )
let mensagemPersonalizada = "";
switch (classificacao) {
    case "Ferro":
        mensagemPersonalizada = "Parece que você está apenas começando sua jornada. Continue evoluindo, herói!";
        break;
    case "Bronze":
        mensagemPersonalizada = "Parece que é o antepenúltimo nível, mas ainda não! Anime-se! Tem muito game pela frente!";
        break;
    case "Prata":
        mensagemPersonalizada = "Difícil pensar numa mensagem maneira às 2h da manhã, mas vai lá, campeão!";
        break;
    case "Ouro":
        mensagemPersonalizada = "Aí sim hein, gostinho da riqueza! Siga firme!";
        break;
    case "Platina":
        mensagemPersonalizada = "A glória está mais próxima do que nunca! Siga em frente sem olhar para trás!";
        break;
    case "Imortal":
        mensagemPersonalizada = "Parabéns! Você alcançou o nível divino! Complete o Novo Jogo + para derrotar o verdadeiro chefão!";
        break;
    case "Radiante":
        mensagemPersonalizada = "Você atingiu o nível mais alto! Seu nome ecoará na história dos heróis.";
        break;
    default:
        mensagemPersonalizada = "Continue sua jornada para descobrir o que o destino reserva para você!";
}

console.log("O herói " + nomeHeroi + " está no nível de " + classificacao);
console.log(mensagemPersonalizada)