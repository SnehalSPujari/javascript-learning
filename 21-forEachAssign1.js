const arrayNum= [1,-7,40,502,-77,91,0,108,89,-601];
//1. Log array element with index using forEach() with arrow function

console.log("1.Log array using forEach");
arrayNum.forEach( (currentValue, index) => {
    console.log(currentValue,index); 
});

console.log("==========================");

console.log(" 2. log +ve nos. from array");
arrayNum.forEach( (currentValue) => {
    if(currentValue>=0)
        console.log(currentValue);        
});

console.log("================================");

console.log("3.find -ve nos. and display them using a new array");
const negArr=[];
arrayNum.forEach( (currentValue) => {
    if(currentValue < 0)
         negArr.push(currentValue);
});
console.log(negArr);


console.log("================================");

console.log("4. Even nos. ");
arrayNum.forEach( (currentValue)=> {
    if(currentValue%2 == 0)
        console.log(currentValue);        
});
console.log("==========================");

console.log("5.Sum of all elements of array");
let sum=0;
arrayNum.forEach( (currentValue) => {
    sum=sum+currentValue;
});
console.log("Sum is: ",sum);
console.log("==================================");

console.log("6.Even indexed array values");
arrayNum.forEach( (currentValue,index) => {
    if(index%2 == 0)
        console.log(currentValue);
});
console.log("==========================");






