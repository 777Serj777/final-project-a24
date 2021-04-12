import './style.scss';



const Input = ({children, label, ...props}) => {


    return (
       <p className = 'input'>
           {(label) && <label htmlFor="">{label}</label>}
           <input
                {...props} 
                type = {(props.type) ? props.type : "text"}
            />  
       </p>
    )
}

export default Input;