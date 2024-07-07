const prompt = require('prompt-sync')({sigint: true})

let verificar  = function verfif(a){
    if(!isNaN(a)){
        return true
    } else{
        return false
    }
} 
exports.verificar = verificar

let adicionar = function somar(){ 
    let a = +prompt('digite o primeiro valor: ')
    let b = +prompt('digite o segundo valor: ')
    if(a == '' || b == ''){
        console.log('digite um valor valido');
        return this.adicionar()
    } else {
        if(verificar(a) && verificar(b)){
        let result = a + b
        console.log(result);
        }
        else{console.log('digite um valor valido')
            return this.adicionar()
        }
    }
}
exports.adicionar = adicionar

let multiplicar = function multipl(){
    let a = +prompt('digite o primeiro valor: ')
    let b = +prompt('digite o segundo valor: ')
    if (a == '' || b == ''){
        console.log('digite um valor valido');
        return this.multiplicar()
    }
    else {
        if(verificar(a) && verificar(b)){
    let result = a * b
    console.log(result);
    }
    else{console.log('digite um valor valido')
        return this.multiplicar()
    }
}}
exports.multiplicar = multiplicar

let porcentagem = function porcent(){ 
    let a = +prompt('digite a porcentagem: ')
    let b = +prompt('digite um valor : ')
    if (a == '' || b == ''){
        console.log('digite um valor valido');
        return this.porcentagem()
    }
    else {
        if(verificar(a) && verificar(b)){
    let result = b * (a / 100)
    if(result < 0){
     let arrumar = result * -1
     console.log(arrumar);
    }
    else{ console.log(result)}
} else{console.log('digite um valor valido')
    return this.porcentagem()
}
 
 }}
 exports.porcentagem = porcentagem

 let subtrair = function subtra(){ 
     let a = +prompt('digite o primeiro valor: ')
     let b = +prompt('digite o segundo valor: ')
     if (a == '' || b == ''){
         console.log('digite um valor valido');
         return this.subtrair()
     }
    else{ if(verificar(a) && verificar(b)){
     let result = a - b
     console.log(result);
     }
     else{console.log('digite um valor valido')
         return this.subtrair()
     }
}}
exports.subtrair = subtrair

let dividir = function divisao(){
    let a = +prompt('digite o primeiro valor: ')
    let b = +prompt('digite o segundo valor: ')
    if (a == '' || b == ''){
        console.log('digite um valor valido');
        return this.dividir()
    }
    else{
        if (verificar(a) && verificar(b)){
    if(b == 0){
        console.log('Não é possivel realizar divisão por 0');
        let numero = +prompt('digite um valor diferente de 0: ')
        return this.dividir(a, numero)
        
    } else {
        let result = a / b
        console.log(result);}
    }
    else{console.log('digite um valor valido')
        return this.dividir()
    }
}}
exports.dividir = dividir
