import { useState } from 'react'
import { facebookProvider, googleProvider } from '../config/authMethod';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom"

const Login = () => {
    const { loginWithSocial, signup, login } = useAuth()
    const history = useHistory()
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLoginSocialClick = async (provider) => {
        try {
            await loginWithSocial(provider)
            handleLoginCompleat()
        } catch (err) {
            handleAlertError(err)
        }
    }

    const onSignUpEmail = async () => {
        try {
            await signup(email, password)
            handleAlertSuccess('sign up successful')
        } catch (err) {
            handleAlertError(err)
        }
    }

    const onSignInEmail = async () => {
        try {
            await login(email, password)
            handleLoginCompleat()
        } catch (err) {
            handleAlertError(err)
        }
    }

    const handleLoginCompleat = () => {
        handleAlertSuccess('login compleat')
        history.push("/")
    }

    const handleAlertError = (err) => {
        toast.error(`${err.code} !!`, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    const handleAlertSuccess = (message) => {
        toast.success(`${message}`, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    return (
        <div className="login">
            <h1 className="loginTitle">Choose a {isLogin ? 'Login' : 'Signup'} Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={() => onLoginSocialClick(googleProvider)}>
                        <img src={'logo/google.png'} alt="" className="icon" />
                        Google
                    </div>
                    <div className="loginButton facebook" onClick={() => onLoginSocialClick(facebookProvider)}>
                        <img src={'logo/facebook.png'} alt="" className="icon" />
                        Facebook
                    </div>
                </div>
                <div className="center">
                    <div className="line" />
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <div className='select-method'>
                        <button className={`submit select-login ${!isLogin && 'Inactive'}`} onClick={() => { setIsLogin(true) }}>Login</button>
                        <button className={`submit select-login ${isLogin && 'Inactive'}`} onClick={() => { setIsLogin(false) }}>Signup</button>
                    </div>
                    <input onChange={({ target: { value } }) => { setEmail(value) }} type="email" placeholder="Email" />
                    <input onChange={({ target: { value } }) => { setPassword(value) }} type="password" placeholder="Password" />
                    <button className="submit" onClick={() => isLogin ? onSignInEmail() : onSignUpEmail()}>{isLogin ? 'Login' : 'Signup'}</button>
                </div>
            </div>
        </div>
    );
};

export default Login;