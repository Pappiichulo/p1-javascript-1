var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function AgeCheck() {
    const x = parseInt(document.getElementById('age').value)

    if (x < 18) {
        document.getElementById("verification").innerHTML = "Je bent " + x + " jaar oud, dus niet oud genoeg.";
        document.getElementById("myModal").style.backgroundColor = "red"

    } else if (x >= 18) {
        document.getElementById("verification").innerHTML = "Je hebt toegang om verder te gaan";
        document.getElementById("myModal").style.backgroundColor = "transparent"
    } else {
        document.getElementById("verification").innerHTML = "Vul je leeftijd in"
        document.getElementById("myModal").style.backgroundColor = "transparent"
    }
}