/*shopping cart item
    -add or remove items
    -change item quantities of added items*/

class Pizza {
    constructor(size, crust, sauce, toppings) {
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.toppings = toppings;
        this.calcPizzaPrice();
    }

    calcPizzaPrice() {
        this.basePrice = 17.99;
        let toppingPrice =  1.75;

        this.toppings.forEach(t => this.basePrice += toppingPrice)
        // if (this.toppings[1] = 'Half'){
        //     this.toppingBasePrice = this.toppingBasePrice/2;
        //     console.log(this.toppingBasePrice);
        // }
    }
}

// class toppings {
//     constructor(name, halfWhole, side) {
//         this.name = name;
//         this.halfWhole = halfWhole;
//         this.side = side;
//     }
// }

class Menu {
    constructor() {
        this.order = [];
        this.stage = "Ordering" // 'pay', 'confirmed', 
    }

    addToOrder() {

        //type of pizza

        //size (slice, s, m, l xl, 

        //toppings

        // l * 2
        // get array of ['pepperoni','pineapple']

        let qty = 2;
        let size = 'l';
        let crust = 'Cauliflour';
        let sauce = 'Marinara';
        let toppings = ['Pepperoni', 'Pineapple', 'Bell Peppers'];
        // let firstTopping = ['Half', 'Left'];
        // let secondTopping = ['Whole'];
        // toppings[0] = firstTopping;
        // toppings[1] = secondTopping;

        for (let x = 0; x < qty; x++) {
            this.order.push(new Pizza(size, crust, sauce, toppings))
        }
    }
}

let jeffsPizza = new Menu();

// function customizePizza(topping1, topping2, topping3, crust, sauce){
//     let customPizza = {
//         name: "Custom Pizza",
//         basePrice: 17.99,
//         toppings: [
//             { name: 'pepperoni', addedPrice: 1.75, halfWhole: 'half'},
//             { name: 'extra cheese', addedPrice: .75, halfWhole: 'whole'},
//             { name: 'green peppers', addedPrice: 1.75, halfWhole: 'half'},
//         ],
//         crust: "Cauliflour",
//         sauce: "Robust Red",
//     }

// }

//calculate price


let item = ['Custom Pizza','Slice'];
let question = `What would you like to order?`

// let choice = getSelection(question,item);
// console.log(choice);

function getSelection(question,options) {

    let string = "";
    for (let x = 0; x < options.length; x++) {
        string += '\n' + `${x+1}: ${options[x]}`;
    }

    let choice = prompt(`${question} \n ${string}`);
    return options[choice-1]
}

