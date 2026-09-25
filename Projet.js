const prompt = require("prompt-sync")();

const candidats=[];

let condition=true;
while(condition){
    let nombre = parseInt(prompt(`
         ==================================
            Gestion des Élections et Listes
                Électorales au Maroc
           ==================================

        1. Ajouter un nouveau candidat :

        2. Ajouter plusieurs candidats à la fois.

        3. Afficher la liste des candidats :

        4. Voter pour un candidat :

        5. Modifier les informations d'un candidat :

        6. Supprimer un candidat :

        7. Rechercher des candidats :

        8. Statistiques de l'élection :

        9. Quitter :
     
    Entrer : `)) ;

    switch(nombre){
        case 1:
            Ajouter_candidat();
            break;
        case 2:
            Ajouter_plusieurs_candidats();
            break;
        case 3:
            Afficher_la_list_des_candidats();
            break;
        case 4:
            Voter_pour_un_candidat();
            break;
        case 5:
            Modifier_informations_de_un_candidat();
            break;
        case 6:
            Supprimer_un_candidat();
            break;
        case 7:
            Rechercher_des_candidat();
            break;
        case 8:
            Statistiques_de_élection();
            break;                  
        case 9:
            condition=false
            break
        }
}

function Ajouter_candidat (){
                let newCin =prompt("CIN: ");
                
                let newNom =prompt("nom: ");
                let newPrenom =prompt("prenom: ");
                let newPartiPolitique =prompt("partiPolitique: ");
                let newAge =prompt("age: ");
                
                
               let newcondidat = {
                      CIN: newCin ,
                      nom:newNom,
                      prenom:newPrenom,
                      partiPolitique:newPartiPolitique,
                      age:newAge,
                      
                 }
                 candidats.push(newcondidat);
                 console.log(candidats);
                 console.log("Le candidat a été ajouté avec succès.");
}               

function Ajouter_plusieurs_candidats(){
    let nombreCondidat= parseInt(prompt("combien des condidat tu veux pour ajouiter?: "));
   for(let i=0;i<nombreCondidat;i++){
         Ajouter_candidat();
   } 
}

function Afficher_la_list_des_candidats(){

}

function Voter_pour_un_candidat(){

}

function Modifier_informations_de_un_candidat(){

}

function Supprimer_un_candidat(){

}

function Rechercher_des_candidat(){

}

function  Statistiques_de_élection(){

}