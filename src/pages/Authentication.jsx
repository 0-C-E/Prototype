import { useState } from 'react'
import FormField from '/src/components/authentication/FormField'
import PasswordField from '/src/components/authentication/PasswordField'
import PasswordRequirements from '/src/components/authentication/PasswordRequirements'
import '/src/assets/styles/Authentication.css'

export default function AuthenticationPage() {
    const [mode, setMode] = useState('login')

    const [loginData, setLoginData] = useState({ username: '', password: '' })
    const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        console.log('Login:', loginData)
    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault()
        console.log('Register:', registerData)
    }

    return (
        <div id="authentication">
            {mode === 'login' ? (
                <section id="login">
                    <h2>Login</h2>
                    <form onSubmit={handleLoginSubmit}>
                        <FormField
                            id="login-username"
                            type="text"
                            name="login-username"
                            label="Username"
                            value={loginData.username}
                            onChange={(e) =>
                                setLoginData({
                                    ...loginData,
                                    username: e.target.value,
                                })
                            }
                        />
                        <PasswordField
                            id="login-password"
                            name="login-password"
                            label="Password"
                            value={loginData.password}
                            onChange={(e) =>
                                setLoginData({
                                    ...loginData,
                                    password: e.target.value,
                                })
                            }
                        />
                        <button type="submit">Login</button>
                    </form>
                    <a href="#" onClick={() => setMode('register')}>
                        Don't have an account?{' '}
                        <span className="flip-link">Register</span>
                    </a>
                </section>
            ) : (
                <section id="register">
                    <h2>Register</h2>
                    <form onSubmit={handleRegisterSubmit}>
                        <FormField
                            id="register-uname"
                            type="text"
                            name="register-uname"
                            label="Username"
                            value={registerData.username}
                            onChange={(e) =>
                                setRegisterData({
                                    ...registerData,
                                    username: e.target.value,
                                })
                            }
                        />
                        <FormField
                            id="register-email"
                            type="email"
                            name="register-email"
                            label="E-mail"
                            value={registerData.email}
                            onChange={(e) =>
                                setRegisterData({
                                    ...registerData,
                                    email: e.target.value,
                                })
                            }
                        />
                        <PasswordField
                            id="register-password"
                            name="register-password"
                            label="Password"
                            value={registerData.password}
                            onChange={(e) =>
                                setRegisterData({
                                    ...registerData,
                                    password: e.target.value,
                                })
                            }
                        />
                        <PasswordField
                            id="register-password-confirm"
                            name="register-password-confirm"
                            label="Password confirmation"
                            value={registerData.confirmPassword}
                            onChange={(e) =>
                                setRegisterData({
                                    ...registerData,
                                    confirmPassword: e.target.value,
                                })
                            }
                        />

                        <PasswordRequirements
                            password={registerData.password}
                        />
                        <button type="submit">Register</button>
                    </form>
                    <a href="#" onClick={() => setMode('login')}>
                        Already have an account?{' '}
                        <span className="flip-link">Login</span>
                    </a>
                </section>
            )}
        </div>
    )
}
