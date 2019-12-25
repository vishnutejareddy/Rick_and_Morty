hello = document.getElementById('hello');
const image = document.querySelector("#image");
const btnName = document.querySelector('#btnName')
const headImage = document.querySelector("#headImage")
const audioFile = document.querySelector('#audioFile')

//hello.textContent = "Rick and Morty"
headImage.setAttribute('src',"imgs/Rick_and_Morty_logo.png")

const onMove = function(e){

    if(image.getAttribute('src') == "imgs/Rick_Sanchez.png"){
        img = 'imgs/Morty_Smith.png';
        name = "Morty"
    }else{
        img = 'imgs/Rick_Sanchez.png';
        name = "Rick"
    }

    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${Math.random()*100})`;
    image.setAttribute('src', img);
    btnName.textContent = name;
    setTimeout(function(){},2000)

}

function addAudio(){
    document.querySelector("body").addEventListener('mouseenter',function(e){
        audioFile.setAttribute("autoplay",true);
    });
    document.querySelector("body").addEventListener("mouseleave",function(){
        audioFile.removeAttribute("autoplay");
    })
}
addAudio();

document.querySelector('html').addEventListener('mousemove',onMove);



