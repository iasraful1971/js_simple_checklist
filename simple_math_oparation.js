// sum  in normal way
var numberOne  = 50;
var numberTwo = 50;
 const sum = numberOne + numberTwo;
 console.log(sum);

//   sum in functionally 

function sumTwoValue (num1, num2){
    var total = num1 + num2;
    return total;
}
var result = sumTwoValue((numberOne),(numberTwo));
console.log('the result is: ' , result);

// subtraction in normal way 
var substraction =  numberOne - numberTwo;
console.log(substraction);

// substraction in functionally 
function substractionTwoNumber  (num1 , num2){
    var substraction  = num1 - num2;
    return substraction;
}
 var ans  = substractionTwoNumber((numberOne) , (numberTwo));
 console.log(ans);

// multiplay in basic 
var multiplay = numberOne * numberTwo;
console.log(multiplay);


//  multiplay In functionall 
function TwoNumberMultiplay (num1 , num2){
    var multiplay = num1 * num2;
    return multiplay;
}
var result = TwoNumberMultiplay((numberOne) ,(numberTwo));
console.log(result);


// division two number normally 
var division = numberOne   / numberTwo;
console.log(division);

// division in functionally 
function twoNumberDivision  (num1 , num2){
    var division = num1 / num2;
    return division;
}
 var result = twoNumberDivision((numberOne) ,(numberTwo));
 console.log(result);

// about modulas  
var num1 = 70;
var num2 = 20;
var modulas = num1 % num2;
console.log(modulas);
