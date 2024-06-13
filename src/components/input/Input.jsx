import './Input.css'

function Input({name, type, placeholder, label}){
    return(
        <div>
            <input 
                name={name}
                type={type}
                placeholder={placeholder}
                label={label}
                className='input'
            />
        </div>
    )
}
export default Input;