
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

{
  "id": "1",
  "name": "John Doe"
}



To Set Up The server, Follow the installation procedure in the README file.