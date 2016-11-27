$(document).ready(function() {
    $("#nav li a, .readmore a,#navclick li a").click(function() {
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top + "px"
            }, {
                    duration: 500,
                    easing: "swing"
            });
          return false;
    });
})

$(function(){
	
	$("#logo").click(function(){

		$("html,body").animate({scrollTop:0},900);

		//$("html,body").animate({scrollTop:0},900,"easeOutBounce");

		return false;

	});

}); 

////***按鈕**/
var ibtn = document.getElementById("ibtn");
var nav=document.getElementById("navclick");

function handleBtn(){
    if(nav.style.display=="none"||nav.style.display==""){
        nav.style.display="block";
    }else{
        nav.style.display="none";
    }
}
ibtn.onclick = handleBtn;