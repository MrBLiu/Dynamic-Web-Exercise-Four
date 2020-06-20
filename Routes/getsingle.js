const express = require('express');
//We've referenced our express file
const router = express.Router();
const firebase = require('firebase');
//Place this at the very top

var firebaseConfig = {
    apiKey: "AIzaSyBBrb2XR3ND-MTo8sT7COEw-vuXKtMLdpo",
    authDomain: "moindgames.firebaseapp.com",
    databaseURL: "https://moindgames.firebaseio.com",
    projectId: "moindgames",
};


if (!firebase.apps.length) { //checks to see if firebase exists/has already loaded so we don't have duplicate instances of firebase
    firebase.initializeApp(firebaseConfig);
}
//this gives you access to the firestore database
const db = firebase.firestore()

//setting getOptions to determine the source from where we're making the query from. The options are server, default, and cache
//We'd use cache if we had a ton of queries, say 1000 per second. It'd be much quicker to query from cache. Otherwise we can query directly from the server
//If we use default, firebase chooses it for you
var getOptions = {
    source: 'default'
}


router.get("/:id", (req, res) => {
    let queryId = req.params.id; //we've defined ID above, we're able to get it as a param
    let docRef = db.collection("blog-posts").doc(queryId); //We're setting the query ID, then we're passing it into the blog-posts collection in our firebase as a reference which we will use to get data
    docRef
      .get(getOptions)
      .then((doc) => res.send(doc.data())) //using a promise here. If the doc is correct then we're gonna send the data we're getting, else raise an error
      .catch((error) => res.send(error)); //error if data doesn't exist
  }); //getting a value from the router
  
  //we're exporting the router here.
  module.exports = router;











