import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuIcon from "./MenuIcon";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import {firstColorLevel1, firstColorLevel2, firstColorLevel3, firstColorLevel7} from "../constant/ColorConstant";
import clsx from "clsx";

const useStyles = {
    container: {
        display: 'flex',
    },
    textFieldContainer: {
        flexGrow: 1,
        '& label.Mui-focused': {
            color: firstColorLevel1,

        },
        '& div.Mui-focused': {
            color: firstColorLevel1,
            borderBottom: `1px solid ${firstColorLevel3}`,

        },
        '& .MuiInput-underline:after': {
            borderBottom: `2px solid ${firstColorLevel1}`,
        },
        '& .MuiInput-underline:hover': {
            borderBottom: `1px solid ${firstColorLevel7}`,
        },
    },
    button: {
        height: '48px',
        border: `1px solid ${firstColorLevel2}`,
        color: firstColorLevel1,
        '&:hover': {
            backgroundColor: firstColorLevel7,
        },
        cursor: 'default',
    },
    buttonActivated: {
        backgroundColor: firstColorLevel1,
        color: firstColorLevel7,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: firstColorLevel1,
            color: firstColorLevel7,
        }
    }
}

class TextBoxButton extends React.Component<> {

    constructor(props) {
        super(props);
    }

    render() {

        const {classes, label, onClick, onTextChange, activeButton, value, icon} = this.props;
        return (
            <div className={classes.container}>
                <TextField
                    className={classes.textFieldContainer}
                    id="input-with-icon-textfield"
                    label={label || 'Create'}
                    onChange={onTextChange}
                    value={value}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <MenuIcon id={icon} width={'30px'} style={{margin: 0}} />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button
                    disabled={!value}
                    className={clsx(classes.button, {[classes.buttonActivated]: activeButton})}
                    onClick={onClick}>
                    Create
                </Button>
            </div>
        );
    }
}

export default withStyles(useStyles)(TextBoxButton);