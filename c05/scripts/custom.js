$(function(){
		// データをロードする
		var shopdata;
		$.get('dummy.json', function(data){
				shopdata = data;
				console.log(shopdata);
		})
		.fail(function(){
				alert('店舗データをダウンロードできませんでした。しばらく経ってからまたお試しください。');
		});
});
