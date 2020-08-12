let Machamp = {
    img : "https://superherojacked.com/wp-content/uploads/2019/09/Machamp-Workout-2.jpeg",
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
    img : "https://i.pinimg.com/originals/54/35/df/5435dfa396528c20f4b05126bfe6a857.png",
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
    img : "https://www.hitc.com/static/uploads/2020/08/Magikarp-Pokemon-Go-Making-a-Splash.jpg",
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
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6luhQObhE5HZ1xE3eK5cHyO3tIsh1BEM_7Q&usqp=CAU://superherojacked.com/wp-content/uploads/2019/09/Machamp-Workout-2.jpeg",
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

function Winner(pokemons){
    let PokePwr = []
    let PokeWinner = []
    pokemons.forEach((pokemon)=>{PokePwr.push(pokemon.baseStats.Attack)
    PokePwr.sort((a,b)=> b - a)
    if(PokePwr[0] === pokemon.baseStats.Attack){
        PokeWinner.splice(0,1,(pokemon.name))
    }
    })


    return `Najjaci pokemon je ${PokeWinner} sa napadom od ${PokePwr[0]}`
}


let PokeSpeed = [Machamp.baseStats.Speed, Hitmonchan.baseStats.Speed, Magikarp.baseStats.Speed,Umbreon.baseStats.Speed]


let pokemoni = [Machamp,Hitmonchan,Magikarp,Umbreon]



const Abilities = (pokemon) => pokemon.forEach((pokemon) => console.log(pokemon.abilities))


let PokePwr = [Machamp.baseStats.Attack, Hitmonchan.baseStats.Attack, Magikarp.baseStats.Attack,Umbreon.baseStats.Attack]


export {Winner,Machamp,Magikarp,Hitmonchan,Umbreon,PokeSpeed,pokemoni,Abilities,PokePwr}