//1.log message on console
let greet = ()=> {
    console.log("1.a)");
    
    console.log("Good Morning, Today is Tuesday");
    console.log("==================================");
    
};
greet();


//2.arrow function with 3args and no return value
//a)multiply args 5,5,2
//b)invoke same arrow function with args 10,4. pass 3rd arg as 1

let multiply = (a,b,c=1)=> {
    let result=a*b*c;
    return result;
};

let res1= multiply(5,5,2);
let res2= multiply(10,4);
console.log("2.a) " + res1);
console.log("2.b) " + res2);
console.log("===================================");


//3. addition of 5args with return value
//a)100,100,200,349,756
//b)log returned value for a) and c)with a mesg
//c)Invoke smae arrow function for "I am","learning","ES6","features","in depth"

let addition = (p,q,r,s,t)=> {
    let add=p+q+r+s+t;
    return add;
};

let add1 = addition(100,100,200,349,756);
let add2 = addition("I am ","learning ","ES6 ","features ","in depth");

console.log("Addition of 100,100,200,349,756 is:", add1);
console.log("Addition of string is:", add2);