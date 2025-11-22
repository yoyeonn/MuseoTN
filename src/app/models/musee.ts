import { Commentaires } from "./commentaires";
export interface Musee {
    id: string;
    nom: string;
    localisation: string;
    photo: string;
    dateOuverture: string;
    ouvert: boolean;
    prixEntree: number;
    description: string;
    commentaires: Commentaires[];
}
