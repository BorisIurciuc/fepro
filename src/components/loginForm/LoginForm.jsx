import Input from "../input/Input";
import MyButton from "../myButton/MyButton";
import './loginForm.css'
function LoginForm() {
    return (
        <div>
            <form type='submit' className="form">
            <h3>Login form</h3>
                <div className="loginForm">
                    
                <Input 
                    name={'name'} 
                    type={'text'} 
                    placeholder={'enter your name'} 
                    label={'userName'}/>
                <MyButton 
                    name={'Send data'} 
                    type={'submit'}/> 
                    </div>
            </form>
        </div>
    )
}

export default LoginForm;