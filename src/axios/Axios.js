import {Promise} from "q";
import axios from "axios";
import Constant from "../constant/Constant";
import LocalStorageManager from "../ulti/LocalStorageManager";

class Request {

    static sendRequest (config) {
        config.headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };
        if (LocalStorageManager.getAccessToken()) {
            config.headers.Authorization = `Bearer ${LocalStorageManager.getAccessToken()}`;
        }
        return new Promise((resolve, reject) => {
            axios.request(config).then(response => {
                resolve({data: response.data, error: null});
            }).catch(error => {
                if (!error.response) {
                    alert("Cannot connect to server");
                }
                if (error && error.response) {
                    resolve({data: null, error: error});
                }
            });
        })
    };

    static get(url, params) {
        const config = {
            method: 'get',
            baseURL: Constant.BASE_URL,
            url,
            params,
        }
        return this.sendRequest(config);
    }
}

export default Request;
