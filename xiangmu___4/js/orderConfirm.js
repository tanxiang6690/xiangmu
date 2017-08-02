$(function() {
	/* 动态的设置订单列表（order-item-list）的高度*/
	var maxH = $('.order-item-list').outerHeight();
	$('.order-item-list div').css({
		height: maxH
	});

	function getTabActiveH(obj) {
		return obj.outerHeight();
	}
	
	// 收货地址的脚本
	$('.user_type ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
})