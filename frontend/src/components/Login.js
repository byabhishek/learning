import React, { useState } from 'react';
import Wheat from '../img/wheat.jpeg';
import '../css/style.css';
import { useNavigate } from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay-ts';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("http://localhost:4009/api/v1/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ Email: email, Password: password })
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('userData', JSON.stringify(data));
                navigate('/adminpanel');
                console.log("User data stored in localStorage:", data);
            } else {
                console.error("Login failed:", data);
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const simulateLoading = () => {
        setIsLoading(true);
        setTimeout(() => {
            handleLogin();
        }, 3000);
    };

    return (
        <LoadingOverlay active={isLoading} spinner text="Loading...">
            <div className="pt-5">
                <div className="container-fluid mx-0 px-0">
                    <div className="row" style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <div className="col-sm-7 pt-5">
                            <img src={Wheat} alt="Wheat" style={{ width: '100%' }} />
                        </div>
                        <div className="col-sm-5" style={{ paddingTop: '150px' }}>
                            <div className="row" style={{ justifyContent: 'center' }}>
                                <div className="col-md-6 formContainerForLogin">
                                    <label htmlFor="email">Email:</label><br />
                                    <input type="email" id="email" name="email"
                                        onChange={(e) => setEmail(e.target.value)} value={email} /> <br /><br />
                                    <label htmlFor="password">Password:</label><br />
                                    <input type="password" id="password" name="password"
                                        onChange={(e) => setPassword(e.target.value)} value={password} /><br /><br />
                                    <button type="button" className="formBtn" onClick={simulateLoading}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LoadingOverlay>
    );
};

export default Login;
