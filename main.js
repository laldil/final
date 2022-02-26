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
    for(let i = 0; i < topButton.length; i++){
        topButton[i].style.backgroundColor = "#411E8F";
        topButton[i].style.borderColor = "#411E8F";
        topButton[i].style.color = "#A9A9A9";

        topButton[i].addEventListener("mouseover", function(){
            topButton[i].style.color = "#411E8F";
            topButton[i].style.backgroundColor = "#A9A9A9";
    });

    topButton[i].addEventListener("mouseout", function(){
        topButton[i].style.color = "#A9A9A9";
        topButton[i].style.backgroundColor = "#411E8F";
    });
    }
    $("hr").css("backgroundColor", "#411E8F");
    $(".end").css("backgroundColor", "#310A5D");
    $(".end").css("borderColor", "#411E8F");
    $(".setOfFilms").css("backgroundColor", "#2A2438");
    $(".setOfFilms").css("borderColor", "#411E8F");
    $(".card").css("backgroundColor", "#2A2438");
    $(".filmImage").css("backgroundColor", "#411E8F");
    $(".filmImage").css("borderColor", "#411E8F");
    $(".titleText").css("color", "#A9A9A9");
    for(let i=0; i < document.querySelectorAll(".page-link").length; i++){
        document.querySelectorAll(".page-link")[i].style.backgroundColor = "#2A2438";
        document.querySelectorAll(".page-link")[i].style.color = "#A9A9A9";
    }


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

    for(let i = 0; i < topButton.length; i++){
    topButton[i].style.backgroundColor = "#00ADB5";
    topButton[i].style.borderColor = "#00ADB5";
    topButton[i].style.color = "#EEEEEE";

    topButton[i].addEventListener("mouseover", function(){
        topButton[i].style.color = "#00ADB5";
        topButton[i].style.backgroundColor = "#EEEEEE";
    });

    topButton[i].addEventListener("mouseout", function(){
        topButton[i].style.color = "#EEEEEE";
        topButton[i].style.backgroundColor = "#00ADB5";
    });

    }

    $("hr").css("backgroundColor", "#00ADB5");
    $(".end").css("backgroundColor", "#393E46");
    $(".end").css("borderColor", "#00ADB5");
    $(".setOfFilms").css("backgroundColor", "#EEEEEE");
    $(".setOfFilms").css("borderColor", "#00ADB5");
    $(".card").css("backgroundColor", "#EEEEEE");
    $(".filmImage").css("backgroundColor", "#fff");
    $(".filmImage").css("borderColor", "#ddd");
    $(".titleText").css("color", "black");
    for(var i=0; i < document.querySelectorAll(".page-link").length;i++){
        document.querySelectorAll(".page-link")[i].style.backgroundColor = "#EEEEEE";
        document.querySelectorAll(".page-link")[i].style.color = "#00ADB5";
    }


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