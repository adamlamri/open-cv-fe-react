import React from 'react';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import Validator, {IS_EMAIL, MAX_LENGTH, REQUIRED} from "../../ulti/Validator";
import LoginService from "../../service/LoginService";

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

class SignUp extends React.Component<> {

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
            errorMessage: '',
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

    handleSubmitLoginForm = async () => {
        const {loginForm} = this.state;
        const allFieldsValid = this.validator.validate(loginForm);

        if (allFieldsValid) {
            const signUp = await LoginService.signUp({
                userName: loginForm.userName,
                password: loginForm.password,
                firstName: loginForm.firstName,
                lastName: loginForm.lastName,
                email: loginForm.email,

            });
            if (signUp && signUp.status === 200) {
                window.location = "login"
            } else {
                this.setState({errorMessage: 'Cannot sign up. Please try agian'})
            }
        } else {
            this.setState({validationResult: this.validator.getValidationResult()});
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
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5" className={classes.title}>
                        Sign up
                    </Typography>
                    <div className={classes.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="firstName"
                                    variant="outlined"
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    onChange={this.handleTextFieldChange(fieldNames.firstName)}
                                    error={!validationResultOfFields[fieldNames.firstName].isValid}
                                    helperText={validationResultOfFields[fieldNames.firstName].errorMessage}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    onChange={this.handleTextFieldChange(fieldNames.lastName)}
                                    error={!validationResultOfFields[fieldNames.lastName].isValid}
                                    helperText={validationResultOfFields[fieldNames.lastName].errorMessage}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={this.handleTextFieldChange(fieldNames.email)}
                                    error={!validationResultOfFields[fieldNames.email].isValid}
                                    helperText={validationResultOfFields[fieldNames.email].errorMessage}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="userName"
                                    label="User Name"
                                    name="userName"
                                    onChange={this.handleTextFieldChange(fieldNames.userName)}
                                    error={!validationResultOfFields[fieldNames.userName].isValid}
                                    helperText={validationResultOfFields[fieldNames.userName].errorMessage}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handleTextFieldChange(fieldNames.password)}
                                    error={!validationResultOfFields[fieldNames.password].isValid}
                                    helperText={validationResultOfFields[fieldNames.password].errorMessage}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        {state.errorMessage}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.handleSubmitLoginForm}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <Box mt={5}>
                    {this.copyright}
                </Box>
            </div>);
    }
}

export default withStyles(styles)(SignUp);
