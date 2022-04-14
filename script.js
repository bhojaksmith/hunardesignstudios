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

function hideCursor(){
    console.log("Hiding Cursor")
    $(".cursor").css('border','none');
}
function showCursor(){
    console.log("Showing Cursor")
    $(".cursor").css('border','1px solid black');
}


const mediaQuery = window.matchMedia('(min-width: 768px)')

if(mediaQuery.matches){
  
   let mainHeadingBlock = document.querySelector(".mainHeadingBlock");
   let tagInfo = document.querySelector(".tagInfo");
   let tagPhoto = document.querySelector(".tagPhoto");
  document.addEventListener('mousemove', function(e) {
    let xAxis = (window.innerWidth  - e.pageX) / 200;
    let yAxis = (window.innerHeight  - e.pageY) / 200;
    // console.log(xAxis,yAxis,mainHeadingBlock)
    mainHeadingBlock.style.transform = `translateY(${yAxis}px) translateX(${xAxis}px)`;
    
    
    tagPhoto.style.borderRadius = xAxis+"px";
  });

  
function makeCursorBlack(){
    $(".cursor").css('border','1px solid black');
}
function makeCursorWhite(){
    $(".cursor").css('border','1px solid white');
}

    
}
