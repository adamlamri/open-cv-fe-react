import React from "react";
import TextBoxButton from "../../component/TextBoxButton";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import clsx from "clsx";
import withStyles from "@material-ui/core/styles/withStyles";
import CountryService from "../../service/country/CountryService";
import CompanyService from "../../service/company/CompanyService";
import AddressSupportService from "../../service/country/AddressSupportService";

const marginTop = '5px';

const usestyles = {
    container: {
        width: '50%',
        minWidth: '300px',
        margin: 'auto',
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
    }
}

class CreateCompany extends React.Component<> {

    constructor(props) {
        super(props);

        this.state = {
            companyName: '',
            email: '',
            selectedCountryIso: '',
            selectedProvince: '',
            selectedDistrict: '',
            selectedWard: '',
            selectedVillage: '',
            countries: [],
            provinces: [],
            districts: [],
            wards: [],
            villages: [],
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

        AddressSupportService.getAllProvinces().then(res => {
            console.log(res);
            if (res && res.data) {
                this.setState({provinces: res.data})
            }
        })
            .catch(e => console.log(e));
    }

    openDialog = () => {
        this.setState({isDialogOpen: true});
    }

    closeDialog = () => {
        this.setState({isDialogOpen: false});
    }

    handleCreateButtonClick = () => {
        console.log("handleCreateButtonClick", this.state);
        let state = this.state;
        const name = state.companyName;
        const email = state.email;
        const countryIso = state.selectedCountryIso;
        const provinceId = state.selectedProvince;
        const districtId = state.selectedDistrict;
        const wardId = state.selectedWard;
        const villageId = state.selectedVillage;
        CompanyService.createCompany(name, email, countryIso, provinceId, districtId, wardId, villageId).then(res => {
            console.log(res);
            if (res && res.data) {
                console.log('Company ', res.data);
                this.setState({
                    selectedProvince: '',
                    districts: [],
                    wards: [],
                    villages: [],
                    selectedDistrict: '',
                    selectedWard: '',
                    selectedVillage: ''
                });
            }
        })
            .catch(e => console.log(e));
    }

    handleCompanyNameChange = (event) => {
        console.log("handleCompanyNameChange ", event.target.value);
        const name = event.target.value;
        this.setState({companyName: name});
    }

    handleEmailChanged = (event) => {
        const email = event.target.value;
        this.setState({email: email});
    }


    countrySelect = () => {
        return this.state.countries.map((country, index) => {
            return (<option value={country.iso} key={index}>{country.name}</option>);
        })
    }

    provinceSelect = () => {
        return this.state.provinces.map((province, index) => {
            return (<option value={province.provinceId} key={index}>{province.name}</option>);
        })
    }

    districtSelect = () => {
        return this.state.districts.map((district, index) => {
            return (<option value={district.districtId}>{district.name}</option>);
        })
    }

    wardSelect = () => {
        return this.state.wards.map((ward, index) => {
            return (<option value={ward.wardId}>{ward.name}</option>);
        })
    }

    villageSelect = () => {
        return this.state.villages.map((village, index) => {
            return (<option value={village.villageId} key={index}>{village.name}</option>);
        })
    }

    handleCountryChanged = (event) => {
        this.setState({selectedCountryIso: event.target.value});
    }

    handleProvinceChanged = (event) => {
        this.setState({
            selectedProvince: event.target.value,
            districts: [],
            wards: [],
            villages: [],
            selectedDistrict: '',
            selectedWard: '',
            selectedVillage: ''
        });

        AddressSupportService.getAllDistrictsByProvince(event.target.value).then(res => {
            console.log(res);
            if (res && res.data) {
                this.setState({districts: res.data})
            }
        })
            .catch(e => console.log(e));
    }

    handleDistrictChanged = (event) => {
        this.setState({
            selectedDistrict: event.target.value,
            wards: [],
            villages: [],
            selectedWard: '',
            selectedVillage: ''
        });

        AddressSupportService.getAllWardsByDistrict(event.target.value).then(res => {
            console.log(res);
            if (res && res.data) {
                this.setState({wards: res.data})
            }
        })
            .catch(e => console.log(e));
    }

    handleWardChanged = (event) => {
        this.setState({selectedWard: event.target.value, villages: [], selectedVillage: ''});

        AddressSupportService.getAllVillagesByWard(event.target.value).then(res => {
            console.log(res);
            if (res && res.data) {
                this.setState({villages: res.data})
            }
        })
            .catch(e => console.log(e));
    }

    handleVillageChanged = (event) => {
        this.setState({selectedVillage: event.target.value});
    }

    render() {
        const {classes} = this.props;
        const state = this.state;
        console.log('select: ', this.countrySelect());
        return (
            <div className={classes.container}>
                <TextBoxButton activeButton={state.companyName}
                               onClick={this.handleCreateButtonClick}
                               onTextChange={this.handleCompanyNameChange}
                               value={state.companyName}/>
                <div open={state.isDialogOpen} onClose={this.closeDialog} aria-labelledby="form-dialog-title"
                     className={clsx(classes.main, {[classes.mainOpen]: state.companyName})}>
                    <div className={classes.mainCenter}>
                        <div className={classes.fieldContainer}>

                            <FormControl className={classes.fieldMarginTop}>
                                <InputLabel htmlFor="age-native-simple">Country</InputLabel>
                                <Select
                                    native
                                    value={state.selectedCountryIso}
                                    onChange={this.handleCountryChanged}
                                    inputProps={{
                                        name: 'Country',
                                        id: 'age-native-simple',
                                    }}
                                >
                                    <option/>
                                    {this.countrySelect()}
                                </Select>
                            </FormControl>

                            <div className={classes.addressSupport}>
                                <FormControl className={classes.addressSupportElement}>
                                    <InputLabel htmlFor="age-native-simple">Province/City</InputLabel>
                                    <Select
                                        native
                                        value={state.selectedProvince}
                                        onChange={this.handleProvinceChanged}
                                        inputProps={{
                                            name: 'Province',
                                            id: 'age-native-simple',
                                        }}
                                    >
                                        <option/>
                                        {this.provinceSelect()}
                                    </Select>
                                </FormControl>

                                <FormControl
                                    className={classes.addressSupportElementLeft}>
                                    <InputLabel htmlFor="age-native-simple">District</InputLabel>
                                    <Select
                                        native
                                        value={state.selectedDistrict}
                                        onChange={this.handleDistrictChanged}
                                        inputProps={{
                                            name: 'Province',
                                            id: 'age-native-simple',
                                        }}
                                    >
                                        <option/>
                                        {this.districtSelect()}
                                    </Select>
                                </FormControl>
                            </div>
                            <div className={classes.addressSupport}>
                                <FormControl className={classes.addressSupportElement}>
                                    <InputLabel htmlFor="age-native-simple">Ward</InputLabel>
                                    <Select
                                        native
                                        value={state.selectedWard}
                                        onChange={this.handleWardChanged}
                                        inputProps={{
                                            name: 'Province',
                                            id: 'age-native-simple',
                                        }}
                                    >
                                        <option/>
                                        {this.wardSelect()}
                                    </Select>
                                </FormControl>

                                <FormControl
                                    className={classes.addressSupportElementLeft}>
                                    <InputLabel htmlFor="age-native-simple">Village</InputLabel>
                                    <Select
                                        native
                                        value={state.selectedVillage}
                                        onChange={this.handleVillageChanged}
                                        inputProps={{
                                            name: 'Province',
                                            id: 'age-native-simple',
                                        }}
                                    >
                                        <option/>
                                        {this.villageSelect()}
                                    </Select>
                                </FormControl>
                            </div>
                            <TextField className={classes.fieldMarginTop} label="Email"
                                       onChange={this.handleEmailChanged}/>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default withStyles(usestyles)(CreateCompany);
