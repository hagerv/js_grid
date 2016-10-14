
$(document).ready(function(){
  $("body").append("<div id='button'>reset</div>")
   
   $("#button").click(function(){
    $("table").remove();
    var grid = prompt("Enter the number of squares on each side: ");
    $("body").append("<table></table>");
    for(var i = 1; i <= grid; i++){
      $("table").append("<tr></tr>");
        for(var j = 1; j <= grid; j++){
          $("tr:last").append("<td><div></div></td>");
        };
    };
    
    $("td > div").mouseover(function(){
      $(this).addClass('black');
    });
   });

});