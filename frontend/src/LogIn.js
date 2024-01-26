import { useState } from "react";
import { useHistory } from 'react-router-dom';

const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = () => {

    }

    return (
        <div className="login">
            <h2>Log in</h2>
            <form onSubmit={handleLogin}>
                <label>Username</label>
                <input
                    type='text'
                    placeholder="Write your username name here..."
                    required
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <label>Password</label>
                <div className="password-input-container">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Write your password here..."
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button type="button" className="password-toggle-button" onClick={handleTogglePasswordVisibility}>
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                    {errorMessage && <p className="error">{errorMessage}</p>}
                    {!isPending && <button>Add User</button>}
                    {isPending && <button disabled>Please wait...</button>}
                </div>

            </form>

        </div>
    );
}

export default LogIn;