import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../../../components/Avatar/Avatar";
import Button from "../../../components/button/Button";
import ErrorMessage from "../../../components/errorMessage/ErrorMessage";
import Input from "../../../components/Input/Input";
import { useForm } from "../../../utils/from/useForm";
import StyleSetting from "./StyleSetting";
import updateCurrentUserThunk from "./updateCurrentUserThunk";





const Setting = (props) => {

    const data = useSelector(store => store.currentUser.data);
    const dispatch = useDispatch();
    const {newData, errors, handleChange, handleSubmit} = useForm();
    // const [isValid, setIsValid] = useState(false);

    const submitClick  = (e) => {
        e.preventDefault();
        const data = handleSubmit(e);
        dispatch(updateCurrentUserThunk(data));
    }

    // useEffect(() => {
    //     if(isValid) dispatch(updateCurrentUserThunk(newData));
    //     setIsValid(false)
    // }, [newData])
 
    return (
    
        <StyleSetting>         
                <form onSubmit = {submitClick} className = 'setting-user'>
                    <div className = 'setting-user__column-first'>
                        <Avatar imgUrl = {(newData?.avatar) ? newData.avatar : data.avatar}/>
                        <label className = 'setting-user__btn-change-av'>
                            Change photo
                            <input 
                                name = 'avatar' 
                                className = 'setting-user__avatar'  
                                type = 'file' 
                                onChange = {handleChange}
                            />
                            {(errors && errors['avatar']) && <ErrorMessage className = 'setting-user__error'>{errors['avatar']}</ErrorMessage>}
                        </label>
                        <Input
                            errors = {errors}
                            handleChange = {handleChange}
                            name = 'login' 
                            label = 'Login' 
                            defaultValue = {data.login}                   
                            placeholder = 'Enter you login...'
                         />
                    </div>
                    <div className = 'setting-user__column-second'>
                        <Input
                            errors = {errors}
                            handleChange = {handleChange}
                            name = 'firstName' 
                            label = 'First Name' 
                            defaultValue = {data.firstName}
                            placeholder = 'Enter you first name...'
                        />
                        <Input
                            errors = {errors}
                            handleChange = {handleChange} 
                            name = 'lastName' 
                            label = 'Last Name' 
                            defaultValue = {data.lastName}
                            placeholder = 'Enter you last name...'
                        />
                        <Input
                            errors = {errors}
                            handleChange = {handleChange} 
                            name = 'email' 
                            label = 'Email' 
                            defaultValue = {data.email}
                            placeholder = 'Enter you email...'
                        />
                    </div>
                    <Button 
                        type = 'submit'  
                        className = 'btn-save' 
                        value = 'Save profile'
                    />
                </form>
                <form className = 'change-password'>
                    <div className = 'change-password__wrap'>
                        <Input 
                            className = 'change-password__p' 
                            name = 'password' 
                            label = 'Password'
                            placeholder = 'Enter you password...'
                             
                        />
                        <Input 
                            className = 'change-password__p' 
                            name = 'confirmPassword' 
                            label = 'Confirm password'
                            placeholder = 'Enter you confirm password...'
                        />
                    </div>
                    <Button  className = 'btn-save' value = 'Save password'/>            
                </form>      
        </StyleSetting>
    
    
    )
}

export default Setting;