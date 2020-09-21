import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (e) => {
    console.log(e.target.name);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value="Login" />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
};
export default Auth;
