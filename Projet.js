const prompt = require("prompt-sync")();

const candidats=[{
cin : "AB123456",
nom : "Boushaba",
prenom : "Soufiane",
partiPolitique : "Indépendant",
age: 40,
electeurs: ["HG1565135", "HG524565" , "HG663559" ,"L256455"]
},
{
cin : "JE123456",
nom : "JAWAD",
prenom : "AMSA",
partiPolitique : "VERSTAPEND",
age: 17,
electeurs: ["HH26582" , "HH255452" , "FR556523" ]
},
{
cin : "HH123456",
nom : "Mohmade",
prenom : "bada",
partiPolitique : "PAM",
age: 30,
electeurs: ["H142536" , "JU46895" ]
},
{
cin : "AG543456",
nom : "khalide",
prenom : "waaaz",
partiPolitique : "Nkhla",
age: 32,
electeurs: ["B506455"]
}];

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

                for(let i=0;i<candidats.length;i++){
                    if(newCin === candidats[i].cin){
                       console.log("Ce candidat est deja ajouté.");
                       return;
                    }
                }
                
        
        
                let newNom =prompt("nom: ");
                let newPrenom =prompt("prenom: ");
                let newPartiPolitique =prompt("partiPolitique: ");
                let newAge =prompt("age: ");
                
                
               let newcondidat = {
                      cin: newCin ,
                      nom:newNom,
                      prenom:newPrenom,
                      partiPolitique:newPartiPolitique,
                      age:newAge,
                      electeurs:[]
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

function Afficher_la_list_des_candidats()
{
     
    for(let i = 0 ; i < candidats.length - 1; i++ )
    {
        for(let j = 0  ; j < candidats.length - 1 ; j++ )
        {
            if(candidats[j].electeurs.length < candidats[j+1].electeurs.length)
            {
                let swap = candidats[j];
                candidats[j] = candidats[j+1];
                candidats[j+1] = swap
                break;
            }
                

        }
    }
    
console.table(candidats);
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