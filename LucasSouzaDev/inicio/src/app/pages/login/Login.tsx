import { Menu } from "../../components/Menu";

import { useState } from "react";

export const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
  
  };
 

  return (
    <div>
      <Menu />
      <form>
        <label>
          <span className="ml-4">Email: </span>
          <input
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="border border-2px border-blue-500 rounded-md bg-blue-100"
          />
        </label>
        <label>
          <span className="pl-4">Senha: </span>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="border border-2px border-blue-500 rounded-md bg-blue-100"
          />
        </label>
        <button
          onClick={handleLogin}
          className=" rounded-md bg-blue-300 pl-2 pr-2 m-6">Entrar
        </button>
      </form>
    </div>
  );
};
