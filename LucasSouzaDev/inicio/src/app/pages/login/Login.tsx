import { Menu } from "../../shared/components/Menu";
import { useCallback, useContext, useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";
import React from "react";
import { ButtonLogin } from "./components/ButtonLogin";
import { LoggedUserContext } from "../../shared/contexts";

export const Login = () => {
  const { loggedUser } = useContext(LoggedUserContext); //desestruturado, igual ao Dashboard

  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = useCallback(() => {
    console.log(userEmail, password);
  }, [userEmail, password]);

  return (
    <div>
      <Menu />
      <form>
        <p>{loggedUser}</p>
        <InputLogin
          label="Email"
          value={userEmail}
          //onChange={(e) => setUserEmail(e.target.value)}
          onChange={(newValue) => setUserEmail(newValue)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />
        <InputLogin
          label="Senha"
          type="password"
          value={password}
          ref={inputPasswordRef}
          //onChange={(e) => setPassword(e.target.value)}
          onChange={(newValue) => setPassword(newValue)}
        />
        <ButtonLogin type="button" onClick={handleLogin} />
      </form>
    </div>
  );
};
