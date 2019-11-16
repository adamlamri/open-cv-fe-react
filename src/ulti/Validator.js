const defaultAllFieldsValid = true;
const defaultErrorMessage = '';

class Validator {
    constructor(rulesOfFields) {
        this.rulesOfFields = rulesOfFields;
        this.result = this.defaultResult();
        console.log(this.result);

    }

    getValidationResult() {
        return this.result;
    }

    defaultResult() {
        let defaultResult = {
            isAllFieldsValid: defaultAllFieldsValid,
            resultOfFields: {}
        };
        for (let fieldName in this.rulesOfFields) {


            defaultResult.resultOfFields[fieldName] = {
                isValid: true,
                errorMessage: defaultErrorMessage
            };
        }
        return defaultResult;
    }

    validate(formData) {
        for (let fieldName in formData) {
            let fieldToValidate = {};
            fieldToValidate[fieldName] = formData[fieldName];

            if (!this.validateField(fieldToValidate)) {
                this.result.isAllFieldsValid = false;
                return false
            }
        }
        this.result.isAllFieldsValid = true;
        return true;
    }

    validateField(field) {
        const fieldName = this.getFieldName(field);
        let ruleOfFields = this.rulesOfFields[fieldName];
        let valid = true;

        for (let index in ruleOfFields) {

            valid = this.validateFieldByRule(field, ruleOfFields[index]);

            if (!valid) {
                this.result.resultOfFields[fieldName].isValid = false;
                this.result.resultOfFields[fieldName].errorMessage = ruleOfFields[index].errorMessage;

                this.result.isAllFieldsValid = false;
                break;
            } else {
                this.result.resultOfFields[fieldName].isValid = true;
                this.result.resultOfFields[fieldName].errorMessage = defaultErrorMessage;
            }
        }
        return valid
    }

    validateFieldByRule(field, rule) {
        let fieldValue = this.getFieldValue(field);

        let ruleName = rule.type;
        if (fieldValue === undefined || fieldValue === null || fieldValue === '') {
            if (rule.type === 'required') {
                return false;
            }
        } else {
            switch (ruleName) {
                case 'maxLength':
                    let maxLength = rule.maxLength;
                    return fieldValue.length <= maxLength;
                case 'minLength':
                    let minLength = rule.minLength;
                    return fieldValue.length >= minLength;
                case 'isEmail':
                    let regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                    return regexEmail.test(fieldValue);
                case 'isInteger':
                    let regexInteger = /^[0-9]+$/;
                    return regexInteger.test(fieldValue);
                case 'notAllWhiteSpace':
                    break;
                case 'trim':
                    fieldValue = fieldValue.toString();
                    return fieldValue.trim() === fieldValue;
                case 'regex':
                    let regex = new RegExp(rule.regex);
                    return regex.test(fieldValue);
                default:
                    return true;
            }
        }
    }

    getFieldName(field) {
        if (field !== undefined && field !== null && Object.keys(field).length > 0) {
            return Object.keys(field)[0];
        }
        return undefined;
    }

    getFieldValue(field) {
        if (field !== undefined && field !== null && Object.keys(field).length > 0) {
            return Object.values(field)[0];
        }
        return undefined;
    }
}

export default Validator;

export const formData = {
    inviteeTypeId: 1,
    firstName: 'hung',
    middleName: 'thanh',
    lastName: 'nguyen',
    email: 'hungthanhnguyen28@gmail.com',
};
//REQUIRED
export const REQUIRED = {
    type: 'required',
    errorMessage: 'This field is required'
};

//MAXLENGTH
export const MAX_LENGTH = {
    type: 'maxLength',
    errorMessage: 'Maximum characters: ',
    maxLength: 256,
};

export const MIN_LENGTH = {
    type: 'minLength',
    errorMessage: 'Minimum characters: ',
    minLength: 0,
};

export const IS_EMAIL = {
    type: 'isEmail',
    errorMessage: 'Email is invalid'
};

export const IS_INTEGER = {
    type: 'isInteger',
    errorMessage: 'Please input numbers only'
};

export const NOT_ALL_WHITE_SPACE = {
    type: 'notAllWhiteSpace',
    errorMessage: 'Not allow white-space-only'
};

export const TRIM = {
    type: 'trim',
    errorMessage: 'Not allow white spaces at the end and the beginning'
};

export const REGEX = {
    type: 'regex',
    errorMsg: 'Not allow these special characters: \' " : $ \\',
    regex: '^[^"$:\\\\\']+$',
}

