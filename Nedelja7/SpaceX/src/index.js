import { getPastLaunches, getLaunchYear,info } from "../service"
	
var today = new Date();
var date = today.getFullYear()

const app = document.getElementById("app")
const select = document.createElement("select")
select.style.margin = "5vh"
app.append(select)

// let years = []
// let unique = []
// let i = 0


getPastLaunches().then(res => {

    console.log(res.data)
    res.data.forEach(el => {
        const div = document.createElement("div")
        const para = document.createElement("p")
        const para1 = document.createElement("p")
        const img = document.createElement("img")
        // years.push(el.launch_year)
        // unique = [...new Set(years)]
        // option.innerText = unique[i]
        // i++
        para.innerHTML = el.rocket.rocket_name
        para1.innerHTML = el.launch_year
        img.src = el.links.mission_patch
        img.style.width = "25vh"
        img.style.height = "25vh"
        div.append(para, para1, img)
        div.style.display = "inline-grid"
        app.append(div)




    })
})
const render = () => {
    app.innerHTML = ""
}

info().then(res => {
    const header = document.getElementById("header")
    header.innerText = res.data.name

})


for(let i = 2006; i <= date; i++){
    const option = document.createElement("option")
    option.innerText = i
    

option.addEventListener("click", (event) => {
    render()
    getLaunchYear(event.target.value).then(res => {
        console.log(res.data)
        res.data.forEach(el => {
            const div = document.createElement("div")
            const para = document.createElement("p")
            const para1 = document.createElement("p")
            const img = document.createElement("img")
            para.innerHTML = el.rocket.rocket_name
            para1.innerHTML = el.launch_year
            img.src = el.links.mission_patch
            img.style.width = "25vh"
            img.style.height = "25vh"
            div.append(para, para1, img,select)
            div.style.display = "inline-grid"
            select.append(option)
            app.append(div)
            

        })
    })
})
    select.appendChild(option)
}




