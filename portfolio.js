var v=0;
function uxDesign(){
    $(".bottom").fadeOut(function() {
        $(this).fadeIn();
        $(".tagPhoto").attr('src','assets/portfolio/ux1.jpg').fadeIn();
        $(".titleHeader").text('UI/UX Design').fadeIn();
        $('.tag').removeAttr('id');
        $(".c").removeAttr("id");
        $(".c1").attr('id','current');
        v=0;
        $(".uxDesign").attr('id','active');
        
    });
}

function illustrations(){
    $(".bottom").fadeOut(function() {
        $(this).fadeIn();
        $(".tagPhoto").attr('src','assets/portfolio/mag1.jpg').fadeIn();
        $(".titleHeader").text('Illustrations').fadeIn();
        $('.tag').removeAttr('id');
        $(".c").removeAttr("id");
        $(".c1").attr('id','current');
        v=0;
        $(".illustrations").attr('id','active');
    });
}

function magazine(){
    $(".bottom").fadeOut(function() {
        $(this).fadeIn();
        $(".tagPhoto").attr('src','assets/portfolio/mag3.jpg').fadeIn();
        $(".titleHeader").text('Magazine & Brochure').fadeIn();
        $('.tag').removeAttr('id');
        $(".c").removeAttr("id");
        $(".c1").attr('id','current');
        v=0;
        $(".magazine").attr('id','active');
    });
}

function pitch(){
    $(".bottom").fadeOut(function() {
        $(this).fadeIn();
        $(".tagPhoto").attr('src','assets/portfolio/ux3.jpg').fadeIn();
        $(".titleHeader").text('Pitch Deck').fadeIn();
        $('.tag').removeAttr('id');
        $(".c").removeAttr("id");
        $(".c1").attr('id','current');
        v=1;
        $(".pitch").attr('id','active');
    });
}

function branding(){
    $(".bottom").fadeOut(function() {
        $(this).fadeIn();
        $(".tagPhoto").attr('src','assets/portfolio/ux2.jpg').fadeIn();
        $(".titleHeader").text('Branding & Packaging').fadeIn();
        $('.tag').removeAttr('id');
        $(".c").removeAttr("id");
        $(".c1").attr('id','current');
        v=0;
        $(".branding").attr('id','active');
    });
}


function motion(){
    $(".bottom").fadeOut(function() {
        $(this).fadeIn();
        $(".tagPhoto").attr('src','assets/portfolio/mag2.jpg').fadeIn();
        $(".titleHeader").text('Motion Graphics').fadeIn();
        $('.tag').removeAttr('id');
        $(".c").removeAttr("id");
        $(".c1").attr('id','current');
        v=0;
        $(".motion").attr('id','active');
    });
}

function editing(){
    $(".bottom").fadeOut(function() {
        $(this).fadeIn();
        $(".tagPhoto").attr('src','assets/portfolio/mag1.jpg').fadeIn();
        $(".titleHeader").text('Photo Editing').fadeIn();
        $('.tag').removeAttr('id');
        $(".c").removeAttr("id");
        $(".c1").attr('id','current');
        v=0;
        $(".editing").attr('id','active');
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

