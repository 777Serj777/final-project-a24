import store from "../../store";

class Fetch {

    constructor () {
        this.baseURL = 'https://hipstagram-api.herokuapp.com';
    }

    sendRequest = async (path, config) => {

        let response = await fetch(`${this.baseURL}/${path}`, {
            ...config
        })

        return await response.json()
    }

    post = (path, body) => {

        console.log(body);

        return this.sendRequest(path, {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
            
        })

    }

    get = (path) => {

        return this.sendRequest(path, {
            method: 'GET',
            headers : {
                'Authorization': store.getState().currentUser.token,
            }
        })

    }


  
}

const api = new Fetch();


export  const userRegistration = (login, email, password) => api.post('auth/registration', {login, email, password})

export  const userLogin = (login, password) => api.post('auth/login', {login, password})


