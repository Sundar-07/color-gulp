const colors =["green","red","white","teal","yellow","whitesmoke","orange","violet","brown","blue","thistle","yellowgreen","darkblue","cyan","darkcyan","darkgoldenrod","magenta","darkmagenta","darkolivegreen","lavender","indigo","darkslategray","maroon","aqua"];

const btn = document.getElementById("btn");
const color = document.getElementById("color");


btn.addEventListener("click",function(){
    //get random number between 0-3
    
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];


});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}