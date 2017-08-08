$(function() {
	/*
	 * 设置iframe的高度
	 * */
	$(window.parent.document).find("#iframeId").load(function() {
		console.log($(window.parent.document).find('#iframeId'))
		var main = $(window.parent.document).find("#iframeId");
		var thisheight = $(document).height();
		main.height(thisheight);
	});
})