import React from "react";
import RegisterForm from "../../components/forms/RegisterForm/RegisterForm";
import UserService from "../../services/UserService";
import NewRegisterForm from "../../components/forms/NewRegisterForm/NewRegisterForm";

function RegisterPage() {
  return (
    // <div>
    //   <h1>Register Page</h1>
    //   <RegisterForm userService={new UserService()} />
    // </div>
    <div className="container mt-4">
      <h2>Signup</h2>
      <RegisterForm userService={new UserService()} />
      <NewRegisterForm/>
    </div>
  );
}

export default RegisterPage;