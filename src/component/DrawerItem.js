import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import clsx from "clsx";
import {firstColorLevel1, firstColorLevel3, firstColorLevel7} from "../constant/ColorConstant";
import Icon from "./MenuIcon";

const useStyles = {
    container: {
        width: 200,
        height: 48,
        borderStyle: 'solid',
        border: 0,
        display: 'flex',
        cursor: 'pointer',

        boxSizing: 'border-box',


    },
    containerLeft: {
        margin: '5px 0 0 0',
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: firstColorLevel3,
            borderRadius: '16px 0 0 16px',

        }
    },
    containerTop: {
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: firstColorLevel3,
            borderRadius: '16px 16px 0 0',

        },
        height: '64px',
        width: 'auto',
        alignItems: 'center',
    },
    containerSelected: {
        border: 0,
        background: firstColorLevel7,
        color: '#000000',
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: firstColorLevel7
        },
    },
    containerSelectedLeft: {
        borderRadius: '16px 0 0 16px',

    },
    containerSelectedTop: {
        borderRadius: '16px 16px 0 0',

    },
    img: {
        margin: 'auto',
        width: 40,
    },
    iconContainer: {
        width: 50,
        height: 48,
        display: 'flex',
        alignItems: 'center',
    },
    textContainer: {
        width: 150,
        height: 48,
        display: 'flex',
        alignItems: 'center',
    },
    textContainerLeft: {
        width: 150,
    },
    textContainerTop: {
        width: 'auto',
        paddingRight: '12px',
    },
};

class DrawerItem extends React.Component<> {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes, item, isChosen, position} = this.props;

        let containerPositionClass, containerPositionSelectedClass, textContainerPositionClass;
        switch (position) {
            case 'top':
                containerPositionClass = classes.containerTop;
                containerPositionSelectedClass = classes.containerSelectedTop
                textContainerPositionClass = classes.textContainerTop
                break;
            default:
                containerPositionClass = classes.containerLeft;
                containerPositionSelectedClass = classes.containerSelectedLeft;
                textContainerPositionClass = classes.textContainerLeft;
                break;
        }

        const iconSrc = isChosen ? item.iconSelectedUrl : item.iconUrl;
        const iconFill = isChosen ? firstColorLevel1 : '#ffffff';
        return (
            <div
                className={clsx(classes.container, containerPositionClass, {[containerPositionSelectedClass]: isChosen}, {[classes.containerSelected]: isChosen})}
                onClick={this.props.onClick}>
                <div className={classes.iconContainer}>
                    <Icon fill={iconFill} id={item.id}/>
                </div>
                <div className={clsx(classes.textContainer, textContainerPositionClass)}>
                    <span className={classes.text}>{item.name}</span>
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles)(DrawerItem);