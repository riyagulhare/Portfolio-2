$(document).ready(function(){
    $('.slider').slick({
       arrows: false,
       dots: true,
       appendDots:'.slider-dots',
       dotsClass: 'dots'
    });
  
    $('.part1').waypoint(function(direction){
        $('.part1').addClass('animated bounceIn')
    },{
        offset: '400px'
    });
    $('.part2').waypoint(function(direction){
        $('.part2').addClass('animated fadeInUp')
    },{
        offset: '40%'
    });

});