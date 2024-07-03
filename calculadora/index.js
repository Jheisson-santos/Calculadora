const prompt = require('prompt-sync')({singit: true})
var soma = require('./adicao')
var diminuir = require('./subtra')
var divid = require('./div')
var vezes = require('./multip')
var porcentagem = require('./porcent')
console.log(`
         ________________________
        |                        |
        |    Qual sua operação   |
        |   1 - Adição           |
        |   2 - Subtração        |
        |   3 - Divisao          |
        |   4 - Multiplicação    |
        |   5 - Porcentagem      |
        |________________________|
`);
let inp = +prompt('')
if(!isNaN(inp)){
if(inp == 5){
    let num1 = +prompt('Digite a porcentagem: ')
    let num2 = +prompt('Digite o numero: ')
    porcentagem(num1, num2)
} else {
let num1 = +prompt('Digite o primeiro numero: ')
let num2 = +prompt('Digite o segundo numero: ')
if(!isNaN(num1, num2)){
if(inp == 1){
console.log(soma(num1, num2))
}else if(inp == 2){
console.log(diminuir(num1, num2));
}else if(inp == 3){
if(num2 != 0){
console.log(divid(num1, num2));
} else {console.log('Essa operação não é valida');}
}else if(inp == 4){
console.log(vezes(num1, num2));
}else{console.log('Entrada invalida, digite o numero novamente');}
} else {console.log('Entrada invalida');}}
} else {console.log('Entrada invalido');}