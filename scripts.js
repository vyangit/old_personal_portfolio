$(document).ready(function(){

  var toShow = "";

  $("span.menu-icon").click(function(){
    $("div").toggleClass("expand");
    $("div#menu-items").fadeToggle('2000');
  });

  $("li.menu-btn").mouseenter(function(){
    $(this).animate({fontSize:'23px'}, 'fast');
  });

  $("li.menu-btn").mouseleave(function(){
    $(this).animate({fontSize:'20px'}, 'fast');
  });

  $("li.menu-btn").click(function(){
    if ($("#intro").css("display") === "block"){
      $("#intro").hide();
      toShow = "#" + $(this).text();
      $("#content").fadeIn('slow');
      $(toShow).show();
    } else {
      var toHide = toShow;
      toShow = "#" + $(this).text();
      $(toHide).hide();
      $(toShow).fadeIn('slow');
    };
  });
});
