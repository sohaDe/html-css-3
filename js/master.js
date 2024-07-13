
// 2toggle spin class on icon
document.querySelector(".toggle-setting .fa-gear").onClick = function(){
   this.classList.toggle("fa-spin");
   // toggle class open on setting box
   document.querySelector(".setting-box").classList.toggle("open");
};

// (switch back)
// random backg option(global)
let backGroundOption=true;

// variable to control the interval
let  backGroundInterval;

// $(function(){
//     'use strict';

    // 5check if there is local storage color option
    let mainColor=localStorage.getItem("colors-list");

if(mainColor !==null){
    document.documentElement.style.setProperty('--main-color', mainColor);

    // 7remove acitve class from all color list item
    document.querySelectorAll(".colors-list li").forEach(element => {

        element.classList.remove("active");

        // add active class on element when data-color === local storage item
        if(element.dataset.color===mainColor){
            element.classList.add("active");
        }
    })
}



//
// let backInterval;
// $(".fa-gear").on('click', function(){
//     this.classList.toggle("fa-spin");
//     document.querySelector(".setting-box").classList.toggle("open");
// })


// 3switch color
    const colorLi=document.querySelectorAll(".colors-list li");

    // loop for all list item
    colorLi.forEach(li => {

        // clicl on every list item
        li.addEventListener('click',(e)=>{
            // seet color on root
            document.documentElement.style.setProperty('--main-color',e.target.dataset.color);

            // 4set color on local storage
            localStorage.setItem("colors-list",e.target.dataset.color);

            // how to remove and add Active class
            handleActive(e);
    
        })
    });


// 8switch background
const randomBackEl=document.querySelectorAll(".random-background span");

// loop on all span
randomBackEl.forEach(span => {

    // click on all span
    span.addEventListener('click',(e)=>{

        handleActive(e);

        // step2 when we click yes or no
        if(e.target.dataset.background === 'yes'){

            backGroundOption = true;
            randomizeImages();
        }
        else{
            backGroundOption = false;
            clearInterval( backGroundInterval);
        }
    });

});




// 1switch between images
// step1 declarete variable then general
            let la = document.querySelector(".landing-page");
            let imgArray= ["01.jpg","02.jpg","09.webp"] ;

        function randomizeImages(){
            if(backGroundOption === true){

        backGroundInterval = setInterval(( ) => {

            // get random number
            let randomNumber= Math.floor(Math.random() * imgArray.length);

            // change background image url
            la.style.backgroundImage ='url("images/' + imgArray[randomNumber] + '")';


        },1000);

            }
        }

        randomizeImages();

// our skill section
//1select skills selector
let ourSkills= document.querySelector('.Skills');
// console.log(ourSkills);
window.onscroll=function(){

//2 skills offset top
let skillOffsetTop = ourSkills.offsetTop;
//this.console.log(skillOffsetTop);

//3 skills outer height
let skillOuterHeight = ourSkills.offsetHeight;
//this.console.log(skillOuterHeight);

//5 window height للصفحة نفسا
let windowHeight = this.innerHeight;
//this.console.log(windowHeight);

//6 window scrolltop pxضمن السكرول
let windowScrollTop = this.pageYOffset;
//
if (windowScrollTop > (skillOffsetTop + skillOuterHeight - windowHeight)) {

    //this.console.log('reached');
    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
    allSkills.forEach(skill => {
        skill.style.width = skill.dataset.progress;
    })}
};
// end scroll section

//  start gallery section
//اول مرحلة
//crete popup with image الشاشة كلا

let ourGallery=document.querySelectorAll('.gallery img');

ourGallery.forEach(img =>{
//حدث الضغط عالصورة
img.addEventListener('click',() => {

    //create overlay elemnt تظهر فيه الصورة
    let overlay=document.createElement("div");

    // add class to overlay
    overlay.className='popup-overlay';

    //append overlay to the body
    document.body.appendChild(overlay);
    // then designed overlay in css


//    تاني مرحلة
//create popup box and add  class to للصورة عند فتحا
let popupBox=document.createElement("div");

    // add class
    popupBox.className='popup-box';

    //بحطا قبل البوب منشان يطلع العنوان بالاول بعدين الصورة
     //title  for image
     if (img.alt !== null){
        //1 create heading
        let imgHeading = document.createElement("h3");
    
        //2 create text for heading
        let imgText = document.createTextNode(img.alt);
    
        //append the text to the heading
        imgHeading.appendChild(imgText);
    
        //append the heading to the popup box
        popupBox.appendChild(imgHeading);
    
    
        }

    //crete image to put in popup bpx
    let popupImage = document.createElement("img");
    //لما بظبع برجع السورس

    //set image source
    popupImage.src = img.src;

    //add image to popupBox
    popupBox.appendChild(popupImage);

    //add popupBox to Body
    document.body.appendChild(popupBox);

    //create the close span 
    let closeButton = document.createElement('span');

    //create close button text
    let closeButtonText = document.createTextNode('X');

    //add X to the close button
    closeButton.appendChild(closeButtonText);

    //add class to close button
    closeButton.className='close-button';

    //add close button to popup box
    popupBox.appendChild(closeButton);

    //close popup when click on
    document.addEventListener("click",function(e){
        if(e.target.className === 'close-button'){

            //remove the current popup
            e.target.parentNode.remove();

            //remove popup-overlay
            document.querySelector(".popup-overlay").remove();

        }
    })
});
});
//  end  gallery section


//select all bullet
const allBullet=document.querySelectorAll(".nav-bullets .bullet");

// access from links
const allLinks=document.querySelectorAll(".link a");

function scrollToSomeWhere(elements){
    elements.forEach(ele =>{

        ele.addEventListener("click", (e) =>{

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior:'smooth'
            });
        });
    });
}

scrollToSomeWhere(allBullet);
scrollToSomeWhere(allLinks);

// Handle Active state for remove and add active class
function handleActive(ev){

    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    })
    ev.target.classList.add("active");

}


//toggle menu
let toggleButton=document.querySelector(".menu");
let tLinks=document.querySelector(".link");

toggleButton.onclick=function(e){
    e.stopPropagation(); //منشان وين ماكبسنا عالزر  تظهر
   
    this.classList.toggle("menu-active");//لما بكبس عالمينو بيعمل توغل للمينو اكتيف وبيظهر السهم لاني بالس اس  اس كتبت ما يظهر السهم الا اذا صار اكتيف
    tLinks.classList.toggle("open");//الاوبن غاللينكات 
    
    //لما نكبس اي مكان عدا الوبتون بيقفل المينو
    document.addEventListener('click',(e)=>{
        if (e.target !== toggleButton && e.target !== tLinks) {

            //check if menu is have class open then it open
            if (tLinks.classList.contains("open")) {
                toggleButton.classList.toggle("menu-active");//toggle and hidden تبديل يعني اذا ظاهر خفيه واذا مخفي ظهرو
                tLinks.classList.toggle("open");
            }
        }
    })
}
tLinks.onclick=function(e){
    e.stopPropagation(); //نشان وين ماكبسنا غالمينو تظهر
}

// show or hide nav bullets
let bulletsSpan = document.querySelectorAll(".bullets-option span");
let bulletsContainer = document.querySelectorAll(".nav-bullets");
let bulletLocalItem = localStorage.getItem("bullets-option");

if (bulletLocalItem != null){
    bulletsSpan.forEach(span =>{
       span.classList.remove('active');
    });
    if (bulletLocalItem === 'block'){
        bulletsContainer.style.display='block';
        document.querySelector(".bullets-option .yes").classList.add('active');

    } else {

        bulletsContainer.style.display = 'none';
        document.querySelector(".bullets-option .no").classList.add('active');
    }

}

bulletsSpan.forEach(span => {
    span.addEventListener("click", (e) =>{
        if (span.dataset.display === 'show'){
            bulletsContainer.style.display = 'block';

            localStorage.setItem("bullets-option",'block');
        }else {
            bulletsContainer.style.display = 'none';

            localStorage.setItem("bullets-option",'none');
        }
        handleActive(e);
    });
});

// Reset Button
document.querySelector(".reset-option").onClick = function (){
    // 1)
    // localStorage.clear();
    // 2)
    localStorage.removeItem("colors-list");
    localStorage.removeItem("random-background");
    localStorage.removeItem("bullets-option");

    window.location.reload();
};