const defaultAllFieldsValid = true;
const defaultErrorMessage = '';

class Validator {
  constructor(rulesOfFields) {
    this.rulesOfFields = rulesOfFields;
    this.result = this.defaultResult();
  }

  defaultResult() {
    let defaultResult = { isAllFieldsValid: defaultAllFieldsValid,
                          resultOfFields: []};
    for(let fieldName in this.ruleOfFields ) {
      defaultResult.resultOfFields[fieldName] = { isValid: true,
                                          errorMessage: defaultErrorMessage};
    }
    return defaultResult;
  }

  validate(formData) {
    for (let field in formData) {
      this.validateField(field);
    }
  }

  validateField(field) {
    let ruleOfFields = this.rulesOfFields[field];

  }
}