$(document).ready(function(){
	$(".key").click(function(){
		var key = $(this).text();
		if (key =='0'){
			if($('#preview').html() !='0'){

				$('#preview').append(key);
			}

			} else if(key == 'CLR'){
				var newPreview = $('#preview').html().slice(0,-1);
				$('#preview').html(newPreview);
			}else {

			$('#preview').append(key);
		}
	});

});