	//头部的图片轮播
	function carousel(){
		var index = 0;
		setInterval(change_img,3000);
		function change_img(){
			index++;
			if(index > 3){index = 0;}
			$('.carousel img').eq(index).show().siblings().hide();
			$('header ul li').eq(index).css('background-color','rgba('+0+','+0+','+0+','+1+')').siblings().css('background-color','rgba('+0+','+0+','+0+','+0.4+')');
		}
		$('header ul li').on('mouseover',function(){
			index = $(this).index() - 1;
			change_img();
		})
	}
	function changeCity(){
		var flag = false;
		$('.quick_right').on('click',function(){
			if (flag == false){
				$('.city').css({
					'height':140+'px',
					'border':1+'px solid #ddd'
				});
				flag = true;
				return;		
			}
			if (flag == true){
				$('.city').css({
					'height':0+'px',
					'border':0
				});
				flag = false;
				return;	
			}
		})
	}
	function changeVote(){
		$('.select_vote span').on('mouseover',function(){
			if($(this).index() == 0){
				$('.vote').show();
				$('.vote2').hide();
			}
			if($(this).index() == 1){
				$('.vote2').show();
				$('.vote').hide();
			}
		})
	}
	function changeProgram(){
		$('.program_title').on('mouseover',function(){
			var index = $(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			$('.item_list').eq(index).show().siblings().hide();
		})
	}