import './button.css'

function Button({buttonText, isGetButton}) {

    return (
        <button 
            className={`button ${isGetButton ?  'button-primary' : 'button-danger'}` }>
            {buttonText}
        </button>

    )
}

export default Button;