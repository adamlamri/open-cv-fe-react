import React from 'react';
import CountryIcon from "./CountryIcon";
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = {
    countryContainer: {
        display: 'flex',
    },
    countryName: {

    }
}

class Country extends React.Component<> {

    render() {
        const {country, classes} = this.props;
        return (
            <div className={classes.countryContainer}>
            <CountryIcon iso={country.iso}
                         width={'24px'}
                         style={{marginRight: 10}}/> <span className={classes.countryname}>{country.name}</span>
            </div>
        )
    }

}

export default withStyles(useStyles)(Country);