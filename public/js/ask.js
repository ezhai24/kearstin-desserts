var database = firebase.database();
var dessertEntry = database.ref('desserts/' + localStorage.entryId);

var noDonateBtn = document.getElementById("noDonateBtn");
noDonateBtn.addEventListener("click", function(e) {
    e.preventDefault();

    dessertEntry.update({
        dessert: "cookies",
        response: "no"
    })
    .then(function() {
        // send alert
        window.location.href = "thanks.html";
    });
});

var yesDonateBtn = document.getElementById("yesDonateBtn");
yesDonateBtn.addEventListener("click", function(e) {
    e.preventDefault();

    window.location.href = "select.html";
});