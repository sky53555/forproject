	// 상단 돋보기
    $(".fa-search").click(function() {
       $(".searchbox").toggle();
       $("input[type='search']").val("");
       $("input[type='search']").focus();
    });

	// header의 카테고리 선택
	function goList(arg){
		localStorage.aStyleItem=arg;
		localStorage.aStylePage="1";
		location.href="itemList.html";
	};

	// ===== Scroll to Top ==== 
	$(window).scroll(function() {
	    if ($(this).scrollTop() >= 130) {       // If page is scrolled more than 50px
	        $('#return-to-top').fadeIn(200);    // Fade in the arrow
	    } else {
	        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
	    }
	});
	$('#return-to-top').click(function() {      // When arrow is clicked
	    $('body,html').animate({
	        scrollTop : 0                       // Scroll to top of body
	    }, 500);
	});

	var aStyleItem2=localStorage.aStyleItem;
	if(aStyleItem2!=undefined&&aStyleItem2!="") {
		$(".cool-link").each(function(index){
			var link=$(this).text().toLowerCase();
			if(link==aStyleItem2){
				$(this).addClass("cool-link-active");
			}		
		});
	}
