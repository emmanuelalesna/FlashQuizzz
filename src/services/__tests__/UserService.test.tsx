import UserService from "../UserService";
import RegisterFormState from "../../interfaces/IRegisterFormState";
import LoginFormState from "../../interfaces/ILoginFormState";
import axios from "axios";
import { url, registerEndpoint, loginEndpoint } from "../../url.json";
import { test, expect } from "@jest/globals";
jest.mock("axios");

interface IMockNewUser extends RegisterFormState {
  [index: string]: string;
}

interface IMockExistingUser extends LoginFormState {
  [index: string]: string;
}
// instantiate user service once here to be used in all tests
const userService = new UserService();

// create mock user templates
const mockNewUser: IMockNewUser = {
  FirstName: "Paul",
  LastName: "Glenn",
  Email: "paul@revature.net",
  Password: "password",
};

const mockExistingUser: IMockExistingUser = {
  email: "paul@revature.net",
  password: "password",
};

describe("User Service", () => {
  describe("registration validation", () => {
    test("missing first name throws error", () => {
      // arrange: create user object

      const mockUserInfo: IMockNewUser = {
        ...mockNewUser,
        FirstName: "",
      };

      // act
      const event = () => {
        userService.register(mockUserInfo);
      };
      //act & assert
      expect(event).toThrow("First name cannot be empty.");
    });
    test("missing last name throws appropriate error", () => {
      // arrange: create user object

      const mockUserInfo: IMockNewUser = {
        ...mockNewUser,
        LastName: "",
      };

      // act
      const event = () => {
        userService.register(mockUserInfo);
      };
      //act & assert
      expect(event).toThrow("Last name cannot be empty.");
    });

    test("missing email throws appropriate error", () => {
      // arrange: create user object

      const mockUserInfo: IMockNewUser = {
        ...mockNewUser,
        Email: "",
      };

      // act
      const event = () => {
        userService.register(mockUserInfo);
      };
      //act & assert
      expect(event).toThrow("Email cannot be empty.");
    });
    test("missing password throws appropriate error", () => {
      // arrange: create user object

      const mockUserInfo: IMockNewUser = {
        ...mockNewUser,
        Password: "",
      };

      // act
      const event = () => {
        userService.register(mockUserInfo);
      };
      //act & assert
      expect(event).toThrow("Password cannot be empty.");
    });
  });

  describe("registration route", () => {
    test("a complete user object causes a post request ot be made ", async () => {
      // arrange: create user object

      const finalUrl = url + registerEndpoint;
      // arrange: creat mock axios implementation

      const axiosCallMock = (url: string, data: unknown): Promise<object> =>
        Promise.resolve({ data: data, config: { url: url } });
      const axiosMock = axios.post as jest.MockedFunction<typeof axios.post>;
      axiosMock.mockImplementation(axiosCallMock);

      // act : call register function
      const response = userService.register(mockNewUser);

      // assert: mock should have been invoked with correct url
      expect(axiosMock).toHaveBeenCalled();
      expect((await response).config.url).toEqual(finalUrl);
      const returnedObject = (await response).data;
      for (const prop in returnedObject) {
        expect(returnedObject[prop]).toEqual(mockNewUser[prop]);
      }
    });
  });

  describe("login validation", () => {
    test("missing email throws appropriate error", () => {
      // arrange: create user object
      const userService = new UserService();
      const mockUserInfo: IMockExistingUser = {
        ...mockExistingUser,
        email: "",
      };

      // act
      const loginAttempt = () => {
        userService.login(mockUserInfo);
      };
      //act & assert
      expect(loginAttempt).toThrow("Email cannot be empty.");
    });

    test("missing password throws appropriate error", () => {
      // arrange: create user object
      const userService = new UserService();
      const mockUserInfo: IMockExistingUser = {
        ...mockExistingUser,
        password: "",
      };

      // act
      const event = () => {
        userService.login(mockUserInfo);
      };
      //act & assert
      expect(event).toThrow("Password cannot be empty.");
    });
  });
  describe("login route", () => {
    test("email and password cause a post request to be made", async () => {
      // arrange mocks
      const userService = new UserService();

      const finalUrl = url + loginEndpoint;

      const axiosCallMock = (url: string, data: unknown): Promise<object> =>
        Promise.resolve({
          data: { ...(data as object), auth: true },
          config: { url: url },
        });

      const axiosMockFn = axios.post as jest.MockedFunction<typeof axios.post>;
      axiosMockFn.mockImplementation(axiosCallMock);

      // act: call login
      const response = await userService.login(mockExistingUser);

      // assert that a call was made to the auth route
      expect(axiosMockFn).toBeCalled();
      expect(response.config.url).toEqual(finalUrl);
    });
  });
});
