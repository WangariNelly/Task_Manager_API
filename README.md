## Task Manager API

- This API provides a simple CRUD interface for managing tasks.

## Table of Contents

* Installation
* Usage
* API Endpoints
* Get All Tasks
* Create Task
* Get Single Task
* Update Task
* Delete Task
* Configuration
* License

### Installation

- Clone this repository:
  * git clone  https://github.com/WangariNelly/Task_Manager_API.git

 ##      Install dependencies:
 * npm install

## Start the server:
* npm start
- The API will typically be running on port 5000 (you can configure this in the code). You can interact with the API using tools like Postman or by making requests directly in your code.
API Endpoints

## Get All Tasks

- Method: GET
- Path: /api/v1/tasks
- Response: JSON array containing all task objects with properties like id, title, description, and completed (boolean).

## Create Task

- Method: POST
- Path: /api/v1/tasks
- Request Body: JSON object containing title (string) and description (string) properties.
- Response: JSON object representing the newly created task with the assigned id.

## Get Single Task

- Method: GET
- Path: /api/v1/tasks/:id (replace :id with the actual task ID)
- Response: JSON object representing the specific task with the given ID.

## Update Task

- Method: PUT
- Path: /api/v1/tasks/:id (replace :id with the actual task ID)
- Request Body: JSON object containing any properties you want to update (e.g., title, description, completed).
- Response: JSON object representing the updated task.

## Delete Task

- Method: DELETE
- Path: /api/v1/tasks/:id (replace :id with the actual task ID)
- Response: Empty JSON object with status code 204 (No Content) upon successful deletion.

## Configuration

- (Optional) You can add a .env file to store environment variables like the database connection string.

## License

- This project is licensed under the MIT License.

## Author
* @WangariNelly


