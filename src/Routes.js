import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
// import Home from './pages/Users';
// import NewPlace from './components/NewPlace';
// import UserPlaces from './pages/UserPlaces';
// import UpdatePlace from './pages/UpdatePlace';
// import Auth from './views/Auth';
import { AuthContext } from './views/auth-context';
import { useAuth } from './views/auth-hook';
import activate from './views/activate';
import verified from './views/Verified';
import LoadingSpinner from './views/LoadingSpinner';

const Home = React.lazy(() => import('./pages/Users'));
const NewPlace = React.lazy(() => import('./components/NewPlace'));
const UserPlaces = React.lazy(() => import('./pages/UserPlaces'));
const UpdatePlace = React.lazy(() => import('./pages/UpdatePlace'));
const Auth = React.lazy(() => import('./views/Auth'));

export default function Routes() {
    const { token, login, logout, userId } = useAuth();
    const data = JSON.parse(localStorage.getItem('authData'));

    let routes;
    if (token) {
        routes = (
            <Switch>
                <Route path='/auth/verified' component={verified} exact />
                <Route path='/' component={Home} exact />
                <Route path='/:userId/places' component={UserPlaces} exact />
                <Route path='/places/new' component={NewPlace} exact />
                <Route path='/places/:placeId' component={UpdatePlace} exact />
                <Redirect to="/" />
            </Switch>
        );
    } else {
        routes = (
            <Switch>
                <Route path='/auth/verified' component={verified} exact />
                <Route path='/auth/activate' component={activate} exact />
                <Route path='/' component={Home} exact />
                <Route path='/:userId/places' component={UserPlaces} exact />
                <Route path='/auth' component={Auth} exact />

                {data ? <Redirect to="/auth/Verified" /> : <Redirect to="/auth" />}
            </Switch>
        );
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn: !!token, token: token, userId: userId, login: login, logout: logout }}>
            <Router>
                <MainNavigation />
                <main>
                    <Suspense fallback={
                        <div className="center">
                            <LoadingSpinner />
                        </div>
                    }>
                        {routes}
                    </Suspense>
                </main>
            </Router>
        </AuthContext.Provider>
    )
}
