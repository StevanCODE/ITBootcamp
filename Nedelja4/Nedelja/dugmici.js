const divSel = document.getElementById("div")
const para = document.createElement("p")
divSel.appendChild(para)
let i = 0
para.innerText = i

const btn1 = document.createElement("button")
btn1.innerText = "Order"
btn1.addEventListener("click",()=>{
    para.innerText = ++i
})
const btn2 = document.createElement("button")
btn2.innerText = "Order"
btn2.addEventListener("click",()=>{
    para.innerText = ++i
})
const btn3 = document.createElement("button")
btn3.innerText = "Order Now"
btn3.addEventListener("click",()=>{
    const para2 = document.createElement("p")
    if(i > 0){
    para2.innerText = `Narucili ste ${i} pice`
    i = 0
    para.innerText = i
}
else if(i == 0){
    para2.innerText = "Niste narucili picu"
}
    divSel.appendChild(para2)
})

const btn4 = document.createElement("button")
btn4.innerText = "Order Now"
btn4.addEventListener("click",()=>{
    const para2 = document.createElement("p")
    if(i > 0){
    para2.innerText = `Narucili ste ${i} pice`
    i = 0
    para.innerText = i
}
else if(i == 0){
    para2.innerText = "Niste narucili picu"
}
    divSel.appendChild(para2)
})


divSel.append(btn1,btn2,btn3,btn4)