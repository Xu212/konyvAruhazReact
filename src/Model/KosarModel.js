import { waitForElementToBeRemoved } from "@testing-library/react";

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
    elemHozzaad(id){
        this.#kosaram[this.#kosaram.findIndex((elem)=>{
            return elem.id == id
        })].db += 1
    }
    setKosar(kosaram){
        if(this.konyvVizsgalas(kosaram)){ 
            this.elemHozzaad(kosaram.id)
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