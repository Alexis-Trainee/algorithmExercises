// Verificar ganhador em linhas
// Pega o primeiro da linha e verificar se todos os elementos sao iguais à ele
// Caso sejam, tem um ganhador
// Caso não, não tem um ganhador
const verifyLines = (arr) => {
    const vencedores = [];

    for(let i = 0; i < arr.length; i++) {
        const linha = arr[i];
        const elemento = linha[0];
        let vencedor = true;

        for(let indexDoElemento = 1; indexDoElemento < linha.length; indexDoElemento++) {
            if (elemento !== linha[indexDoElemento]) {
                vencedor = false;
            }
        }

        if (vencedor) {
            vencedores.push(elemento);
        }
    }

    // if (vencedores.length > 1) {
    //     console.log("Jogo invalido")
    // } else {
    //     console.log("Vencedor ", vencedores[0]);
    // }
    return vencedores;
} 
///--------------------------------------------------------------------------------------------------------------------------------------
const verifyDiagonal = (arr) => {
const diagonal1 = [arr[0][0], arr[1][1], arr[2][2]];
    const diagonal2 = [arr[0][2], [1][1],[2][0]];

    const callDiagonal = [diagonal1, diagonal2];
    return verifyLines(callDiagonal);
}

const verifyColumn = (arr) => {

    const columns=[];
    for (let i=0; i<arr.length; i++) {
        const column = [];
        for (let j=0; j<arr.length; j++ ){
            column.push(arr[j][i]);
        }
    columns.push(column);
    }
    return verifyLines(columns);
}
const checkWinners = (jogo) => {
const winners = [verifyLines(jogo), verifyColumn(jogo), verifyDiagonal(jogo)].flat();

    if (winners.length ===1){
console.log('winner',winners[0])
    }else if(winners.length > 1){
console.log('Game Invalid');
    }else {
console.log ('A TIE')
    }
}

const jogo = [['x', 'o', 'x'], ['x', 'x', 'x'], ['o', 'x', 'o']];
// verifyLines(jogo);
// verifyColumn(jogo);
// verifyDiagonal(jogo);
checkWinners(jogo); 

const jogo2 = [['x', 'o', 'x'], ['o', 'o', 'o'], ['x', 'x', 'o']];
checkWinners(jogo2); 
// verifyLines(jogo2);
// verifyColumn(jogo2);
// verifyDiagonal(jogo2);

const jogo3 = [['x', 'x', 'x'], ['x', 'x', 'x'], ['o', 'x', 'x']];
checkWinners(jogo3); 
// verifyLines(jogo3);
// verifyColumn(jogo3);
// verifyDiagonal(jogo3);
// ALGORITMO
//  DECLARE array,vencedor, linha, elemento, index, quantidadeDeLinhas, vencedores;
//
//  leia(array)
//
//  vencedores <- []
//
//  para quantidadeDeLinhas de 0 até array.length - 1 faca
//      linha <- array[quantidadeDeLinhas]
//      elemento <- linha[0]
//      vencedor <- verdadeiro
//
//      para index de 1 até linha.length - 1 faca
//          se elemento != linha[index] entao
//              vencedor <- falso
//          fimse
//      fimpara
//
//      se vencedor entao
//          vencedores[vencedores.length - 1] <- elemento
//      fimse
//  fimpara
//
//  se (vencedores.length > 1) entao
//   escreva("Jgo invalido")
//  senao
//   escreva("Vencedor", vencedores[0])
//  fimse
//
// FIM_ALGORITMO
// array[0]
//
//
//
// let arr1= [
//             ["x", "x", "x"],
//             ["o", "x", "o"],
//             ["o", "o", "x"]
//         ];

// let arr2= [
//             ["x", "x", "x"],
//             ["o", "x", "o"],
//             ["o", "o", "x"]
//         ];

 
// let compare = (arr1, arr2)=> {
//    return  arr1.length===arr2.length && arr1.every((item, index)=> item===arr2[index])
// }
           
// console.log(compare(arr1, arr2));
//
//const readline = require('readline')
//var tabuleiro = []
//const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
//})
//const vez = function(vez){
//    if(vez === -1){
//        return "  -  "
//    } else if(vez === 0){
//        return "  O  "
//    } else{
//        return "  X  "
//    }
//}

//var quemJoga = 0

//var posicao = {"x": 0, "y": 0}

//var joguei = false

//var jogarBot = null

//const game = {
//    "new": function(){
//        console.clear()
//        tabuleiro = [
//                    [-1,-1,-1],
//                    [-1,-1,-1],
//                    [-1,-1,-1]
//        ]
//    },
//    "tabuleiro": function(){
//        var aux = ""
//        console.log("Jogue usando números, X e Y")
//        console.log("   0    1    2")
//        for(let i = 0; i < tabuleiro.length; i++){
//            if(i <= 2){
//                aux += `${i}`
//            }
//            for(let b = 0; b < tabuleiro[i].length; b++){
//                if(b === 2){
//                    aux += `${vez(parseInt(tabuleiro[i][b]))}\n`
//                } else{
//                    aux += `${vez(parseInt(tabuleiro[i][b]))}`
//                }
//            }
//        }
//        return aux
//    },
//    "botPlay": function(){
//        var idY = Math.floor(Math.random() * tabuleiro.length)
//        var idX = Math.floor(Math.random() * tabuleiro[idY].length)
//        while(tabuleiro[idY][idX] === 0 || tabuleiro[idY][idX] === 1){
//            idY = Math.floor(Math.random() * tabuleiro.length)
//            idX = Math.floor(Math.random() * tabuleiro[idY].length)
//        }
//        tabuleiro[idY][idX] = 0
//        if(quemJoga == 0){
//            quemJoga = 1
//        } else{
//            quemJoga = 0
//        }
//    },
//    "play": function(x, y){
//        const found = tabuleiro[x][y]
//        if(found === -1){
//        if(quemJoga == 0){
//            quemJoga = 1
//        } else{
//            quemJoga = 0
//        }
//        if(jogarBot !== "y"){
//            tabuleiro[x][y] = quemJoga
//        } else{
//            tabuleiro[x][y] = quemJoga
//            game.botPlay()
//        }
//        }
//        joguei = false
//    },
//    "verifica": function(){
//        //Verifica O
//        if(tabuleiro[0][0] === 0 && tabuleiro[0][1] === 0 && tabuleiro[0][2] === 0){
//            return "O ganhou parabéns"
//        } else if(tabuleiro[1][0] === 0 && tabuleiro[1][1] === 0 && tabuleiro[1][2] === 0){
//            return "O ganhou parabéns"
//        } else if(tabuleiro[2][0] === 0 && tabuleiro[2][1] === 0 && tabuleiro[2][2] === 0){
//            return "O ganhou parabéns"
//        } else if(tabuleiro[0][0] === 0 && tabuleiro[1][1] === 0 && tabuleiro[2][2] === 0){
//            return "O ganhou parabéns"
//        } else if(tabuleiro[0][2] === 0 && tabuleiro[1][1] === 0 && tabuleiro[2][0] === 0){
//            return "O ganhou parabéns"
//        } else if(tabuleiro[0][0] === 0 && tabuleiro[1][0] === 0 && tabuleiro[2][0] === 0){
//            return "O ganhou parabéns"
//        } else if(tabuleiro[0][1] === 0 && tabuleiro[1][1] === 0 && tabuleiro[2][1] === 0){
//            return "O ganhou parabéns"
//        } else if(tabuleiro[0][2] === 0 && tabuleiro[1][2] === 0 && tabuleiro[2][2] === 0){
//            return "O ganhou parabéns"
//        }
//        //Verifica X
//        if(tabuleiro[0][0] === 1 && tabuleiro[0][1] === 1 && tabuleiro[0][2] === 1){
//            return "X ganhou parabéns"
//        } else if(tabuleiro[1][0] === 1 && tabuleiro[1][1] === 1 && tabuleiro[1][2] === 1){
//            return "X ganhou parabéns"
//        } else if(tabuleiro[2][0] === 1 && tabuleiro[2][1] === 1 && tabuleiro[2][2] === 1){
//            return "X ganhou parabéns"
//        } else if(tabuleiro[0][0] === 1 && tabuleiro[1][1] === 1 && tabuleiro[2][2] === 1){
//            return "X ganhou parabéns"
//        } else if(tabuleiro[0][2] === 1 && tabuleiro[1][1] === 1 && tabuleiro[2][0] === 1){
//            return "X ganhou parabéns"
//        } else if(tabuleiro[0][0] === 1 && tabuleiro[1][0] === 1 && tabuleiro[2][0] === 1){
//            return "X ganhou parabéns"
//        } else if(tabuleiro[0][1] === 1 && tabuleiro[1][1] === 1 && tabuleiro[2][1] === 1){
//            return "X ganhou parabéns"
//        } else if(tabuleiro[0][2] === 1 && tabuleiro[1][2] === 1 && tabuleiro[2][2] === 1){
//            return "X ganhou parabéns"
//        }
//    }
//}

//var rodou = false

////Function perguntar
//function perguntar(){
//    console.log(game.tabuleiro())
//    var bot = null
//    if(jogarBot === null){
//    bot = () => {
//        return new Promise((resolve, reject) => {
//        rl.question('Deseja jogar com bot? (y or n)  ', (answer) => {
//            jogarBot = answer
//            resolve()
//        })
//        })
//    }
//    }
//    const question1 = () => {
//        return new Promise((resolve, reject) => {
//        rl.question('Posição X:  ', (answer) => {
//            posicao.x = answer
//            resolve()
//        })
//        })
//    }
//    const question2 = () => {
//        return new Promise((resolve, reject) => {
//        rl.question('Posição Y:  ', (answer) => {
//            posicao.y = answer 
//            joguei = true
//            resolve()
//        })
//        })
//    }
//    const main = async () => {
//        if(!rodou){
//        await bot()
//        }
//        await question1()
//        await question2()
//        rodou = true
//        if(joguei){
//            if(posicao.x === "" || posicao.x === null){
//                posicao.x = 0
//            }
//            if(posicao.y === "" || posicao.y === null){
//                posicao.y = 0
//            }
//            game.play(posicao.x, posicao.y)
//            console.clear()
//            if(!game.verifica()){
//            perguntar()
//            } else{
//                console.log(game.verifica())
//                console.log("Iniciando um novo jogo em 2 segundo")
//                setTimeout(() => {
//                    game.new()
//                    perguntar()
//                }, 2000);
//            }
//        }
//    }
//    main()
//}

////Start new Game
//game.new()
//perguntar()
