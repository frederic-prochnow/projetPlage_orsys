import { Pays } from "./pays";

export class Utilisateur {
    constructor(
        public prenom: string,
        public nom: string,
        public email: string,
        public motDePasse: string,
        public pays?: Pays,
        public id?: number
    ) {}
  }