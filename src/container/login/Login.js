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
import LocalStorageManager from "../../ulti/LocalStorageManager";

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
                    userName: [
                        REQUIRED,
                        MAX_LENGTH,
                    ],
                    password: [
                        REQUIRED,
                        MAX_LENGTH,
                    ]
                }
        );
        this.state = {
            loginForm: {
                userName: '',
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
            const login = await LoginService.login({
                userName: loginForm.userName,
                password: loginForm.password,

            });
            if(login && login.status === 200) {
                LocalStorageManager.setAccessToken(login.data.access_token)
                window.location = "mainMenu"
            } else {
                this.setState({errorMessage: 'Cannot login. Please try again'})
            }
        }
        else {
            this.setState({validationResult: this.validator.getValidationResult()});
        }
    }

    render() {
        const {classes} = this.props;
        const state = this.state;
        const fieldNames = {
            userName: 'userName',
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
                            Login
                        </Typography>
                        <div className={classes.form}>
                            <Grid container spacing={2}>
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
                                            helperText="123"
                                            onChange={this.handleTextFieldChange(fieldNames.password)}
                                            error={!validationResultOfFields[fieldNames.password].isValid}
                                            helperText={validationResultOfFields[fieldNames.password].errorMessage}
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
                                Login
                            </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link href="/" variant="body2">
                                        Don't have an account? Sign up
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
