import endpoint from "../endpoints/endpoint";
import history from './history'
class RegisterService {

    registerManager(formValues){
        endpoint.post("/register",formValues);
        history.push('/');
    }
}
export default new RegisterService();