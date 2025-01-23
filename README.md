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
