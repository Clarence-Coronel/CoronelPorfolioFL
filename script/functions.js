let bgIdx = 0;
let isUpped = false;
let doAnim = true;
let isChangeColor = false;
let isH2Change = false;
const body = document.getElementsByTagName('body')[0];
const imageContainer = document.querySelector(".image-container");
const aboutText = document.querySelector(".text-container");
const highlight = document.querySelectorAll(".highlight");
const p = document.querySelector('.text-container p');
const modalTrigger = document.getElementById('modal-trigger');
const h2 = document.querySelectorAll('h2');
const actItem = document.querySelectorAll('.act-item');

setInterval(()=>{
    if(isH2Change){

        for(i = 0; i <h2.length; i++){
            h2[i].style.color = 'aquamarine';
            actItem[i].style.border = '2px solid skyblue'
            isH2Change = false;
        }

        
    }else{

        for(i = 0; i <h2.length; i++){
            h2[i].style.color = 'pink';
            actItem[i].style.border = '2px solid pink'
            isH2Change = true;
        }
        
    }
},400)




if(window.innerWidth <= 1100){
    generateModal('Note', 'Ma\'am Jho, my portfolio website is not mobile responsive and is best viewed in PC. Sorry for the inconvenience and thank you po!');
    modalTrigger.click();
}


// generateModal('Warning', 'Website still in development!');


imageContainer.addEventListener('mouseover', ()=>{
    doAnim = false;
    imageContainer.style.width = '90vw';
    imageContainer.style.border = 'unset'
    aboutText.style = 'display:flex';

    
})

setInterval(()=>{
    
},6000)

imageContainer.addEventListener('mouseout', ()=>{
    doAnim = true;
    imageContainer.style.width = '580px';
    aboutText.style = 'display:none';
})

setInterval(()=>{

    if(doAnim){
        if(!isUpped){
            imageContainer.style.width = '600px';
            // imageContainer.style.border = '1px solid white'
            isUpped = true;
        }else{
            imageContainer.style.width = '580px';
            // imageContainer.style.border = '1px solid black'
            isUpped = false;
        }
    }

    if(!isChangeColor){
        for(i = 0; i < highlight.length; i++){
            highlight[i].style.color = 'lightpink'
            isChangeColor = true;
        }
    }else{
        for(i = 0; i < highlight.length; i++){
            highlight[i].style.color = 'skyblue'
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