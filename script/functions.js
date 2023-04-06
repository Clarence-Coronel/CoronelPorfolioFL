let bgIdx = 0;
let isUpped = false;
let doAnim = true;
let isChangeColor = false;
const body = document.getElementsByTagName('body')[0];
const imageContainer = document.querySelector(".image-container");
const aboutText = document.querySelector(".text-container");
const highlight = document.querySelectorAll(".highlight");
const modalTrigger = document.getElementById('modal-trigger');
body.style.backgroundImage = 'url(images/6.jpg)'

generateModal('Note', 'Ma\'am Jho, my portfolio website is not mobile responsive and is best viewed in PC. Sorry for the inconvenience and thank you po!');
modalTrigger.click();

imageContainer.addEventListener('mouseover', ()=>{
    console.log('Mouse is hovering Image Container');
    doAnim = false;
    imageContainer.style.width = '1500px';
    imageContainer.style.border = 'unset'
    aboutText.style = 'display:flex';

    
})

imageContainer.addEventListener('mouseout', ()=>{
    console.log('Mouse is has exited Image Container');
    doAnim = true;
    imageContainer.style.width = '580px';
    aboutText.style = 'display:none';
})

setInterval(()=>{

    if(doAnim){
        if(!isUpped){
            console.log('width has been set to 600px');
            imageContainer.style.width = '600px';
            // imageContainer.style.border = '1px solid white'
            isUpped = true;
        }else{
            console.log('width has been set to 580px');
            imageContainer.style.width = '580px';
            // imageContainer.style.border = '1px solid black'
            isUpped = false;
        }
    }

    if(!isChangeColor){
        for(i = 0; i < highlight.length; i++){
            highlight[i].style.color = 'pink'
            isChangeColor = true;
        }
    }else{
        for(i = 0; i < highlight.length; i++){
            highlight[i].style.color = 'rgb(56, 129, 197)'
            isChangeColor = false;
        }
    }
}, 500);

function generateModal(title, content){
    let modalTitle = document.getElementById('modal-title');
    let modalContent = document.getElementById('modal-content');

    modalTitle.innerHTML = title;
    modalContent.innerHTML = content;
}