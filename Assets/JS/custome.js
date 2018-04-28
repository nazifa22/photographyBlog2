$(document).ready(function(){

    $(window).on("load",function() {
          $(window).scroll(function() {
            var windowBottom = $(this).scrollTop() + $(this).innerHeight();
            $(".fade").each(function() {
              /* Check the location of each desired element */
              var objectBottom = $(this).offset().top + $(this).outerHeight();
              
              /* If the element is completely within bounds of the window, fade it in */
              if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity")==0) {$(this).fadeTo(100,1);}
              } else { //object goes out of view (scrolling up)
                if ($(this).css("opacity")==1) {$(this).fadeTo(50000,0);}
              }
            });
          }).scroll(); //invoke scroll-handler on page-load
        });
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("myBtn").style.display = "block";
            } 
            else {
                document.getElementById("myBtn").style.display = "none";
            }
        }

        $(function(){
        $("#myBtn").click(function(event){
            event.preventDefault();
            $("html, body").animate({"scrollTop": "0px"}, 700);
        })

        });

        //typed JS
        var typed = new Typed('.typed', {
            stringsElement: '#typed-strings',
            typeSpeed: 40,
            backSpeed: 25,
            loop: true
          });

        /*var typed = new Typed(".typed", {
          // Waits 1000ms after typing "First"
          strings: ["First ^1000 sentence.", "Second sentence."]
        });*/

});
