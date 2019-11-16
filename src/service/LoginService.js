import AuthenticationService from './AuthenticationService';
import axios from "axios";
import Constant from "../constant/Constant";
// import bcrypt from 'bcrypt'


class LoginService {

    static login = (user) => AuthenticationService.authorize(user);

    static signUp = (user) => {
        const url = `${Constant.API_BASE_URL}signUp/normal`,
                axiosInstance = axios.create({
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: 'Basic Y2xpZW50X2lkOjEyMzQ=',
                    },
                });
        return axiosInstance.post(url, user);
    }
}

export default LoginService;