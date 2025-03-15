Step 1 :
install in requried dependancies

npm install bcryptjs cookie-parser cors dotenv express jsonwebtoken mongodb mongoose nodemailer nodemon

step 2 :
update package.json you will be required to add type as Module which will be used as module "import wala syntax"

"type": "module",
"scripts": {
"dev": "nodemon index.js"
.
.
.
}

step3:
create .env and .gitignore files and

PORT=3000
MONGO_URL = "mongodb+srv://<DBusername>:<DBpassword>@cluster0.fdkbg.mongodb.net/cohort"
BASE_URL=http://127.0.0.1:3000
MAILTRAP_HOST=
MAILTRAP_PORT=
MAILTRAP_USERNAME=
MAILTRAP_PASSWORD=
MAILTRAP_SENDEREMAIL=

Step 4:
create index.js file and start writign basic code of express and test its working.

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
res.send('Hello World!')
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

Step 5:
create MVC folder structure by creating below folders in root
/model
/controller
/routes
/utils

step 6:
Now we will create a MongoDB connection through mongoose framework
1st create User table schema in our mongoDB collection :

create file: User.model.js

then start creating your table instance.

step 7:

now we will create utils for DB connection using mongoose

create db.js file in utils folder use belwo standar code to implement mongoose function for mongodb connection

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//export a function that connects to db

const db = () => {
mongoose
.connect(process.env.MONGO_URL)
.then(() => {
console.log("connected to mongodb");
})
.catch(() => {
console.log("Error connecting to mongodb");
});
};

export default db;

step 8: import db in index.js

db();

Step 9 :

create your complete DB schemas

Step 10:

Write controllers logic in

user.controller.js

Step 11:

Srtie Routes logic in

user.routes.js
