$(function() {
		//モーダルウィンドウを開く
		function showModal(event){
			event.preventDefault();

			var $shade = $('<div></div>');
			$shade
			.attr('id', 'shade')
			.on('click', hideModal);

			var $modalWin = $('#modalwin');
			var $window = $(window);
			var posX = ($window.width() - $modalWin.outerWidth()) / 2;
			var posY = ($window.height() - $modalWin.outerHeight()) / 2;

			$modalWin
			.before($shade)
			.css({left: posX, top: posY})
			.removeClass('hide')
			.addClass('show')
			.on('click', 'button, .modal-close', function() {
					hideModal();
			});
		};

		//モーダルウィンドウを閉じる

		function hideModal() {
			$('#shade').remove();
			$('#modalwin')
			.removeClass('show')
			.addClass('hide');
		};

		$('.show-modal').on('click', showModal);

		$(window).on('scroll', function(){
				var scrollValue = $(this).scrollTop();
				// console.log(scrollValue);
				$('.fixedmenu')
				.trigger('customScroll', { posY: scrollValue});
		});

		$('.fixedmenu')
		.each(function(){
				var $this = $(this);
				$this.data('initial', $this.offset().top);
		})
		.on('customScroll', function(event, object){
				// console.log('customScroll %s', object.posY);
				var $this = $(this);

				if($this.data('initial') <= object.posY) {
					if(!$this.hasClass('hixed')) {
						$this
						.addClass('fixed')
						.css({top: 0});
					}
				} else {
					// 要素の固定を解除
					$this.removeClass('fixed');
				}
		});
});
