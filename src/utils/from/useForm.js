import { useEffect, useReducer} from "react";
import reducer from "./reducer";

const initState = {
    errors: {},
    newData: {}
}

export  const useForm = () => {

    const [state, dispatch] = useReducer(reducer, initState);
    const {errors, newData} = {...state};
    
    const validationRules = {
        
        login: {

            require: {
                type: true,
                message: 'Login required!',
            },
            minlength : {
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
            minlength: {
                type: 8,
                message: 'password must be at least 8 characters',
           
            },
            maxLength: {
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
            maxLength: {
                type: 30,
                message: 'first name should not be more 30 characters',      
            },
            pattern: {
                type: /^[a-zA-Zа-яА-я]+$/ig,
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
                type: /^[a-zA-Zа-яА-я]+$/ig,
                message: 'last name must only characters'
            } 
        },
        avatar:  { 

            fileLoad: {
                type: false
            },
            fileType: {
                type: /^(image)\/(|jpe?g|png)$/g,
                message: 'image should be file type: png, jpg, jpeg'
            },
            fileSize: {
                type: 4,
                message: 'file size should not be more than 4 MB'
            },     
        }
    }

    const methodsForValidation = {

        require: (value, type) => {
         
            if(!type && value.length === 0) return 'ok';
                             
            if (value.length > 0) return 'next';

            return 'error';
          
        },

        minlength: (value , type) => (type <= value.length) ? 'next' : 'error',
        
        maxLength: (value, type) => (type > value.length) ? 'next' : 'error',
        
        pattern: (value, type) => (type.test(value)) ? 'next' : 'error',
        
        fileLoad: (value, type) => {

            if(!type && value === undefined) return 'ok'

            if (value !== undefined) return 'next';

            return 'error';

        },

        fileType: (file, type) => (type.test(file.type)) ? 'next' : 'error', 
                        
        fileSize: (file, type) => ((file.size / 1024**2) < type) ? 'next' : 'error' 
    
    }
  
    const validation = (target) => {
        
        const name = target.name;
    
        if(!validationRules[name]) return true;
      
        const data = (target.type === 'text') ?  target.value : target.files[0];
        
        const rules = validationRules[name];
       
        for (const [rule] of Object.entries(rules)){
         
            const {type, message} = rules[rule];
  
            const methodForCheck = methodsForValidation[rule];

            const resultValidation = (methodForCheck) ? methodForCheck(data, type) : true
 
            if(resultValidation === 'ok') return [true];
            
            if(resultValidation === 'next') continue;
            
            if(resultValidation === 'error') return [false, message];

        }

        return [true];

    }

    const convertImg = file => {
        return new Promise((res, rej) => {
            const fileReader = new FileReader(file);
           
            fileReader.onload = () => {
                res(fileReader.result);
            }
            
            fileReader.onerror = e => rej(e)

            fileReader.readAsDataURL(file)
        })
    }
    
    const handleChange = e => validationData(e.target);
     

    const validationData = (element) => {

        const [isValid, message] = validation(element)
   
        const {name} = element;

        if(!isValid) {
            dispatch({type: 'ADD_ERROR', payload: {name, message}})
            return false;
        }

        dispatch({type: 'DELETE_ERROR', payload: {name}});

        const {type} = element;

        if(type === 'file'){
            
            if(!element.files[0]) return true;

            uploadImage(element.files[0], name);

            return true;
        }  
     
        dispatch({type: 'ADD_USER_DATA', payload: {[name]: element.value}})

        return true;
    }

    const uploadImage = async (file, name) => {

        await convertImg(file)
        .then(imgUrl => {
            dispatch({type: 'ADD_USER_DATA', payload: {[name]: imgUrl}})
        })
        .catch(err => console.log(err))
    }

    const handleSubmit =  e => {

        e.preventDefault();

        let isValid = true;

        const {elements} = e.target

        for (let i = 0; i < elements.length; i++ ) { 
           
            if(elements[i].type === 'submit') continue;

            const  res =  validationData(elements[i]);

            if(isValid) isValid = res;
    
        }    
  
        return (isValid) ? newData : null ; 
    }


    return {
        newData,
        errors,
        handleChange,
        handleSubmit   
    }

}
















