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

