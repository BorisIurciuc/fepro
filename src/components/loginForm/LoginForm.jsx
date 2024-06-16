import Input from "../input/Input";
import MyButton from "../myButton/MyButton";
import './loginForm.css'
function LoginForm() {
    return (
        <div>
            <form type='submit' className="form">
            <h3>Login form</h3>
                <div className="loginForm">
                    <div className="inputForm">
                        <Input name={'name'} type={'text'} placeholder={'your name'} label={'userName'}/>
                        <MyButton name={'Send name'} type={'submit'}/>
                    </div>
                    <div className="inputForm">
                        <Input name={'email'} type={'text'} placeholder={'your email'} label={'uselEmail'}/>
                        <MyButton name={'Send email'} type={'submit'}/>
                    </div>
                    <div className="inputForm">
                        <Input name={'password'} type={'text'} placeholder={'your password'} label={'uselPasswd'}/>
                        <MyButton name={'Send password'} type={'submit'}/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;