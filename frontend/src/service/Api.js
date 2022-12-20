
function postOption(data){
    return {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
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

    static getProfile(id){
        return fetch(this.BASE_URL + "/profile/" + id)
    }

    static sendPlainte(data){
        return fetch(this.BASE_URL + "/plainte", postOption(data))
    }

    static login(data){
        return fetch(this.BASE_URL + "/login", postOption(data))
    }
}