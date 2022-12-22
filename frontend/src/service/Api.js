
function postOption(data){
    return {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data),
       
    }
}

export class Api{

    static BASE_URL = "http://localhost:8080"

    static register(data){
        return fetch(this.BASE_URL + "/auth/register", postOption(data))
    }

    static getMatchsById(id){
        return fetch(this.BASE_URL + "/match/" + id)
    }

    static getAvailableProfile(id){
        return fetch(this.BASE_URL + "/profile/availableProfile/" + id)
    }

    static getConversation(myId, userId){
        return fetch(this.BASE_URL + `/message/${myId}/${userId}`)
    }

    static sendMessage(data){
        return fetch(this.BASE_URL + "/message", postOption(data))
    }

    static likeOrDislike(data){
        return fetch(this.BASE_URL + "/match", postOption(data))
    }

    static getProfile(myId, id){
        return fetch(this.BASE_URL + `/profile/detailProfil/${myId}/${id}`)
    }

    static sendPlainte(data){
        return fetch(this.BASE_URL + "/plainte", postOption(data))
    }

    static login(data){
        return fetch(this.BASE_URL + "/auth/login", postOption(data))
    }

    static sendEvaluation(data){
        return fetch(this.BASE_URL + "/evaluation/saveEvaluation", postOption(data))
    }

    static getInbox(myId){
        return fetch(this.BASE_URL + "/message/" + myId)
    }

    static getAvailableProfileBySexe(myId, sexe){
        return fetch(this.BASE_URL + `/profile/searchByGender/${myId}/${sexe}`)
    }

    static getAvailableProfileByAge(myId, ageMin, ageMax){
        return fetch(this.BASE_URL + `/profile/searchByAge/${myId}/${ageMin}/${ageMax}`)
    }
}