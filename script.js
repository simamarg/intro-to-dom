var changeTextEnter = function () {
    document.getElementById("p1").innerHTML = "Goodbye";
};

var changeTextLeave = function () {
    document.getElementById("p1").innerHTML = "Hello";
};

var addItem = function () {
    var item = document.createElement("li");
    var itemText = document.createTextNode("Another list item");
    item.appendChild(itemText);
    document.getElementById("list").appendChild(item);
};


var a1 = document.createElement("a");
a1.appendChild(document.createTextNode("Elevation's Website"));
document.getElementById("container").appendChild(a1);
a1.setAttribute("href", "https://en.elevation.academy");
a1.setAttribute("target", "_blank");

var firstClick = true;

var toggleButton = function () {
    var btn = document.getElementById("button2");
    if (firstClick) {
        btn.innerHTML = "Click me again!";
    } else {
        btn.innerHTML = "Click me!";
    }
    firstClick = !firstClick;
};

var submitForm = function() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var repPass = document.getElementById("rep-password").value;
    var country = document.getElementById("country").value;
    var phone = document.getElementById("phone").value;

    var correctInput = true;

    if (user.length < 5) {
        correctInput = false;
        document.getElementById("user-message").innerHTML = "The supplied username is too short, try again using 5 or more characters<br>";
    } else {
        alert("Thank you " + user);
        document.getElementById("user-message").innerHTML = "";
    }
    
    if (pass.length < 6) {
        correctInput = false;
        document.getElementById("pass-message").innerHTML = "The supplied password is too short, try again using 6 or more characters<br>";
    } else {
        document.getElementById("pass-message").innerHTML = "";
    }

    if (pass !== repPass) {
        correctInput = false;
        document.getElementById("rep-pass-message").innerHTML = "The supplied passwords don't match, try again<br>";
    } else {
        document.getElementById("rep-pass-message").innerHTML = "";
    }

    if (!(country.toLowerCase() === "usa" || country.toLowerCase() === "israel")) {
        correctInput = false;
        document.getElementById("country-message").innerHTML = "The supplied country is invalid (valid countries are Israel/USA)<br>"
    } else {
        document.getElementById("country-message").innerHTML = "";
    }

    if (phone.length < 15) {
        correctInput = false;
        document.getElementById("phone-message").innerHTML = "The supplied phone number is too short, try again using 15 or more digits<br>"
    } else {
        document.getElementById("phone-message").innerHTML = "";
    }

    if (correctInput) {
        document.getElementById("correct-input").innerHTML = "Well done " + user + "!"; 
    }
};