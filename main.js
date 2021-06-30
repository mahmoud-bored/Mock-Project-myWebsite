// to turn the navbar to green when its clicked
function activateNavBar(imageName) {
    const whiteIcons = new Array("images/home.png", "images/about.png", "images/skills.png", "images/mywork.png", "images/email.png")
    const iconsClasses = new Array('img.home', 'img.about', 'img.skills', 'img.mywork', 'img.email')
    const navTextClasses = new Array('.text-hover-home', '.text-hover-about', '.text-hover-skills', '.text-hover-mywork', '.text-hover-email')



    for(let i = 0; i <= 4; i++){
        document.querySelector(iconsClasses[i]).src = whiteIcons[i]
        document.querySelector(navTextClasses[i]).classList.remove('green-color')
    }

    document.querySelector('img.'+imageName).src = 'images/' + imageName + '-green.png'
    document.querySelector('.text-hover-'+imageName).classList.add('green-color')
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
