import axios from "axios";
import React, { useReducer } from "react";
import { url } from "../../url.json";
import FormState from "../../interfaces/IFormState";
import UserService from "../../services/UserService";

type ActionType =
  | { type: "setUserName"; payload: string }
  | { type: "setPassword"; payload: string };

function formReducer(state: FormState, action: ActionType): FormState {
  switch (action.type) {
    case "setUserName":
      return { ...state, userName: action.payload };
    case "setPassword":
      return { ...state, password: action.payload };
    default:
      throw new Error("Unknown action type");
  }
}

function LoginForm() {
  const [state, dispatch] = useReducer(formReducer, {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function handleUserNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "setUserName", payload: event?.target.value });
  }
  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "setLastName", payload: event?.target.value });
  }
  
  async function submit() {
    try {
      const response = await UserService.register(state);
      if (response.status) {
        console.log("registered")
      }
    } catch (error) {
      console.error("Error submitting user data", error);
    }
  }
return (
    <div>
      <h3>Log In</h3>
      <div>
        <label>User Name:</label>
        <input
          type="text"
          value={state.userName}
          onChange={handleUserNameChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="text"
          value={state.password}
          onChange={handlePasswordChange}
        />
      </div>
      <button onClick={submit}>Submit</button>
      <div>
        {state.UserName}
        {state.Password}
      </div>
    </div>
  );
}

export default LoginForm;