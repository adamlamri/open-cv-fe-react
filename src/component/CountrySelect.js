import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import clsx from "clsx";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import {firstColorLevel5} from "../constant/ColorConstant";
import MenuItem from "@material-ui/core/MenuItem";
import Country from "./Country";
import CountryService from "../service/country/CountryService";
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = {
    fieldMarginTop: {
        marginTop: 5,
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

}

class CountrySelect extends React.Component<> {

    constructor(props) {
        super(props);

        this.state = {
            countries: [],
        }

    }

    componentDidMount() {
        CountryService.getAllCountries().then(res => {
            console.log(res)
            if (res && res.data) {
                this.setState({countries: res.data});
            }
        })
            .catch(e => console.log(e));
    }

    countrySelect = () => {
        const {classes} = this.props;
        return this.state.countries.map((country, index) => {
            return (
                <MenuItem className={classes.countryItem} value={country.iso} key={index}><Country country={country}></Country>
                </MenuItem>);
        })
    }

    render () {
        const {classes, selectedCountryIso, onCountryChange} = this.props;

        return (
            <FormControl className={classes.fieldMarginTop}>
                <InputLabel htmlFor="age-native-simple">Country</InputLabel>
                <Select
                    value={selectedCountryIso}
                    onChange={onCountryChange}
                    inputProps={{
                        name: 'Candidate',
                        id: 'age-native-simple',
                        className: classes.selectedCountryItem
                    }}
                    MenuProps={{
                        className: classes.selectCountry
                    }}
                >
                    {/*<MenuItem className={classes.countryItem}/>*/}
                    {this.countrySelect()}
                </Select>
            </FormControl>
        );
    }

}

export default withStyles(useStyles)(CountrySelect);