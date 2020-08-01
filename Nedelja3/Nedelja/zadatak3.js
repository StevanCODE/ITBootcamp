const deljivi = niz => {
    for(let i = 0; i < niz.length; i++){
        if(niz[i] % 5 === 0){
            console.log(niz[i])
        }
    }
}


brojevi = [1,2,3,5,6,7,8,10,13,15,18,21,24,27,30]

deljivi(brojevi)