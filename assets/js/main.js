$(document).ready(function(){
	$("#cta").click(function(){
		$(".headline").hide();
		$("#content").css("display", "block");	
	});
	$("#more").click(function(){
		$("#what").hide();
		$("#who").css("display","block")		
	});
	$("#do").click(function(){
		$("#who").hide();
		$("#how").css("display","block")		
	});
});