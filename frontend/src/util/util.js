

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
    }

}