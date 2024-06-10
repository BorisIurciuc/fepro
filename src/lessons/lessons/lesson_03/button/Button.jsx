import './button.css'

function Button() {

    const sendButton = 'Send data';
    const getButton = 'Get data';
    const isGetButton = false;

    return (
        <button 
            className={isGetButton ? 'button button-danger' : 'button button-dodgerblue'}>
            {isGetButton ? getButton : sendButton}
        </button>
    )
}

export default Button;