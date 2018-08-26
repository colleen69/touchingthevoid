$('.video1').height('100%')

$('.video2').height('100%') 

$('.video3').height('100%') 

$('.video4').height('100%')  

$( 'cd-section' ).height('100%');


/*On page scroll start to play */
$(document).ready(function() {
    // Get media - with autoplay disabled (audio or video)
    var media = $('video').not("[autoplay='autoplay']");
    var tolerancePixel = 40;

    function checkMedia(){
        // Get current browser top and bottom
        var scrollTop = $(window).scrollTop() + tolerancePixel;
        var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

media.each(function(index, el) {
        var yTopMedia = $(this).offset().top;
        var yBottomMedia = $(this).height() + yTopMedia;
if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){
        $(this).get(0).play();
        $('.main-gallery').hide().delay(0).fadeIn(1000);
        $('svg').hide().delay(0).fadeIn(1000);
        $('.buy-info,buy-dvd-button-div,.container').hide().delay(0).fadeIn(1000);
        
        } else {
        $(this).get(0).pause();
        }
    });
}
    
$(document).on('scroll', checkMedia);
});

$(".homepagetitle").fadeOut(4500); 

$('.scroll-title-container').hide().delay(3000).fadeIn(4000);

$(document).on('scroll', function(){
    $('.scroll-title-container').fadeOut(500);
});

//slider
var flkty = new Flickity( '.main-gallery', {
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  prevNextButtons: false,
  autoPlay: 5000
});

//play audio sound on button click
  function PlaySoundAndVideo(soundObj,videoObj) {
    var soundAndVideo=document.getElementById(soundObj,videoObj);
    soundAndVideo.play();
  }





