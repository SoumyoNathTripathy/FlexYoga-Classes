<h1 align="center" id="title">FlexYoga-Classes</h1>

<p align="center"><img src="https://socialify.git.ci/SoumyoNathTripathy/FlexYoga-Classes/image?language=1&amp;owner=1&amp;name=1&amp;stargazers=1&amp;theme=Light" alt="project-image"></p>

<p id="description">Welcome to the Yoga Class Admission Form! This application allows users to enroll in our monthly yoga classes by filling out a simple form.</p>

<h2>Project Screenshots:</h2>

![image](https://github.com/SoumyoNathTripathy/FlexYoga-Classes/assets/85414445/667052f6-8932-4f22-a057-083972213941)
![image](https://github.com/SoumyoNathTripathy/FlexYoga-Classes/assets/85414445/1a8b83ce-493a-4970-be02-88da7ab77f5c)



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

<h2>🛡️ License:</h2>

This project is licensed under the MIT License
