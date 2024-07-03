let porcentagem = function porcent(a, b){ 
   let result = b * (a / 100)
   if(result < 0){
    let arrumar = result * -1
    console.log(arrumar);
   }
   else{ console.log(result)}

}
module.exports = porcentagem