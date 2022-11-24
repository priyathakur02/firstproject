$(document).ready(function(){
    $(".mobile-toggle a").click(function(){
      $(".main-sec").slideToggle();
      $(this).toggleClass("active");
      
    });
  });