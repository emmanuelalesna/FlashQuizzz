import "@testing-library/jest-dom";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { expect, describe, it } from "@jest/globals";
import UserService from "../../../../services/UserService";
import userEvent from "@testing-library/user-event";
import LoginForm from "../LoginForm";
import axios, { AxiosResponse } from "axios";
jest.mock("axios");

describe("Login Form", () => {
  it("renders properly", () => {
    // arrange

    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LoginForm userService={new UserService()} />}
          />
        </Routes>
      </BrowserRouter>
    );

    // assert
    expect(screen.getByText("Email address")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("calls event handler when the submit button is clicked", async () => {
    // arrange: render component and grab submit button
    const userService = new UserService();
    const mockAxiosResponse = {
      status: 200,
      statusText: "OK",
    };
    const serviceSpy = jest.spyOn(userService, "login");
    serviceSpy.mockResolvedValue(mockAxiosResponse as AxiosResponse);
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm userService={userService} />} />
        </Routes>
      </BrowserRouter>
    );
    const loginButton = screen.getByText("Login");
    // act: click submit button
    const click = () => userEvent.click(loginButton);
    await click();

    expect(serviceSpy).toHaveBeenCalled();
  });
});
