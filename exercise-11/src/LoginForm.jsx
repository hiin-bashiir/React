import { useState } from "react";

const LoginForm = ()=>{

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [isLoggedIn, setIsLoggedIn] = useState(false);

const handleLogin = (event) => {
    event.preventDefault();
    // Simulate authentication
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

const handleLogout = () => {
    setUsername('');
    setPassword('');
    setIsLoggedIn(false);
  };

   if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome, {username}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

    return(
        <form onSubmit={handleLogin}>
        <div>
            <h2>Login</h2>
            <label>Username:
            <input 
            type="text" 
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            required
            />
            </label>
        </div>
        <div>
            <label>Password:
            <input 
            type="password" 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            required
            />
            </label>
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
        </form>
    )
}
export default LoginForm;