$(function(){
		$('.accordion')
		.on('click', 'li', function(){
				var $this = $(this);
				// コンテンツを開く
				$this
				.toggleClass('expanded')
				.children('.content')
				.slideToggle('fast')
				.end()
				.siblings()
				.removeClass('expanded')
				.children('.content')
				.slideUp('fast');
		});

		$('.dropdown-menu').children('a')
		.on('click', function(event){
				event.preventDefault();
				event.stopPropagation();
				var $this = $(this);

				//複数のドロップダウンメニューがある時の対策
				$this.parent().siblings('li').children('a')
				.removeClass('open')
				.next().hide();

				if($this.hasClass('open')) {
					$this.removeClass('open')
					.next().hide();
					$('html').off('click', closeItems);
				} else {
					$this.addClass('open')
					.next().show();
					$('html').on('click', closeItems);
				}
				function closeItems() {
					$this.removeClass('open')
					.next().hide();
				}
		});

		$('.first')
		.on('mouseenter', '.btn-action', function(event){
				event.preventDefault();
				$(this).find('img')
				.css({
						'transtion':'box-shadow 0.6s ease-in-out',
						'box-shadow':'0 0 12px 12px rgba(117, 180, 196, 0.5)'
				});
		})
		.on('mouseleave', '.btn-action', function(event){
				event.preventDefault();
				$(this).find('img')
				.css({
						'transtion':'box-shadow 0.6s ease-in-out',
						'box-shadow':'none'
				});
			});

});
