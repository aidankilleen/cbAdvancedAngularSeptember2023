import jsonServer from 'json-server';
import bodyParser from 'body-parser';
import fs from 'fs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';

const port = 80;
const userDbFile = "./users.json";

dotenv.config();

const SECRET_KEY = process.env["SECRET_KEY"];

const expiresIn = '1h';
const server = jsonServer.create();
const router = jsonServer.router('./members.json');

function createToken(payload) {
    return jwt.sign(payload, SECRET_KEY, {expiresIn});
}

function verifyToken(token) {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch(error) {
        return false;
    }
}

async function authenticate({email, password}) {

    let userRecord = userdb.users.find(user => user.email == email);
    let result = await bcrypt.compare(password, userRecord.hash);

    return result;
}

function readUsers(fileName) {
    let db;
    try {
        db = JSON.parse(fs.readFileSync(fileName));
    }
    catch(err) {
        db = {
            users: []
        }
    }
    return db;
}

function writeUsers(fileName, db) {
    fs.writeFileSync(fileName, JSON.stringify(db, null, 4));
}

let userdb = readUsers(userDbFile);

server.use(bodyParser.json());
server.use(jsonServer.defaults());

server.use(/^(?!\/auth).*$/, (req, res, next) => {

    let status = 200;
    let message = "";

    if (req.headers.authorization == undefined) {

        status = 401;
        message = "not authenticated";

        return res.status(status).json({status, message});
    }
    let pieces = req.headers.authorization.split(' ');

    if (pieces.length != 2 || pieces[0] != 'Bearer') {
        status = 401;
        message = "Bearer token missing";

        return res.status(status).json({status, message});
    }
    let token = pieces[1];

    if (!verifyToken(token)) {

        status = 401;
        message = "token not verified";

        return res.status(status).json({status, message});
    }
    next();
});

server.post("/auth/login", async (req, res) => {

    const credentials = req.body;

    // validate the credentials
    let userData = userdb.users.find(user => user.email == credentials.email);

    let status = 200;
    let message = "";

    if (!userData) {

        status = 401;
        message = "email not on file";
        return res.status(status).json({ status, message});
    }

    if (! await authenticate(credentials)) {
        status = 401;
        message = "invalid password";

        return res.status(status).json({status, message});
    }
    // Produce a JWT
    const { hash, ...payload } = userData;
    let token = createToken(payload);
    res.json({token});
});

server.post("/auth/register", async (req, res) => {
    const userData = req.body;
    let status = 200;
    let message = "";

    // check this is a new email address
    if (userdb.users.findIndex(user => user.email == userData.email) != -1) {
        // user already exists
        status = 401;
        message = "User already exists";
        return res.status(status).json({status, message});
    }
    // Create a user record
    let lastId = userdb.users.reduce((max, user) => user.id > max ? user.id : max, 0);
    userData.id = lastId + 1;
    let hash = await bcrypt.hash(userData.password, 12);
    userData.hash = hash;
    delete userData.password;

    userdb.users.push(userData);
    writeUsers(userDbFile, userdb);

    const { hash:h, ...returnedUserDetails } = userData;
    res.status(201).json(returnedUserDetails);

});

server.use(router);

server.listen(port, () => {
    console.log(`jwt-json-server is listening on port ${port}`);
});
