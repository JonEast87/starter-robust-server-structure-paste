# Starter Code: Robust Server Structure

This server is intended to be run for some checkpoints in the Thinkful curriculum. If you have trouble getting the server to run, reach out for assistance.

## Installation

1. Clone this repository.
1. `cd` into the newly created directory.
1. Run `npm install`.
1. Run `npm run dev`. This command will spin up a server on port 5000 that will automatically restart when changes are made to source files.

When you navigate to `localhost:5000` initially, you should see a `Not found: /` message in the browser because none of the routes have been implemented yet.

## Description

This project contains the minimum setup code required to run an Express API. However, only the not found and error handlers are implemented at this point.

Follow the instructions in the checkpoint for implementing the API.

If you have trouble, reach out for assistance.

## Personal notes for server design

| Status code | Status text           | Meaning                                                                                     |
| :---------- | :-------------------- | :------------------------------------------------------------------------------------------ |
| 200         | OK                    | The request was successful.                                                                 |
| 201         | CREATED               | The request resulted in a resource being successfully created.                              |
| 204         | NO CONTENT            | The request is successful, and nothing is being returned in the response body.              |
| 400         | BAD REQUEST           | The server cannot process the request because of bad syntax, invalid data, excessive size.  |
| 403         | FORBIDDEN             | The client doesn't have permission to access this resource.                                 |
| 404         | NOT FOUND             | The resource couldn't be found at this time. It may have been delayed or doesn't exist yet. |
| 405         | METHOD NOT ALLOWED    | The HTTP method isn't supported by the target resource.                                     |
| 500         | INTERNAL SERVER ERROR | The generic answer for an unexpected failure.                                               |
