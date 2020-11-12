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
const readlineSync = require('readline-sync');

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
            return column;
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
        }


    if(player === 'x') {
        player = '0';

    }else {
        player = 'x';

    }

}//runGame


