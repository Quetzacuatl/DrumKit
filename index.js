
var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfButtons; i++){
     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        handleClick(this);
        buttonAnimation(this.getAttribute("class")[0]);
     });

    }

function handleClick(key){
    var buttonClicked = key.getAttribute("class")[0];
    console.log(buttonClicked);
    var audio = new Audio("sounds/"+buttonClicked+".mp3");
    audio.play();
}

document.addEventListener("keydown", (e) => {
    console.log(e.key);
    var keyPressed = e.key;

    const myKeys = [ 'w', 'a', 's', 'd','j','k','l'];
    if (myKeys.includes(keyPressed)){
        var audio = new Audio("sounds/"+keyPressed+".mp3");
        audio.play();
        buttonAnimation(keyPressed);
    };

})

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}