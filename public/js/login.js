var database = firebase.database();
var desserts = database.ref('desserts');

var nameForm = document.getElementById("nameForm");
var nameInput = document.getElementById("nameInput");
nameForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Push name to database
    var name = nameInput.value;
    desserts.push({
       baker: name 
    })
    .then(function () {
        window.location.href = "../ask.html";
    }); 
});

firebase.auth().onAuthStateChanged(function() {
    desserts.on("child_added", function(data) {
        localStorage.setItem("entryId", data.key);
    });
});
