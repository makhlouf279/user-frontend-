
import axios from "axios";

const USER_REST_API_URL = "http://localhost:8080/api";

class UserService{

    getUsers(){
        return axios.get(USER_REST_API_URL);
    }

}

export default  new UserService();
