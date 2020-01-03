import React from 'react';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import withStyles from "@material-ui/core/styles/withStyles";
import Validator, {IS_EMAIL, MAX_LENGTH, REQUIRED} from "../../ulti/Validator";
import CreateCompany from "./CreateCompany";
import CompanyTable from "./CompanyTable";

const styles = {
    '@global': {
        body: {},
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '10px',
        maxWidth: '500px',
        margin: 'auto',
    },
    avatar: {},
    form: {
        width: '100%', // Fix IE 11 issue.
    },
    submit: {},
    title: {
        textAlign: 'center',
    },
    copyRight: {}
};

class Company extends React.Component<> {

    constructor(props) {
        super(props);

        this.validator = new Validator(
            {
                firstName: [
                    REQUIRED,
                    MAX_LENGTH
                ],
                lastName: [
                    REQUIRED,
                    MAX_LENGTH
                ],
                userName: [
                    REQUIRED,
                    MAX_LENGTH,
                ],
                email: [
                    REQUIRED,
                    IS_EMAIL,
                    MAX_LENGTH
                ],
                password: [
                    REQUIRED,
                    MAX_LENGTH,
                ]
            }
        );
        this.state = {
            loginForm: {
                firstName: '',
                lastName: '',
                userName: '',
                email: '',
                password: '',
            },
            erroMessage: '',
            validationResult: this.validator.getValidationResult(),
        }


    }

    copyright = () => {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    Your Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    handleTextFieldChange = fieldName => {
        return event => {
            let field = {};
            const {loginForm} = this.state;
            loginForm[fieldName] = event.target.value;
            field[fieldName] = loginForm[fieldName];
            console.log(this.state, event.target.value);

            this.validator.validateField(field);
            let validationResult = this.validator.getValidationResult();
            this.setState({validationResult: validationResult});

        }
    }


    render() {
        const {classes} = this.props;
        const state = this.state;
        const fieldNames = {
            firstName: 'firstName',
            lastName: 'lastName',
            userName: 'userName',
            email: 'email',
            password: 'password',

        }

        const validationResultOfFields = state.validationResult.resultOfFields;
        return (
            <div>

                <Typography component="h1" variant="h5" className={classes.title}>
                    Company
                </Typography>
                <CreateCompany/>
                <CompanyTable/>
            </div>);
    }
}

export default withStyles(styles)(Company);
