$(function() {
	/* 动态的设置订单列表（order-item-list）的高度*/
	var maxH = $('.order-item-list').outerHeight();
	$('.order-item-list div').css({
		height: maxH
	});

	// 收货地址的脚本
	$('.user_type ul li').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
	});

	/*
	 * 纸质报告部分的tab显示与隐藏
	 * 第一步： 封装一个显示的函数tabShow()和隐藏的函数tabHide()
	 * 第二部： 当单击input:raido或者关联的label时，调用相关的函数
	 * */
	$('.address form label').eq(0).click(tabHide);
	$('.address form input:radio').eq(0).click(tabHide);
	$('.address form label').eq(1).click(tabShow);
	$('.address form input:radio').eq(1).click(tabShow);

	// 显示的函数
	function tabShow() {
		$('.tab').slideDown();
	}

	// 显示的函数
	function tabHide() {
		$('.tab').slideUp();
	}
})