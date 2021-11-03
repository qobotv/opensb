$(document).ready(function(){
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});
	function play(sound) {
		var audio = new Audio('/assets/sounds/'+sound+'.wav');
		audio.play();
	}

	$(window).click(function() {
	  $("#mainMenu").removeClass("show");
	  $("#themeSelection").removeClass("show");
	});
	$("#openSettings").click(function(event){
		event.stopPropagation();
		$("#mainMenu").addClass("show");
	});
	$("#back").click(function(event){
		event.stopPropagation();
		$("#themeSelection").removeClass("show");
		$("#mainMenu").addClass("show");
	});
	$("#themeSelect").click(function(event){
		event.stopPropagation();
		$("#mainMenu").removeClass("show");
		$("#themeSelection").addClass("show");
	});
	$("#action_unlogged").click(function(){
		play("error");
		alert('you must be logged in.');
	});
	contents = $.trim($("#commentContents").val());
	if (contents === null || contents == "" && $("#post").attr("class") != "button button-primary disabled") {
		$("#post").addClass("disabled");
	}
	$("#commentContents").keydown(function(e){
		if (e.key == "Backspace") {
			contents = $.trim($("#commentContents").val()).slice(0, -1);
		} else {
			contents = $.trim($("#commentContents").val()) + e.key;
		}
		if (contents == "") {
			$("#post").addClass("disabled");
		} else if (contents != "") {
			$("#post").removeClass("disabled")
		}
	});
	$("#post").click(function(){
		play("click");
		$("#commentPostingSpinner").removeClass('d-none');
		$.post("comment.php",
		{
			comment: $.trim($('#commentContents').val()),
			vidid: video_id
		},
		function(data,status){
			if (status == "success") {
				console.log("Commented " + $('#commentContents').val());
				$('#comment').prepend(data);
				$("#commentContents").val('');
				$("#post").addClass("disabled");
				$("#commentPostingSpinner").addClass('d-none');
				play("comment");
			}
		});
	});
	$("#subscribe").click(function(){
		$.post("subscribe.php",
		{
			subscription: user_id
		},
		function(data,status){
			if (status == "success") {
				if(data == subscribe_string) {
					$("#subscribe").text(subscribe_string);
					$("#subscribe").attr("class", "button button-primary");
					console.log("Unsubscribed " + user_id);
					play("click");
				} else if(data == unsubscribe_string) {
					$("#subscribe").text(unsubscribe_string);
					$("#subscribe").attr("class", "button button-secondary");
					console.log("Subscribed " + user_id);
					play("subscribe");
				} else {
					play("error");
					alert('unexpected output! report to https://github.com/squarebracket-gamerappa/squarebracket/issues');
				}
			}
		});
	});	
	$("#like").click(function(){
		if($("#like").attr("class") != "button button-success") {
			$.post("rate.php",
			{
				rating: 1,
				vidid: video_id
			},
			function(data,status){
				if (status == "success") {
					if(data == 1) {
						$("#like").attr("class", "button button-success");
						$("#likes").text(parseInt($("#likes").text()) + 1)
						$("#dislikes").text(parseInt($("#dislikes").text()) - 1)
						$("#dislike").attr("class", "button button-secondary");
						play("like");
					} else if(data == 0) {
						$("#like").click();
					} else {
						play("error");
						alert('unexpected output! report to https://github.com/squarebracket-gamerappa/squarebracket/issues');
					}
				}
			});
		}
	});
	$("#dislike").click(function(){
		if($("#dislike").attr("class") != "button button-danger") {
			$.post("rate.php",
			{
				rating: 0,
				vidid: video_id
			},
			function(data,status){
				if (status == "success") {
					if (data == 1) {
						$("#dislike").attr("class", "button button-danger");
						$("#dislikes").text(parseInt($("#dislikes").text()) + 1)
						$("#likes").text(parseInt($("#likes").text()) - 1)
						$("#like").attr("class", "button button-secondary");
						play("dislike");
					} else if (data == 0) {
						$("#dislike").click();
					} else {
						play("error");
						alert('unexpected output! report to https://github.com/squarebracket-gamerappa/squarebracket/issues');
					}
				}
			});
		}
	});
});
