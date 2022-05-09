// $(window).load(function() {
   
// });
Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
    console.log('images finished loading');
});
function run(){
    $('.content').imagesLoaded( function() {
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
