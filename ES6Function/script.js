function parseNum(numInput){
    let num = numInput;

    num = parseInt(num, 10);

    if (!isNaN(num)) {
        return num;
    } else {
        alert("Invalid input. Please enter a valid number.");
    }

}


let Calculate = document.getElementById('calculateButton');
Calculate.addEventListener('click', () => {
    calculator();
})


function calculator(){

    const a = parseNum(document.getElementById("a").value);
    const b = parseNum(document.getElementById("b").value);
    const c = parseNum(document.getElementById("c").value);

    const quadraticRoots = (a, b, c) => {

        const discriminant = b * b - 4 * a * c;
      
        if (discriminant > 0) {
          const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
          const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
          return [root1, root2];
        } 
        
        else if (discriminant === 0) {
          const root = -b / (2 * a);
          return [root];
        } 
        
        else {
          const realPart = -b / (2 * a);
          const imaginaryPart = Math.sqrt(Math.abs(discriminant)) / (2 * a);
          return [`${realPart} + ${imaginaryPart}i`, `${realPart} - ${imaginaryPart}i`];
        }

      };

    const result = quadraticRoots(a, b, c);
    document.getElementById('result').textContent = `Result: ${result}`;
    
}


