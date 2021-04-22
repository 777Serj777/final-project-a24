import store from "../../store";

class Fetch {

    constructor () {
        this.baseURL = 'https://hipstagram-api.herokuapp.com';
    }

    sendRequest = async (path, config) => {

        let response = await fetch(`${this.baseURL}/${path}`, {
            ...config
        })

        console.log(response);

        return await response;
    }

    patch = (path, body) => {
      
        return this.sendRequest(path, {
            method: 'PATCH',
            headers : {
                'Authorization': store.getState().currentUser.token,
            },
            body: body
            
        })

    }
    post = (path, body) => {

        return this.sendRequest(path, {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
            
        })

    }
    get = (path, token) => {

        return this.sendRequest(path, {
            method: 'GET',
            headers : {
                'Authorization': (token) ? token : store.getState().currentUser.token,
                'Content-type': 'application/json'
            }
        })

    }
    delete = (path, token) => {

        return this.sendRequest(path, {
            method: 'DELETE',
            headers : {
                'Authorization': (token) ? token : store.getState().currentUser.token,
            }
        })

    }

}

const api = new Fetch();


export  const userRegistration = ({login, email, password}) => api.post('auth/registration', {login, email, password})
export  const getCurrentUser = (token) => api.get('users/current', token)
export  const getUsers = (login) => api.get(`users?search=${login}`)
export  const updateCurrentUser = (body) => api.patch(`users/current`, body)
export  const folllowUser = (_id) => api.get(`users/follow/${_id}`)
//export  const deleteUser = (_id) => api.delete(`users/${_id}`)
export  const userLogin = ({login, password}) => api.post('auth/login', {login, password})


