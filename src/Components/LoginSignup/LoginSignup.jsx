import React, { useState } from 'react'
import user_icon from '../Assets/icons/person.png';
import email_icon from '../Assets/icons/email.png';
import password_icon from '../Assets/icons/password.png';
import { register, login } from '../../api/authApi';

export default function LoginSignup() {
    const [action, setAction] = useState("Sign Up");
    const [userData, setUserData] = useState({
        userName: "",
        password: "",
        rePassword: "",
        email: ""
    });

    // Input değişikliklerini handle eden fonksiyon
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const registerSubmit = async (userData) => {
        try {
            if (action !== "Sign Up") {
                setAction("Sign Up");
            } else {
                const response = await register(userData);
                alert(response.data);
            }
        } catch (error) {
            alert("Kayıt işlemi başarısız: " + error.message);
        }
    };

    const loginSubmit = async (userData) => {
        try {
            if (action !== "Login") {
                setAction("Login");
            } else {
                const response = await login(userData);
                if (response.data) {
                    alert("Oturum açıldı");
                } else {
                    alert("Oturum açılamadı!")
                }
            }
        } catch (error) {
            alert("Giriş işlemi başarısız: " + error.message);
        }
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input
                        type="text"
                        name="userName"
                        placeholder='User name'
                        value={userData.userName}
                        onChange={handleChange}
                    />
                </div>

                {action === "Login" ? <div></div> :
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input
                            type="email"
                            name="email"
                            placeholder='Email Address'
                            value={userData.email}
                            onChange={handleChange}
                        />
                    </div>

                }

                <div className="input">
                    <img src={password_icon} alt="" />
                    <input
                        type="password"
                        name="password"
                        placeholder='Password'
                        value={userData.password}
                        onChange={handleChange}
                    />
                </div>
                {action === "Login" ? <div></div> :
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input
                            type="password"
                            name="rePassword"
                            placeholder='RePassword'
                            value={userData.rePassword}
                            onChange={handleChange}
                        />
                    </div>
                }
            </div>
            <div className="submit-container">
                <div
                    className={action === "Login" ? "submit gray" : "submit"}
                    onClick={() => { registerSubmit(userData) }}
                >
                    Sign Up
                </div>
                <div
                    className={action === "Sign Up" ? "submit gray" : "submit"}
                    onClick={() => { loginSubmit(userData) }}
                >
                    Login
                </div>
            </div>
        </div>
    )
}