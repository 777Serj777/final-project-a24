import { useReducer} from "react";
import reducer from "./reducer";

const initState = {
    isValid: false,
    errors: {},
    data: {}
}

export  const useForm = () => {

    const [state, dispatch] = useReducer(reducer, initState);
    const {errors, data} = {...state};
    let isValid = true;
   
  
    const listOfValidationRules = {

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
            maxLength : {
                type: 16,
                message: 'login should not be more 16 characters',
           
            },
            pattern: {
                type: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g,
                message: 'password must be at least one digit'
            } 
        },
        firstName:  { 
            require: {
                type: false,
            },
            maxLength : {
                type: 30,
                message: 'first name should not be more 30 characters',
           
            },
            pattern: {
                type: /^^[a-zA-Zа-яА-я]+$/ig,
                message: 'first name must only characters'
            } 
        },
        lastName:  { 
            require: {
                type: false,
            },
            maxLength : {
                type: 30,
                message: 'last name should not be more 30 characters',
           
            },
            pattern: {
                type: /^^[a-zA-Zа-яА-я]+$/ig,
                message: 'last name must only characters'
            } 
        }
    }

    const handleValidationCheck = ({name, value}) => {
   
        if(!listOfValidationRules[name]) return;
    
        const rules = listOfValidationRules[name];
        
        for (const [rule] of Object.entries(rules)) {
            
            const {type, message} = rules[rule];
        
            switch (rule) {

                case 'require': {

                    if(!type && value.length === 0) {
                        dispatch({type: 'DELETE_ERROR', payload: {name}})
                        return;
                    }
                    else if(!type && value.length > 0) break;
                
                    if (type && value.length > 0) {
                        dispatch({type: 'DELETE_ERROR', payload: {name}})
                        break;
                    }
                           
                    dispatch({type: 'ADD_ERROR', payload: {name, message}})                  
                    isValid = false;
                    return; 
                }
                case 'minLength': {
               
                    if (type <= value.length) {
                        dispatch({type: 'DELETE_ERROR', payload: {name}})
                        break;
                    }
                    dispatch({type: 'ADD_ERROR', payload: {name, message}})
                    isValid = false;
                    return;
                }
                case 'maxLength': {

                    if (type > value.length) {
                        dispatch({type: 'DELETE_ERROR', payload: {name}})
                        break;
                    }
                    dispatch({type: 'ADD_ERROR', payload: {name, message}})
                    isValid = false;
                    return;
                }
                case 'pattern': {

                    if (type.test(value)) {
                        dispatch({type: 'DELETE_ERROR', payload: {name}})
                        break;
                    }
                    dispatch({type: 'ADD_ERROR', payload: {name, message}})
                    isValid = false;
                    return;
                }
                default: {
                    isValid = true;
                }
            }
        }

    }

    const handleChange = e => {
    
        const {name, value} = e.target;
        handleValidationCheck({name, value});
        dispatch({type: 'ADD_USER_DATA', payload: {[name]: value}})
    }
 
    const handleSubmit = e => {
        e.preventDefault();
    
        for (const [name, {value}] of Object.entries(e.target.elements)) { 
            handleValidationCheck({name, value});         
        }
        
        return (isValid) ? data : null; 
    }


    return [
        errors,
        handleChange,
        handleSubmit   
    ]

}
















