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

		$('.tab-menu').on('click', 'li > a',  function(event){
				event.preventDefault();
				var $this = $(this);

				//ボタンのアピアランスを変更する
				$this.parent().siblings().removeClass('selected').end().addClass('selected');

				//コンテンツを切り替える
				var tabId = $this.data('tabid');
				$this.closest('.tab').find('.tab-contents').children().each(function (){
						var $content = $(this);
						if($content.data('contentid') == tabId){
							$content.removeClass('hidden');
						} else {
							$content.addClass('hidden');
						}
					});
		});

		$('.thumbnails').on('click', 'li > a', function(){
				event.preventDefault();
				var $this = $(this);

				//ボタンのアピアランスを変更する
				$this.parent().siblings()
				.removeClass('selected')
				.end()
				.addClass('selected');

				//イメージを差し替え
				var imagePath = $this.data('img');
				$('.gallery .mainimage img').attr('src', imagePath);
			});
});

