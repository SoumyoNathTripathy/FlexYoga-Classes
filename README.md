<h1 align="center" id="title">FlexYoga-Classes</h1>

<p align="center"><img src="https://socialify.git.ci/SoumyoNathTripathy/FlexYoga-Classes/image?language=1&amp;owner=1&amp;name=1&amp;stargazers=1&amp;theme=Light" alt="project-image"></p>

<p id="description">Welcome to the Yoga Class Admission Form! This application allows users to enroll in our monthly yoga classes by filling out a simple form.</p>

<h2>Project Screenshots:</h2>

![image](https://github.com/SoumyoNathTripathy/FlexYoga-Classes/assets/85414445/667052f6-8932-4f22-a057-083972213941)
![image](https://github.com/SoumyoNathTripathy/FlexYoga-Classes/assets/85414445/1a8b83ce-493a-4970-be02-88da7ab77f5c)

# Yoga Class Admission Form

Welcome to the Yoga Class Admission Form! This application allows users to enroll in our monthly yoga classes by filling out a simple form.

## Live Deployment
Visit our live deployment: [Yoga Class Admission Form](https://yogaform.vercel.app/)



## Usage
1. *Fill out the Form*: Input your details in the form fields.
2. *Batch Selection*: Choose your preferred batch timing from the options provided.
3. *Payment*: Payment of 500 INR is required every month.
4. *Submission*: Accept the terms of service and submit the form.

## Features:

- User registration with age validation (18-65)
- ⏰ Selection of preferred batch timing (6-7AM, 7-8AM, 8-9AM, 5-6PM)
- Simulated payment integration (through mock function)
- Real-time user data and payment status updates
- Deployed on Vercel
## Technologies:

-  ⚛ Frontend: React and Create React App
-  ⚡ Backend: Node.js and Express
Database: PostgreSQL (hosted on Heroku)
## Problem Solving:

### This project tackled various challenges:

1.Designing a user-friendly and efficient data capture form in React.

2. Building a REST API on Node.js to handle user data, validation, and simulated payment integration.
  
3. implementing a PostgreSQL database schema to store user information, batch preferences, and payment status.
 
4. Deploying the application on Vercel for accessibility and scalability.
 
## Database Design (ER Diagram and SQLs):

The ER diagram consists of three tables:

### Users:

id (primary key)
name
email (unique)
age (INT NOT NULL CHECK(age BETWEEN 18 AND 65))
contact
### Batches:

id (primary key)
timing (unique)
### Enrollments:

id (primary key)
user_id (foreign key to Users)
batch_id (foreign key to Batches)
payment_status (enum: Pending, Success, Failed)
payment_date
## Sample SQLs:
```
SQL
CREATE TABLE Users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE,
  age INT NOT NULL CHECK(age BETWEEN 18 AND 65),
  contact VARCHAR(20),
  ...
);
```
```
CREATE TABLE Batches (
  id SERIAL PRIMARY KEY,
  timing VARCHAR(255) NOT NULL UNIQUE,
  ...
);
```
```
CREATE TABLE Enrollments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES Users(id),
  batch_id INTEGER REFERENCES Batches(id),
  payment_status ENUM('PENDING', 'SUCCESS', 'FAILED'),
  payment_date DATE,
  CONSTRAINT active_enrollment UNIQUE (user_id, active)
);
```
Use code with caution. Learn more
## Code Architecture:

### Front-End:
Form component for user data input
Batch selection component with availability check
API communication handler for data submission
Mock payment integration function
### Back-End:
API routes for data validation and processing
Database interaction with PostgreSQL hosted on Heroku
Mock payment function integration
## Deployment:

The application is deployed on Vercel, accessible at https://yogaform.vercel.app/


<h2>🛠️ Installation Steps:</h2>

<p>1. Install dependencies for both frontend and backend:</p>

```
cd frontend npm install cd ../backend npm install
```
## Running Locally 
<p>2. Start the backend server:</p>

```
cd backend npm start
```

<p>3. Start the frontend:</p>

```
cd frontend npm start
```

<p>4. SQL Table Creation Statements</p>

```
1. CREATE TABLE Batches ( id SERIAL PRIMARY KEY timing VARCHAR(255) NOT NULL UNIQUE ... );


2. CREATE TABLE Enrollments ( id SERIAL PRIMARY KEY user_id INTEGER REFERENCES Users(id) batch_id INTEGER REFERENCES Batches(id) payment_status ENUM('PENDING' 'SUCCESS' 'FAILED') payment_date DATE CONSTRAINT active_enrollment UNIQUE (user_id active) ); 
```

<h2>🍰 Contribution Guidelines:</h2>

Please replace placeholders like \`your-username\` \`link/to/your/er-diagram.png\` and others with the relevant details specific to your project. You can copy this Markdown code and save it as the \`README.md\` file in your GitHub repository.

## Owner:
Soumyo Nath Tripathy
