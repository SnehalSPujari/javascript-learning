let globalVariable = 300;
function outer(){
    let outerVariable =  100;
    let inner = function() {
        innerVariable = 200;
        console.log(innerVariable);
        console.log(outerVariable);
        console.log(globalVariable);  
    }

    return inner;
}
let result = outer(); //reurns function
result();

//alernative line for line 13
//outer()(;)