
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");
// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

const express = require('express');
const app = express();
const port = 4000;
const path = require("path");




//AIzaSyBBrb2XR3ND-MTo8sT7COEw-vuXKtMLdpo


const indexRoute = require('./Routes/index.js');
const submitRoute = require('./Routes/submit.js');
const getsingleRoute = require('./Routes/getsingle.js');


app.use('/',indexRoute);
app.use('/submit',submitRoute);
app.use('/getsingle',getsingleRoute);

/*----Serve files in Express. This is a more explicit way to get your directory----*/
app.use(express.static(path.join(__dirname, "public")));


/*app.listen (listen is a method inside of express) The first argument it recieves is a port, the second is a callback function. listen allows you to listen for anythin that happens in that express isntance
You can log IP's, etc. It creates a listen event and that event allows you to use this in the browser */
app.listen(port, () => console.log(`Example app listening on port ${port}!`));




