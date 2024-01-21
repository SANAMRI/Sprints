//exercices
//Essential
//ex1
 let arrayFor =[5,3,4,6,7,9] 
    for(let i=0; i < arrayFor.length; i++) {
        console.log(arrayFor[i])   
 }  
 //ex2
 let arrayWhile = [4,2,8,9,10];
 let i=0;
 while(i < arrayWhile.length) {
     console.log(arrayWhile[i]);   
    i++;
}  
 //ex3
 let sum = [4,2,8,9,1];
    let result=0
    for(i=0; i<sum.length; i++){
        result +=sum[i]
    }
    console.log(result)

//ex4
let sumEveryOther = [10,2,6,9,2,3];
let result=0
for (i=0; i<sumEveryOther.length; i+=2){
result +=sumEveryOther[i]
}  
console.log(result)