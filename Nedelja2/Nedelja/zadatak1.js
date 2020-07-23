let cena = 100 
let precnik = 5.642

povrsina = (precnik * precnik * Math.PI).toFixed(2)

console.log(`${povrsina} centimetara kvadratnih
cena je ${cena} dinara`)


let cenaPoCmu = (cena / povrsina).toFixed(2)

console.log(`cena pice je ${cenaPoCmu} dinara po kvadratnom cmu`)