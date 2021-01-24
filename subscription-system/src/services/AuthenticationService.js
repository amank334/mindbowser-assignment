import endpoint from "../endpoints/endpoint";

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        return endpoint.get('/basicAuth',
            { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username, password, isSignedIn) {
        sessionStorage.setItem("EMAIL", username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password),isSignedIn)
    }
    setupAxiosInterceptors(token,isSignedIn) {
        console.log(token,"token");
        endpoint.interceptors.request.use(
            (config) => {
                if (isSignedIn) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }

}

export default new AuthenticationService();