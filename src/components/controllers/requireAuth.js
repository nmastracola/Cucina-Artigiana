import auth from '../auth/auth'

 function requireAuth(nextState, replace) {
        if (!auth.loggedIn()) {
            replace({
                pathname: '/login',
                state: {nextPathname: nextState.location.pathname}
            })
        }
    }

export default requireAuth;