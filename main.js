// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP0fH5vE7ycju-JPEKukt_ipHyPkM44dI",
  authDomain: "shoden-f6011.firebaseapp.com",
  projectId: "shoden-f6011",
  storageBucket: "shoden-f6011.appspot.com",
  messagingSenderId: "1086976842934",
  appId: "1:1086976842934:web:c6cb38c6acf492d579da17",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.getElementById('contactform').addEventListener('submit, submitForm')

//Submit form
function submitForm(e){
    e.preventDefault();

    //Get values
    var name = getInputVal('name');
    var surname = getInputVal('surname');
    var emailAddress = getInputVal('emailAddress');
    var phoneNumber = getInputVal('phoneNumber');
    var message = getInputVal('message');

    //Save message
    saveMessage(name, surname, emailAddress, phoneNumber, message)

    //Show alert
    document.querySelector('alert').style.display = 'block';

    //Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    //Clear Form
    document.getElementsById('contactForm').reset();
}

//Function to get form values
function getinputVal(id){
    return document.getElementsById(id).value;
}

//Save message to firebase
function saveMessage(name, surname, emailAddress, phoneNumber, message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        surname: surname,
        emailAdresss: emailAddress,
        phoneNumber: phoneNumber,
        message: message
    })
}

