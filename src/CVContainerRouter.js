import React from "react";
import {BrowserRouter, Redirect, Route} from "react-router-dom";

import './App.css';
import Login from './container/login/Login';
import SignUp from "./container/login/SignUp";
import Company from "./container/company/Company";
import AuthenticationService from "./service/AuthenticationService";
import {RoleMapper} from "./ulti/RoleMapper";
import Candidate from "./container/candidate/Candidate";
import CandidateDetails from "./container/candidate/CandidateDetails";

const PrivateRoute = ({component: Component, userRoles, allow, ...rest}) => {
    if (AuthenticationService.isAuthenticated()) {
        if (!Component) {
            return (
                <Route
                    {...rest}
                    render={props => (
                        <Redirect
                            to={{
                                pathname: '/mainMenu',
                                state: {from: props.location},
                            }}
                        />
                    )}
                />
            );
        } else {
            if (AuthenticationService.hasRole(userRoles, allow)) {
                return (
                    <Route
                        {...rest}
                        render={props => (
                            <Component {...props} userRoles={userRoles} allow={allow}/>
                        )}
                    />
                );
            } else {
                return (
                    <div style={{textAlign: 'center'}}>You don't have permission! </div>
                );
            }
        }
    }

    return <Redirect to="/login"/>;
};

class CV extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {userRoles} = this.props;
        console.log('render:', userRoles, this.props)

        return (
            <BrowserRouter>
                <div>
                    {/*<Route exact path="/" component={SignUp} />*/}
                    {/*<Route exact path="/login" component={Login} />*/}
                    <PrivateRoute exact path="/company" component={Company} userRoles={userRoles}
                                  allow={[RoleMapper.ADMIN, RoleMapper.BASIC_USER, RoleMapper.PREMIUM_USER]}/>
                    <PrivateRoute exact path="/candidate" component={Candidate} userRoles={userRoles}
                                  allow={[RoleMapper.ADMIN, RoleMapper.BASIC_USER, RoleMapper.PREMIUM_USER]}/>
                    <PrivateRoute exact path="/candidate/:id" component={CandidateDetails} userRoles={userRoles}
                                  allow={[RoleMapper.ADMIN, RoleMapper.BASIC_USER, RoleMapper.PREMIUM_USER]}/>
                    <Route
                        path="/login"
                        exact
                        render={props =>
                            AuthenticationService.isAuthenticated() ? (
                                <Redirect
                                    to={{
                                        pathname: '/company',
                                        state: {from: props.location},
                                    }}
                                />
                            ) : (
                                <Login/>
                            )
                        }
                    />
                    <Route
                        path="/"
                        exact
                        render={props =>
                            AuthenticationService.isAuthenticated() ? (
                                <Redirect
                                    to={{
                                        pathname: '/company',
                                        state: {from: props.location},
                                    }}
                                />
                            ) : (
                                <SignUp/>
                            )
                        }
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default CV;