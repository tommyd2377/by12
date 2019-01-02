function collectEmail() {
    var email = document.getElementById("nme");
    console.log(email.value);
    firebase.database().ref('subscribers/').push({
      email: email.value,
    }).then(() => {
            location.reload();
        })
}

function menuToggle(x) {
    x.classList.toggle("change");
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}