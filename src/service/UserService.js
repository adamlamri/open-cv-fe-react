import AxiosImpl from "../axios/AxiosImpl";

const USER_API_URL = '/api/v1/user';

class UserService {
    static getCurrentUserDetail() {
        return AxiosImpl.get(`${USER_API_URL}/getCurrentUserDetail`);
    }
}

export default UserService;