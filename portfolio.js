var v=0;
function uxDesign(){
    $(".slider").fadeOut(function() {
        
        $('.tag').removeAttr('id');
        // $(".c").removeAttr("id");
        // $(".c1").attr('id','current');
        // v=0;
        $(".uxDesign").attr('id','active');
        document.querySelector('#item1').src = "assets/ux/1.png";
        document.querySelector('#item2').src = "assets/ux/2.png";
        document.querySelector('#item3').src = "assets/ux/3.png";
        $(this).fadeIn();
       
        
    });
}

function illustrations(){
    $(".slider").fadeOut(function() {
       
        $('.tag').removeAttr('id');
        $(".illustrations").attr('id','active');
        document.querySelector('#item1').src = "assets/illustrations/1.png";
        document.querySelector('#item2').src = "assets/illustrations/2.png";
        document.querySelector('#item3').src = "assets/illustrations/3.png";
        $(this).fadeIn();
       
    });
}

function magazine(){
    $(".slider").fadeOut(function() {
        
        $('.tag').removeAttr('id');
        // $(".c").removeAttr("id");
        // $(".c1").attr('id','current');
        // v=0;
        $(".magazine").attr('id','active');
        document.querySelector('#item1').src = "assets/magazine/1.png";
        document.querySelector('#item2').src = "assets/magazine/2.png";
        document.querySelector('#item3').src = "assets/magazine/3.png";
        $(this).fadeIn();
        
    });
}

function pitch(){
    $(".slider").fadeOut(function() {
      
        $('.tag').removeAttr('id');
        // $(".c").removeAttr("id");
        // $(".c1").attr('id','current');
        // v=0;
        $(".pitch").attr('id','active');
        document.querySelector('#item1').src = "assets/pitch/1.png";
        document.querySelector('#item2').src = "assets/pitch/2.png";
        document.querySelector('#item3').src = "assets/pitch/3.png";
        $(".pitch").attr('id','active');
        $(this).fadeIn();
        
    });
}

function editing(){
    $(".slider").fadeOut(function() {
      
        
        $('.tag').removeAttr('id');
        // $(".c").removeAttr("id");
        // $(".c1").attr('id','current');
        // v=0;
        $(".editing").attr('id','active');
        document.querySelector('#item1').src = "assets/editing/1.png";
        document.querySelector('#item2').src = "assets/editing/2.png";
        document.querySelector('#item3').src = "assets/editing/3.png";
        $(this).fadeIn();
       
    });
}

function branding(){
    $(".slider").fadeOut(function() {
       
        $('.tag').removeAttr('id');
        // $(".c").removeAttr("id");
        // $(".c1").attr('id','current');
        // v=0;
        $(".branding").attr('id','active');
        document.querySelector('#item1').src = "assets/branding/1.png";
        document.querySelector('#item2').src = "assets/branding/2.png";
        document.querySelector('#item3').src = "assets/branding/3.png";
        $(this).fadeIn();
       
    });
}


// function motion(){
//     $(".bottom").fadeOut(function() {
//         $(".tagPhoto").attr('src','assets/portfolio/mag2.jpg').fadeIn();
//         $(".titleHeader").text('Motion Graphics').fadeIn();
//         $('.tag').removeAttr('id');
//         $(".c").removeAttr("id");
//         $(".c1").attr('id','current');
//         v=0;
//         $(".motion").attr('id','active');
//         $(this).fadeIn();
//     });
// }


// function autoCarousel(){
//     if(v==0){v++}
//     setInterval(function() {
//         if(v>=3){v=0}
//         v++;
//         $(".c").removeAttr("id")
//         $(".c"+v).attr('id','current');
//     }, 2000);
    
// }

