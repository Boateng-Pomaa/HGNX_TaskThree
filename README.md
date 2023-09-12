# API Documentation

This is the documentation for the API that allows you to perform CRUD operations on a Person Resource.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Endpoints](#endpoints)



## Getting Started

### Prerequisites

Before running the API, make sure you have the following prerequisites installed:

- Node.js (version 16.16.0)
- MongoDB (version 5.7.0)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Boateng-Pomaa/HGNX_TaskThree.git

2. Install the dependencies:

cd HGNX_TaskThree
 Run npm install to install dependencies

3. Set up the environment variables:

Create a .env file in the root directory and provide the following variables:
PORT=3000
MONGODB_URI=mongodb://localhost:27017/mydatabase

Modify the values according to your configuration.

4. Start the API:

npm start

The API will be running at `http://localhost:3000`.

Usage
Endpoints
The API exposes the following endpoints:

GET /api ->              Get all users.
GET /api/:name ->        Get a user by name.
POST /api      ->        Add a new user.
PUT /api/:users_id  ->  Update a user by ID.
DELETE /api/:users_id -> Delete a user by ID.

