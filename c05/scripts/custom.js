$(function(){
		// データをロードする
		var shopdata;
		$.get('shopdata.json', function(data){
				shopdata = data;
				console.log(shopdata);
		});
});
