import axios from 'axios';
import Constant from "../constant/Constant";
import LocalStorageManager from "../ulti/LocalStorageManager";

const BASE_URL = 'http://localhost:8080/';


class AuthenticationService {

    static authorize(user) {
        const params = new URLSearchParams();
        params.append('username', user.userName);
        params.append('password', user.password);
        params.append('grant_type', 'password');

        const url = `${BASE_URL}oauth/token`,
            axiosInstance = axios.create({
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: Constant.BASIC_TOKEN,
                },
            });
        return axiosInstance.post(url, params);
    }

    static isAuthenticated() {
        return !!LocalStorageManager.getAccessToken();
    }

    static hasRole(userRoles, roles) {
        if (!userRoles || userRoles.length === 0 || !roles || roles.length === 0)
            return false;
        else
            return userRoles.some(userRole => {
                return roles.includes(userRole);
            });
    }
}

export default AuthenticationService;