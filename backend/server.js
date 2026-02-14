const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;
const USER_EMAIL = 'test@test.com';
const USER_PASSWORD = '123456';
const SECRET_KEY = 'random-secret-key';

let activeToken = [];

app.use(cors({
    origin: 'http://localhost:5173', //Frontend incoming requests for Vite
    credentials: true,
}));

app.use(bodyParser.json());
app.use(cookieParser());

//Middleware to authenticate token for secure routes
const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) return res.sendStatus(401);

    if(!activeToken.includes(token)) {
        return res.sendStatus(403);
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}

//Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if(email === USER_EMAIL && password === USER_PASSWORD) {
        //SUCCESS, generate jwt
        const user = { email: USER_EMAIL};
        const token = jwt.sign(user, SECRET_KEY, {expiresIn: '2h'});

        //Store in local session
        activeToken.push(token);

        res.cookie('token', token, {httpOnly: true, secure: false, sameSite: 'strict'});

        res.json({message: 'Login success'});
    } else {
        res.status(401).json({message: 'Invalid credentials'});
    }
});

//Logout endpoint
app.post('/logout', (req, res) => {
    const token = req.cookies.token;
    activeToken = activeToken.filter(t => t !== token); //Remove token from memory on logout
    res.clearCookie();
    res.json({message: 'Logout success'});
});

//Dashboard endpoint
app.get('/dashboard', authenticateToken, (req, res) => {
    res.json({message: 'Welcome to Dashboard', user: req.user});
})

//Server running
app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
})
