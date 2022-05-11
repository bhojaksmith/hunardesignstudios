
const mediaQuery = window.matchMedia('(min-width: 768px)')

if(!mediaQuery.matches){
            document.querySelector('#item1').src = "assets/m_uxDesign/1.png";
            document.querySelector('#item2').src = "assets/m_uxDesign/2.png";
            document.querySelector('#item3').src = "assets/m_uxDesign/3.png";
            $('#item').imagesLoaded( function() {
                $('.card').hide();
                $('.carousel-inner').fadeIn();
              });
    
              console.log(mediaQuery.matches)

    function uxDesign(){
        $(".carousel-inner").hide();
        $('.card').fadeIn();
        
        $('.tag').removeAttr('id');
            
        $(".uxDesign").attr('id','active');
        document.querySelector('#item1').src = "assets/m_uxDesign/1.png";
        document.querySelector('#item2').src = "assets/m_uxDesign/2.png";
        document.querySelector('#item3').src = "assets/m_uxDesign/3.png";
        $('#item').imagesLoaded( function() {
            $('.card').hide();
            $('.carousel-inner').fadeIn();
            });

    }
    
    function illustrations(){
        $(".carousel-inner").hide();
        $('.card').fadeIn();
        
        $('.tag').removeAttr('id');
            
        $(".illustrations").attr('id','active');
        document.querySelector('#item1').src = "assets/m_illustrations/1.png";
        document.querySelector('#item2').src = "assets/m_illustrations/2.png";
        document.querySelector('#item3').src = "assets/m_illustrations/3.png";
        $('#item').imagesLoaded( function() {
            $('.card').hide();
            $('.carousel-inner').fadeIn();
            });

    }
    
    function magazine(){
        $(".carousel-inner").hide();
        $('.card').fadeIn();
        
        $('.tag').removeAttr('id');
            
        $(".magazine").attr('id','active');
        document.querySelector('#item1').src = "assets/m_magazine/1.png";
        document.querySelector('#item2').src = "assets/m_magazine/2.png";
        document.querySelector('#item3').src = "assets/m_magazine/3.png";
        $('#item').imagesLoaded( function() {
            $('.card').hide();
            $('.carousel-inner').fadeIn();
            });

    }
    
    function pitch(){
        $(".carousel-inner").hide();
        $('.card').fadeIn();
        
        $('.tag').removeAttr('id');
            
        $(".pitch").attr('id','active');
        document.querySelector('#item1').src = "assets/m_pitch/1.png";
        document.querySelector('#item2').src = "assets/m_pitch/2.png";
        document.querySelector('#item3').src = "assets/m_pitch/3.png";
        $('#item').imagesLoaded( function() {
            $('.card').hide();
            $('.carousel-inner').fadeIn();
            });

    }
    
    function editing(){
        $(".carousel-inner").hide();
        $('.card').fadeIn();
        
        $('.tag').removeAttr('id');
            
        $(".editing").attr('id','active');
        document.querySelector('#item1').src = "assets/m_editing/1.png";
        document.querySelector('#item2').src = "assets/m_editing/2.png";
        document.querySelector('#item3').src = "assets/m_editing/3.png";
        $('#item').imagesLoaded( function() {
            $('.card').hide();
            $('.carousel-inner').fadeIn();
            });

    }
    
    function branding(){
        $(".carousel-inner").hide();
        $('.card').fadeIn();
        
        $('.tag').removeAttr('id');
            
        $(".branding").attr('id','active');
        document.querySelector('#item1').src = "assets/m_branding/1.png";
        document.querySelector('#item2').src = "assets/m_branding/2.png";
        document.querySelector('#item3').src = "assets/m_branding/3.png";
        $('#item').imagesLoaded( function() {
            $('.card').hide();
            $('.carousel-inner').fadeIn();
            });

    }

}
else{
    $('#item').imagesLoaded( function() {
        $('.card').hide();
        $('.carousel-inner').fadeIn();
        
    });
    function uxDesign(){
        $(".carousel-inner").hide();
        $('.card').fadeIn();
        
        $('.tag').removeAttr('id');
            
        $(".uxDesign").attr('id','active');
        document.querySelector('#item1').src = "assets/uxDesign/1.png";
        document.querySelector('#item2').src = "assets/uxDesign/2.png";
        document.querySelector('#item3').src = "assets/uxDesign/3.png";
        $('#item').imagesLoaded( function() {
            $('.card').hide();
            $('.carousel-inner').fadeIn();
            });

    }
    
    function illustrations(){
        $(".carousel-inner").hide();
        $('.card').fadeIn();
        
        $('.tag').removeAttr('id');
            
        $(".illustrations").attr('id','active');
        document.querySelector('#item1').src = "assets/illustrations/1.png";
        document.querySelector('#item2').src = "assets/illustrations/2.png";
        document.querySelector('#item3').src = "assets/illustrations/3.png";
        $('#item').imagesLoaded( function() {
            $('.card').hide();
            $('.carousel-inner').fadeIn();
            });
    }
    
    function magazine(){
       $(".carousel-inner").hide();
       $('.card').fadeIn();
        
        $('.tag').removeAttr('id');
            
        $(".magazine").attr('id','active');
        document.querySelector('#item1').src = "assets/magazine/1.png";
        document.querySelector('#item2').src = "assets/magazine/2.png";
        document.querySelector('#item3').src = "assets/magazine/3.png";
        $('#item').imagesLoaded( function() {
            $('.card').hide();
            $('.carousel-inner').fadeIn();
            });
    }
    
    function pitch(){
     $(".carousel-inner").hide();
        $('.card').fadeIn();
        
        $('.tag').removeAttr('id');
            
        $(".pitch").attr('id','active');
        document.querySelector('#item1').src = "assets/pitch/1.png";
        document.querySelector('#item2').src = "assets/pitch/2.png";
        document.querySelector('#item3').src = "assets/pitch/3.png";
        $('#item').imagesLoaded( function() {
            $('.card').hide();
            $('.carousel-inner').fadeIn();
            });
    }
    
    function editing(){
       $(".carousel-inner").hide();
        $('.card').fadeIn();
        
        $('.tag').removeAttr('id');
            
        $(".editing").attr('id','active');
        document.querySelector('#item1').src = "assets/editing/1.png";
        document.querySelector('#item2').src = "assets/editing/2.png";
        document.querySelector('#item3').src = "assets/editing/3.png";
        $('#item').imagesLoaded( function() {
            $('.card').hide();
            $('.carousel-inner').fadeIn();
            });
    }
    
    function branding(){
        
       $(".carousel-inner").hide();
        $('.card').fadeIn();
        
        $('.tag').removeAttr('id');
            
        $(".branding").attr('id','active');
        document.querySelector('#item1').src = "assets/branding/1.png";
        document.querySelector('#item2').src = "assets/branding/2.png";
        document.querySelector('#item3').src = "assets/branding/3.png";
        $('#item').imagesLoaded( function() {
            $('.card').hide();
            $('.carousel-inner').fadeIn();
            });
    }
}

// function motion(){
//     $(".bottom").fadeOut(function() {
//         $(".tagPhoto").attr('src','assets/portfolio/mag2.jpg').show();
//         $(".titleHeader").text('Motion Graphics').show();
//         $('.tag').removeAttr('id');
//         $(".c").removeAttr("id");
//         $(".c1").attr('id','current');
//         v=0;
//         $(".motion").attr('id','active');
//         $(this).show();
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
