function getDessert() {
    var thanksMessage = document.getElementById("thanks");
    return firebase.database().ref("desserts/" + localStorage.entryId).once("value").then(function(snapshot) {
        thanksMessage.textContent = "thanks for agreeing to give badger " + snapshot.val().dessert + "!";
    });
}