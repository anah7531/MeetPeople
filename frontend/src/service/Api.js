
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

}