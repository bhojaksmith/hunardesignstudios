var v=0;
function uxDesign(){
    $(".bottom").fadeOut(function() {
        $(".bottom").attr('src','uxDesign.html').fadeIn();
       
        $('.tag').removeAttr('id');
        $(".c").removeAttr("id");
        $(".c1").attr('id','current');
        v=0;
        $(".uxDesign").attr('id','active');
        $(this).fadeIn();
       
        
    });
}

function illustrations(){
    $(".bottom").fadeOut(function() {
        $(".bottom").attr('src','illustrations.html').fadeIn();
        
        $('.tag').removeAttr('id');
        $(".c").removeAttr("id");
        $(".c1").attr('id','current');
        v=0;
        $(".illustrations").attr('id','active');
        $(this).fadeIn();
       
    });
}

function magazine(){
    $(".bottom").fadeOut(function() {
        $(".bottom").attr('src','magazine.html').fadeIn();
        $('.tag').removeAttr('id');
        $(".c").removeAttr("id");
        $(".c1").attr('id','current');
        v=0;
        $(".magazine").attr('id','active');
        $(this).fadeIn();
        
    });
}

function pitch(){
    $(".bottom").fadeOut(function() {
        $(".bottom").attr('src','pitch.html').fadeIn();
        $('.tag').removeAttr('id');
        $(".c").removeAttr("id");
        $(".c1").attr('id','current');
        v=0;
        $(".pitch").attr('id','active');
        $(this).fadeIn();
        
    });
}

// function branding(){
//     $(".bottom").fadeOut(function() {
//         $(".tagPhoto").attr('src','assets/portfolio/ux2.jpg').fadeIn();
//         $(".titleHeader").text('Branding & Packaging').fadeIn();
//         $('.tag').removeAttr('id');
//         $(".c").removeAttr("id");
//         $(".c1").attr('id','current');
//         v=0;
//         $(".branding").attr('id','active');
//         $(this).fadeIn();
       
//     });
// }


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

function editing(){
    $(".bottom").fadeOut(function() {
        $(".bottom").attr('src','editing.html').fadeIn();
        $('.tag').removeAttr('id');
        $(".c").removeAttr("id");
        $(".c1").attr('id','current');
        v=0;
        $(".editing").attr('id','active');
        $(this).fadeIn();
       
    });
}
function autoCarousel(){
    setInterval(function() {
        if(v>=3){v=0}
        v++;
        $(".c").removeAttr("id")
        $(".c"+v).attr('id','current');
    }, 3000);
    
}

