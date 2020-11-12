//import{verifyLines, verifyDiagonal, verifyColumn, checkWinners} from './gameVelha2.js'
//const index= require('./gameVelha');
//$.getScript('/Documentos/algorithmExercises/gameVelha2.js', function()
//{

//import {verifyLines, verifyDiagonal, verifyColumn} from './gameVelha2.mjs'
// script is now loaded and executed.
// put your dependent JS here.
// what if the JS code is dependent on multiple JS files? 
//});
//import verifyLines from './gameVelha2.js'
//--------------------------------------------------------------------------------------//
export {cont}
import { checkWinners } from './gameVelha2.mjs';
import readlineSync from 'readline-sync';


console.log("**********JOGO DA VELHA**********\n");
let board = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
];

console.log('>>>A primeira jogada sempre se iniciará por  X <<<\n\n');
console.table(board);

let runGame = true;
let player = 'x';
let cont = 0;
// const readlineSync = require('readline-sync');

while(runGame){


    let test1= true;
    let line, column;

    while(test1) { 
        console.log('_________________________________________________________');
        line = readlineSync.question('  Digite um valor para a LINHA que esteja entre 0 e 2:\n');

        if (line>=0 && line<=2) {
            runGame = true;
            test1= true;
        }else {
            console.log ('>>>' ,line, 'NÂO É UM VALOR VALIDO PARA A LINHA!!!<<<\n');
            continue;  

        }
        break;
    }//test1

    let test2 = true;
    while(test2){
        console.log('_________________________________________________________');
        column = readlineSync.question('  Digite um valor para a COLUNA que esteja entre 0 e 2: \n');

        if(column>=0 && column<=2) {
            runGame =true;
            test2=true;

        }else {
            console.log ('>>>' ,column, 'NÂO É UM VALOR VALIDO PARA A COLUNA!!!<<<\n');
            continue;
            // return column;
        }
        break;
    }//teste2

    if(board[line][column]==='-'){
        board[line][column] = player;
        cont = cont+1;
        //console.table([line, column]);
        console.table(board);

    }else {
        console.log ('ESTÁ COORDENADA JÁ FOI PREENCHIDA. POR FAVOR, TENTE OUTRA COORDENADA!');
        continue;
    }



    if (cont >= 5) {
        checkWinners(board);

        //if (board[0][0]==='x' && board [0][1]==='x' && board [0][2]==='x'){console.log('vencedor');runGame = false;}
        //if (board[1][0]==='x' && board [1][1]==='x' && board [1][2]==='x'){console.log('vencedor');runGame = false;}
        //if (board[2][0]==='x' && board [2][1]==='x' && board [2][2]==='x'){console.log('vencedor');runGame = false;}

        //if (board[0][0]==='x' && board [1][1]==='x' && board [1][2]==='x'){console.log('vencedor');runGame = false;}
        //if (board[0][2]==='x' && board [1][1]==='x' && board [2][0]==='x'){console.log('vencedor');runGame = false;}

        //if (board[0][0]==='x' && board [1][0]==='x' && board [2][0]==='x'){console.log('vencedor');runGame = false;}
        //if (board[0][1]==='x' && board [1][1]==='x' && board [2][1]==='x'){console.log('vencedor');runGame = false;}
        //if (board[0][2]==='x' && board [1][2]==='x' && board [2][2]==='x'){console.log('vencedor');runGame = false;}       
        ////---------------------------------------------------------------------------------------------------------//
        //if (board[0][0]==='0' && board [0][1]==='0' && board [0][2]==='0'){console.log('vencedor');runGame = false;}
        //if (board[1][0]==='0' && board [1][1]==='0' && board [1][2]==='0'){console.log('vencedor');runGame = false;}
        //if (board[2][0]==='0' && board [2][1]==='0' && board [2][2]==='0'){console.log('vencedor');runGame = false;}

        //if (board[0][0]==='0' && board [1][1]==='0' && board [1][2]==='0'){console.log('vencedor');runGame = false;}
        //if (board[0][2]==='0' && board [1][1]==='0' && board [2][0]==='0'){console.log('vencedor');runGame = false;}

        //if (board[0][0]==='0' && board [1][0]==='0' && board [2][0]==='0'){console.log('vencedor');runGame = false;}
        //if (board[0][1]==='0' && board [1][1]==='0' && board [2][1]==='0'){console.log('vencedor');runGame = false;}
        //if (board[0][2]==='0' && board [1][2]==='0' && board [2][2]==='0'){console.log('vencedor');runGame = false;} 

        // break;

    }//while cont

    if(player === 'x') {
        player = '0';

    }else {
        player = 'x';

    }



    // if (cont >=9){
    //     console.log('NÂO HÁ GANHADOR O JOGO TERMINOU EMPATADO!!!');
    //     runGame= false;
    // }



}//runGame

runGame = false;
