const prompt = require('prompt-sync')({sigint: true})
function input(){
    let a = prompt('digite o primeiro valor: ').trim()
    let b = prompt('digite o segundo valor: ').trim()
    if(a == '' || b == ''){
        console.log('digite um valor valido');
        return input()
    } 
     if(isNaN(a) ||isNaN(b)){
        console.log('digite um valor valido');
        return input()
    } 
    if(a == ' ' || b == ' '){
        console.log('digite um valor valido');
        return input()
    }
        return [Number(a), Number(b)]
}

let adicionar = function somar(){ 
        let [a, b] = input()
        let result = a + b
        console.log(result)
}
exports.adicionar = adicionar

let multiplicar = function multipl(){
   let [a, b] = input()
   let result = a * b
   console.log(result)
}
exports.multiplicar = multiplicar

let porcentagem = function porcent(){
    console.log('O primeiro valor é a porcentagem e o segundo o valor');
    let [a, b] = input()
    let result = (a * b) / 100
    if(result < 0){
        let invert = result * -1
        console.log(invert)
    } else {
        console.log(result)
    }
}
 exports.porcentagem = porcentagem

 let subtrair = function subtra(){ 
    let [a, b] = input()
    let result = a - b
    console.log(result)
}
exports.subtrair = subtrair

let dividir = function divisao(){
   let [a, b] = input()
   if(b == 0){
       console.log('Um numero não pode ser divido por zero');
       return dividir()
   } else{
   let result = a / b
   console.log(result)
   }
}
exports.dividir = dividir


