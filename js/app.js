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
			$(".delete").dblclick(function(){
			$('#preview').html('');
			$('#result').html('');
		});
			$(document).bind('keyup', '0', function() {$('#preview').append('0')});
			$(document).bind('keyup', '1', function() {$('#preview').append('1')});			
			$(document).bind('keyup', '2', function() {$('#preview').append('2')});
			$(document).bind('keyup', '3', function() {$('#preview').append('3')});
			$(document).bind('keyup', '4', function() {$('#preview').append('4')});			
			$(document).bind('keyup', '5', function() {$('#preview').append('5')});
			$(document).bind('keyup', '6', function() {$('#preview').append('6')});
			$(document).bind('keyup', '7', function() {$('#preview').append('7')});			
			$(document).bind('keyup', '8', function() {$('#preview').append('8')});
			$(document).bind('keyup', '9', function() {$('#preview').append('9')});
			$(document).bind('keyup', '+', function() {$('#preview').append('+')});
			$(document).bind('keyup', '-', function() {$('#preview').append('-')});			
			$(document).bind('keyup', '*', function() {$('#preview').append('*')});
			$(document).bind('keyup', '/', function() {$('#preview').append('/')});
			$(document).bind('keyup', '.', function() {$('#preview').append('.')});									
			$(document).bind('keyup', 'return', function(){
			var result = eval($('#preview').html());
			$('#preview').html(result);
			$('#result').html(result);
		    });
			$(document).bind('keyup', 'backspace', function() {var newPreview = $('#preview').html().slice(0,-1);
			$('#preview').html(newPreview);
			});
			$(document).bind('keyup', 'del', function() {var newPreview = $('#preview').html().slice(0,-1);
			$('#preview').html(newPreview);
			});

});  