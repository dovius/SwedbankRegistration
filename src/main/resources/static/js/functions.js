/**
 * Created by dovis on 16.2.20.
 */


function showNumberForm(){

}
function setColor(btn,color){

    var property=document.getElementById(btn);
   if (window.getComputedStyle(property).backgroundColor == 'rgb(255, 204, 1)') {
        property.style.backgroundColor=color;
        $(".search").hide(300);
   }
    else {
      property.style.backgroundColor = "#ffcc01";
        $(".search").show(300);
    }
  }
