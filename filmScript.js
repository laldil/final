var darkThemeButton = document.getElementById("darkTheme");
var topButton = document.querySelectorAll(".topButton");
var isDark = false;

var turnOffSound = new Audio('turnOff.mp3');
var turnOnSound = new Audio('turnOn.mp3');

function getDarkTheme(){
    turnOffSound.play();

    $("#navbarSupportedContent").css("backgroundColor", "#310A5D");
    $(".navbar").css("borderColor", "#411E8F");
    $("#fixBody").css("backgroundColor", "#352F44");
    $("#fixBody").css("color", "#A9A9A9");
    for(let i=0; i < document.querySelectorAll(".setOfFilms").length; i++){
        document.querySelectorAll(".setOfFilms")[i].style.borderColor = "#411E8F";
        document.querySelectorAll(".setOfFilms")[i].style.backgroundColor ="#2A2438";
    }
    $(".mainSection").css("backgroundColor", "#2A2438");
    $(".mainSection").css("borderColor", "#411E8F");
    for(let i = 0; i < topButton.length; i++){
    topButton[i].style.backgroundColor = "#411E8F";
    topButton[i].style.borderColor = "#411E8F";
    topButton[i].style.color = "#A9A9A9";

    document.querySelectorAll(".topButton")[i].addEventListener("mouseover", function(){
        topButton[i].style.color = "#411E8F";
        topButton[i].style.backgroundColor = "#A9A9A9";
    });

    document.querySelectorAll(".topButton")[i].addEventListener("mouseout", function(){
        topButton[i].style.color = "#A9A9A9";
        topButton[i].style.backgroundColor = "#411E8F";
    });

    }
    for(let i = 0; i < document.querySelectorAll(".dropdown-toggle").length; i++){
        document.querySelectorAll(".dropdown-toggle")[i].style.backgroundColor = "#411E8F";
        document.querySelectorAll(".dropdown-toggle")[i].style.borderColor = "#411E8F";
        document.querySelectorAll(".dropdown-toggle")[i].style.color = "#A9A9A9";
        document.querySelectorAll(".dropdown-menu")[i].style.backgroundColor = "#411E8F";
    }
    for(let i = 0; i < document.querySelectorAll(".dropdown-item").length; i++)
        document.querySelectorAll(".dropdown-item")[i].style.color = "#A9A9A9"

    $("hr").css("backgroundColor", "#411E8F");
    $(".card-header").css("backgroundColor", "#2A2438");
    $("#secondHeader").css("color", "#A9A9A9");
    $(".card").css("backgroundColor", "#2A2438");
    $(".end").css("backgroundColor", "#310A5D");
    $(".end").css("borderColor", "#411E8F");
    $(".mainFilmImg").css("backgroundColor", "#411E8F");
    $(".mainFilmImg").css("borderColor", "#411E8F");
    $(".filmBlock").css("backgroundColor", "#411E8F");
    $(".filmBlock").css("borderColor", "#411E8F");

    document.getElementById("changeIcon").removeAttribute("class");
    document.getElementById("changeIcon").setAttribute("class", "fas fa-sun fa-lg");
    document.getElementById("changeIcon").style.color = "#F0E68C";
    $(".modBtn").css("backgroundColor", "#393E46");
}

function getWhiteTheme(){
    turnOnSound.play();

    $("#navbarSupportedContent").css("backgroundColor", "#393E46");
    $(".navbar").css("borderColor", "#00ADB5");
    $("#fixBody").css("backgroundColor", "#EEEEEE");
    $("#fixBody").css("color", "black");
    for(let i=0; i < document.querySelectorAll(".setOfFilms").length; i++){
        document.querySelectorAll(".setOfFilms")[i].style.borderColor = "#00ADB5";
        document.querySelectorAll(".setOfFilms")[i].style.backgroundColor ="#EEEEEE";
    }
    $(".mainSection").css("backgroundColor", "#EEEEEE");
    $(".mainSection").css("borderColor", "#00ADB5");
    for(let i = 0; i < topButton.length; i++){
    topButton[i].style.backgroundColor = "#00ADB5";
    topButton[i].style.borderColor = "#00ADB5";
    topButton[i].style.color = "#EEEEEE";

    document.querySelectorAll(".topButton")[i].addEventListener("mouseover", function(){
        topButton[i].style.color = "#00ADB5";
        topButton[i].style.backgroundColor = "#EEEEEE";
    });

    document.querySelectorAll(".topButton")[i].addEventListener("mouseout", function(){
        topButton[i].style.color = "#EEEEEE";
        topButton[i].style.backgroundColor = "#00ADB5";
    });

    }
    for(let i = 0; i < document.querySelectorAll(".dropdown-toggle").length; i++){
        document.querySelectorAll(".dropdown-toggle")[i].style.backgroundColor = "#00ADB5";
        document.querySelectorAll(".dropdown-toggle")[i].style.borderColor = "#00ADB5";
        document.querySelectorAll(".dropdown-toggle")[i].style.color = "white";
        document.querySelectorAll(".dropdown-menu")[i].style.backgroundColor = "white";
    }
    for(let i = 0; i < document.querySelectorAll(".dropdown-item").length; i++)
        document.querySelectorAll(".dropdown-item")[i].style.color = "black"

    $("hr").css("backgroundColor", "#00ADB5");
    $(".card-header").css ("backgroundColor", "#EEEEEE");
    $("#secondHeader").css("color", "black");
    $(".card").css("backgroundColor", "white");
    $(".end").css("backgroundColor", "#393E46");
    $(".end").css("borderColor", "#00ADB5");
    $(".mainFilmImg").css("backgroundColor", "#fff");
    $(".mainFilmImg").css("borderColor", "#ddd");
    $(".filmBlock").css("backgroundColor", "#fff");
    $(".filmBlock").css("borderColor", "#ddd");

    document.getElementById("changeIcon").removeAttribute("class");
    document.getElementById("changeIcon").setAttribute("class", "fas fa-moon fa-lg");
    document.getElementById("changeIcon").style.color = "#A9A9A9";
    document.querySelector(".modBtn").style.backgroundColor = "#310A5D";
}

function checkTheme(){
    isDark == false ? getDarkTheme() : getWhiteTheme();
    isDark == false ? isDark = true : isDark = false;
}

darkThemeButton.addEventListener("click", checkTheme);  