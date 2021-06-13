
=================================================================
Our major project on full-stack coding, One Touch Even Planner Website is an event planning website that provides users with a centralized location to create and manage to-do’s around their upcoming events. Users can log-in to the website, and their login data will be stored (and their password encrypted with bcrypt) so that they can log back in when revisiting the app and have immediate access to their personalized dashboard containing both past and present events and their tasks.

From their dashboard, they can create new events, manage tasks and add and modify items, select past events, and order and mark tasks based on priority by dragging and reordering them. Being a planning-oriented application, we wanted a smooth interface that would allow user's to easily keep track of their events and to-do's without extensive explanation of features and without interfering with user's flow.

And we don't expect our users to do everything themselves, which is why we provide links to helpful stores in their area with directions based on information they've provided about what they'll be expecting at their event-need a cake for your friend's birthday party? Click the blue cake icon and see some bakeries in your area. Whether it’s a birthday party, mother's day, or an after work social function, One Touch Event Planner got you covered.


## 🔑 How to Use the Website:

The Website is intuitive and requires little to no prior knowledge before being ready to use.

Follow the steps below to begin planning and organizing to-do's:

1. Create an individual user profile and log in. User data is stored in a MySQL database using a passport local sign-up/sign-in strategy, and passwords are encrypted with bCrypt

2. Create an event

3. Create tasks for the created event and assign users to each individual task

4. As tasks are completed users can drag them to a completed state

## 📁 Deployment Instructions

This app has been deployed to Heroku, and the link can be found [here](https://limitless-fortress-24134.herokuapp.com/ "live link").

## 🔧 Technologies Used  

+ **HTML5** and **CSS3** for page content and styling.

+ **Handlebars** for templating and generating HTML content, served up through our routes from our server.

+ **Materialize.css** as a CSS framework for applying styles and using components based on Google's Material UI.

+ **JavaScript** for the app's logic.

+ **Node.JS** for the app's server environment.

+ **NPM** for installation of the packages required by the app:
  + **express**
  + **express-session**
  + **cookie-parser**
  + **express-handlebars**
  + **mysql2**
  + **sequelize**
  + **passport**
  + **passport-local**
  + **dotenv**
  + **bcrypt**

+ **MySQL** for database creation and storing persistent data.

+ **Heroku** for live deployment and hosting.

+ **Sortable.js** CDN for drag/sort functionality for to-do's. They can be re-ordered by priority or moved between incomplete and completed states, which will alter the data-attribute of the task being dragged.


## 🔗 Authors

+ Amrita Raj
+ Lakshya Jain
+ Shivani Jain
