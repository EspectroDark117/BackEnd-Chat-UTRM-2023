import App from  './config/config.js';


const port = process.env.APP_PORT;


App.http.listen(port ,() => console.log( 'API esta corriendo en el puerto: ',port));



/*

const express = require('express');
const app = express()  ;
require('dotenv').config();

const port = process.env.APP_PORT   ;

app.listen(port, () =>  {
    console.log('listening in port:', port)
})

app.get ('/hello' , (req,res) => {
     res.send(  'hello world. ')
})


app.get('/data',(req,res) => {
    const body = req.body ;
    console.log(body);
    res.send('ok')
})

*/
