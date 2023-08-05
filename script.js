const boxContainerTag = document.querySelector(".boxContainer");
const box1Tag = document.querySelector(".box1");
const box2Tag = document.querySelector(".box2");
const box3Tag = document.querySelector(".box3");
const menuTag = document.querySelector(".menu");
const liTag = document.getElementsByTagName("li");

boxContainerTag.addEventListener("click", () => {
    
    if(boxContainerTag.classList.contains("menuOpened")){
        menuTag.classList.remove("showMenu");
        box2Tag.classList.remove("box2Remove");
        box1Tag.classList.remove("box1Tilt");
        box3Tag.classList.remove("box3Tilt");
        boxContainerTag.classList.remove("menuOpened");
        for(let i=0; i<liTag.length;i++ ){
            liTag[i].classList.remove("liAppear");
        };
    } else {
        menuTag.classList.add("showMenu");
        box2Tag.classList.add("box2Remove");
        box1Tag.classList.add("box1Tilt");
        box3Tag.classList.add("box3Tilt");
        boxContainerTag.classList.add("menuOpened");
        for(let i=0; i<liTag.length;i++ ){
            liTag[i].classList.add("liAppear");
        };
    }
})