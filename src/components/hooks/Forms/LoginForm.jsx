import { useState } from "react";

export const LoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      username: username,
      password: password
    }
    console.log(loginData)
  }



  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <h1>Sign Up</h1>

          <label htmlFor="firstName">
            <b>Username</b>
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.name)}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="clearfix">
            <button type="submit" className="btn">
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
