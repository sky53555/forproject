

	   		
    $(".fa-search").click(function() {
       $(".searchbox").toggle();
       $("input[type='text']").val("");
       $("input[type='text']").focus();
     });

	
	$(".showDetails").mouseover(function(){
		$(".showD_left>span").css("color","black");
		$(".showD_right").addClass("reverse_ment");
	})
	$(".showDetails").mouseout(function(){
		$(".showD_left>span").css("color","white");
		$(".showD_right").removeClass("reverse_ment");

	})

	// 이미지 div의 아이디를 담은 배열
	var imagesId=["#first","#second","#third"];
	// 이미지 div를 관리할 index
	var idx=0;

	// 로딩시 첫번째 이미지 출력
	imagesAni($(imagesId[idx]));
	idx++;

	$(window).on("scroll", function(){
		// 위쪽으로 스크롤 된 길이 구하기
		var scrollTop=$(window).scrollTop();
		// window의 높이
		var windowHeight=$(window).height();
		// 총 이동한 스크롤 길이
		var movedHeight = scrollTop+windowHeight;
		if(movedHeight>=1000){
			imagesAni($(imagesId[idx]));
			idx++;
		}
		if(movedHeight>=1800){
			imagesAni($(imagesId[idx]));
			idx++;
		}
	});

	function imagesAni($input){
		$input.show(function(){
			$input.children(".img_area").fadeIn({
				duration:1500,
				complete:function(){
					$(this).children().addClass("animated slideInLeft").fadeIn(function(){
						$(".ment_area").fadeIn(1000,function(){
							$(".showDetails").css("display","flex").addClass("animated slideInLeft");
						}).addClass("animated slideInRight");
					});
				}
			});
		});	
	};

	function goList(arg){
		localStorage.aStyleItem=arg;
		location.href="itemList.html";
	};
