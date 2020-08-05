let Machamp = {
    name: "Machamp",
    type: 'Fighting',
    species: "Superpower Pokemon",
    abilities: ["Guts", "No guard"],
    baseStats : {
        HP : 90,
        Attack: 130,
        Defense: 80,
        Speed: 55
    }
}


let Hitmonchan = {
    name: "Hitmonchan",
    type: 'Fighting',
    species: "Punching Pokemon",
    abilities: ["Keen Eye", "Iron Fist"],
    baseStats : {
        HP : 50,
        Attack: 105,
        Defense: 79,
        Speed: 76
    }
}


let Magikarp = {
    name: "Magikarp",
    type: 'Water',
    species: "Fish Pokemon",
    abilities: ["Swift Swim", "Rattled"],
    baseStats : {
        HP : 20,
        Attack: 10,
        Defense: 55,
        Speed: 80
    }
}


let Umbreon = {
    name: "Umbreon",
    type: 'Dark',
    species: "Moonlight Pokemon",
    abilities: ["Synchronize", "Inner Focus"],
    baseStats : {
        HP : 95,
        Attack: 65,
        Defense: 110,
        Speed: 65
    }
}


let pokemoni = [Machamp,Hitmonchan,Magikarp,Umbreon]

const Abilities = (pokemon) => pokemon.forEach((pokemon) => console.log(pokemon.abilities))

Abilities(pokemoni)


let PokeSpeed = [Machamp.baseStats.Speed, Hitmonchan.baseStats.Speed, Magikarp.baseStats.Speed,Umbreon.baseStats.Speed]

PokeSpeed.sort((a,b)=> a-b)
console.log(PokeSpeed)