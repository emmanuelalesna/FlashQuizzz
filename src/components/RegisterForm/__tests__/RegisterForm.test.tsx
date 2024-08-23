/**
 * @jest-environment jsdom
 */
import * as React from "react";
import { render, screen } from "@testing-library/react";

import { test, describe } from "@jest/globals";
import RegisterForm from "../RegisterForm";

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
  });
});
