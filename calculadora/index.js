const prompt = require('prompt-sync')({sigint: true})
var funcoes = require('./funcao')

while(true){
console.log(`
         ________________________
        |                        |
        |    Qual sua operação   |
        |   1 - Adição           |
        |   2 - Subtração        |
        |   3 - Divisao          |
        |   4 - Multiplicação    |
        |   5 - Porcentagem      |
        |   0 - Sair             |
        |________________________|
`);
let inp = +prompt('')

if(inp == ''){
    console.log('Entrada invalida, digite novamente');
} else if(!isNaN(inp)){
    if(inp == 1){
        funcoes.adicionar()
    } else if(inp == 2){
        funcoes.subtrair()
    } else if(inp == 3){
        funcoes.dividir()
    } else if(inp == 4){
        funcoes.multiplicar()
    } else if(inp == 5){
        funcoes.porcentagem()
    } else if(inp == 0){
        break
    } 
    
} else {
    console.log('Entrada invalida, digite novamente');
}
}