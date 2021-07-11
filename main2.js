


// to turn the navbar to green when its clicked
function activateNavbar(imageName) {
    const whiteIcons = new Array("images/home.png", "images/skills.png", "images/mywork.png", "images/email.png")
    const iconsClasses = new Array('img.home', 'img.skills', 'img.mywork', 'img.email')
    const navImgClasses = new Array('.img-hover-home', '.img-hover-skills', '.img-hover-mywork', '.img-hover-email')
    const navTextClasses = new Array('.text-hover-home', '.text-hover-skills', '.text-hover-mywork', '.text-hover-email')



    for(let i = 0; i <= 3; i++){
        document.querySelector(iconsClasses[i]).src = whiteIcons[i]
        document.querySelector(navTextClasses[i]).classList.remove('green-color')

        document.querySelector(navImgClasses[i]).classList.remove('activate-img-hover')
        document.querySelector(navTextClasses[i]).classList.remove('activate-text-hover')
    }

    document.querySelector(`img.${imageName}`).src = 'images/' + imageName + '-green.png'
    document.querySelector(`.text-hover-${imageName}`).classList.add('green-color')

    document.querySelector(`.img-hover-${imageName}`).classList.add('activate-img-hover')
    document.querySelector(`.text-hover-${imageName}`).classList.add('activate-text-hover')
}
//Ends


const eye1 = document.querySelector('.eye-left');
const eye2 = document.querySelector('.eye-right')
window.addEventListener('mousemove', (evt) => {
    var x = -((window.innerWidth / 2 - evt.pageX) / 160)+6;
    let y = -((window.innerHeight / 2 - evt.pageY) / 160)+2;
    if ( x > 6.5){
        x = 6 + (x / 50)
    }
    if (y > 3.2){
        y = 3.2 + (y / 15)
    }
    eye1.style.transform = `translateY(${y}px) translateX(${x}px)`;
    eye2.style.transform = `translateY(${y}px) translateX(${x}px)`;
});  

// eyes section Ends


function hideCookiesBox() {
    document.querySelector('.pacman').classList.add('pacman-animation')
    setTimeout(function(){document.querySelector('.cookies-img').classList.add('cookies-animation')}, 1700)
    setTimeout(function(){document.querySelector('.cookies-img').classList.add('block-display')}, 4000)
    setTimeout(function(){document.querySelector('.cookies-box').classList.add('hide-cookies-box')}, 2500)
    setTimeout(function(){document.querySelector('.cookies-box-border').classList.add('hide-cookies-box-border')}, 2500)
    setTimeout(function(){document.querySelector('.cookies-box-blur').classList.add('hide-cookies-box-blur')}, 2700)
    setTimeout(function(){document.querySelector('.cookies-box-blur').classList.add('block-display')}, 3200)

    setTimeout(function(){document.querySelector('.cookies-box-container').classList.add('block-display')}, 3000)
    
    
}


// space moving background
document.addEventListener("mousemove", parallax);
function parallax(e){
  document.querySelectorAll(".object").forEach(function(move){

    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}

// accordion panel
function rotateChevron(className) {
    document.querySelector('.chevron').classList.remove('click-rotate')

    document.querySelector(`.${className}`).classList.add('click-rotate')
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}