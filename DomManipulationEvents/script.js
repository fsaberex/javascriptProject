function parseNum(numInput){
    let num = numInput;

    num = parseInt(num, 10);

    if (!isNaN(num)) {
        return num;
    } else {
        alert("Invalid input. Please enter a valid number.");
    }

}


let add = document.getElementById('additionButton');
add.addEventListener('click', () => {
    calculator('Add');
})

let subtract = document.getElementById('subtractButton');
subtract.addEventListener('click', () => {
    calculator('Subtract');
})

let multiply = document.getElementById('multiplyButton');
multiply.addEventListener('click', () => {
    calculator('Multiply');
})

let divide = document.getElementById('divideButton');
divide.addEventListener('click', () => {
    calculator('Divide');
})


function calculator(buttonId){

    //console.log(buttonId);

    const num1 = parseNum(document.getElementById("num1").value);
    const num2 = parseNum(document.getElementById("num2").value);

    switch(buttonId){
        case 'Add':
            result = num1 + num2;
            break;
            //console.log(result);
            //return result;
        case 'Subtract':
            result = num1 - num2;
            //console.log(result);
            break;
            //return result;
        case 'Multiply':
            result = num1 * num2;
            //console.log(result);
            break;
            //return result;
        case 'Divide':
            if(num2 === 0){
                result = "Cannot Divide by Zero."
                break;
                //return result;
            }
            else{
                result = num1 / num2;
                //console.log(result);
                break;
                //return result;
            }
    }

    console.log(result);
    document.getElementById('result').textContent = `Result: ${result}`;
    
}