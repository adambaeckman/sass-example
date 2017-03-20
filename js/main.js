$(document).ready(function(){
	
	// TOGGLE MENU 
	
	$("#menu-toggle").click(function(){
	
		var menuHeight = $(".main-navigation").height();
		
		if ($(this).hasClass("closed")){
		
			$(this).addClass("open");
			$(this).removeClass("closed");
			
			$(".menu-container").stop().animate({height: menuHeight+10+"px"});
		}else{
					
			$(this).removeClass("open");
			$(this).addClass("closed");
			
			$(".menu-container").stop().animate({height: "0px"});
		}
		
		return false;
	}); 
	
	
	// CLOSE THE MENU IF WINDOW IS RESIZED
	
	$( window ).resize(function() {
	
		if ($("#menu-toggle").hasClass("open") && $('#menu-toggle').is(':visible')  ){
		
			$(".menu-container").stop().animate({height: "0px"});
			
			$("#menu-toggle").removeClass("open");
			$("#menu-toggle").addClass("closed");
			
		}
		
	});
	
	
	// SCROLL TO TOP
	
	$("#to-top").click(function(){
		$('html,body').animate({ scrollTop: 0 }, 'slow');
		
		return false;
	}); 
	
	
	// CLEAR INPUT FIELD

	$('.clearText').focus(function () {
  
		if ($(this).val() == $(this).attr("title")) {
			$(this).val("");
			$(this).addClass("filled");
		  
		}
	}).blur(function () {
		if ($(this).val() == "") {
			$(this).val($(this).attr("title"));
			$(this).removeClass("filled");
		}
	});
	
	
	// TOGGLE GRID
	
	$("#toggle-grid").click(function(){
		
		if ($("#page").hasClass("grid-on")){
			
			$("#page").removeClass("grid-on");
			$("#page").addClass("grid-off");
			
			$("#toggle-grid").html("Turn grid on");
		}else{
			$("#page").addClass("grid-on");
			$("#page").removeClass("grid-off");
			
			$("#toggle-grid").html("Turn grid off");
		}
		
		return false;
	}); 
	
	
});
