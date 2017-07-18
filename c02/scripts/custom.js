$(function(){
		$('.nav-info')
		.on('click', function(){
				$('.wrapper-headerinfo').slideToggle(400);
		});

		$('.menubtn > a').on('click', function(){
				$('.nav-global').slideToggle(400);
			});
});

