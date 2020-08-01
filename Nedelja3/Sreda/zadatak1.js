// function maksimum(x,y,z){
//     let max
//     if(x > y && x > z){
//         max = x
//         return `X je najveci broj sa vrednoscu ${max}` 
//     }
//     else if(y > x && y > z){
//         max = y
//         return `Y je najveci broj sa vrednoscu ${max}`
//     }
//     else if(z > x && z > y){
//         max = z
//         return `Z je najveci broj sa vrednoscu ${max}`
//     }
//     else{
//         return "Brojevi su jednaki"
//     }
    
// }

function maksimum(x,y,z){
    let max = []
    max.push(x,y,z)
    let rezultat = -Infinity
    for(i = 0; i < max.length; i++){
        if(x == y && x == z && z == y){
            return "Brojevi su jednaki"
    }
        else if(max[i] > rezultat){
            rezultat = max[i]
        }
            
    
    }
return `Najveci broj je ${rezultat}`
}


console.log(maksimum(-56,-89,-36))
