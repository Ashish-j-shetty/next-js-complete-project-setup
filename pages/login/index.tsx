import React, { useState } from "react";

import jwt from "jsonwebtoken";

export default function Login() {
  const [username, setUsername] = useState<string>("");

  const [password, setPassword] = useState<string>("");

  const [message, setMesage] = useState<string>("You are not logged in ");

  const submitForm = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((t) => t.json());

    const { token } = res;

    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };
      setMesage(`Welcome ${json.username}  and you are logged in `);
    } else {
      setMesage("something went wrong!");
    }
  };

  return (
    <div>
      <h1>{message}</h1>
      <form>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="button" value="login" onClick={submitForm} />
      </form>
    </div>
  );
}
