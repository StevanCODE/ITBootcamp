
function lifeSupply(numPerMonth,age){
    return (numPerMonth * 12) * (100 - age)
}

console.log(lifeSupply(10,26))