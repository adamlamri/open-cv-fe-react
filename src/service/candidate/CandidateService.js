import AxiosImpl from "../../axios/AxiosImpl";

const CANDIDATE_API_URL = '/api/v1/candidate';
const GET_CANDIDATES_OF_CURRENT_USER = '/allCandidatesOfCurrentUser';
const GET_CANDIDATE_DETAILS_OF_CURRENT_USER = '/details';

class CandidateService {
    static createCandidate = (fullName, email, countryIso, provinceId, districtId, wardId, villageId, addressDetail, skypeId,facebookLink, linkedinLink, technologies) => {
        const createCandidateDTO = {
            fullName: fullName,
            email: email,
            countryIso: countryIso,
            provinceId: provinceId,
            districtId: districtId,
            wardId: wardId,
            villageId: villageId,
            addressDetail: addressDetail,
            skypeId: skypeId,
            facebookLink: facebookLink,
            linkedinLink: linkedinLink,
            technologies: technologies
        };
        console.log(createCandidateDTO);
        return AxiosImpl.post(CANDIDATE_API_URL, null, createCandidateDTO);
    };

    static getCandidatesOfCurrentUser = () => {
        return AxiosImpl.get(`${CANDIDATE_API_URL}${GET_CANDIDATES_OF_CURRENT_USER}`, null);
    }

    static getCandidateDetailsByIdOfCurrentUser = (candidateId) => {
        return AxiosImpl.get(`${CANDIDATE_API_URL}${GET_CANDIDATE_DETAILS_OF_CURRENT_USER}?candidateId=${candidateId}`, null);
    }
}

export default CandidateService;
