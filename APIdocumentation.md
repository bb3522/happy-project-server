# Endpoints
List of Available Endpoints:

- `POST /register`
- `POST /login`
- `POST /login/authGoogle`
- `GET /posts`
- `GET /posts/categories`
- `GET /posts/histories`
- `POST /posts`
- `GET /posts/:postId`
- `PUT /posts/:postId`
- `PATCH /posts/:postId`
- `POST customers/register`
- `POST customers/login`
- `POST customers/login/authGoogle`
- `GET customers/posts`
- `GET customers/posts/:postId`
- `POST customers/posts/:postId`
- `GET customers/favorites`

# 

## POST /register
**Description**
- Create a new user (only for admin)

**Request**

- Headers
```json
  {
    "Content-Type": "application/x-www-form-urlencoded"
  }
```

- Body
```json
  {
    "username": String,
    "email": String,
    "password": String,
    "phoneNumber": String,
    "address": String
  }
```

**Response**

*201 - Created*

- Body:
```json
{
  "statusCode": 201,
  "message": "User created successfully",
  "data" : {
    "username": String,
    "email": String
  }
}
```

*400 - Bad Request*

- Body:
```json
{
  "statusCode": 400,
  "error" : {
    "message": [
      String, 
      ...
    ]
  }
}
```

## POST /login
**Description**
- Login user (only for admin)

**Request**

- Headers
```json
  {
    "Content-Type": "application/x-www-form-urlencoded"
  }
```

- Body
```json
  {
    "email": String,
    "password": String,
    "data": {
      "username": String,
      "email": String,
      "role": String
    }
  }
```

**Response**

*200 - OK*

- Body:
```json
{
  "statusCode": 200,
  "access_token" : String
}
```

*401 - Unauthorized*

- Body:
```json
{
  "statusCode": 401,
  "error" : {
    "message": "Invalid email or password"
  }
}
```

## POST /login/authGoogle
**Description**
- Login user (only for blogger)

**Request**

- Headers
```json
  {
    "Content-Type": "application/json"
  }
```

- Body
```json
  {
    "idToken": String
  }
```

**Response**

*200 - OK*

- Body:
```json
{
  "statusCode": 200,
  "access_token" : String,
  "data": {
      "username": String,
      "email": String,
      "role": String
  }
}
```

## GET /posts

**Description**
- Get all posts data

**Request**

- Headers
```json
  {
    "access_token": String
  }
```

**Response**

*200 - OK*

Body:
```json
{
  "statusCode": 200,
  "data" : [
    {
      "id": Integer,
      "title": String,
      "content": Text,
      "imgUrl": String,
      "categoryId": Integer,
      "authorId": Integer,
      "createdAt": Date,
      "updatedAt": Date,
      "User": {
        "username": String
      },
      "Category": {
        "name": String
      },
    },
    ...
  ]
}
```

## GET /posts/categories

**Description**
- Get all categories data

**Request**

- Headers
```json
  {
    "access_token": String
  }
```

**Response**

*200 - OK*

Body:
```json
{
  "statusCode": 200,
  "data" : [
    {
      "id": Integer,
      "name": String
    },
    ...
  ]
}
```

*401 - Unauthorized*

- Body:
```json
{
  "statusCode": 401,
  "error" : {
    "message": "Invalid Token, please login first"
  }
}
```

## GET /posts/histories

**Description**
- Get all histories of add, update, and patch post

**Request**

- Headers
```json
  {
    "access_token": String
  }
```

**Response**

*200 - OK*

Body:
```json
{
  "statusCode": 200,
  "data" : [
    {
      "id": Integer,
      "title": String,
      "description": String,
      "postId": Integer,
      "updatedBy": String,
      "createdAt": Date,
      "updatedAt": Date
    },
    ...
  ]
}
```

*401 - Unauthorized*

- Body:
```json
{
  "statusCode": 401,
  "error" : {
    "message": "Invalid Token, please login first"
  }
}
```

## POST /posts

**Description**
- Create a new post

**Request**

- Headers
```json
  {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  {
    "access_token": String
  }

```

- Body
```json
  {
    "title": String,
    "content": Text,
    "imgUrl": String,
    "categoryId": Integer
  }
```

**Response**

*201 - Created*

- Body:
```json
{
  "statusCode": 201,
  "message": "Post created successfully",
  "data" : {
    "id": Integer,
    "title": String,
    "content": Text,
    "imgUrl": String,
    "categoryId": Integer,
    "authorId": Integer,
    "createdAt": Date,
    "updatedAt": Date
  }
}
```

*400 - Bad Request*

- Body:
```json
{
  "statusCode": 400,
  "error" : {
    "message": String
  }
}
```

*401 - Unauthorized*

- Body:
```json
{
  "statusCode": 401,
  "error" : {
    "message": "Invalid Token, please login first"
  }
}
```

## GET /posts/:postId

**Description**
- Get detail a post data with Author's username, email, and category

**Request**

- Headers
```json
  {
    "access_token": String
  }
```

**Response**

*200 - OK*

- Body:
```json
{
  "statusCode": 200,
  "data" : {
    "id": Integer,
    "title": String,
    "content": Text,
    "imgUrl": String,
    "userId": Integer,
    "authorId": Integer,
    "createdAt": Date,
    "updatedAt": Date,
    "User": {
      "username": String,
      "email": String,
      "phoneNumber": String
    },
    "Category": {
      "name": String
    }
  },
}
```

*404 - Not Found*

- Body:
```json
{
  "statusCode": 404,
  "error" : {
    "message": "Post Not Found"
  }
}
```

*401 - Unauthorized*

- Body:
```json
{
  "statusCode": 401,
  "error" : {
    "message": "Invalid Token, please login first"
  }
}
```

## PUT /posts/:postId

**Description**
- Update/edit a post data 

**Request**

- Headers

```json
  {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  {
    "access_token": String
  }
```

- Body:
```json
{
  "title": String,
  "content": Text,
  "imgUrl": String,
  "categoryId": Integer
}
```

**Response**

*200 - OK*

- Body:
```json
{
  "statusCode": 200,
  "message": "Post updated successfully",
  "data" : {
    "id": Integer,
    "title": String,
    "content": Text,
    "imgUrl": String,
    "categoryId": Integer,
    "authorId": Integer,
    "createdAt": Date,
    "updatedAt": Date
  }
}
```

*404 - Not Found*

- Body:
```json
{
  "statusCode": 404,
  "error" : {
    "message": "Post Not Found"
  }
}
```

*403 - Forbidden*

- Body:
```json
{
  "statusCode": 403,
  "error" : {
    "message": "You don't have permission to do this action"
  }
}
```

*401 - Unauthorized*

- Body:
```json
{
  "statusCode": 401,
  "error" : {
    "message": "Invalid Token, please login first"
  }
}
```

## PATCH /posts/:postId

**Description**
- Update a post's status based on given id

**Request**

- Headers
```json
  {
    "access_token": String
  }
```

**Response**

*200 - OK*

- Body:
```json
{
  "statusCode": 200,
  "message": "Status post updated successfully",
  "data" : {
    "title": Text,
    "status": String,
    "history": {
      "id": Integer,
      "postId": Integer,
      "title": String,
      "description": String,
      "updatedBy": String,
      "updatedAt": Date,
      "createdAt": Date
    },
  },
}
```

*404 - Not Found*

- Body:
```json
{
  "statusCode": 404,
  "error" : {
    "message": "Post Not Found"
  }
}
```

*403 - Forbidden*

- Body:
```json
{
  "statusCode": 403,
  "error" : {
    "message": "You don't have permission to do this action"
  }
}
```

*401 - Unauthorized*

- Body:
```json
{
  "statusCode": 401,
  "error" : {
    "message": "Invalid Token, please login first"
  }
}
```

## POST customers/register
**Description**
- Create a new user (only for customers)

**Request**

- Headers
```json
  {
    "Content-Type": "application/x-www-form-urlencoded"
  }
```

- Body
```json
  {
    "username": String,
    "email": String,
    "password": String,
  }
```

**Response**

*201 - Created*

- Body:
```json
{
  "statusCode": 201,
  "message": "User created successfully",
  "data" : {
    "username": String,
    "email": String
  }
}
```

*400 - Bad Request*

- Body:
```json
{
  "statusCode": 400,
  "error" : {
    "message": [
      String, 
      ...
    ]
  }
}
```

## POST customers/login
**Description**
- Login user (only for customers)

**Request**

- Headers
```json
  {
    "Content-Type": "application/x-www-form-urlencoded"
  }
```

- Body
```json
  {
    "email": String,
    "password": String,
  }
```

**Response**

*200 - OK*

- Body:
```json
{
  "statusCode": 200,
  "access_token" : String
}
```

*401 - Unauthorized*

- Body:
```json
{
  "statusCode": 401,
  "error" : {
    "message": "Invalid email or password"
  }
}
```

## POST customers/login/authGoogle
**Description**
- Login user (only for customers)

**Request**

- Headers
```json
  {
    "Content-Type": "application/json"
  }
```

- Body
```json
  {
    "idToken": String
  }
```

**Response**

*200 - OK*

- Body:
```json
{
  "statusCode": 200,
  "access_token" : String,
  "data": {
      "username": String,
      "email": String,
      "role": String
  }
}
```

## GET customers/posts

**Description**
- Get all posts data foe customers

**Response**

*200 - OK*

Body:
```json
{
  "statusCode": 200,
  "data" : [
    {
      "id": Integer,
      "title": String,
      "content": Text,
      "imgUrl": String,
      "categoryId": Integer,
      "authorId": Integer,
      "createdAt": Date,
      "updatedAt": Date,
      "User": {
        "username": String
      },
      "Category": {
        "name": String
      },
    },
    ...
  ]
}
```

## GET customers/posts/:postId

**Description**
- Get detail a post data with Author's username and category

**Response**

*200 - OK*

- Body:
```json
{
  "statusCode": 200,
  "data" : {
    "id": Integer,
    "title": String,
    "content": Text,
    "imgUrl": String,
    "userId": Integer,
    "authorId": Integer,
    "createdAt": Date,
    "updatedAt": Date,
    "User": {
      "username": String,
      "email": String,
      "phoneNumber": String
    },
    "Category": {
      "name": String
    }
  },
}
```

*404 - Not Found*

- Body:
```json
{
  "statusCode": 404,
  "error" : {
    "message": "Post not found"
  }
}
```

## POST customers/posts/:postId

**Description**
- Add a post to Favorites based on given post id

**Request**

- Headers
```json
  {
    "access_token": String
  }
```

**Response**

*200 - OK*

- Body:
```json
{
  "id": Integer,
  "customerId": Integer,
  "postId": Integer,
}
```

*404 - Not Found*

- Body:
```json
{
  "statusCode": 404,
  "error" : {
    "message": "Post Not Found"
  }
}
```

*401 - Unauthorized*

- Body:
```json
{
  "statusCode": 401,
  "error" : {
    "message": "Invalid Token, please login first"
  }
}
```

## POST customers/favorites

**Description**
- Get Customer Favorites posts

**Request**

- Headers
```json
  {
    "access_token": String
  }
```

**Response**

*200 - OK*

- Body:
```json
{
  "statusCode": 200,
  "data" : [
    {
      "id": Integer,
      "title": String,
      "content": Text,
      "imgUrl": String,
      "categoryId": Integer,
      "authorId": Integer,
      "createdAt": Date,
      "updatedAt": Date,
      "User": {
        "username": String
      },
      "Category": {
        "name": String
      },
    },
    ...
  ]
}
```

*401 - Unauthorized*

- Body:
```json
{
  "statusCode": 401,
  "error" : {
    "message": "Invalid Token, please login first"
  }
}
```


## Global Error

**Response**

*500 - Internal Server Error*

- Body:
```json
{
  "statusCode": 500,
  "error" : {
    "message": "Internal Server Error"
  }
}
```