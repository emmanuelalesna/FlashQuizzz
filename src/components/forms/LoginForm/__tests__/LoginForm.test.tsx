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
    render(<LoginForm userService={new UserService()}/>);

    // assert
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("login form submit button calls event handler", async () => {
    // arrange: render component and grab submit button
    const userService = new UserService();
    render(<LoginForm userService={userService} />);
    const submitButton = screen.getByText("Submit");

    const serviceSpy = jest.spyOn(userService, "login");

    // act: click submit button
    const click = () => userEvent.click(submitButton);
    try {
      await click();
    } catch {
      // expect(serviceSpy).toHaveBeenCalled(); // should throw error
    } finally {
      // assert: the spy should have been calld
      expect(serviceSpy).toHaveBeenCalled();
    }
  });
});
