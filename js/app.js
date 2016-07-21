$(document).ready(function(){
	$(".key").click(function(){
		var key = $(this).text();
		if (key =='0'){
			if($('#preview').html() !='0'){

				$('#preview').append(key);
			}

			} else {

			$('#preview').append(key);
		}
	});

});