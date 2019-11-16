class LocalStorageManager {
    static getAccessToken = () => {
        return localStorage.getItem('accessToken');
    };

    static setAccessToken = accessToken => {
        localStorage.setItem('accessToken', accessToken);
    };

    static clearAccessToken = () => {
        localStorage.clear();
    };
}

export default LocalStorageManager;