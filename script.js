// $(window).load(function() {
   
// });
function run(){
    $('.heroSection').imagesLoaded( function() {
        setTimeout(removeLoader, 2000);
      });
 }

 function removeLoader(){
    
    let loader = document.querySelector(".loader");
    let heroSection = document.querySelector(".heroSection");
    console.log("Removing Loader");
    loader.style.display = 'none'
    heroSection.style.display = 'flex';
    
    }

function viewPortfolio(){
    
    console.log("Removing Hero")
    $(".heroSection").fadeOut(1000);
    
    setTimeout(slidePortfolio, 1000);
}
function slidePortfolio(){
    $(".portfolio").fadeIn(1000);
}
function loadHero(){
    
    $(".portfolio").fadeOut(1000);
    $(".heroSection").fadeIn(1000);
}