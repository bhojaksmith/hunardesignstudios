
const mediaQuery = window.matchMedia('(min-width: 768px)')

    if(!mediaQuery.matches){
                document.querySelector('#item1').src = "assets/m_ux/1.png";
                document.querySelector('#item2').src = "assets/m_ux/2.png";
                document.querySelector('#item3').src = "assets/m_ux/3.png";
        console.log(mediaQuery.matches)
        function uxDesign(){
            $(".slider").fadeOut(function() {
                
                $('.tag').removeAttr('id');
                // $(".c").removeAttr("id");
                // $(".c1").attr('id','current');
                // v=0;
                $(".uxDesign").attr('id','active');
                let Moveleft  = document.querySelector('.uxDesign');
                Moveleft.scrollLeft += 20;

                i1 = document.querySelector('#item1')
                i2 = document.querySelector('#item2')
                i3 = document.querySelector('#item3')
                
                i1.src = "assets/m_ux/1.png";
                i2.src = "assets/m_ux/2.png";
                i3.src = "assets/m_ux/3.png";
                $('#item').imagesLoaded( function() {
                    $('.slider').fadeIn();
                  });
                  
                    
                
               
               
                
            });
        }
        
        function illustrations(){
            $(".slider").fadeOut(function() {
               
                $('.tag').removeAttr('id');
                $(".illustrations").attr('id','active');
                let Moveleft  = document.querySelector('.illustrations');
                Moveleft.scrollLeft += 20;
                document.querySelector('#item1').src = "assets/m_illustrations/1.png";
                document.querySelector('#item2').src = "assets/m_illustrations/2.png";
                document.querySelector('#item3').src = "assets/m_illustrations/3.png";
                $('#item').imagesLoaded( function() {
                    $('.slider').fadeIn();
                  });
               
            });
        }
        
        function magazine(){
            $(".slider").fadeOut(function() {
                
                $('.tag').removeAttr('id');
                // $(".c").removeAttr("id");
                // $(".c1").attr('id','current');
                // v=0;
                $(".magazine").attr('id','active');
                let Moveleft  = document.querySelector('.magazine');
                Moveleft.scrollLeft += 20;
                document.querySelector('#item1').src = "assets/m_magazine/1.png";
                document.querySelector('#item2').src = "assets/m_magazine/2.png";
                document.querySelector('#item3').src = "assets/m_magazine/3.png";
                $('#item').imagesLoaded( function() {
                    $('.slider').fadeIn();
                  });
                
            });
        }
        
        function pitch(){
            $(".slider").fadeOut(function() {
              
                $('.tag').removeAttr('id');
                // $(".c").removeAttr("id");
                // $(".c1").attr('id','current');
                // v=0;
                $(".pitch").attr('id','active');
                $(".pitch").attr('scroll-snap-align', 'start')
                document.querySelector('#item1').src = "assets/m_pitch/1.png";
                document.querySelector('#item2').src = "assets/m_pitch/2.png";
                document.querySelector('#item3').src = "assets/m_pitch/3.png";
                $(".pitch").attr('id','active');
                $('#item').imagesLoaded( function() {
                    $('.slider').fadeIn();
                  });
                
            });
        }
        
        function editing(){
            $(".slider").fadeOut(function() {
              
                
                $('.tag').removeAttr('id');
                // $(".c").removeAttr("id");
                // $(".c1").attr('id','current');
                // v=0;
                $(".editing").attr('id','active');
                $(".editing").attr('scroll-snap-align', 'start')
                document.querySelector('#item1').src = "assets/m_editing/1.png";
                document.querySelector('#item2').src = "assets/m_editing/2.png";
                document.querySelector('#item3').src = "assets/m_editing/3.png";
                $('#item').imagesLoaded( function() {
                    $('.slider').fadeIn();
                  });
               
            });
        }
        
        function branding(){
            $(".slider").fadeOut(function() {
               
                $('.tag').removeAttr('id');
                // $(".c").removeAttr("id");
                // $(".c1").attr('id','current');
                // v=0;
                $(".branding").attr('id','active');

                $(".branding").attr('scroll-snap-align', 'start')
                document.querySelector('#item1').src = "assets/m_branding/1.png";
                document.querySelector('#item2').src = "assets/m_branding/2.png";
                document.querySelector('#item3').src = "assets/m_branding/3.png";
                $('#item').imagesLoaded( function() {
                    $('.slider').fadeIn();
                  });
               
            });
        }

    }
    else{
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
                $('#item').imagesLoaded( function() {
                    $('.slider').fadeIn();
                  });
               
                
            });
        }
        
        function illustrations(){
            $(".slider").fadeOut(function() {
               
                $('.tag').removeAttr('id');
                $(".illustrations").attr('id','active');
                document.querySelector('#item1').src = "assets/illustrations/1.png";
                document.querySelector('#item2').src = "assets/illustrations/2.png";
                document.querySelector('#item3').src = "assets/illustrations/3.png";
                $('#item').imagesLoaded( function() {
                    $('.slider').fadeIn();
                  });
               
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
                $('#item').imagesLoaded( function() {
                    $('.slider').fadeIn();
                  });
                
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
                $('#item').imagesLoaded( function() {
                    $('.slider').fadeIn();
                  });
                
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
                $('#item').imagesLoaded( function() {
                    $('.slider').fadeIn();
                  });
               
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
                $('#item').imagesLoaded( function() {
                    $('.slider').fadeIn();
                  });
               
            });
        }
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

