import React from 'react';
import CompanyService from "../../service/company/CompanyService";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {TableHead} from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import withStyles from "@material-ui/core/styles/withStyles";
import {firstColorLevel1, firstColorLevel5, firstColorLevel6, firstColorLevel7} from "../../constant/ColorConstant";

const header = ["Name", "Email", "Country", "Address"];

const useStyles = {
    table: {
        margin: '50px auto auto auto',
        minWidth: '80%'
    },
    tableHeader: {
        backgroundColor: firstColorLevel1,
    },
    headerCell: {
        backgroundColor: firstColorLevel1,
        color: firstColorLevel7,

    },
    oddRow: {
        backgroundColor: firstColorLevel6,
    },
    evenRow: {
        backgroundColor: firstColorLevel5,
    },
}

class CompanyTable extends React.Component<>{

    constructor(props) {
        super(props);

        this.state = {companies: []};
    }

    componentDidMount() {
        this.getCompaniesOfCurrentUser();
    }

    arrayAddressesToString = (companyAddresses) => {
        let string = '';

        companyAddresses.forEach(companyAddress => {
            string += this.addressToString(companyAddress);
        });
        console.log(string);
        return string;
    }

    addressToString = (companyAddress) => {
        let address = [];
        let i = 0;
        if (companyAddress) {

            if (companyAddress.villageDTO.name) {
                address[i++] = companyAddress.villageDTO.name;
            }
            if (companyAddress.wardDTO.name) {
                address[i++] = companyAddress.wardDTO.name;
            }
            if (companyAddress.districtDTO.name) {
                address[i++] = companyAddress.districtDTO.name;
            }
            if (companyAddress.provinceDTO.name) {
                address[i++] = companyAddress.provinceDTO.name;
            }
            return address.join(', ');

        }
        return '';
    }

    renderTableRows = (companies) => {
        const {classes} = this.props;

        if (typeof companies !== "undefined") {
            return companies.map((company, index) => {
                    console.log('BBB', company);
                    const rowClass = index % 2 ? classes.oddRow : classes.evenRow;
                    return (<TableRow className={rowClass} key={index}>
                        <TableCell >{company.name}</TableCell>
                        <TableCell align="right">{company.email}</TableCell>
                        <TableCell align="right">{company.country.name}</TableCell>
                        <TableCell align="left">{this.arrayAddressesToString(company.companyAddresses)}</TableCell>
                    </TableRow>)
                }
            );
        }
    };

    renderTableHeader = () => {
        const {classes} = this.props;

        return  (<TableRow>
                        <TableCell className={classes.headerCell}>{header[0]}</TableCell>
                        <TableCell className={classes.headerCell} align="left">{header[1]}</TableCell>
                        <TableCell className={classes.headerCell} align="left">{header[2]}</TableCell>
                        <TableCell className={classes.headerCell} align="left">{header[3]}</TableCell>
            </TableRow>)
    };

    getCompaniesOfCurrentUser = async () => {
        let companies = [];
        await CompanyService.getCompaniesOfCurrentUser().then( res => {
            console.log('AAAA', res.data);
            companies = res.data;
            this.setState({companies: companies})
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        const {classes} = this.props;
        console.log('render', this.state.companies);
        return <table className={classes.table}>
        <TableHead className={classes.tableHeader}>
                    {this.renderTableHeader()}
                </TableHead>
                <TableBody>
                    {this.renderTableRows(this.state.companies)}
                </TableBody>
        </table>
    }

}

export default withStyles(useStyles)(CompanyTable);