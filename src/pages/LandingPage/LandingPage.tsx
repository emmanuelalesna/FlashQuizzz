import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm/LoginForm";
import UserService from "../../services/UserService";

export default function LandingPage() {
  return (
    <div>
      <h1>Welcome to FlashQuizzz, the world's most popular flashcard app!*</h1>
      <p>
        *We define world as the tri-state area. We define popular as the opinion
        of this website's creator.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <h2>Already have an account?</h2>
          <LoginForm userService={new UserService()} />
          <Link to="/register">Create an account</Link>
        </div>
      </div>
    </div>
  );
}
