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
//ex5 
let sumStartAt = ([5,6,2,6,9,1], index)
let result= 0
for (i=index+1; i<sumStartAt.length; i++){
result +=sumStartAt[i]
}
console.log(result)
//ex6
let sumUntil =(array,index) =>{
let result=0
for(i=array.length+1; i<sumStartAt.length; i--){
result +=sumUntil[i]
}
console.log(result)
}
//extented
//ex1
let min = [1,2,3];
let smallest = min[0];

		for(let i=1; i<min.length; i++){
			if(min[i] < smallest){
				smallest = min[i];   
			}
		}

		console.log(smallest);

//ex2
let max = [1,2,3];
let maximum = max[0];

		for(let i=1; i<max.length; i++){
		
		}

		console.log(maximum);
//ex6
let minMAx=[1,5,4,3];
let  smallest = min[0];
let maximum=max[0]
let result=[maximum,smallest]
for(let i=1; i<minMAx.length; i++){
    if(max[i] > maximum){
        maximum = max[i];   
    } 
    if(min[i] < smallest){
        smallest = min[i];   
    }
    }
console.log(result);
 //ex7
 let multiplyBy=(array,n) =>{
    let result=[];
    for (i=0; i<multiplyBy.length; i++){
        result.push(multiplyBy[i]*2);
    }
console.log(result)
 }  



