$(document).ready(function(){
    
$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"});
    return false;
});
$("#inputTel").mask("+7(999) 999-9999");



});