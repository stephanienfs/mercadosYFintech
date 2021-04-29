import axios from "axios";

export class LoginService {
    constructor() {
        this.apiUrl='localhost:8080';
    }
    
    // headers = new HttpHeaders(
    //     {'Content-Type': 'application/json;charset=UTF-8'}
    // );
    
    login(mail, password){
        return axios.post(this.apiUrl+'/login',{mail: mail, password: password})
    }

}