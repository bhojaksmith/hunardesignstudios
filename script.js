// $(window).load(function() {
   
// });
Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
    console.log('images finished loading');
});
function run(){
    $('.content').imagesLoaded({ background: true }, function() {
        setTimeout(removeLoader, 2000);
      });
 }

 function removeLoader(){
    
    let loader = document.querySelector(".loader");
    let content = document.querySelector(".content");
    console.log("Removing Loader");
    loader.style.display = 'none'
    content.style.display = 'block';
    
    }
    
// function viewPortfolio(){
    
//     console.log("Removing Hero")
//     $(".heroSection").fadeOut(1000);
//     setTimeout(slidePortfolio, 1000);
    
// }
// function slidePortfolio(){
//     $(".portfolio").fadeIn(1000);
    
// }
// function loadHero(){
    
//     $(".portfolio").fadeOut(1000);
//     $(".heroSection").fadeIn(1000);
// }




// const mediaQuery = window.matchMedia('(min-width: 768px)')

// if(mediaQuery.matches){
  
//    let mainHeadingBlock = document.querySelector(".content");
//    let tagInfo = document.querySelector(".tagInfo");
//    let tagPhoto = document.querySelector(".tagPhoto");
//   document.addEventListener('mousemove', function(e) {
//     let xAxis = (window.innerWidth  - e.pageX) / 200;
//     let yAxis = (window.innerHeight  - e.pageY) / 200;
//     // console.log(xAxis,yAxis,mainHeadingBlock)
//     mainHeadingBlock.style.transform = `translateY(${yAxis}px) translateX(${xAxis}px)`;
    
    
//     tagPhoto.style.borderRadius = xAxis+"px";
//   });


    
// }


const $card = document.querySelector('.card');
let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  }
  const distance = Math.sqrt(center.x**2 + center.y**2);
  
  $card.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance)* 2}deg
    )
  `;
  
  $card.querySelector('.glow').style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width/2}px
      ${center.y * 2 + bounds.height/2}px,
      #ffffff55,
      #0000000f
    )
  `;
}

$card.addEventListener('mouseenter', () => {
  bounds = $card.getBoundingClientRect();
  document.addEventListener('mousemove', rotateToMouse);
});

$card.addEventListener('mouseleave', () => {
  document.removeEventListener('mousemove', rotateToMouse);
  $card.style.transform = '';
  $card.style.background = '';
});