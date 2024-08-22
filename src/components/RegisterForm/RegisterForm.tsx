import axios from "axios";
import React, { useReducer } from "react";
import { url } from "../../url.json";
import FormState from "../../interfaces/IFormState";
import UserService from "../../services/UserService";

type ActionType =
  | { type: "setFirstName"; payload: string }
  | { type: "setLastName"; payload: string }
  | { type: "setEmail"; payload: string }
  | { type: "setPassword"; payload: string }
  | { type: "reset" };

function formReducer(state: FormState, action: ActionType): FormState {
  switch (action.type) {
    case "setFirstName":
      return { ...state, firstName: action.payload };
    case "setLastName":
      return { ...state, lastName: action.payload };
    case "setEmail":
      return { ...state, email: action.payload };
    case "setPassword":
      return { ...state, password: action.payload };
    case "reset":
      return { firstName: "", lastName: "", email: "", password: "" };
    default:
      throw new Error("Unknown action type");
  }
}

function RegisterForm() {
  const [state, dispatch] = useReducer(formReducer, {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function handleFirstNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "setFirstName", payload: event?.target.value });
  }
  function handleLastNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "setLastName", payload: event?.target.value });
  }
  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "setEmail", payload: event?.target.value });
  }
  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "setPassword", payload: event?.target.value });
  }
  function handleReset() {
    dispatch({ type: "reset" });
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
      <h3>Register</h3>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={state.firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={state.lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" value={state.email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={state.password}
          onChange={handlePasswordChange}
        />
      </div>
      <button onClick={submit}>Submit</button>
      <button onClick={handleReset}>Reset Fields</button>
      <div>
        {state.firstName}
        {state.lastName}
        {state.email}
        {state.password}
      </div>
    </div>
  );
}

export default RegisterForm;
