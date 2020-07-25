let cena = 200
let precnik = 14
let r = precnik/2    


povrsina = (r * r * Math.PI).toFixed(2)

console.log(`${povrsina} centimetara kvadratnih
cena je ${cena} dinara`)


let cenaPoCmu = (cena / povrsina).toFixed(2)

console.log(`cena pice je ${cenaPoCmu} dinara po kvadratnom cmu`)


