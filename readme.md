# Project Title - BRAND ( A Blogging Website  ✉️)

## Screenshots



## Hosted URL
  
Frontend -  https://rituraj12797.github.io/FRONTEND/ 🌐

Backend - https://dep-mocha-six.vercel.app/ 🌐

## Features Implemented🚀🚀

### Frontend
- User-friendly Interface 🖥️

### Backend
- User authentication 🔐
- Forget Password 📧
- CRUD Operations on Blogs ✏️
- Useful middlewares like authenticate, error, and multer 🛠️
- Implementation of utility like sendEmail 📩

## Technologies/Libraries/Packages
### Frontend

```
- HTML 🌐
- CSS 🎨
- JavaScript 🚀


```

### Backend
```bash
- Node.js 🚀
- Express.js 🛠️
- MongoDB 📦
- Cloudinary ☁️
- bcryptjs 🔒
- nodemailer 📧
- jsonwebtoken 🍪
- multer 📁
- mongoose 🍃
- morgan 📝
- email-validator 📧
- dotenv ⚙️
- cookie-parser 🍪
- body-parser 📦
- nodemon 🔄

```


# Local  Setup 🚀
### 1. Cloning the repo  
```bash
   git clone https://github.com/Ayush-Vish/dep.git blog_website 
``` 

### 2. Changing the directory to server of the blog-website 
```bash 
   cd blog-website
```

### 3. Installing all the dependencies 
```bash
  npm  i --save
```
### 4. Making a .env file 
```bash
  touch .env 
```

### 5. Open .env file and copy the content which is in the .env.example.js file . Click [here](./.env.example.js) 

### 6. Starting the server 🌐
```bash
   npm run dev 
```

### Now sever is listening on a particular port 

## User Routes localhost:<PORT>/api/v1/user
# API Routes

| Route                        | Description                                |
| ---------------------------- | ------------------------------------------ |
| **User Routes**              |                                            |
| `POST /api/v1/user/register` | Register a user                            |
| `POST /api/v1/user/login`    | Login a user                               |
| `GET /api/v1/user/logout`    | Logout a user                              |
| `GET /api/v1/user/me`        | Get user details                           |
| `POST /api/v1/user/updateUser` | Update user details                       |
| `POST /api/v1/user/forgot-password` | Send a token for resetting password |
| `POST /api/v1/user/reset-password/:resetPasswordToken` | Reset password |
| `POST /api/v1/user/authorBlogs` | Get blogs written by user             |
| `GET /api/v1/user/getFollowers` | Get followers of a user               |
| **Blog Routes**              |                                            |
| `GET /api/v1/blogs/getAllBlogs` | Get all blogs                             |
| `POST /api/v1/blogs/create-blog` | Create a blog                             |
| `GET /api/v1/blogs/getblog/:id` | Get a blog by ID                           |
| `GET /api/v1/blogs/getblogByCategory/:category` | Get a blog by category             |
| `GET /api/v1/blogs/`         | Get recent blogs                           |
| `PUT /api/v1/blogs/update-blog/:id` | Update a blog by ID                  |
| `GET /api/v1/blogs/getAllComments/:id` | Get all comments on a blog     |
| `POST /api/v1/blogs/writeComment/:id` | Write a comment on a blog    |
| `DELETE /api/v1/blogs/removeComment/:id/:commentId` | Remove a comment on a blog |
| `POST /api/v1/blogs/likeBlog/:id` | Like a blog by ID                      |
| `DELETE /api/v1/blogs/unlikeBlog/:id` | Unlike a blog by ID                 |



## Team Members

- Ayush Vishwakarma 2022IMT-028 👨‍💻

- Ritu Raj 2022IMG-057 👩‍💻

- Divya Agarwal 2022IMT-036 👩‍💻






