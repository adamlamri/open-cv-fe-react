import AxiosImpl from "../axios/AxiosImpl";

const TECHNOLOGY_API_URL = '/api/v1/technology';

class TechnologyService {
    static getCurrentUserTechnologies() {
        return AxiosImpl.get(`${TECHNOLOGY_API_URL}/allTechnologiesOfCurrentUser`);
    }
}

export default TechnologyService;