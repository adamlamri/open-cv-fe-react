import AxiosImpl from "../../axios/AxiosImpl";

const USER_API_URL = '/api/v1/country';

class CountryService {
    static getAllCountries = () => {
        return AxiosImpl.get(`${USER_API_URL}/all`);
    }
}

export default CountryService;