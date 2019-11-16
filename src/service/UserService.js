import Request from "../axios/Axios";

const USER_API_URL = '/api/v1/user';

class UserService {
    static getCurrentUserDetail() {
        return Request.get(`${USER_API_URL}/getCurrentUserDetail`);
    }
}

export default UserService;