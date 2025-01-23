# Question-Game

## How It Works:
<p>There are 3 types of users: admin user,regular user,guest user</p>
<p><strong>The admin can:</strong> create questions,edit questions,delete questions,check the existing questions in the database</p>
<p><strong>The regular user can:</strong> play the game,check out the list of his scores,check out the ranking list to see the best players and compare his result with their</p>
<p><strong>guest user can:</strong> register,login,check out the ranking list of the best players</p>
<h3>there are images below that visually explain how the application works</h3>

## Backend documentation:
<p>This API is built using Spring Boot,PostgreSQL,Spring Security,JSON web token</p>

## Installation of Spring Boot API:
1.Clone this repository: `git clone https://github.com/igachev/Question-Game.git`

2.Go to folder question-game-api: `cd question-game-api`

3.Install dependencies: `mvn clean install`

4.Make sure you have installed `PostgreSQL` on your machine

5.Create database with name `questiondb` in PostgreSQL with username:`postgres` and password:`password`.Feel free to change these names according to your preferences but implement these changes to the `application.yml` file.

6.If you are using vsCode like me install extension called SQL Tools and create new PostgreSQL connection adding the following fields:
- Connection name: question-db
- Connect using:Server and Port
- Server address:localhost
- Port:5432
- Database:questiondb
- Username:postgres
- Use password:save as plaintext
- Password:password
- click save connection and then start it

## Requirements:
- spring-boot-starter-data-jpa
- spring-boot-starter-web
- spring-boot-starter-security
- spring-boot-starter-validation
- jjwt-api
- jjwt-impl
- jjwt-jackson
- postgresql

## Endpoints:
- `POST /auth/register`: it creates new user
- `POST /auth/login`: Sign In user with valid credentials
- `GET /questions`: it generates 10 unique random questions from the database
- `POST /questions/create`: it creates new question
- `GET /questions/:question-id`: it shows particular question
- `PATCH /questions/:question-id/edit`: it edits particular question
- `DELETE /questions/:question-id/delete`: it deletes particular question
- `POST /score/add`: it adds the user score
- `GET /score/user`: it shows all scores for particular user
- `GET /score/all-users`: shows a list of each user's top scores

## Front-end documentation:
<p>This UI is built using Angular</p>

## Installation:
7. make sure you have completed the above mentioned back end installation
8. Go to folder question-game-ui: `cd question-game-ui`
9. Install the necessary dependencies: `npm install`
10. Run the UI: `ng serve`

## Routes:
- `/`: it shows the Home page
- `/auth/register`: it shows the Register page
- `/auth/login`: it shows the Login page
- `/questions`: it shows the page where the logged in user plays the game.Available only for logged in users.
- `/questions/create`: it shows the Create Question page.Available only for admin user
- `/questions/all`: it shows all existing questions.Available only for admin user.
- `/questions/:id`: it shows particular Question and its details.Available only for admin user.
- `/questions/:id/edit`: it shows Edit Question Page.Available only for admin user.
- `/score/user-scores`: it shows the list of scores for the logged in user only.Available only for logged in users.
- `/score/all-users-scores`: it shows the ranking list page.It contains the best result of each player.The player can compare his score with other players.Available for all users.

## Folder Structure:
- `core`: It contains static components like header and footer, services, http interceptors
- `shared`: It contains reusable components.In my case reusable components are: <strong>Error Component,Loading Spinner Component</strong>
- `feature`: It contains all distinct modules.The components of each module share related functionality.We have three modules: auth,question,score.

## Images:
<div align="center">
  <p>The Home Page of the application.It gives brief information about the purpose of the application.</p>

  ![02 homepage](https://github.com/user-attachments/assets/37c439e2-4d15-4f23-a2d6-ce793775679f)

</div>

<div align="center">
  <p>Register Page.It shows validation errors if we skip filling particular field</p>

  ![06 register-validation](https://github.com/user-attachments/assets/af55a423-2199-4567-b05c-e61e209a3489)

</div>

<div align="center">
  <p>Login Page.</p>

  ![04 login-page](https://github.com/user-attachments/assets/a1a5dfe9-1d69-425b-83fd-4e09c658932d)

</div>

<div align="center">
  <p>Login Page.It shows server errors if we enter invalid user credentials.</p>

  ![05 login-invalid-credentials](https://github.com/user-attachments/assets/46f2e030-d22c-476c-a726-b9361066be33)

</div>

<div align="center">
  <p>Game Start Page.</p>

  ![08 game-start](https://github.com/user-attachments/assets/3732ac71-5d22-4a93-b809-c6326cd5f4fe)

</div>

<div align="center">
  <p>The user is playing the game.</p>

  ![09 game-started](https://github.com/user-attachments/assets/e60aac61-3c7a-4263-9b21-7851032fbc00)

</div>

<div align="center">
  <p>Game Over.When the user fails to answer the questions in the given time Game Over appears</p>

  ![10 game-over](https://github.com/user-attachments/assets/762ce29d-b15e-48cf-9ac9-a70fb6efb303)

</div>

<div align="center">
  <p>The list of user's scores</p>

  ![07 user-scores](https://github.com/user-attachments/assets/fc391aee-e077-4f66-8910-e19209f362a1)

</div>

<div align="center">
  <p>Ranking List Page.It contains the best score of each player.</p>

  ![03 ranking-list](https://github.com/user-attachments/assets/ba255a8a-bc9d-4378-a48f-b6f9219457ea)

</div>

<div align="center">
  <p>Create Question Page</p>

  ![01 create-question](https://github.com/user-attachments/assets/bcdfaf2f-dcb5-41c1-9c4a-f3ea8115eb89)

</div>

<div align="center">
  <p>The list of all existing questions</p>

  ![11 all-questions-admin](https://github.com/user-attachments/assets/6b5b29e3-18c8-4ba4-a60d-ce0b7f8dbce4)

</div>

<div align="center">
  <p>Question Details Page</p>

  ![12 question-details](https://github.com/user-attachments/assets/5d2ad9b0-40a2-4e3f-ae27-a09dff891d1e)

</div>

<div align="center">
  <p>Edit Question Page</p>

  ![13 edit-question](https://github.com/user-attachments/assets/c701e26f-0844-49a9-b032-7de8ce9cb160)

</div>

<div align="center">
  <p>I implemented web responsive design to each page</p>

  ![14 web-responsive](https://github.com/user-attachments/assets/6d2eadb6-e1d9-4a0b-a842-6874abf2f81e)

  ![15 web-responsive](https://github.com/user-attachments/assets/dbe525c7-484f-4d8c-aab0-7372eda8a64b)


</div>
