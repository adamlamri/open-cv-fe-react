class StringUtils {
    static     addressToString = (companyAddress) => {
        let address = [];
        let i = 0;
        if (companyAddress) {

            if (companyAddress.villageDTO && companyAddress.villageDTO.name) {
                address[i++] = companyAddress.villageDTO.name;
            }
            if (companyAddress.wardDTO && companyAddress.wardDTO.name) {
                address[i++] = companyAddress.wardDTO.name;
            }
            if (companyAddress.districtDTO && companyAddress.districtDTO.name) {
                address[i++] = companyAddress.districtDTO.name;
            }
            if (companyAddress.provinceDTO && companyAddress.provinceDTO.name) {
                address[i++] = companyAddress.provinceDTO.name;
            }
            return address.join(', ');

        }
        return '';
    }
}

export default StringUtils;