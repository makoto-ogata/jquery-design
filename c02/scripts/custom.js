$(function(){
		$('.nav-info')
		.on('click', function(){
				$('.wrapper-headerinfo').slideToggle(400);
		});

		$(window).on('resize', function(){
				var $nav = $('.nav-global');
				var listFloat = $nav.find('li').css('float');
				if(listFloat == 'none'){
					$nav.css('display', 'none');
				} else {
					$nav.css('display', 'block');
				}
		});

		$('.menubtn > a').on('click', function(){
				$('.nav-global').slideToggle(400);
		});

		$('.tab-menu li > a').on('click', function(event){
				event.preventDefault();
				var $this = $(this);

				//ボタンのアピアランスを変更する
				$this.parent().siblings().removeClass('selected').end().addClass('selected');
		});
});

