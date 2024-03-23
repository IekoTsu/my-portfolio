
 

export const projectsData = 

{
    myCv : {
        id : 1 ,
        title : "Mon CV En HTML Et CSS",
        date : "11-02-2024",
        technologies : ["HTML", "CSS"],
        imgSrcAlt : [ [ require("@/assets/project_img/cv/cv_1.png"),"Jeune professionnel avec des cheveux bouclés, nom prénom, spécialité, adresse, numéro de téléphone, expérience professionnelle et une brève présentation" ], [ require("../assets/project_img/cv/cv_2.png"), "Illustration des diplômes, formations, langues parlées et savoir-être du candidat" ], [ require("../assets/project_img/cv/cv_3.png"), "Compétences et centres d'intérêt du candidat, icônes des réseaux sociaux GitHub et LinkedIn, date de dernière mise à jour" ]],
        link : "https://github.com/IekoTsu/Mon-CV"
    },

    cahierDeCharge : {
        id : 2 ,
        title : "Cahier des charges",
        date : "16-02-2024",
        technologies : ["Adobe acrobat", "Adobe Photoshop", "PDF"],
        imgSrcAlt : [[ require("../assets/project_img/cahier_des_charges/cdc_1.png"), "Premières pages du cahier des charges du site E-commerce La Socketterie avec un sommaire du contenu et le logo de l'entreprise" ], [ require("../assets/project_img/cahier_des_charges/cdc_2.png"), "Pages 3 et 4 du cahier des charges avec présentation de l'entreprise LA SOCKETTERIE" ], [ require("../assets/project_img/cahier_des_charges/cdc_3.png"), "Pages 5 et 6 du cahier des charges avec le reste de la présentation et les objectifs" ] ],
        link : "https://drive.google.com/file/d/1NNaqic0aL_GNN3yCPSKj6Im59B1sWcp_/view?usp=sharing"
    },

    commentField : {
        id : 3 ,
        title : "Espace de commentaire",
        date : "11-03-2024",
        technologies : ["HTML", "CSS", "JavaScript" ],
        imgSrcAlt : [ [ require("../assets/project_img/comments/comment_1.png"),"Espace de commentaire avec prénom et nom remplis" ], [ require("../assets/project_img/comments/comment_2.png"), "Espace de commentaire avec prénom et nom remplis, message d'erreur en rouge au-dessus des champs" ], [ require("../assets/project_img/comments/comment_3.png"), "Espace de commentaire avec prénom, nom et commentaire remplis, message d'erreur en rouge au-dessus des champs" ], [ require("../assets/project_img/comments/comment_4.png"), "Espace de commentaire avec prénom, nom et commentaire précédemment remplis. Un composant apparaît en haut avec le nom, le prénom et le commentaire" ]],
        link : "https://github.com/IekoTsu/Un_Espace_De_Commentaires_Dynamique"

    }
}
