let votos = [0, 0, 0, 0, 0]; // Armazena os votos dos candidatos e nulo/branco
let continuar = true; // Controla o loop de votação

function votar(opcao) {
    switch (opcao) {
        case 1:
            votos[0]++;
            break;
        case 2:
            votos[1]++;
            break;
        case 3:
            votos[2]++;
            break;
        case 4:
            votos[3]++;
            break;
        case 5:
            votos[4]++;
            break;
        default:
            alert("Opção inválida!");
            return;
    }
    document.getElementById("votarNovamente").style.display = "inline-block";
    document.getElementById("finalizarVotacao").style.display = "inline-block";
}

function votarNovamente() {
    continuar = true;
    document.getElementById("votarNovamente").style.display = "none";
    document.getElementById("finalizarVotacao").style.display = "none";
    loopVotacao();
}

function finalizarVotacao() {
    continuar = false;
    document.getElementById("votacao").style.display = "none";
    document.getElementById("resultado").style.display = "block";
    document.getElementById("votarNovamente").style.display = "none";
    document.getElementById("finalizarVotacao").style.display = "none";

    document.getElementById("votos1").textContent = votos[0];
    document.getElementById("votos2").textContent = votos[1];
    document.getElementById("votos3").textContent = votos[2];
    document.getElementById("votos4").textContent = votos[3];
    document.getElementById("votos5").textContent = votos[4];
}

function loopVotacao() {
    while (continuar) {
        let opcao = parseInt(prompt("Escolha uma opção para votar (1-4 para candidatos, 5 para Nulo/Branco):"));
        if (isNaN(opcao) || opcao < 1 || opcao > 5) {
            alert("Opção inválida!");
        } else {
            votar(opcao);
            continuar = false; // Para o loop após um voto para permitir ação
        }
    }
}

// Inicia o loop 
window.onload = loopVotacao;
