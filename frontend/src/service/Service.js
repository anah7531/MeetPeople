import axios from 'axios';

const API_BASE_URL = "http://localhost8080/";

class MeetPeopleServie {

    creerCompte(membre){
        return axios.post(API_BASE_URL, membre);
    }

}

export default new MeetPeopleServie();