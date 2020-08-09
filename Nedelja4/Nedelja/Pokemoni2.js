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


let pokemoni = [Machamp,Hitmonchan,Magikarp,Umbreon]

const Abilities = (pokemon) => pokemon.forEach((pokemon) => console.log(pokemon.abilities))

Abilities(pokemoni)


let PokeSpeed = [Machamp.baseStats.Speed, Hitmonchan.baseStats.Speed, Magikarp.baseStats.Speed,Umbreon.baseStats.Speed]

PokeSpeed.sort((a,b)=> a-b)
console.log(PokeSpeed)

let PokePwr = [Machamp.baseStats.Attack, Hitmonchan.baseStats.Attack, Magikarp.baseStats.Attack,Umbreon.baseStats.Attack]
PokePwr.sort((a,b)=> b - a)

let WinnerImg = pokemoni.filter((el)=> {
    if(el.baseStats.Attack == PokePwr[0]){
        return el.img
    }
})
WinnerImg = WinnerImg[0].img

console.log(WinnerImg)

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





//Body
const body = document.body.id = "body"
const bodySel = document.getElementById("body")
//Div
const div1 = document.createElement("div")
div1.className = "wrapper"
bodySel.appendChild(div1)

//Buttons
const btn1 = document.createElement("button")
btn1.id = "prikaz"
btn1.innerText = "PRIKAZI POKEMONE"
const btn2 = document.createElement("button")
btn2.id = "pobednik"
btn2.innerText = "PRIKAZI POBEDNIKA"
div1.append(btn1,btn2)

btn1.addEventListener('click',()=>{
    pokemoni.forEach(poke => {
        var div2 = document.createElement("div")
        const para = document.createElement('para')
        const img = document.createElement("img")
        img.src = poke.img
        img.style.width = "50vh"
        img.style.height = "50vh"

        para.innerText = `

    name: ${poke.name},
    type: ${poke.type}',
    species: ${poke.species},
    abilities: ${poke.abilities},
    baseStats : 
        HP : ${poke.baseStats.HP}

        Attack: ${poke.baseStats.Attack}

        Defense: ${poke.baseStats.Defense}

        Speed: ${poke.baseStats.Speed}

        `
        
        div1.appendChild(div2)
        div2.append(para)
        div2.appendChild(img)

        btn2.addEventListener('click',()=>{
            div2.remove()
            
        })
      })
      
})



btn2.addEventListener('click',()=>{ 
      const div3 = document.createElement("div")
      const para1 = document.createElement("p")
      const img1 = document.createElement("img")
      img1.src = WinnerImg
      para1.innerText = Winner(pokemoni)
      div1.appendChild(div3)
      div3.appendChild(para1)
      div3.appendChild(img1)
})


