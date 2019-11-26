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


    static getIsDrawerOpen = () => {
        return localStorage.getItem('isDrawerOpen');
    };

    static toggleDrawer = () => {
        const isDrawerOpen = this.getIsDrawerOpen() === 'true';
        localStorage.setItem('isDrawerOpen', !isDrawerOpen);
    }
}

export default LocalStorageManager;