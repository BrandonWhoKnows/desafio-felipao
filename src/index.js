let nomeHeroi = "ReluctantBrandon"
let xp = 6500

switch (xp) {
    case xp < 1000:
        console.log("Ferro")
        break;
    case 1001<= xp <= 2000:
        console.log("Bronze")
        break;
    case 2001 <= xp <= 5000:
        console.log("Prata")
        break;
    case 5001 <= xp <= 7000:
        console.log("Ouro")
        break;
    case 7001 <= xp <= 8000:
        console.log("Platina")
        break;
    case 8001 <= xp <= 9000:
        console.log("Ascendente")
        break;
    case 9001 <= xp <= 10000:
        console.log("Imortal")
        break;
    case xp >= 10001:
        console.log("Radiante")
}

console.log("O herói " + nomeHeroi + "está no nível de " + xp)