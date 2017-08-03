$(function(){
	// 添加active的类控制箭头的出现
	$('.sesstion-left .op-item').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
})
