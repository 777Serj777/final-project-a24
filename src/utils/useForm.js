import { useEffect, useState } from "react";

export  const useForm = () => {
    
    const [state, setState] = useState({});
    const [error, setError] = useState({login: {message: 'ddd'}, email:  {message: 'fdgg'}});

    const handleChange = e => {
        handlecheckValid(e);
        setState(state => ({...state, [e.target.name]: e.target.value}))

    }


    // useEffect(() => {
    //     checkValid(state)
    // }, [state]);

    const validation = {

        login: {
            require: {
                type: true,
                message: 'Login required!',
            },
            minLength : {
                type: 1,
                message: 'min length 1 symbole!',
           
            },
            maxLength: {
                type: 20,
                message: 'max length 20 symbole!',
              
            },
            pattern: {
                type: /[A-Za-z]/g,
                message: 'Invalid is login',
               
            }
        },
        email: {
            require: {
                type: true,
                message: 'Email required!',
            },
            pattern: {
                type: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: 'Invalid is email!',    
            }
        },
        password: {
            require: {
                type: true,
                message: 'Password required!',
            },
            pattern: {
                type: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g,
                message: 'Invalid is password!'
            }
         
        }
    }

    const checkValid = (rule, type) => {

        switch (rule) {
            case 'require': {
                console.log(1);
            }
        }
    }

    const handlecheckValid = (e) => {

        const {name, value} = e.target;

        const rules = validation[name];

 
        for (const [rule, {type} = value] of Object.entries(rules)) {
            checkValid(rule, type)
        }




       
    }

   

    return [
        state,
        error,
        handleChange
    ]


}

