
function lifeSupply(numPerMonth,age){
    if(numPerMonth > 0 && age > 0 ){
    return (numPerMonth * 12) * (100 - age)
    }
}

console.log(lifeSupply(10,26))