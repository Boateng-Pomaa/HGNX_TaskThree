# API Documentation

- [Setting up and Deploying](#setting-up-and-deploying)
  - [Installation](#installation)
- [Usage](#usage)


Setting up and Deploying
To set up and deploy the API locally or on a server, follow these steps:

To Set Up The server, Follow the installation procedure in the README file..

Clone the repository and navigate to its directory.

Install the dependencies using the command npm install.

Set up the environment variables by creating a .env file in the root directory and providing the required variables.

Start the API using npm start.

The API will be accessible at the specified PORT in your environment variables.

To deploy the API on a server, follow the deployment process specific to your server environment.


Usage
GET /api/users
Retrieve a list of all users.

Request:

GET https://userdetails-k0rw.onrender.com/api
Response:

[
  {
    "id": "1",
    "name": "John Doe"
  },
  {
    "id": "2",
    "name": "Jane Smith"
  }
]
GET /api/:name
Retrieve a user by name.

Request:
GET https://userdetails-k0rw.onrender.com/api/John%20Doe

Response:

{
  "id": "1",
  "name": "John Doe"
}

POST /api
Create a new user.

Request:
POST https://userdetails-k0rw.onrender.com/api
Content-Type: application/json

{
  "name": "New User"
}
Response:

{
  "id": "3",
  "name": "New User"
}

PUT /api/:user_id
Update a user by ID.

Request:

PUT https://userdetails-k0rw.onrender.com/api/1
Content-Type: application/json

{
  "name": "Updated User"
}
Response:

{
  "id": "1",
  "name": "Updated User"
}
DELETE /api/:user_:id
Delete a user by ID.

Request:
DELETE https://userdetails-k0rw.onrender.com/api/1

Response:
Status: 204 No Content


