/**
 * @jest-environment jsdom
 */
import * as React from "react";
import { render, screen } from "@testing-library/react";

import { test, expect, describe } from "@jest/globals";
import RegisterForm from "../RegisterForm";

describe("Register Form", () => {
  test("register form renders properly", () => {
    render(<RegisterForm />);

    //assert
  });

  test("Register form submit button calls event handler", () => {
    render(<RegisterForm />);
  });
});
