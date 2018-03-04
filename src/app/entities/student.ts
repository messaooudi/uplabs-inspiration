import { ICycle } from "./cycle";
import { IFiliere } from "./filiere";
import { INiveau } from "./niveau";

export interface IStudent {
    id : String,
    cin : String,
    cne : String,
    nom : String,
    prenom : String,
    nationalite : String,
    cycle : ICycle,
    niveau : INiveau,
    filiere : IFiliere,
    avatar : String
}
