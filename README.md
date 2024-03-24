# AngularProject
Angular Project with MongoDB and Node.js Server
This project is an Angular application that interacts with a MongoDB database via a Node.js server. 
The Angular frontend communicates with the server to perform CRUD (Create, Read, Update, Delete) 
operations on data stored in the MongoDB database.

Prerequisites
Before running this project, ensure you have the following installed:

Node.js (v20.11.1): Download and install Node.js from nodejs.org.
Angular CLI(v16): Install Angular CLI globally by running npm install -g @angular/cli.
MongoDB(db version v7.0.7): Install MongoDB locally or use a remote MongoDB instance.

Installation
1. Clone this repository to your local machine:(git clone <repository-url>)
2. Navigate to the project directory:(cd <project-directory> or just open the folder)
3. Install dependencies for the Node.js server:(cd <my-server> or open the folder)
3.1. Open terminal in the "my-server" folder and run:(npm install)
3.2. Run the server:(npm start or node server.js)
   //When the server is started you will get this
                 "Server running on port 3030
                  Connected to MongoDB"
   //If you dont get this output, then you probably have problem with the MongoDB

4. Go to vscode and open the angular project (bb-voyages) folder
4.1.Open terminal and run:(npm install)
4.2.Run the angular frontend:(ng serve)
   //You will get this ** Angular Live Development Server is listening on localhost:4200,
    open your browser on http://localhost:4200/ **
    ✔ Compiled successfully.
5.Enjoy
