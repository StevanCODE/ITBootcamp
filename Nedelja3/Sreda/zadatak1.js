function maksimum(x,y,z){
    let max
    if(x > y && x > z){
        max = x
        return `X je najveci broj sa vrednoscu ${max}` 
    }
    else if(y > x && y > z){
        max = y
        return `Y je najveci broj sa vrednoscu ${max}`
    }
    else if(z > x && z > y){
        max = z
        return `Z je najveci broj sa vrednoscu ${max}`
    }
    else{
        return "Brojevi su jednaki"
    }
    
}

console.log(maksimum(6,7,9))