// Prodavnica



let cena = 250
let novac = 250


if (novac < cena) {
    console.log("Nemate dovoljno novca")
}

else if (novac >= cena) {
    novac -= cena
    console.log("Uspesno ste kupili proizvod", "Ostalo vam je:", novac, "dinara")
}