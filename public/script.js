// Script for Login.html

// getting the image list for random image
var imageList;

// fetching the route '/dynamicImageList' to ge the list of links for images and use one on random
fetch('/dynamicImageList' )
    .then( res => res.json()) // converting the recieved promise in json format
    .then( data => { imageList = data }) // setting the json formatted data to the global varibale 
    .then(() => { panelImage.src = imageList[(Math.floor(Math.random() * imageList.length))] } )  // choosing any one image link to 
// display at random


// adding an even listener to the next svg looking button
document.querySelector('.next').addEventListener( 'click' , validation )

panelImage = document.getElementById('panel-image')

errorContainer = document.getElementById('error')


// making global variables

let username = document.getElementById('username')
let password = document.getElementById('password')

function validation(){
    // geting the values of the input fields (values that users typed)
    usernameValue = document.getElementById('username').value
    passwordValue = document.getElementById('password').value
    console.log(usernameValue , passwordValue )
}

// getting the DOM elements of the show and hide password buttons
showIcon = document.querySelector('.show')
hideIcon = document.querySelector('.hide')

// code to hide and show the password

showIcon.addEventListener('click', passwordShow)
function passwordShow () {
    password.type = 'text'
    showIcon.style.opacity = '0'
    hideIcon.style.opacity = '1'
    hideIcon.style.zIndex = '3'
}


hideIcon.addEventListener('click', passwordHide)
function passwordHide(){
    password.type = 'password'
    hideIcon.style.opacity = '0'
    showIcon.style.opacity = '1'
    hideIcon.style.zIndex = '1'
}



