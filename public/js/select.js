var database = firebase.database();
var dessertEntry = database.ref('desserts/' + localStorage.entryId);

var submitDessertBtn = document.getElementById("submitDessertBtn");
submitDessertBtn.addEventListener("click", function(e) {
    e.preventDefault();

    // Find selected radio button
    var radioBtns = document.getElementsByClassName("radioBtn");
    var index = 0;
    while(!radioBtns[index].checked){
        index++;
    }

    // Update firebase with selected dessert
    dessertEntry.update({
        dessert: radioBtns[index].value,
        response: "yes"
    })
    .then(function() {
        // send alert
        window.location.href = "thanks.html";
    });
});