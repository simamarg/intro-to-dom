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
    var userElement = document.getElementById("user-message");
    var passElement =  document.getElementById("pass-message");
    var repeatPassElement = document.getElementById("rep-pass-message");
    var countryElement = document.getElementById("country-message");
    var phoneElement = document.getElementById("phone-message");

    var correctInput = true;

    if (user.length < 5) {
        userElement.innerHTML = "The supplied username is too short, try again using 5 or more characters<br>";
        correctInput = false;
    } else {
        alert("Thank you " + user);
        userElement.innerHTML = "";
    }
    
    if (pass.length < 6) {
        passElement.innerHTML = "The supplied password is too short, try again using 6 or more characters<br>";
        correctInput = false;
    } else {
        passElement.innerHTML = "";
    }

    if (pass !== repPass) {
        repeatPassElement.innerHTML = "The supplied passwords don't match, try again<br>";
        correctInput = false;
    } else {
        repeatPassElement.innerHTML = "";
    }

    if (!(country.toLowerCase() === "usa" || country.toLowerCase() === "israel")) {
        countryElement.innerHTML = "The supplied country is invalid (valid countries are Israel/USA)<br>"
        correctInput = false;
    } else {
        countryElement.innerHTML = "";
    }

    if (phone.length < 15) {
        phoneElement.innerHTML = "The supplied phone number is too short, try again using 15 or more digits<br>"
        correctInput = false;
    } else {
        phoneElement.innerHTML = "";
    }

    if (correctInput) {
        document.getElementById("correct-input").innerHTML = "Well done " + user + "! All your input is correct :)"; 
    }
};