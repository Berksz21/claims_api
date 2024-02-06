const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Use the API routes
app.use(bodyParser.urlencoded({extended:false}));
//parse request data content type application/json
app.use(bodyParser.json());

app.get('/test', (req, res)=> {
    res.send('Hello World');
});


app.use((req, res, next)=> {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});

module.exports = app;