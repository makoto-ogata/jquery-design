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
				.addClass('animate');
		})
		.on('mouseleave', '.btn-action', function(event){
				event.preventDefault();
				$(this).find('img')
				.removeClass('animate');
		});

		$('.second')
		.on('mouseenter', '.btn-action', function(event){
				event.preventDefault();
				$(this).find('img')
				.animate({'opacity':0.5}, 300)
				.animate({'opacity':1}, 500);
		})
		.on('mouseleave', '.btn-action', function(event){
				event.preventDefault();
				$(this).find('img')
				.animate({'opacity':1}, 300);
		});

		var value = 0.5;
		$('.third')
		.on('mouseenter mouseleave', '.btn-action', function(event){
				event.preventDefault();
				var opacityValue;
				if(event.type == 'mouseenter'){
					opacityValue = value;
				} else {
					opacityValue = 1;
				}

				$(this).find('img')
				.animate({opacity: opacityValue}, 500);
		});

		function changeImage($click){
			// console.log($click);
			var $current = $click.siblings('.container').children('.current');
			var $new;
			var findSelector = '';

			if($click.hasClass('next')){
				$new = $current.next();
				findSelector = ':first-child';
			} else {
				$new = $current.prev();
				findSelector = ':last-child';
			}

			if($new.length == 0) {
				$new = $current.siblings(findSelector);
			}
			$current.removeClass('current');
			$new.addClass('current');
		}

		$('.slide')
		.on('click', '> a', function(event){
				event.preventDefault();
				changeImage($(this));
		});

});
