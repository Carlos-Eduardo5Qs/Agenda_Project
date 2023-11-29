const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');

const routes = require('../../routes');

function setupServer(app) {
    app.use(express.static(path.resolve(__dirname, '../../public')));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use(session({
        secret: 'root',
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
            maxAge: 604800000,
        },
    }));

    app.use(flash());
    
    app.engine('hbs', exphbs.engine({
        extname: '.hbs',
        defaultLayout: 'main',
        partialsDir: path.resolve(__dirname, '../views/partials'),
    }));

    app.set('view engine', 'hbs');
    app.set('views', path.resolve(__dirname, '../views'));

    app.use((req,res,next) => {
        res.locals.messages = req.flash();
        next();
    });

    app.use(routes);
};

module.exports = setupServer;