var img = "./img/piano.jpg";

$('section').css("background-image", "url(" + img + ")");

$('.menu-container').on('click', function(){
  $('.header').toggleClass('willGrow ');
  $('.menu-bar').toggleClass('willChangeColor');
  $('.title a').toggleClass('willChangeColor');
});

$('#projekt').click(function(){
  $('.header').removeClass('willGrow');
  $('.menu-bar').removeClass('willChangeColor');
  $('section').css("background-image", "url(" + img + ")");  
  
});

$('#teams').click(function(){
  $('.header').removeClass('willGrow');
  $('.menu-bar').removeClass('willChangeColor');
  $('section').css("background-image", "url(" + img + ")");  
  
});

$('#ueber').click(function(){
  $('.header').removeClass('willGrow');
  $('.menu-bar').removeClass('willChangeColor');
  $('section').css("background-image", "url(" + img + ")");  
  
});

$('#impressum').click(function(){
  $('.header').removeClass('willGrow');
  $('.menu-bar').removeClass('willChangeColor');
  $('section').css("background-image", "url(" + img + ")");
  
});