import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import TextBoxButton from "../../component/TextBoxButton";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import CountryService from "../../service/country/CountryService";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TechnologyService from "../../service/TechnologyService";
import CandidateService from "../../service/candidate/CandidateService";
import {firstColorLevel1, firstColorLevel5} from "../../constant/ColorConstant";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "../../component/Icon";
import {IconConstants} from "../../constant/IconConstant";
import CountrySelect from "../../component/CountrySelect";
import Address from "../../component/Address";

const marginTop = '5px';

const useStyles = {
    container: {
        width: '50%',
        minWidth: '300px',
        margin: 'auto',
        color: firstColorLevel1

    },
    main: {
        height: 0,
        overflow: 'hidden',
    },
    mainOpen: {
        height: `auto`,
    },
    mainCenter: {
        display: 'flex',
        flexFlow: 'column',
    },
    fieldContainer: {
        display: 'flex',
        flexFlow: 'column',
    },
    addressSupport: {
        display: 'flex',
        marginTop: marginTop,
    },
    addressSupportElement: {
        minWidth: '50%',
    },
    addressSupportElementLeft: {
        marginLeft: '2%',
        minWidth: '48%',
    },
    fieldMarginTop: {
        marginTop: marginTop,
    },
    countryItem: {
        display: 'flex',
        alignItems: 'center',
        color: firstColorLevel1,
    },
    selectedCountryItem: {
        display: 'flex',
        alignItems: 'center',
        color: 'inherit',
    },
    selectCountry: {
        '& .MuiList-root': {
            backgroundColor: firstColorLevel5,
        }
    },
    autoCompleteTechnology: {
        backgroundColor: firstColorLevel5,
    }
}

class CreateCandidate extends React.Component<> {

    constructor(props) {
        super(props);

        this.state = {
            formData: {
                candidateName: '',
                email: '',
                dob: new Date('2014-08-18T21:11:54'),
                selectedCountryIso: '',
                selectedProvince: '',
                selectedDistrict: '',
                selectedWard: '',
                selectedVillage: '',
                addressDetail: '',
                skypeId: '',
                facebookLink: '',
                linkedinLink: '',
                selectedTechnologies: [],
            },

            countries: [],
            provinces: [],
            districts: [],
            wards: [],
            villages: [],
            technologies: [],
            isDialogOpen: false,
        };
    }

    componentDidMount() {
        CountryService.getAllCountries().then(res => {
            console.log(res)
            if (res && res.data) {
                this.setState({countries: res.data});
            }
        })
            .catch(e => console.log(e));

        TechnologyService.getCurrentUserTechnologies().then(res => {
            console.log(res);
            if (res && res.data) {
                this.setState({technologies: res.data})
            }
        })
            .catch(e => console.log(e));
    }

    handleCreateButtonClick = () => {
        console.log("handleCreateButtonClick", this.state);
        let state = this.state;
        const fullName = state.formData.candidateName;
        const email = state.formData.email;
        const countryIso = state.formData.selectedCountryIso;
        const provinceId = state.formData.selectedProvince;
        const districtId = state.formData.selectedDistrict;
        const wardId = state.formData.selectedWard;
        const villageId = state.formData.selectedVillage;
        const addressDetail = state.formData.addressDetail;
        const skypeId = state.formData.skypeId;
        const facebookLink = state.formData.facebookLink;
        const linkedinLink = state.formData.linkedinLink;
        const technologies = state.formData.selectedTechnologies;
        CandidateService.createCandidate(fullName, email, countryIso, provinceId, districtId, wardId, villageId, addressDetail, skypeId, facebookLink, linkedinLink, technologies).then(res => {
            console.log(res);
            if (res && res.data) {
                console.log('Candidate ', res.data);
                this.setState({
                    formData: {
                        candidateName: '',
                        email: '',
                        selectedCountryIso: '',
                        selectedProvince: '',
                        selectedDistrict: '',
                        selectedWard: '',
                        selectedVillage: '',
                        addressDetail: '',
                        skypeId: '',
                        facebookLink: '',
                        linkedinLink: '',
                        selectedTechnologies: [],
                    }
                });
            }
        })
            .catch(e => console.log(e));
    }

    handleCountryChanged = (event) => {
        const formData = this.state.formData;
        formData.selectedCountryIso = event.target.value;
        this.setState({formData});
    }

    handleProvinceChanged = (selectedProvinceId) => {
        const formData = this.state.formData;
        formData.selectedProvince = selectedProvinceId;
        formData.selectedDistrict = '';
        formData.selectedWard = '';
        formData.selectedVillage = '';
        this.setState({
            formData
        });
    }

    handleDistrictChanged = (selectedDistrictId) => {
        const formData = this.state.formData;
        formData.selectedDistrict = selectedDistrictId;
        formData.selectedWard = '';
        formData.selectedVillage = '';

        this.setState({
            formData,
        });
    }

    handleWardChanged = (selectedWardId) => {
        const formData = this.state.formData;
        formData.selectedWard = selectedWardId;
        formData.selectedVillage = '';
        this.setState({formData});

    }

    handleVillageChanged = (selectedVillageId) => {
        const formData = this.state.formData;
        formData.selectedVillage = selectedVillageId;
        this.setState(formData);
    }

    handleAddressDetailChanged = (newAddressDetail) => {
        const formData = this.state.formData;
        formData.addressDetail = newAddressDetail;

        this.setState({formData});
    }

    handleTextFieldChanged = (fieldName) => (event) => {
        const {formData} = this.state;
        formData[fieldName] = event.target.value;
        console.log("Formdata: ", formData);
        this.setState({formData});
    }

    handleTechnologyChange = (event, value) => {
        const formData = this.state.formData;
        formData.selectedTechnologies = value;
        console.log("chang", formData);
        this.setState(formData);
    }

    handleAddMoreTechnology = (event) => {
        if (event.key === 'Enter') {
            let newTech = event.target.value;
            let techs = this.state.technologies;
            let selectedTechs = this.state.formData.selectedTechnologies;
            let isInList = false;
            let isInSelectedList = false;
            techs.forEach(tech => {
                if (tech.toUpperCase() === newTech.toUpperCase()) {
                    isInList = true;
                    newTech = tech;
                }
            });
            selectedTechs.forEach(tech => {
                if (tech.toUpperCase() === newTech.toUpperCase()) {
                    isInSelectedList = true;
                    newTech = tech;
                }
            });
            if (!isInList) {
                this.setState({technologies: [...techs, newTech]});
            }
            if (!isInSelectedList) {
                this.handleTechnologyChange(event, [...this.state.formData.selectedTechnologies, newTech]);
            }
        }
    }

    handleDateChange = (event) => {
        const formData = this.state.formData;
        formData.dob = event.target.value;
        this.setState({formData});
    }

    render() {
        const {classes} = this.props;
        const state = this.state;
        console.log('render', state.formData);

        return (
            <div className={classes.container}>
                <TextBoxButton activeButton={state.formData.candidateName}
                               label="Create new candidate"
                               onClick={this.handleCreateButtonClick}
                               onTextChange={this.handleTextFieldChanged('candidateName')}
                               value={state.formData.candidateName}
                               icon='candidate'/>
                <div aria-labelledby="form-dialog-title"
                     className={clsx(classes.main, {[classes.mainOpen]: state.formData.candidateName})}>
                    <div className={classes.mainCenter}>

                        <div className={classes.fieldContainer}>

                            <CountrySelect selectedCountryIso={state.formData.selectedCountryIso}
                                           onCountryChange={this.handleCountryChanged}
                            >

                            </CountrySelect>
                            <Address onProvinceChanged={this.handleProvinceChanged}
                                     onDistrictChanged={this.handleDistrictChanged}
                                     onWardChanged={this.handleWardChanged}
                                     onVillageChanged={this.handleVillageChanged}
                                     onAddressDetailChanged={this.handleAddressDetailChanged}></Address>
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    dateFormat:"d M y",
                                }}


                            />
                            <Autocomplete
                                onChange={this.handleTechnologyChange}
                                classes={{paper: classes.autoCompleteTechnology}}
                                className={classes.fieldMarginTop}
                                options={state.technologies}
                                value={state.formData.selectedTechnologies}
                                renderInput={params => (
                                    <TextField {...params} label="Technology" fullWidth
                                               onKeyPress={this.handleAddMoreTechnology}/>
                                )}

                                multiple/>
                            <TextField className={classes.fieldMarginTop} label="Email"
                                       onChange={this.handleTextFieldChanged('email')}
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <Icon id={IconConstants.EMAIL.id} width={'24px'}
                                                         style={{margin: 0}}/>
                                               </InputAdornment>
                                           ),
                                       }}/>
                            <TextField className={classes.fieldMarginTop} label="Skype ID"
                                       onChange={this.handleTextFieldChanged('skypeId')}
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <Icon id={IconConstants.SKYPE.id} width={'24px'}
                                                         style={{margin: 0}}/>
                                               </InputAdornment>
                                           ),
                                       }}/>
                            <TextField className={classes.fieldMarginTop} label="Facebook link"
                                       onChange={this.handleTextFieldChanged('facebookLink')}
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <Icon id={IconConstants.FACEBOOK.id} width={'24px'}
                                                         style={{margin: 0}}/>
                                               </InputAdornment>
                                           ),
                                       }}/>
                            <TextField className={classes.fieldMarginTop} label="Linkedin link"
                                       onChange={this.handleTextFieldChanged('linkedinLink')}
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <Icon id={IconConstants.LINKEDIN.id} width={'24px'}
                                                         style={{margin: 0}}/>
                                               </InputAdornment>
                                           ),
                                       }}/>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default withStyles(useStyles)(CreateCandidate);