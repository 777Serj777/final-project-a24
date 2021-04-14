import { useRef } from "react";
import { useEffect, useState } from "react";

export  const useForm = callbackSubmit => {
    const [state, setState] = useState({});
    const [errors, setError] = useState({});
    const [isValid, setIsValid] = useState(false);
   
    const handleChange = e => {

        const {name, value} = e.target;

        handlecheckValid({name, value});
    
        setState(state => ({...state, [name]: value}))
    }

    const handleSubmit = e => {
        e.preventDefault();
    
        for (const [name, {value}] of Object.entries(e.target.elements)) { 
            handlecheckValid({name, value});
        }

        (isValid) && callbackSubmit();
    }

    useEffect (() => {
        if(Object.keys(errors).length > 0) setIsValid(false); 
        return () =>  { setIsValid(true) }
        
    }, [errors]);

 

    const validation = {

        login: {
            require: {
                type: true,
                message: 'Login required!',
            },
            minLength : {
                type: 2,
                message: 'login must be at least 2 characters',
           
            },
            maxLength: {
                type: 30,
                message: 'login should not be more 30 characters',
              
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
            minLength : {
                type: 8,
                message: 'password must be at least 8 characters',
           
            },
            pattern: {
                type: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g,
                message: 'password must be at least one digit'
            }
         
        }
    }

    const changeErrors = (action) => {
        
        const {type, payload} = action;

        switch(type){

            case 'ADD_ERROR': {
                
                setError(errors => {

                    return {
                        ...errors,
                        [payload.name]: {
                            message: payload.message
                        }
                    } 
                })
                return;    
            }    
            case 'DELETE_ERROR': {
             
                setError(errors => {
                    let newErr = {...errors};
                    delete newErr[payload.name]; 
                    return newErr;
                })

            }           
        }
    }

    const handlecheckValid = ({name, value}) => {
   
        if(!validation[name]) return;
    

        const rules = validation[name];
        
        for (const [rule] of Object.entries(rules)) {
            
            const {type, message} = rules[rule];
        
            switch (rule) {

                case 'require': {
               
                    if (type && value.length > 0) {
                        changeErrors({type: 'DELETE_ERROR', payload: {name}})
                        break;
                    }
                    changeErrors({type: 'ADD_ERROR', payload: {name, message}})
                    return; 
                }
                case 'minLength': {

                    if (type <= value.length) {
                        changeErrors({type: 'DELETE_ERROR', payload: {name}})
                        break;
                    }
                    changeErrors({type: 'ADD_ERROR', payload: {name, message}})
                    return;
                }
                case 'maxLength': {

                    if (type > value.length) {
                        changeErrors({type: 'DELETE_ERROR', payload: {name}})
                        break;
                    }
                    changeErrors({type: 'ADD_ERROR', payload: {name, message}})
                    return;
                }
                case 'pattern': {

                    if (type.test(value)) {
                        changeErrors({type: 'DELETE_ERROR', payload: {name}})
                        break;
                    }
                    changeErrors({type: 'ADD_ERROR', payload: {name, message}})
                    return;
                }
            }
        }

    }





    return [
        state,
        errors,
        handleChange,
        handleSubmit
       
    ]


}


