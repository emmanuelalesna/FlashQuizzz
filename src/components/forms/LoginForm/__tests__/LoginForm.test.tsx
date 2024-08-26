import "@testing-library/jest-dom";
import * as React from "react";
import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "@jest/globals";
import UserService from "../../../../services/UserService";
import userEvent from "@testing-library/user-event";
import LoginForm from "../LoginForm";

describe("Login Form", () => {
  test("login form renders properly", () => {
    // arrange
    render(<LoginForm />);

    // assert
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("login form submit button calls event handler", async () => {
    // arrange: render component and grab submit button
    render(<LoginForm />);
    const submitButton = screen.getByText("Submit");

    const serviceSpy = jest.spyOn(UserService, "login");
    const click = () => userEvent.click(submitButton);
    try {
      await click();
    } catch {
     // expect(serviceSpy).toHaveBeenCalled(); // should throw error
    } finally {
      expect(serviceSpy).toHaveBeenCalled();
    }
  });
});
