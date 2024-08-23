/**
 * @jest-environment jsdom
 */
import * as React from "react";
import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "@jest/globals";
import RegisterForm from "../RegisterForm";

import userEvent from "@testing-library/user-event";

describe("Register Form", () => {
  test("register form renders properly", () => {
    // arrange
    render(<RegisterForm />);

    const submitButton = screen.getByText("Submit");
    const resetButton = screen.getByText("Reset Fields");

    //expect(submitButton).toBeInTheDocument();
    // expect(resetButton).toBeInTheDocument();
  });

  test("Register form submit button calls event handler", () => {
    render(<RegisterForm />);
    const submitButton = screen.getByText("Submit");

    // act
    userEvent.click(submitButton);

    // assert
  });
  test("Reset button resets fields", () => {
    render(<RegisterForm />);
    const resetButton = screen.getByText("Reset Fields");
    const firstNameField = screen.getAllByRole("textbox")[0];
    console.log(firstNameField.textContent);
    // act
    userEvent.click(firstNameField);
    userEvent.paste("Paul");
    console.log(firstNameField.textContent);
    //check that it has been pasted
    //expect(firstNameField);
    userEvent.click(resetButton);

    // assert
  });
});
