import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import AddressSupportService from "../service/country/AddressSupportService";

const useStyles = {

    addressSupport: {
        display: 'flex',
        marginTop: 5,
    },
    addressSupportElement: {
        minWidth: '50%',
    },
    addressSupportElementLeft: {
        marginLeft: '2%',
        minWidth: '48%',
    },
    fieldMarginTop: {
        marginTop: 5,
    },
}

class Address extends React.Component<> {
    constructor(props) {
        super(props);

        this.state = {
            provinces: [],
            districts: [],
            wards: [],
            villages: [],

            selectedProvince: '',
            selectedDistrict: '',
            selectedWard: '',
            selectedVillage: '',
            addressDetail: '',
        }
    }

    componentDidMount() {
        AddressSupportService.getAllProvinces().then(res => {
            console.log(res);
            if (res && res.data) {
                this.setState({provinces: res.data})
            }
        })
            .catch(e => console.log(e));
    }

    handleProvinceChanged = (event) => {

        this.setState({
            selectedProvince: event.target.value,
            selectedDistrict: '',
            selectedWard: '',
            selectedVillage: '',
            districts: [],
            wards: [],
            villages: [],
        });

        AddressSupportService.getAllDistrictsByProvince(event.target.value).then(res => {
            console.log(res);
            if (res && res.data) {
                this.setState({districts: res.data})
            }
        })
            .catch(e => console.log(e));
        this.props.onProvinceChanged(event.target.value);

    }

    handleDistrictChanged = (event) => {


        this.setState({
            selectedDistrict: event.target.value,
            selectedWard: '',
            selectedVillage: '',
            wards: [],
            villages: []
        });

        AddressSupportService.getAllWardsByDistrict(event.target.value).then(res => {
            console.log(res);
            if (res && res.data) {
                this.setState({wards: res.data})
            }
        })
            .catch(e => console.log(e));
        this.props.onDistrictChanged(event.target.value);

    }

    handleWardChanged = (event) => {

        this.setState({selectedWard: event.target.value, selectedVillage: '', villages: []});

        AddressSupportService.getAllVillagesByWard(event.target.value).then(res => {
            console.log(res);
            if (res && res.data) {
                this.setState({villages: res.data})
            }
        })
            .catch(e => console.log(e));
        this.props.onWardChanged(event.target.value);

    }

    handleVillageChanged = (event) => {

        this.setState({selectedVillage: event.target.value});
        this.props.onVillageChanged(event.target.value);

    }

    handleAddressDetailChanged = (event) => {
        const addressDetail = event.target.value;
        this.setState({addressDetail: addressDetail});
        this.props.onAddressDetailChanged(addressDetail);

    }

    provinceSelect = () => {
        return this.state.provinces.map((province, index) => {
            return (<option value={province.provinceId} key={index}>{province.name}</option>);
        })
    }

    districtSelect = () => {
        return this.state.districts.map((district, index) => {
            return (<option value={district.districtId} key={index}>{district.name} </option>);
        })
    }

    wardSelect = () => {
        return this.state.wards.map((ward, index) => {
            return (<option value={ward.wardId} key={index}>{ward.name}</option>);
        })
    }

    villageSelect = () => {
        return this.state.villages.map((village, index) => {
            return (<option value={village.villageId} key={index}>{village.name}</option>);
        })
    }

    render() {

        const {classes} = this.props;
        const {selectedProvince, selectedDistrict, selectedWard, selectedVillage} = this.state;
        console.log()
        return (
            <div>
                <div className={classes.addressSupport}>
                    <FormControl className={classes.addressSupportElement}>
                        <InputLabel htmlFor="age-native-simple">Province/City</InputLabel>
                        <Select
                            native
                            value={selectedProvince}
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
                            value={selectedDistrict}
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
                            value={selectedWard}
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
                            value={selectedVillage}
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
                <TextField className={classes.fieldMarginTop} label="Address detail"
                           onChange={this.handleAddressDetailChanged} fullWidth
                />
            </div>
        )
    }
}

export default withStyles(useStyles)(Address);