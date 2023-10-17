let myPokemon = pokeData();

console.log(myPokemon);


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



/* For the Filter

    "We can filter by the item that I added" - Jeff
    We want to go down to which pokemon is holding an item

    Start with the "mypokemon" data



*/


// let pokeItem = myPokemon.filter((pokemon) => {
//     // myPokemon.forEach(pokemon => {
//     //     if (pokemon.item){
//     //         return true
//     //     }
//     // });
//     //if (pokemon.item)
// })

let pokeItem = myPokemon.filter((pokemon) => {
    // for of (pokemon in myPokemon) {
        console.log(myPokemon.)
    }
})

// let pokeWithItem = myPokemon.filter((pokemon) =>{
//     return pokemon.item !== undefined;
// });

// console.log(pokeWithItem)

/* For Each

    Easy to reset to the base HP

*/

/* For Mapping

    Maybe double all of their hps
    or give them all an item

*/