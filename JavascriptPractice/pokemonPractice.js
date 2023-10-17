let [p,b,c,s] = pokeData();

// function: I want you to make a function where 1 pokemon says hello to another pokemon in the console

    // Pikachu says hello to Bulbsaur

// I want you to make a battle function where one pokemon does one of it's attacks, and that actually affects the HP (health points) of the other pokemon


// add a method to one of the pokemon, to have it do something creative

/*p.eatFish = function(fish) {
    console.log(`${p.name} is eating ${fish.name}`);

    if (fish.isPoisonous) {
        p.isDead = true;
    }
}*/


function pokeData() {
    let c = {
            name: 'Charmander',
            baseHp: 24,
            hp: 24,
            fainted: false,
            type: 'fire',
            moves: [
                {name: 'flamethrower', power: 35, pp: 4},
                {name: 'stomp', power: 20, pp: 10},
                {name: 'bite', power: 18, pp: 15},
                {name: 'tackle', power: 15, pp: 20},
            ],
        }
        
        let s = {
            name: 'Squirtle',
            baseHp: 24,
            hp: 24,
            fainted: false,
            type: 'water',
            moves: [
                { name: 'water gun', power: 30, pp: 10 },
                { name: 'withdraw', power: 0, pp: 20 },
                { name: 'bubble', power: 20, pp: 15 },
                { name: 'tackle', power: 15, pp: 20 },
            ],
        }
        
        let p = {
            name: 'Pikachu',
            baseHp: 25,
            hp: 25,
            fainted: false,
            type: 'electric',
            moves: [
                { name: 'thundershock', power: 30, pp: 10 },
                { name: 'quick attack', power: 20, pp: 15 },
                { name: 'double team', power: 0, pp: 20 },
                { name: 'electro ball', power: 35, pp: 5 },
            ],
            item: 'Oran Berry',
            useItem: function(){
                if (this.item === 'Oran Berry' && this.hp < (25*.3333)){
                    console.log(`${this.name} uses ${this.item}!`);
                    console.log(`${this.name} HP ${this.hp = this.hp + 10}`);
                    this.item = undefined;
                    console.log(p);
                }
            }
        }
        
        
        let b = {
            name: 'Bulbasaur',
            baseHp: 22,
            hp: 22,
            fainted: false,
            type: 'grass/poison',
            moves: [
                { name: 'vine whip', power: 25, pp: 10 },
                { name: 'tackle', power: 15, pp: 20 },
                { name: 'leech seed', power: 0, pp: 15 },
                { name: 'poison powder', power: 0, pp: 20 },
            ],
        }
    
    return [p,b,c,s];
}

function wave(x, y){
    console.log(`${x.name} says hello to ${y.name}!`);
}

function attack(atkPoke, defPoke, attack){
    let newHealth = defPoke.hp - atkPoke.moves[attack].power;
    defPoke.hp = newHealth;
    console.log(`${atkPoke.name} uses ${atkPoke.moves[attack].name}!`);
    console.log(`${defPoke.name} HP ${defPoke.hp}`)
    if (defPoke.hp <= 0){
        defPoke.fainted = true;
        console.log(`${defPoke.name} has fainted!`);
    }
}

wave(s, b);
attack(c, p, 1);
p.useItem();
attack(p, c, 1);
attack(c, p, 1);

let addFive = (num) => num +5;

// let students = [
//     {
//         name: 'Jeff Benton',
//         grade: 87,
//         badStudent: false,
//         hobbies: [
//             {type: 'Gaming', hourPlayed: 2000},
//             {type: 'Golf', clubsInBag: 14}
//         ]
//     },
//     {
//         name: 'jexenia',
//         grade: 80,
//         badStudent: true,
//         hobbies: [
//             {type: 'Solo Traveling', dangerLvL: 6},
//             {type: 'Snorkeling', dangerLvL: 3},
//         ]
    
    
//     }
// ]

// let newArray = students.map((student) => {

//     console.log(student.hobbies);

//     return student.name;
// })

// let badStudents = students.filter((student) => {
//     if (student.badStudent) return true; 
    
//     return false;
// })

// let studentPassGrade = students.filter((student) => {
//     if (student.grade > 85) return true; 
    
//     return false;
// })

// console.log(badStudents);
// console.log(studentPassGrade);

// let studyCamp = {type: 'Study Camp', dangerLvl: 14};

// let campStudents = students.filter(student => student.campStudent).forEach(student => student.hobbies.push(studyCamp));

// console.log

//incorporate filter foreach and map
//foreach to reset hp


//create three functions: forEach, filter, and map.


/* For the Filter

    "We can filter by the item that I added" - Jeff

*/

let pokeItem = pokeData.filter((pokemon) => {
    if (pokemon.item)
})



/* For Each

    Easy to reset to the base HP

*/

/* For Mapping

    Maybe double all of their hps
    or give them all an item

*/