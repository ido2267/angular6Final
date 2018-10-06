## This is the final mission I recieved at Yaniv Arad's course (www.yaniv-arad.com) in angular 6. Here are the instructions for the
## mission:
##  Angular - Final Ex
## You have to build a management system for Users, their Posts and their tasks.
## All the data MUST be loaded (to any repository) by a RESTfull service with the
## Application start .
## The users will be loaded from : https://jsonplaceholder.typicode.com/users
## Their posts will be loaded from https://jsonplaceholder.typicode.com/posts
## Their Tasks will be loaded from https://jsonplaceholder.typicode.com/todos
## All data are connected via “UserID”.
## The application will be designed and written as Single Page Application.
## The Page will contain a menu with the following options :
## 1 Users
## 2 Posts
## 3 Tasks
## 1. “Users” Option
## Will load a view called “Users” view with the following menu :
## 1.1 - All Data (Default) – this option will load a view called “AllUsers”
## that will present all the users Full Names as a list of links.
## 1.2 – User Data – This option Will load and present a view for a specific
## given userID the following data :
## - Full Name
## - Email
## - City
## - A List of the titles of all the User’s posts.
## - A List of the titles of the UNCOMPLETED user’s tasks.
## The Full name, Email & City will be presented as a FORM (all data is
## mandatory) with relevant error messages, and a “Update” & “Delete”
## buttons.
## 1.3 Add User - This option Will load and present a view with a FORM
## with the following data
## - Full Name
## - Email
## - City
## and a “Save” button.
## All data is mandatory. Give relevant error messages.
## A press on the “Save” button will add the new user to the collection
## - A click on each link in the “All Data” view will redirect to the “User
## Data” view with the proper user.
## 1.4 – Search User – This option will present a view with a searchbox and a
## button “Search”. A press on the button will search all the users that
## their full name includes the phrase entered in the searchbox.
## The results (User’s Names) will be presented as a list of links.
## Each link will be redirect to the “User Data” view.
## If no results were found , a proper message will be presented.
## 2. “Posts” Option
## Will load a view called “Posts” view with:
## - A table with the following data :
## Post ID | Post title | User Full Name
## - A textbox for filtering by the userID.
## 3. “Tasks” Option
## Will load a view called “Tasks” view with:
## - A table with the following data :
## Task title | User ID | Completed
## All the completed tasks will be marked in Green .
## - 3 radio buttons : “Completed” , “Uncompleted” , “All”.
## Each selection will filter the data and present the correct records
## Generic Guidelines
## - Consider and design the most generic & modular components
## composition
## - Think about the most modular Services architecture.
## - User Template Driven forms when forms are needed.
## - Write a clean & clear code !
## Good Luck
## ## ## ## ## ## ## 
# Final

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
