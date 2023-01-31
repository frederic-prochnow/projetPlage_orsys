import { Concessionnaire } from './concessionnaire';
import { Parasol } from "./parasol";
import { Statut } from "./statut";
import { Utilisateur } from "./utilisateur";

export class Location {
    constructor(
      public id: number,
      public dateHeureDebut: Date,
      public dateHeureFin: Date,
      public montantAReglerEnEuros: number,
      public remarques: string,
      public parasols: Parasol[],
      public locataire: Utilisateur,
      public statut: Statut,
      public concessionnaire: Concessionnaire
    ) {}
  }