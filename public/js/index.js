var config= {
  apiKey: "AIzaSyAqEMLV2DiRPsqR6aezCRlRfkNF_nuAPOg",
  authDomain: "fantasy-basketball-ce8fa.firebaseapp.com",
  databaseURL: "https://fantasy-basketball-ce8fa.firebaseio.com",
  projectId: "fantasy-basketball-ce8fa",
  storageBucket: "fantasy-basketball-ce8fa.appspot.com",
  messagingSenderId: "860501128206",
  appId: "1:860501128206:web:db70d32f5c8e8d20"
};

firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Button for user login
$("#submit").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var userName = $("#username").val().trim();
  var age = $("#age").val().trim();

  // Creates local "temporary" object for holding user data
  var newUser = {
    username: userName,
    age: age
  };

  // Uploads user data to the firebase database
  database.ref().push(newUser);

  // Logs everything to console
  console.log(newUser.username);
  console.log(newUser.age);

  alert("User successfully added");

  // Clears all of the text-boxes
  $("#username").val("");
  $("#age").val("");
});

database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  // Store everything into a variable.
  var newUser = childSnapshot.val().username;
  var newAge = childSnapshot.val().age;

  // User Info
  console.log(newUser);
  console.log(newAge);
  
});


