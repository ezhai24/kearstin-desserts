function createFoolList() {
    var database = firebase.database();
    var desserts = database.ref("desserts");

    var dessertList = document.getElementById("fools");

    firebase.auth().onAuthStateChanged(function(user) {
        desserts.on("child_added", function(data) {
            var id = data.key;
            var values = data.val();

            var dessertLi = document.createElement("li");
            dessertLi.id = "dessertLi" + id;
            dessertLi.className = "list-unstyled foolList";

            var label = document.createElement("p");
            label.id = "label" + id;
            label.textContent = values.baker + " responded with " + values.response + " and owes you " + values.dessert;

            var removeBtn = document.createElement("button");
            removeBtn.className = "btn btn-primary removeFoolBtn";
            removeBtn.textContent = "Collect";

            dessertLi.appendChild(removeBtn);
            dessertLi.appendChild(label);
            dessertList.appendChild(dessertLi);

            removeBtn.addEventListener("click", function(e) {
                e.preventDefault();

                database.ref("desserts/" + id).remove();
            });
        });

        desserts.on("child_changed", function(data) {
            var id = data.key;
            var values = data.val();

            var label = document.getElementById("label" + id);
            label.textContent = values.baker + " responded with " + values.response + " and owes you " + values.dessert;
        });

        desserts.on("child_removed", function(data) {
            var id = data.key;

            var dessertLi = document.getElementById("dessertLi" + id);
            dessertList.removeChild(dessertLi);
        });
    });
}