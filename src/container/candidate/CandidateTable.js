import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {TableHead} from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import withStyles from "@material-ui/core/styles/withStyles";
import {firstColorLevel1, firstColorLevel5, firstColorLevel6, firstColorLevel7} from "../../constant/ColorConstant";
import CandidateService from "../../service/candidate/CandidateService";
import Country from "../../component/Country";

const header = ["Name", "Email", "Country", "Technology", "Address"];

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
    nameCell: {
        fontWeight: 600,
        cursor: 'pointer',
    }
}

class CandidateTable extends React.Component<> {

    constructor(props) {
        super(props);

        this.state = {candidates: []};
    }

    componentDidMount() {
        this.getCandidatesOfCurrentUser();
    }

    addressToString = (candidateAddress) => {
        let address = [];
        let i = 0;
        if (candidateAddress) {

            if (candidateAddress.villageDTO.name) {
                address[i++] = candidateAddress.villageDTO.name;
            }
            if (candidateAddress.wardDTO.name) {
                address[i++] = candidateAddress.wardDTO.name;
            }
            if (candidateAddress.districtDTO.name) {
                address[i++] = candidateAddress.districtDTO.name;
            }
            if (candidateAddress.provinceDTO.name) {
                address[i++] = candidateAddress.provinceDTO.name;
            }
            return address.join(', ');

        }
        return '';
    }

    renderTableRows = (candidates) => {
        const {classes} = this.props;

        if (typeof candidates !== "undefined") {
            return candidates.map((candidate, index) => {
                    console.log('BBB', candidate);
                    const rowClass = index % 2 ? classes.oddRow : classes.evenRow;
                    return (<TableRow className={rowClass} key={index}>
                        <TableCell className={classes.nameCell} onClick={() => {window.location = `/candidate/${candidate.candidateId}`}}>{candidate.fullName}</TableCell>
                        <TableCell align="right">{candidate.email}</TableCell>
                        <TableCell align="left">{candidate.country ? <Country country={candidate.country}/> : ''}</TableCell>
                        <TableCell align="right">{candidate.technologies.join(", ")}</TableCell>
                        <TableCell align="left">{this.addressToString(candidate.candidateAddress)}</TableCell>
                    </TableRow>)
                }
            );
        }
    };

    renderTableHeader = () => {
        const {classes} = this.props;

        return (<TableRow>
            <TableCell className={classes.headerCell}>{header[0]}</TableCell>
            <TableCell className={classes.headerCell} align="left">{header[1]}</TableCell>
            <TableCell className={classes.headerCell} align="left">{header[2]}</TableCell>
            <TableCell className={classes.headerCell} align="left">{header[3]}</TableCell>
            <TableCell className={classes.headerCell} align="left">{header[4]}</TableCell>
        </TableRow>)
    };

    getCandidatesOfCurrentUser = async () => {
        let candidates = [];
        await CandidateService.getCandidatesOfCurrentUser().then(res => {
            console.log('AAAA', res.data);
            candidates = res.data;
            this.setState({candidates: candidates})
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        const {classes} = this.props;
        console.log('render', this.state.candidates);
        return <table className={classes.table}>
            <TableHead className={classes.tableHeader}>
                {this.renderTableHeader()}
            </TableHead>
            <TableBody>
                {this.renderTableRows(this.state.candidates)}
            </TableBody>
        </table>
    }

}

export default withStyles(useStyles)(CandidateTable);