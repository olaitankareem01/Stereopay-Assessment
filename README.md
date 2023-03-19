<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description
  This is a simple REST API built with NestJs that allows clients to manage media objects (songs or images). The data is stored in a MySQL database and the TypeORM ORM is used to interact with the database.

## Prequisites
   To run this application, you need to have the following installed on your machine:

    Node.js (version 12 or later)
    MySQL
## Installation
```bash
$ npm install
```

## Running the app

1. Clone this repository
```bash
# development
$ git clone https://github.com/your-username/media-api.git

```

2. Install dependencies
```bash
# development
$ cd stereo-pay
$ npm install

```
3. Create a .env file in the root of the project and add the following environment variables:

```bash
# development
$ DB_PORT=your-database-port
$ DB_USER=your-database-username
$ DB_PASSWORD=your-database-password
$ DB_NAME=your-database-name

```
4. Start the application:

```bash
# development
$ npm run start

  ```

The application should now be running on http://localhost:3000.


### API Endpoints
## Create Media
Creates a new media object.

URL: POST /media
Headers:
Content-Type: application/json
Request Body:

```bash
{
  "type": "audio",
  "name": "My Song",
  "description": "A song I wrote",
  "url": "https://example.com/my-song.mp3",
  "status": "Active"
}
```

Response:

```bash
{
  "status": "success",
  "message": "Media created successfully",
  "data": {
    "id": "2ee68e67-7e87-4c8f-ba68-344940e41ab2",
    "type": "audio",
    "name": "My Song",
    "description": "A song I wrote",
    "url": "https://example.com/my-song.mp3",
    "status": "Active",
    "createdAt": "2023-03-18T15:41:09.000Z",
    "updatedAt": "2023-03-18T15:41:09.000Z",
    "deletedAt": null
   }
}

```
## Get Media
Fetches a paginated list of media objects.

URL: GET /media
Query Parameters:
page: The page number to fetch (default: 1)
perPage: The number of items to fetch per page (default: 10)
Response:
json

```bash
{
    "status": "success",
    "message": "Media retrieved successfully",
    "data": [
        {
            "id": "81c7e414-a3de-48a0-9fd9-4a033a375c52",
            "name": "music2",
            "description": "my first music",
            "url": "music.com",
            "type": "audio",
            "status": "active",
            "createdAt": "2023-03-18T21:18:46.000Z",
            "updatedAt": "2023-03-18T21:18:46.000Z",
            "deletedAt": "2023-03-18T21:18:46.000Z"
        }
    ]
}


```

## Search Media
searches media by query.

URL: GET /media/search
Query Parameters:
query: either name or description to search with(e.g query='my')

Response:

```bash
{
    "status": "success",
    "message": "Media retrieved successfully",
    "data": {
        "id": "81c7e414-a3de-48a0-9fd9-4a033a375c52",
        "name": "music2",
        "description": "my first music",
        "url": "music.com",
        "type": "audio",
        "status": "active",
        "createdAt": "2023-03-18T21:18:46.000Z",
        "updatedAt": "2023-03-18T21:18:46.000Z",
        "deletedAt": "2023-03-18T21:18:46.000Z"
    }
}

```


## Get Media By Id
URL: GET /media/:id
Path Parameters:
id: id of the media to be fetched
Request Body:


Response:

```bash
{
    "status": "success",
    "message": "Media retrieved successfully",
    "data": {
        "id": "81c7e414-a3de-48a0-9fd9-4a033a375c52",
        "name": "music2",
        "description": "my first music",
        "url": "music.com",
        "type": "audio",
        "status": "active",
        "createdAt": "2023-03-18T21:18:46.000Z",
        "updatedAt": "2023-03-18T21:18:46.000Z",
        "deletedAt": "2023-03-18T21:18:46.000Z"
    }
}

```

## Delete Media 
URL: DELETE /media/:id
Path Parameters:
id: id of the media to be fetched

Response:
```bash
{
    "status": "success",
    "message": "Media deleted successfully"
}

```


## Get Media 
Gets all media

URL: GET /media

Response:

```bash
 {
    "status": "success",
    "message": "Media retrieved successfully",
    "data": [
        {
            "id": "71c7e414-a3de-48a0-9fd9-4a033a375c59",
            "name": "music2",
            "description": "my second music",
            "url": "music.com",
            "type": "audio",
            "status": "active",
            "createdAt": "2023-03-18T21:18:46.000Z",
            "updatedAt": "2023-03-18T21:18:46.000Z",
            "deletedAt": "2023-03-18T21:18:46.000Z"
        },
        {
            "id": "81c7e414-a3de-48a0-9fd9-4a033a375c52",
            "name": "music3",
            "description": "my third music",
            "url": "music.com",
            "type": "audio",
            "status": "active",
            "createdAt": "2023-03-18T21:18:46.000Z",
            "updatedAt": "2023-03-18T21:18:46.000Z",
            "deletedAt": "2023-03-18T21:18:46.000Z"
        }
    ]
}

```

## Update Media 
URL: PATCH /media/:id
Path Parameters:
id: id of the media to be fetched


Request Body:

Response:
```bash


```