import AxiosImpl from "../../axios/AxiosImpl";

const COMPANY_API_URL = '/api/v1/company';
const GET_COMPANIES_OF_CURRENT_USER = '/allCompaniesOfCurrentUser';

class CompanyService {
    static createCompany = (name, email, countryIso, provinceId, districtId, wardId, villageId) => {
        const createCompanyDTO = {
            name: name,
            email: email,
            countryIso: countryIso,
            provinceId: provinceId,
            districtId: districtId,
            wardId: wardId,
            villageId: villageId
        };
        console.log(createCompanyDTO);
        return AxiosImpl.post(COMPANY_API_URL, null, createCompanyDTO);
    };

    static getCompaniesOfCurrentUser = () => {
        return AxiosImpl.get(`${COMPANY_API_URL}${GET_COMPANIES_OF_CURRENT_USER}`, null);
    }
}

export default CompanyService;
