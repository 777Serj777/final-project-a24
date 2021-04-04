import './style.scss';



const WrapperForm = ({children, ...props}) => {

    return (
        <div className = {`wrapper${props.className ? ' '+props.className : ''}`}>
            {children}
        </div>
    )
}


export default WrapperForm;