import AxiosImpl from "../../axios/AxiosImpl";

const API_URL = '/api/v1/addressSupport';


class AddressSupportService {
    static getAllProvinces = () => {
        return AxiosImpl.get(`${API_URL}/provinces`);
    }

    static getAllDistrictsByProvince = (provinceId) => {
        return AxiosImpl.get(`${API_URL}/districtsByProvince`, {provinceId: provinceId});
    }

    static getAllWardsByDistrict = (districtId) => {
        return AxiosImpl.get(`${API_URL}/wardsByDistrict`, {districtId: districtId});
    }

    static getAllVillagesByWard = (wardId) => {
        return AxiosImpl.get(`${API_URL}/villagesByWard`, {wardId: wardId});
    }
}

export default AddressSupportService;