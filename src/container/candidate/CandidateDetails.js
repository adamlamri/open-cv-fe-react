import React from 'react';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "../../component/Icon";
import withStyles from "@material-ui/core/styles/withStyles";
import {firstColorLevel2, firstColorLevel4, firstColorLevel5} from "../../constant/ColorConstant";
import Avatar from "@material-ui/core/Avatar";
import {IconConstants} from "../../constant/IconConstant";
import {CountryConstants} from "../../constant/CountryConstant";
import CountryIcon from "../../component/CountryIcon";
import CandidateService from "../../service/candidate/CandidateService";
import StringUtils from "../../ulti/StringUtils";


const useStyles = {
    container: {
        width: '100%',
    },
    containerTop: {
        width: '100%',
        height: 200,
        marginTop: 10,
        backgroundColor: firstColorLevel5,
        display: 'flex',
        alignItems: 'center',
        borderRadius: '100px 0 0 100px'
    },
    avatar: {
        width: 100,
    },
    containerTopLeft: {
        width: 200,
        height: 200,
    },
    containerTopRight: {
        width: '100%',
        display: 'flex',
        flexFlow: 'column',
        height: 200,
    },
    name: {
        fontSize: 40,
        fontWeight: 700,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        marginLeft: 10,
    },
    containerContact: {
        width: '100%',
        height: 100,
        display: 'flex',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    contact: {
        // width: '40%',
        marginLeft: 40,
        flexGrow: 1,
        minWidth: 300,
        color: firstColorLevel4,
        fontSize: 8,
        '& .MuiInput-underline:before': {
            borderBottom: 0,
            // color: firstColorLevel4,
        },
        '& .MuiInput-underline:after': {
            border: `1px solid ${firstColorLevel2} !important`,
        },
        '& .MuiInputBase-root': {
            color: firstColorLevel2,

        },


    },
    input: {
        fontSize: 12,
        textOverflow: 'ellipsis',
    },
    country: {
        width: 100,
        marginLeft: 20,
        '& .MuiSelect-icon': {
            display: 'none',
        }
    }

}

class CandidateDetails extends React.Component<> {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            candidate: {
                fullName: 'N/A',
                email: 'N/A',
                facebookLink: 'N/A',
                candidateAddress: 'N/A',
                phoneNumber: 'N/A',
                skypeId: 'N/A',
                linkedinLink: 'N/A',
            },
            disableFields: {
                email: true,
                facebookLink: true,
                candidateAddress: true,
                phoneNumber: true,
                skypeId: true,
                linkedinLink: true,
            },

        }

    }

    componentDidMount() {
        const candidateId = this.props.match.params.id;
        CandidateService.getCandidateDetailsByIdOfCurrentUser(candidateId).then(res => {
            console.log(res.data);
            if (res && res.data) {
                this.setState({candidate: res.data})
            }
        }).catch(e => console.log(e));
    }

    toggleTextField = (fieldName) => (event) => {
        console.log(this.state.disableFields);
        let disableField = this.state.disableFields;
        disableField[fieldName] = !disableField[fieldName];
        this.setState({disableField})
    }

    render() {
        const state = this.state;
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.containerTop}>
                    <Avatar className={classes.containerTopLeft}>H</Avatar>
                    <div className={classes.containerTopRight}>
                        <div className={classes.name}>
                            <span>{state.candidate.fullName}</span>
                            <TextField
                                select
                                disabled
                                className={classes.country}
                                inputRef={input => input && !state.disableFields.linkedinLink && input.focus()}
                                value="Germany"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CountryIcon iso={CountryConstants.VIETNAM.id} width={'24px'}
                                                         style={{margin: 0}}/>
                                        </InputAdornment>
                                    ),
                                    classes: {
                                        input: classes.input
                                    }
                                }}
                            >
                                <option>

                                    <CountryIcon iso={CountryConstants.GERMANY.iso} width={'16px'} style={{margin: 0}}/>
                                </option>
                            </TextField>
                        </div>
                        <div className={classes.containerContact}>
                            <TextField
                                className={classes.contact}
                                inputRef={input => input && !state.disableFields.email && input.focus()}
                                disabled={state.disableFields.email}
                                onBlur={this.toggleTextField('email')}
                                onDoubleClick={this.toggleTextField('email')}
                                value={state.candidate.email}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Icon id={IconConstants.EMAIL.id} width={'16px'} style={{margin: 0}}/>
                                        </InputAdornment>
                                    ),
                                    classes: {
                                        input: classes.input
                                    }
                                }}>
                            </TextField>
                            <TextField
                                className={classes.contact}
                                inputRef={input => input && !state.disableFields.phoneNumber && input.focus()}
                                disabled={state.disableFields.phoneNumber}
                                onBlur={this.toggleTextField('phoneNumber')}
                                onDoubleClick={this.toggleTextField('phoneNumber')}
                                value={state.candidate.phoneNumber}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Icon id={IconConstants.PHONE_NUMBER.id} width={'16px'}
                                                  style={{margin: 0}}/>
                                        </InputAdornment>
                                    ),
                                    classes: {
                                        input: classes.input
                                    }
                                }}>
                            </TextField>
                            <TextField
                                className={classes.contact}
                                inputRef={input => input && !state.disableFields.facebookLink && input.focus()}
                                disabled={state.disableFields.facebookLink}
                                onBlur={this.toggleTextField('facebookLink')}
                                onDoubleClick={this.toggleTextField('facebookLink')}
                                value={state.candidate.facebookLink}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Icon id={IconConstants.FACEBOOK.id} width={'16px'} style={{margin: 0}}/>
                                        </InputAdornment>
                                    ),
                                    classes: {
                                        input: classes.input
                                    }
                                }}>
                            </TextField>
                            <TextField
                                className={classes.contact}
                                inputRef={input => input && !state.disableFields.candidateAddress && input.focus()}
                                disabled={state.disableFields.candidateAddress}
                                onBlur={this.toggleTextField('candidateAddress')}
                                onDoubleClick={this.toggleTextField('candidateAddress')}
                                value={StringUtils.addressToString(state.candidate.candidateAddress)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Icon id={IconConstants.ADDRESS.id} width={'16px'} style={{margin: 0}}/>
                                        </InputAdornment>
                                    ),
                                    classes: {
                                        input: classes.input
                                    }
                                }}>
                            </TextField>
                            <TextField
                                className={classes.contact}
                                inputRef={input => input && !state.disableFields.skypeId && input.focus()}
                                disabled={state.disableFields.skypeId}
                                onBlur={this.toggleTextField('skypeId')}
                                onDoubleClick={this.toggleTextField('skypeId')}
                                value={state.candidate.skypeId}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Icon id={IconConstants.SKYPE.id} width={'16px'} style={{margin: 0}}/>
                                        </InputAdornment>
                                    ),
                                    classes: {
                                        input: classes.input
                                    }
                                }}>
                            </TextField>
                            <TextField
                                className={classes.contact}
                                inputRef={input => input && !state.disableFields.linkedinLink && input.focus()}
                                disabled={state.disableFields.linkedinLink}
                                onBlur={this.toggleTextField('linkedinLink')}
                                onDoubleClick={this.toggleTextField('linkedinLink')}
                                value={state.candidate.linkedinLink}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Icon id={IconConstants.LINKEDIN.id} width={'16px'} style={{margin: 0}}/>
                                        </InputAdornment>
                                    ),
                                    classes: {
                                        input: classes.input
                                    }
                                }}>
                            </TextField>
                        </div>

                    </div>

                </div>

            </div>
        );
    }

}

export default withStyles(useStyles)(CandidateDetails);