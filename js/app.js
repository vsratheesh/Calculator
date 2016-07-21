$(document).ready(function(){
	$(".key").click(function(){
		var number = $(this).text();
		$('#preview').append(number);
		console.log(this.innerText);

	});

})