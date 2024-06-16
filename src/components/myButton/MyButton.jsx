import './myButton.css'

function MyButton({name, type}) {
    console.log(name)
    console.log(type)
    return(
        <div>
            <button type={type} className='myButton'>{name}</button>
        </div>
    )
}
export default MyButton;