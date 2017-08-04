$(function() {
	/* 
	 * 动态的设置订单列表（order-item-list）的高度
	 * */
	var maxH = $('.order-item-list').outerHeight();
	$('.order-item-list div').css({
		height: maxH
	});

	/*
	 * 设置iframe的高度
	 * */
	$(window.parent.document).find("#iframeId").load(function() {
		var main = $(window.parent.document).find("#iframeId");
		var thisheight = $(document).height() + 80;
		main.height(thisheight);
	});

	/*
	 * 分页组件的配置
	 * */
	$('.M-box2').pagination({
		coping: true,
		homePage: '首页',
		endPage: '末页',
		prevContent: '上页',
		nextContent: '下页'
	});

	
})