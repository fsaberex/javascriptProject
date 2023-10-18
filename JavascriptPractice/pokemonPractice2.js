let pokeArray = [
    {
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
    },
        
    {
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
    },
        
    {
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
    },
        
    {
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
]

//incorporate filter foreach and map
//foreach to reset hp
//create three functions: forEach, filter, and map.

//Use For Each to reset to the base HP

pokeArray.forEach((pokemon) => {
    pokemon.hp = pokemon.baseHp;
  });


//Filter by the item

function findItem(x){
    for (let i = 0; i < pokeArray.length; i++){
        if(pokeArray[i].item != undefined) {
            return x.item;
        }
    }
}

console.log(pokeArray.filter(findItem));


//Map an item to each pokemon that does not have one

let updatedPokeArray = pokeArray.map((pokemon) => {
    if(!pokemon.item){
        return{ ...pokemon, item: 'Oran Berry' };
    }
    return pokemon;
});

console.log(updatedPokeArray);