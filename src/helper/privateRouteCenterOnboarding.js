import React, { useEffect } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const history = useHistory();

    const globalState = useSelector((state) => state.centerOnboardReducer)

    console.log(globalState, "global state")


    useEffect(() => {
        console.log(globalState, "globalState")
        if (!globalState?.isCenterOnboardLoggedIn) {
            history.push('/center-onboard-login')
        }
    }, [])

    return (

        <Route {...rest} render={props => (
            <Component {...props} />
        )} />
    );
};

export default PrivateRoute;
