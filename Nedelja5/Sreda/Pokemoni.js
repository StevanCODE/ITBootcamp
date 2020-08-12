import {Winner,Machamp,Magikarp,Hitmonchan,Umbreon,PokeSpeed,pokemoni,Abilities,PokePwr} from "./Pokemon.js"



Abilities(pokemoni)

PokeSpeed.sort((a,b)=> a-b)
console.log(PokeSpeed)
PokePwr.sort((a,b)=> b - a)

let WinnerImg = pokemoni.filter((el)=> {
    if(el.baseStats.Attack == PokePwr[0]){
        return el.img
    }
})
WinnerImg = WinnerImg[0].img




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

