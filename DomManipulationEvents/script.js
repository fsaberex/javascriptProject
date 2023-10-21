function parseNum(numInput){
    let num = numInput;

    num = parseInt(num, 10);

    if (!isNaN(num)) {
        console.log("The integer value is: " + num);
        return num;
    } else {
        alert("Invalid input. Please enter a valid number.");
    }

}

//grab the button and assign a function to it
//look into switch statements

let add = document.getElementById('additionButton');
add.addEventListener('click', () => {
    calculator('add')
})

function calculator(buttonId){

    console.log(buttonId);

    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    if(buttonId = "add"){
        result = parseNum(num1) + parseNum(num2);
        console.log(result);
        return result;
    }

    if(buttonId = "subtractButton"){
        result = parseNum(num1) - parseNum(num2);
        console.log(result);
        return result;
    }

    if(buttonId = "multiplyButton"){
        result = parseNum(num1) * parseNum(num2);
        console.log(result);
        return result;
    }

    if(buttonId = "divideButton"){
        result = parseNum(num1) / parseNum(num2);
        console.log(result);
        return result;
    }
    
}