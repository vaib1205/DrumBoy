// // document.querySelector("button").addEventListener("click",handleClick);
// // // its the idea of passing the function as an input so that it can be called at later time
// // function handleClick() {
// //     alert("I Got Clicked !!");
// // }
// var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// // // for (i=0 ; i<document.querySelectorAll(".drum").length ; i++)
// for(var i=0 ; i<numberOfDrumButtons ; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function () {
// //         // var audio = new Audio ("sounds/tom-2.mp3");
// //         // audio.play(); 
//         // this.style.color = "blue"; // this changes color of text to blue when you click on text of image
//         var buttonInnerHTML = this.innerHTML;
//         switch (buttonInnerHTML) {
//             case "w": 
//                     var tom1 = new Audio("sounds/tom-1.mp3");
//                     tom1.play();
//                 break;
//             case "a":
//                     var tom2 = new Audio("sounds/tom-2.mp3");
//                     tom2.play();
//                 break;
//             case "s":
//                     var tom3 = new Audio("sounds/tom-3.mp3");
//                     tom3.play();
//                 break;
//             case "d" :
//                     var tom4 = new Audio("sounds/tom-4.mp3")
//                     tom4.play();
//                 break;
//             case "j":
//                     var snare = new Audio("sounds/snare.mp3");
//                     snare.play();
//                 break;
//             case "k":
//                     var crash = new Audio("sounds/crash.mp3");
//                     crash.play();
//                 break;
//             case "l":
//                     var kick = new Audio("sounds/kick-bass.mp3");
//                     kick.play();
//                 break;
//             default: console.log(buttonInnerHTML);
//         }
//     });
// }
// document.addEventListener("keypress",function (event) {
//     console.log(event);
// })
// Writing above code as a anonymous function : Anonymous functions are written in event listener & they dont have name
// document.querySelectorAll("button").addEventListener("click",function () {
//     alert("I Got Clicked !!")
// });
// Note : it will search all buttons from querySelector so its better to use class instead of button

// Final Code :
//Detecting Button press : if a button is pressed/clicked on page , then it check innerHTML (this.innerHTML) & send that to makeSound(buttonInnerHTML)
var numberOfDrumButtons = document.querySelectorAll(".drum").length // return number of 

for(i=0 ; i<numberOfDrumButtons ; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function () {

        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    })
}

//Detecting keyboard press : if a keybord button is pressed,it send event.key to makesound function
document.addEventListener("keypress",function (event) {
    
    makeSound(event.key)

    buttonAnimation(event.key);
}) 
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();            
            break;
    default: console.log(buttonInnerHTML);
    }
}
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    },100);
}