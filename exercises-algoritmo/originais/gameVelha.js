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
//
//
//
//
//

//export {verifylines, verifyDiagonal, verifycolumn, checkWinners};
