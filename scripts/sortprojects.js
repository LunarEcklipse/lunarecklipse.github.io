var gameProjects = [];
var codeProjects = [];
var unityProjects = [];
var videoProjects = [];
var blenderProjects = [];
var arduinoProjects = [];

var isGameActive = true;
var isCodeActive = true;
var isUnityActive = true;
var isVideoActive = true;
var isBlenderActive = true;
var isArduinoActive = true;

var gameButton = null;
var codeButton = null;
var unityButton = null;
var videoButton = null;
var blenderButton = null;
var arduinoButton = null;

function sortProjects() {
    // Get all projects by class
    gameProjects = document.getElementsByClassName("project--game");
    codeProjects = document.getElementsByClassName("project--code");
    unityProjects = document.getElementsByClassName("project--unity");
    videoProjects = document.getElementsByClassName("project--video");
    blenderProjects = document.getElementsByClassName("project--blender");
    arduinoProjects = document.getElementsByClassName("project--arduino");
}

document.addEventListener("DOMContentLoaded", function(event) { // Wait until everything is loaded to do work
    gameButton = document.getElementById("gameButton");
    gameButton.addEventListener("click", toggleGame);
    codeButton = document.getElementById("codeButton");
    codeButton.addEventListener("click", toggleCode);
    unityButton = document.getElementById("unityButton");
    unityButton.addEventListener("click", toggleUnity);
    videoButton = document.getElementById("videoButton");
    videoButton.addEventListener("click", toggleVideo);
    blenderButton = document.getElementById("blenderButton");
    blenderButton.addEventListener("click", toggleBlender);
    arduinoButton = document.getElementById("arduinoButton");
    arduinoButton.addEventListener("click", toggleArduino);
    sortProjects();
});

function hideElementsFromClass(pageClass)
{
    console.log("Hiding elements from class: " + pageClass);
    var elements = document.getElementsByClassName(pageClass);
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add("hidden");
    }
}

function showElementsFromClass(pageClass)
{
    console.log("Showing elements from class: " + pageClass);
    var elements = document.getElementsByClassName(pageClass);
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("hidden");
    }
}

function toggleGame() {
    isGameActive = !isGameActive;
    if (isGameActive) {
        showElementsFromClass("project--game");
    }
    else {
        hideElementsFromClass("project--game");
    }
}

function toggleCode() {
    isCodeActive = !isCodeActive;
    if (isCodeActive) {
        showElementsFromClass("project--code");
    }
    else {
        hideElementsFromClass("project--code");
    }
}

function toggleUnity() {
    isUnityActive = !isUnityActive;
    if (isUnityActive) {
        showElementsFromClass("project--unity");
    }
    else {
        hideElementsFromClass("project--unity");
    }
}

function toggleVideo() {
    isVideoActive = !isVideoActive;
    if (isVideoActive) {
        showElementsFromClass("project--video");
    }
    else {
        hideElementsFromClass("project--video");
    }
}

function toggleBlender() {
    isBlenderActive = !isBlenderActive;
    if (isBlenderActive) {
        showElementsFromClass("project--blender");
    }
    else {
        hideElementsFromClass("project--blender");
    }
}

function toggleArduino() {
    isArduinoActive = !isArduinoActive;
    if (isArduinoActive) {
        showElementsFromClass("project--arduino");
    }
    else {
        hideElementsFromClass("project--arduino");
    }
}
