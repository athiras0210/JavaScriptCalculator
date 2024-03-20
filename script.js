//1 Display a number on the text field

function displayNumber(num) {
    result.value += num
}

//2 Clear the text field

function clearText() {
    result.value = ""
}

//3 Evaluate the expression

function evaluateNum() {
    // exp=result.value //exp=1+2 //eval is a js method for evaluate expressions
    // res=eval(exp) //exp(1+2)=3
    // result.value=res
    var input = result.value.replace('×','*');
    input = input.replace('÷','/');
    if(input.endsWith('%')){
        result.value =eval(input.replace('%','/100'));
    }
    else if(input.startsWith('√')){
        result.value = eval(input.replace('√','Math.sqrt(')+')')
    }
    else{
        result.value=eval(input);   
    }
}

//4 Remove last character from the text field

function removeLastCharacter() {
    result.value = result.value.slice(0, -1)
}