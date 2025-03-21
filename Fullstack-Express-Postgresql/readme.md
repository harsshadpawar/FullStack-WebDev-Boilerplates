Step 1 :
install in requried dependancies

npm install bcryptjs cookie-parser cors dotenv express jsonwebtoken nodemailer nodemon

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
