# FlashQuizzz

This is a full-stack web app I helped create during my time at Revature. As part of my training there, I was tasked with creating a full-stack web page in a group environment using technologies we had learned over the past few months.

My group, inspired by our class study sessions, decided to make a flash card creation app. The flow is as follows:
- Create an account on the signup page. Each field is required, and form validation exists on the email address and password.
- Login on the login page using the credentials you just created. This automatically takes you to the Flashcards page.
- On the Flashcards page, you have access to full CRUD features.
	- You can create flash cards by typing in your own question and answer, and choose a category from a predefined list.
	- The card is then viewable on the Flashcard page. You can click on the box to flip the card.
	- Existing flash cards can be edited.
	- Flash cards can be deleted.
- Once finished, you can log out of the application.

![Process-flow](https://github.com/user-attachments/assets/eaa318b8-896e-4334-9af3-db6ce64bec5f)

The backend consists of SQL server as the database and Entity Framework to interface with the API, which uses ASP.NET. All user information and flash cards are stored on the server. User passwords are hashed. The server provides an access token when logging a user in, which is stored in the browser's storage.

The frontend uses the React library to form a single-page application.

Testing on the backend uses xUnit and Moq, while the frontend uses Jest.

Each component is hosted on Microsoft Azure and can be accessed at https://red-desert-06cea4e0f.5.azurestaticapps.net (please be patient if trying to access; the resources are likely paused to converse Azure credits).
