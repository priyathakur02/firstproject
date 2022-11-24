$('#collapse').click(function(){
  $('.wp-collapse').show();
  $(this).hide();
  $('.close').show();
});
$('.close').click(function(){

  $('.wp-collapse').hide();
  $(this).hide();
  $('#collapse').show();
});


  
$(document).ready(function(){
    $('.slider').slick({
      infinite: true,
      autoplay: true,
      speed:800,
      slidesToShow: 1,
      slidesToScroll: 2,
      arrows: true,
      prevArrow:"<button type='button' class='slick-prev pull-left'><img src='./image/blue-arrow.png ' alt='  '></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><img src='./image/red-arrow.png  ' alt='  '></button>"
    });
});






    $('.reviews-box').slick({
      infinite: true,
      autoplay: true,
      speed:800,
      slidesToShow: 1,
      slidesToScroll: 2,
      arrows: true,
      
      prevArrow:"<button type='button' class='slick-prev left'><img src='./image/arrow-left.png ' alt='  '></button>",
      nextArrow:"<button type='button' class='slick-next right'><img src='./image/arr0w-right.png ' alt='  '></button>"
    
    });
