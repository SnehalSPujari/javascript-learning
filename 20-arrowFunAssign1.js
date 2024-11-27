//1.log message on console
let greet = ()=> {
    console.log("Good Morning, Today is Tuesday");
    
};
greet();


//2.arrow function with 3args and no return value
//a)multiply args 5,5,2
//b)invoke same arrow function with args 10,4. pass 3rd arg as 1

let multiply = (a,b,c=1)=> {
    const result=a*b*c;
    console.log(result);
};

let res1= multiply(5,5,2);
let res2= multiply(10,4);
console.log(res1);
console.log(res2);

//3.

