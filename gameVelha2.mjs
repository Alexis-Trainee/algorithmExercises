// Verificar ganhador em linhas
// Pega o primeiro da linha e verificar se todos os elementos sao iguais à ele
// Caso sejam, tem um ganhador
// Caso não, não tem um ganhador
//module.exports = verifyLines, verifyDiagonal, verifyColumn, checkWinners;
import {cont} from './texte2.mjs';


const verifyLines = (arr) => {
    const vencedores = [];

    for(let i = 0; i < arr.length; i++) {
        const linha = arr[i];
        const elemento = linha[0];
        let vencedor = true;

        for(let indexDoElemento = 1; indexDoElemento < linha.length; indexDoElemento++) {
            if (elemento !== linha[indexDoElemento] ) {//tá comparando o primeiro elemento com os outros 2.
                vencedor = false;

            }else if (elemento === '-') {
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
    const diagonal2 = [arr[0][2], arr[1][1], arr[2][0]];

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
        console.log('PARABÉNS ',winners[0],' VOCÊ VENCEU CONGRATULATIONS!!!')
        console.log('Pressione CTRL + C para sair!!!\n\n\n')


    }else if(winners.length > 1){
        console.log('Game Invalid');
        console.log ('APERTE CTRL + C PARA SAIR!!!\n\n\n');

    }
    else if(winners.length===0 && cont>=9) {
        console.log ('NÂO HÁ GANHADOR O JOGO TERMINOU EMPATADO!!!');
        console.log ('APERTE CTRL + C PARA SAIR!!!\n\n\n');
    }

}




export { checkWinners };
//import {runGame} from './texte2.mjs';
//export {winners};
//const jogo = [['x', 'o', 'x'], ['x', 'x', 'x'], ['o', 'x', 'o']];//
// verifyLines(jogo);
// verifyColumn(jogo);
// verifyDiagonal(jogo);
//checkWinners(jogo); //

//const jogo2 = [['x', 'o', 'x'], ['o', 'o', 'o'], ['x', 'x', 'o']];
//checkWinners(jogo2); 
// verifyLines(jogo2);
// verifyColumn(jogo2);
// verifyDiagonal(jogo2);

//const jogo3 = [
//    ['o', 'o', 'x'], 
//    ['o', 'x', 'o'], 
//    ['x', 'o', 'x']
//];
//checkWinners(jogo3); 
//// verifyLines(jogo3);
//// verifyColumn(jogo3);
// verifyDiagonal(jogo3);
//// ALGORITMO
////
////

//console.log(verifyDiagonal(jogo3))

//export {verifyLines, verifyDiagonal, verifyColumn};
