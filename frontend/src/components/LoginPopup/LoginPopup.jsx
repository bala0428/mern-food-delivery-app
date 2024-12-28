import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from './../context/StoreContext';
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {
    const { url, setToken } = useContext(StoreContext);

    const [currentState, setCurrentState] = useState('Login');
    const [data, setData] = useState({ name: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const onLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        let newUrl = url + (currentState === 'Login' ? '/api/user/login' : '/api/user/register');

        try {
            const response = await axios.post(newUrl, data);

            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem('token', response.data.token);
                setShowLogin(false);
            } else {
                setError(response.data.message || 'An error occurred');
            }
        } catch (err) {
            setError('Failed to connect to the server. Please try again.');
            console.error('Login/Register Error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-popup">
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
                </div>

                <div className="login-popup-inputs">
                    {currentState === 'Sign Up' && (
                        <input
                            name="name"
                            onChange={onChangeHandler}
                            value={data.name}
                            type="text"
                            placeholder="Your name"
                            required
                        />
                    )}
                    <input
                        name="email"
                        onChange={onChangeHandler}
                        value={data.email}
                        type="email"
                        placeholder="Your email"
                        required
                    />
                    <input
                        name="password"
                        onChange={onChangeHandler}
                        value={data.password}
                        type="password"
                        placeholder="Password"
                        required
                    />
                    {error && <p className="error-message">{error}</p>}
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? 'Processing...' : currentState === 'Sign Up' ? 'Create Account' : 'Login'}
                </button>

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>

                {currentState === 'Login' ? (
                    <p>
                        Create a new account? <span onClick={() => setCurrentState('Sign Up')}>Click here</span>
                    </p>
                ) : (
                    <p>
                        Already have an account? <span onClick={() => setCurrentState('Login')}>Login here</span>
                    </p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;
