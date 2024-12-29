# Question-Game

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
