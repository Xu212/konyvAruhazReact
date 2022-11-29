class KosarModel{
    #kosaram = []
    #db
    #osszar
    constructor(kosaram){
        this.#kosaram = kosaram;
        this.#db = 0;
        this.#osszar = 0;
    }
    getKosar() {
        return this.#kosaram
    }
    setKosar(kosaram){
        console.log(kosaram)
        if(this.konyvVizsgalas(kosaram)){
            console.log()
            this.#kosaram[this.#kosaram.findIndex((elem)=>{
                return elem.id = kosaram.id
            })].id = kosaram.db+1
        }
        else{
            kosaram.db=1
            this.#kosaram.push(kosaram)
        }
    }
    getDb(){
        return this.#kosaram.length+1
    }
    setDb(){
        this.#db = this.#db+1
    }
    konyvVizsgalas(adat){
        let letezik
        let i = 0
        while(i<this.#kosaram.length && adat.id!==this.#kosaram[i].id){
            i++;
        }
        if(i<this.#kosaram.length){
            letezik = true
        }
        else{
            letezik = false
        }
        return letezik
    }
    }

export default KosarModel