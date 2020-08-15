class Covek{
    constructor(ime,prezime,godinaRodjenja){
        this.ime = ime
        this.prezime = prezime
        this.godinaRodjenja = godinaRodjenja
    }
}

class Student extends Covek{
    constructor(ime,prezime,godinaRodjenja,godStudija,prosek){
        super(ime,prezime,godinaRodjenja)
        this.godStudija = godStudija
        this.prosek = prosek
    }
}

class StudentOsnovnihStudija extends Student{
    constructor(ime,prezime,godinaRodjenja,godStudija,prosek,smer){
    super(ime,prezime,godinaRodjenja,godStudija,prosek)
    this.smer = smer
    }
}

class StudentMasterSTudija extends StudentOsnovnihStudija{
    constructor(ime,prezime,godinaRodjenja,godStudija,prosek,smer,master){
    super(ime,prezime,godinaRodjenja,godStudija,prosek,smer)
    this.master = master
    }
}


class Zaposleni extends Covek{
    constructor(ime,prezime,godinaRodjenja,godinaZaposlenja,plata){
        super(ime,prezime,godinaRodjenja)
        this.godinaZaposlenja = godinaZaposlenja
        this.plata = plata
    }
}


class Nastavnik extends Zaposleni{
    constructor(ime,prezime,godinaRodjenja,godinaZaposlenja,plata,favPredmet,listaPredmeta){
        super(ime,prezime,godinaRodjenja,godinaZaposlenja,plata)
        this.favPredmet = favPredmet
        this.listaPredmeta = listaPredmeta
    }
}

class Profesor extends Nastavnik{
    constructor(ime,prezime,godinaRodjenja,godinaZaposlenja,plata,favPredmet,listaPredmeta,titula){
        super(ime,prezime,godinaRodjenja,godinaZaposlenja,plata,favPredmet,listaPredmeta)
        this.titula = titula
        
    }
}

class Asistent extends Nastavnik{
    constructor(ime,prezime,godinaRodjenja,godinaZaposlenja,plata,favPredmet,listaPredmeta,smer){
        super(ime,prezime,godinaRodjenja,godinaZaposlenja,plata,favPredmet,listaPredmeta)
        this.smer = smer
    }
}


class Sluzbenik extends Zaposleni{
    constructor(ime,prezime,godinaRodjenja,godinaZaposlenja,plata,odsek){
        super(ime,prezime,godinaRodjenja,godinaZaposlenja,plata)
        this.odsek = odsek

    }
}

let student1 = new Student("Stevan","Popovic",1995,"4. Godina","7.8")
let student2 = new StudentOsnovnihStudija("Stevan","Popovic",1995,"4. Godina","7.8","Bezbednost")
let student3 = new StudentMasterSTudija("Stevan","Popovic",1995,"4. Godina","7.8","Bezbednost","Terorizam")
let zaposleni1 = new Zaposleni("Petar","Petrovic",1985,2002,"1000EUR")
let nastavnik = new Nastavnik("Petar","Petrovic",1985,2002,"1000EUR","Fizika",["Fizika","Matematika"])
let profesor = new Profesor("Petar","Petrovic",1985,2002,"1000EUR","Fizika",["Fizika","Matematika"],"Docent")
let asistent = new Asistent("Petar","Petrovic",1985,2002,"1000EUR","Fizika",["Fizika","Matematika"],"Kvantna Fizika")
let sluzbenik = new Sluzbenik("Petar","Petrovic",1985,2002,"1000EUR","Studentska Sluzba")


console.log(student1.ime,student2.smer,student3.master,zaposleni1.godinaRodjenja,zaposleni1.plata,nastavnik.listaPredmeta,profesor.titula,asistent.smer,sluzbenik.odsek)