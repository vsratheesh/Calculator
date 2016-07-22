$(document).ready(function(){
	$(".key").click(function(){
		var key = $(this).html();
		if (key =='0'){
			if($('#preview').html() !='0'){
				$('#preview').append(key);
			}

		} else if(key == 'CLR'){

			var newPreview = $('#preview').html().slice(0,-1);
			$('#preview').html(newPreview);

		} else if(['+','-','*','/'].indexOf(key) != -1){

			var lastNum = $('#preview').html().slice(-1);

			if(['+','-','*','/'].indexOf(lastNum) != -1){

				var newPreview = $('#preview').html().slice(0,-1);
			    $('#preview').html(newPreview);
			}
			if($('#preview').html() != '' || (key == '-')){

			$('#preview').append(key);
			}

		}else if (key =='=') {
			var result = eval($('#preview').html());
			$('#preview').html(result);
			$('#result').html(result);

		} 
		else {
			$('#preview').append(key);
		}
	});
});  