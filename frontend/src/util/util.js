

export const util = {

    formatDate(date){
        return new Date(date).toLocaleDateString()
    },

    formatToAge(date){
        const ageDifMs = Date.now() - new Date(date).getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }, 

    getSexeValue(sexe){
        if(sexe === "H")
            return "Homme"
        else
            return "Femme"
    },

    getSituationFamilialeValue(idSituationFamiliale){
        switch(idSituationFamiliale){
            case 1 : 
                return "A des enfants"
            
            case 2 : 
                return "N'a pas d'enfants"
        }
    },

    getInteretValue(idInteret){
        switch(idInteret){
            case 1 :
                return "Relation sérieuse"
            case 2 : 
                return "Amitié"
            case 3 : 
                return "Relation non sérieuse"
            case 4 : 
                return "Mariage"
        }
    }

}